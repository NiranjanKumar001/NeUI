import { useParams } from 'react-router-dom';
import CodeTab from '../../components/magic/CodeTab';
import PreviewTab from '../../components/magic/PreviewTab';
import FullscreenLink from '../../components/magic/FullscreenLink';
import { useState } from 'react';

export default function DesignViewPage() {
  const { designId } = useParams();
  const [activeTab, setActiveTab] = useState('preview');

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex space-x-4">
          <button
            onClick={() => setActiveTab('preview')}
            className={`px-4 py-2 rounded ${
              activeTab === 'preview' ? 'bg-blue-500 text-white' : 'text-gray-600'
            }`}
          >
            Preview
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`px-4 py-2 rounded ${
              activeTab === 'code' ? 'bg-blue-500 text-white' : 'text-gray-600'
            }`}
          >
            Code
          </button>
        </div>
        <FullscreenLink designId={designId} />
      </div>

      <div className="flex-1 overflow-auto">
        {activeTab === 'preview' ? (
          <PreviewTab designId={designId} />
        ) : (
          <CodeTab designId={designId} />
        )}
      </div>
    </div>
  );
}
