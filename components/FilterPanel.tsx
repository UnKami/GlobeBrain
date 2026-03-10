import React from 'react';
import { MarkerType, FilterState } from '../types';
import { TYPE_COLORS, TYPE_ICONS } from '../constants';
import { Layers } from 'lucide-react';

interface FilterPanelProps {
  filters: FilterState;
  onToggle: (type: MarkerType) => void;
  mapStyle: 'satellite' | 'map';
  onToggleMapStyle: () => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({ filters, onToggle, mapStyle, onToggleMapStyle }) => {
  return (
    <div className="absolute top-4 left-4 z-10 w-64 bg-slate-900/90 backdrop-blur-md border border-slate-700 rounded-xl p-4 shadow-2xl text-slate-100">
      <div className="flex items-center gap-2 mb-4 border-b border-slate-700 pb-2">
        <Layers className="w-5 h-5 text-blue-400" />
        <h2 className="font-semibold text-lg">Filter Markers</h2>
      </div>

      <div className="space-y-3">
        {Object.values(MarkerType).map((type) => {
          const Icon = TYPE_ICONS[type];
          const color = TYPE_COLORS[type];
          const isActive = filters[type];

          return (
            <div
              key={type}
              onClick={() => onToggle(type)}
              className="flex items-center justify-between cursor-pointer group hover:bg-slate-800/50 p-2 rounded-lg transition-colors"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex items-center justify-center w-5 h-5 rounded border transition-colors ${
                    isActive ? 'bg-blue-600 border-blue-600' : 'bg-transparent border-slate-500'
                  }`}
                >
                  {isActive && (
                    <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </div>
                <span className={`text-sm font-medium ${isActive ? 'text-slate-200' : 'text-slate-500'}`}>
                  {type}
                </span>
              </div>
              
              <div 
                className={`p-1.5 rounded-full`}
                style={{ backgroundColor: isActive ? `${color}30` : 'rgba(148, 163, 184, 0.1)' }}
              >
                <Icon 
                  size={16} 
                  color={isActive ? color : '#64748b'}
                  className="transition-colors" 
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 pt-4 border-t border-slate-700">
        <label className="flex items-center justify-between cursor-pointer">
          <span className="text-sm text-slate-400 font-medium">Map View</span>
          <button
            onClick={onToggleMapStyle}
            className="px-3 py-1 text-xs font-semibold bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-md transition-colors"
          >
            {mapStyle === 'satellite' ? 'Satellite' : 'Topographic'}
          </button>
        </label>
      </div>
    </div>
  );
};

export default FilterPanel;
