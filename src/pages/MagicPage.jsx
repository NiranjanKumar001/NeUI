import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/magic/Sidebar';
import PreviewTab from '../components/magic/PreviewTab';
import CodeTab from '../components/magic/CodeTab';
import FullscreenLink from '../components/magic/FullscreenLink';

// Import content
import OrionDesign from '../content/Orion/Design';
import OrionMeta from '../content/Orion/meta';
import XynixDesign from '../content/Xynix/Design';
import XynixMeta from '../content/Xynix/meta';

// Content registry
const contentRegistry = {
  'Orion': {
    Design: OrionDesign,
    meta: OrionMeta
  },
  'Xynix': {
    Design: XynixDesign,
    meta: XynixMeta
  }
};

const MagicPage = () => {
  const [selectedItem, setSelectedItem] = useState('Orion');
  const [activeTab, setActiveTab] = useState('preview');

  const designs = Object.keys(contentRegistry).map(key => ({
    id: key,
    name: key,
    ...contentRegistry[key].meta
  }));

  const currentDesign = contentRegistry[selectedItem];

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-md border-b border-white/10 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-white">
              NEUI
            </Link>
            <div className="flex space-x-6">
              <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                About
              </Link>
              <Link to="/magic" className="text-white">
                Magic
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar
          designs={designs}
          selectedItem={selectedItem}
          onItemSelect={setSelectedItem}
        />

        {/* Main Panel */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="bg-gray-800 border-b border-gray-700 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <h1 className="text-xl font-bold text-white">
                  {currentDesign.meta.title}
                </h1>
                <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-sm">
                  {currentDesign.meta.category}
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <FullscreenLink url={currentDesign.meta.link} />
                <div className="flex bg-gray-700 rounded-lg p-1">
                  <button
                    onClick={() => setActiveTab('preview')}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                      activeTab === 'preview'
                        ? 'bg-purple-500 text-white'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    Preview
                  </button>
                  <button
                    onClick={() => setActiveTab('code')}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                      activeTab === 'code'
                        ? 'bg-purple-500 text-white'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    Code
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 bg-gray-900">
            {activeTab === 'preview' ? (
              <PreviewTab DesignComponent={currentDesign.Design} />
            ) : (
              <CodeTab designName={selectedItem} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MagicPage;