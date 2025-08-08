import { useParams } from 'react-router-dom';
import PreviewTab from '../../components/magic/PreviewTab';

export default function FullscreenPage() {
  const { designId } = useParams();

  return (
    <div className="h-screen w-screen">
      <PreviewTab designId={designId} fullscreen />
    </div>
  );
}
