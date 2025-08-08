/* eslint-disable no-unused-vars */
import React from 'react';

const PreviewTab = ({ DesignComponent }) => {
  return (
    <div className="h-full bg-gray-100 overflow-auto">
      <div className="p-8">
        <div className="bg-white rounded-lg shadow-lg min-h-96">
          <DesignComponent />
        </div>
      </div>
    </div>
  );
};

export default PreviewTab;