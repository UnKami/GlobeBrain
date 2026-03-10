import React from 'react';
import { MarkerData } from '../types';
import { TYPE_COLORS, TYPE_ICONS } from '../constants';
import { X, ExternalLink, MapPin } from 'lucide-react';

interface PopupCardProps {
  data: MarkerData;
  onClose: () => void;
}

const PopupCard: React.FC<PopupCardProps> = ({ data, onClose }) => {
  const Icon = TYPE_ICONS[data.type];
  const themeColor = TYPE_COLORS[data.type];

  return (
    <div className="absolute top-1/2 right-4 -translate-y-1/2 w-80 md:w-96 bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden z-20 animate-in fade-in slide-in-from-right-10 duration-300">
      
      {/* Header Image */}
      <div className="relative h-40 bg-slate-200">
        {data.imageUrl ? (
          <img 
            src={data.imageUrl} 
            alt={data.title} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-slate-800">
            <Icon size={48} className="text-slate-600" />
          </div>
        )}
        
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 p-1.5 bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-full text-white transition-colors"
        >
          <X size={16} />
        </button>

        <div className="absolute bottom-2 left-2 px-2 py-1 bg-black/60 backdrop-blur-md rounded text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1">
          <Icon size={12} style={{ color: themeColor }} />
          {data.type}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight mb-1">
          {data.title}
        </h3>
        
        <div className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400 mb-4">
          <MapPin size={14} />
          <span>{data.country}</span>
          <span className="text-slate-600 dark:text-slate-600">•</span>
          <span className="font-mono text-xs opacity-70">
            {data.lat.toFixed(2)}, {data.lng.toFixed(2)}
          </span>
        </div>

        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
          {data.description}
        </p>

        {data.link && (
          <a 
            href={data.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            Open link
            <ExternalLink size={16} />
          </a>
        )}
      </div>
    </div>
  );
};

export default PopupCard;
