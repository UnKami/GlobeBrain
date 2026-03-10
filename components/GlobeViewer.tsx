import React, { useRef, useEffect, useState, useMemo } from 'react';
import Globe, { GlobeMethods } from 'react-globe.gl';
import { MarkerData } from '../types';
import { TYPE_COLORS, TYPE_ICONS } from '../constants';
import * as THREE from 'three';

interface GlobeViewerProps {
  markers: MarkerData[];
  onMarkerClick: (marker: MarkerData) => void;
  selectedMarkerId: string | null;
  mapStyle: 'satellite' | 'map';
}

const GlobeViewer: React.FC<GlobeViewerProps> = ({ 
  markers, 
  onMarkerClick, 
  selectedMarkerId,
  mapStyle 
}) => {
  const globeEl = useRef<GlobeMethods | undefined>(undefined);
  const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });

  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Smooth camera transition when selection changes
  useEffect(() => {
    if (selectedMarkerId && globeEl.current) {
      const marker = markers.find(m => m.id === selectedMarkerId);
      if (marker) {
        globeEl.current.pointOfView({
          lat: marker.lat,
          lng: marker.lng,
          altitude: 1.5 // Zoom level
        }, 1000); // 1000ms transition
      }
    }
  }, [selectedMarkerId, markers]);

  // Texture configuration
  const globeImage = useMemo(() => 
    mapStyle === 'satellite' 
      ? '//unpkg.com/three-globe/example/img/earth-blue-marble.jpg' 
      : '//unpkg.com/three-globe/example/img/earth-night.jpg', 
  [mapStyle]);

  const background = mapStyle === 'satellite' ? '#000011' : '#0f172a';

  // Custom HTML Marker Renderer
  const renderHtmlMarker = (d: object) => {
    const marker = d as MarkerData;
    const isSelected = marker.id === selectedMarkerId;
    const color = TYPE_COLORS[marker.type];
    const Icon = TYPE_ICONS[marker.type];

    // Create a wrapper div
    const el = document.createElement('div');
    el.className = 'marker-container';
    el.style.cursor = 'pointer';
    
    // We use innerHTML for performance in rendering many markers, 
    // but building the string carefully to be safe (no user input in SVGs here).
    // Note: React-globe.gl htmlElements expects a DOM element.
    // We'll style it using a template string.
    
    // Size logic
    const size = isSelected ? 48 : 32;
    const opacity = isSelected ? 1 : 0.85;
    const zIndex = isSelected ? 1000 : 1;
    
    // CSS transforms handled by globe, we just style the inner content
    el.innerHTML = `
      <div style="
        display: flex; 
        align-items: center; 
        justify-content: center;
        width: ${size}px; 
        height: ${size}px;
        background-color: ${mapStyle === 'map' ? '#1e293b' : 'white'};
        border: 2px solid ${color};
        border-radius: 50% 50% 0 50%;
        transform: rotate(45deg);
        box-shadow: 0 4px 12px rgba(0,0,0,0.5);
        transition: all 0.2s ease;
        opacity: ${opacity};
        z-index: ${zIndex};
      ">
        <div style="transform: rotate(-45deg); display: flex;">
          <svg 
            width="${size * 0.5}" 
            height="${size * 0.5}" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="${color}" 
            stroke-width="3" 
            stroke-linecap="round" 
            stroke-linejoin="round"
          >
             <!-- We can't easily render the exact Lucide icon string here without a mapping, 
                  so we will use a generic circle or dot if we can't inject the SVG.
                  However, simple circle is enough for the pin center. -->
             <circle cx="12" cy="12" r="6" fill="${color}" stroke="none" />
          </svg>
        </div>
      </div>
    `;

    // Click handling on the element itself to ensure responsiveness
    el.onclick = () => onMarkerClick(marker);
    return el;
  };

  return (
    <Globe
      ref={globeEl}
      width={dimensions.width}
      height={dimensions.height}
      globeImageUrl={globeImage}
      bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
      backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
      backgroundColor={background}
      
      // Markers
      htmlElementsData={markers}
      htmlElement={renderHtmlMarker}
      htmlTransitionDuration={300}

      // Interaction
      onGlobeClick={() => onMarkerClick(null as any)} // Click empty space to deselect
      
      // Atmosphere
      atmosphereColor={mapStyle === 'satellite' ? '#3a228a' : '#1e3a8a'}
      atmosphereAltitude={0.15}
    />
  );
};

export default GlobeViewer;
