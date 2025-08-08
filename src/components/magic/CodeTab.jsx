import React, { useState } from 'react';

const CodeTab = ({ designName }) => {
  const [copied, setCopied] = useState(false);

  // Sample code for demonstration
  const getCodeForDesign = (name) => {
    switch (name) {
      case 'Orion':
        return `import React from 'react';

const OrionDesign = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-blue-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Orion
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          A stunning gradient design component
        </p>
        <div className="space-x-4">
          <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200">
            Get Started
          </button>
          <button className="border border-purple-500 text-purple-300 hover:bg-purple-500 hover:text-white font-bold py-3 px-6 rounded-lg transition-all duration-200">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrionDesign;`;

      case 'Xynix':
        return `import React from 'react';

const XynixDesign = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-gray-800 flex items-center justify-center">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
        <h1 className="text-4xl font-bold text-white mb-4">
          Xynix
        </h1>
        <p className="text-gray-300 mb-6">
          Modern glassmorphism design with beautiful blur effects
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/5 rounded-lg p-4">
            <h3 className="text-white font-semibold mb-2">Feature 1</h3>
            <p className="text-gray-400 text-sm">Description here</p>
          </div>
          <div className="bg-white/5 rounded-lg p-4">
            <h3 className="text-white font-semibold mb-2">Feature 2</h3>
            <p className="text-gray-400 text-sm">Description here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default XynixDesign;`;

      default:
        return `// Component code for ${name}`;
    }
  };

  const code = getCodeForDesign(designName);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="h-full bg-gray-900 flex flex-col">
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <h3 className="text-white font-medium">{designName}.jsx</h3>
        <button
          onClick={copyToClipboard}
          className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded text-sm transition-colors"
        >
          {copied ? (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Copied!</span>
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <div className="flex-1 overflow-auto">
        <pre className="p-4 text-sm text-gray-300 leading-relaxed">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default CodeTab;