import React from 'react';

const Sidebar = ({ designs, selectedItem, onItemSelect }) => {
  return (
    <div className="w-80 bg-gray-800 border-r border-gray-700 overflow-y-auto">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-white mb-4">Components</h2>
        <div className="space-y-2">
          {designs.map((design) => (
            <div
              key={design.id}
              onClick={() => onItemSelect(design.id)}
              className={`p-4 rounded-lg cursor-pointer transition-all duration-200 ${
                selectedItem === design.id
                  ? 'bg-purple-500/20 border border-purple-500/30'
                  : 'bg-gray-700/50 hover:bg-gray-700 border border-transparent'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {design.name.charAt(0)}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-medium">{design.title}</h3>
                  <p className="text-gray-400 text-sm">{design.description}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="px-2 py-1 bg-gray-600 text-gray-300 rounded text-xs">
                      {design.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;