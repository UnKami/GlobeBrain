import React, { useState, useMemo, useEffect } from 'react';
import GlobeViewer from './components/GlobeViewer';
import FilterPanel from './components/FilterPanel';
import PopupCard from './components/PopupCard';
import { MarkerType, MarkerData, FilterState } from './types';
import { MOCK_CSV_DATA } from './constants';
import { parseCSV } from './utils/csvParser';

const App: React.FC = () => {
  // --- State ---
  const [data, setData] = useState<MarkerData[]>([]);
  const [selectedMarkerId, setSelectedMarkerId] = useState<string | null>(null);
  const [mapStyle, setMapStyle] = useState<'satellite' | 'map'>('satellite');
  
  // Initialize filters: All true by default
  const [filters, setFilters] = useState<FilterState>(() => {
    const initialFilters: FilterState = {};
    Object.values(MarkerType).forEach(type => {
      initialFilters[type] = true;
    });
    return initialFilters;
  });

  // --- Effects ---
  useEffect(() => {
    // Simulate loading data
    const markers = parseCSV(MOCK_CSV_DATA);
    setData(markers);
  }, []);

  // --- Handlers ---
  const handleToggleFilter = (type: MarkerType) => {
    setFilters(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const handleMarkerClick = (marker: MarkerData | null) => {
    if (marker) {
      setSelectedMarkerId(marker.id);
    } else {
      setSelectedMarkerId(null);
    }
  };

  const handleToggleMapStyle = () => {
    setMapStyle(prev => prev === 'satellite' ? 'map' : 'satellite');
  };

  // --- Derived State ---
  const filteredData = useMemo(() => {
    return data.filter(m => filters[m.type]);
  }, [data, filters]);

  const selectedMarker = useMemo(() => {
    return data.find(m => m.id === selectedMarkerId) || null;
  }, [data, selectedMarkerId]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white">
      
      {/* 3D Globe Background */}
      <div className="absolute inset-0 z-0">
        <GlobeViewer 
          markers={filteredData}
          onMarkerClick={handleMarkerClick}
          selectedMarkerId={selectedMarkerId}
          mapStyle={mapStyle}
        />
      </div>

      {/* UI Overlay: Filters */}
      <FilterPanel 
        filters={filters}
        onToggle={handleToggleFilter}
        mapStyle={mapStyle}
        onToggleMapStyle={handleToggleMapStyle}
      />

      {/* UI Overlay: Popup */}
      {selectedMarker && (
        <PopupCard 
          data={selectedMarker}
          onClose={() => setSelectedMarkerId(null)}
        />
      )}

      {/* Branding / Title */}
      <div className="absolute bottom-6 left-6 z-10 pointer-events-none">
        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 drop-shadow-md">
          Globe Dashboard
        </h1>
        <p className="text-slate-400 text-sm max-w-xs mt-1 drop-shadow-md">
          Visualizing global impact across ambassadors, centers, projects, pledges, and resolutions.
        </p>
      </div>

    </div>
  );
};

export default App;
