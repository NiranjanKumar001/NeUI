import React from 'react';

const FullscreenLink = ({ url }) => {
  const handleVisit = () => {
    if (url) {
      window.open(url, '_blank');
    } else {
      alert('Link not available for this component');
    }
  };

  return (
    <button
      onClick={handleVisit}
      className="flex items-center space-x-2 bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition-colors"
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
      <span>Visit</span>
    </button>
  );
};

export default FullscreenLink;