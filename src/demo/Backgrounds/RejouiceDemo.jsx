import { CodeTab, PreviewTab, TabbedLayout } from "../../components/common/TabbedLayout";
import CodeExample from "../../components/code/CodeExample";
import FullScreenPreview from "../../components/common/Preview/FullScreenPreview";
import { rejouice } from "../../constants/code/Backgrounds/rejouiceCode.js";
import rejouiceVideo from '../../assets/videos/rejouice.mp4';

const RejouiceDemo = () => {
  return (
    <TabbedLayout>
      <PreviewTab>
        <FullScreenPreview 
          height={600}
          videoSrc={rejouiceVideo}
          autoPlay={true}
          loop={true}
          muted={true}
        />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={rejouice} />
      </CodeTab>
    </TabbedLayout>
  );
};

export default RejouiceDemo;
