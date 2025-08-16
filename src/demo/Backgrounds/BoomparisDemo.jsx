// import { useState } from "react";
import { CodeTab, PreviewTab, TabbedLayout } from "../../components/common/TabbedLayout";

import CodeExample from "../../components/code/CodeExample";
import Dependencies from "../../components/code/Dependencies";
import FullScreenPreview from "../../components/common/Preview/FullScreenPreview";
import { boomparis } from '../../constants/code/Backgrounds/boomparisCode';
import boomparisVideo from '../../assets/videos/boomparis.mp4';

const BoomparisDemo = () => {
  return (
    <TabbedLayout>
      <PreviewTab>
        <FullScreenPreview 
          height={600}
          videoSrc={boomparisVideo}
          autoPlay={true}
          loop={false}
          muted={true}
        />
        <Dependencies dependencyList={['gsap']} />
      </PreviewTab>
      <CodeTab>
        <CodeExample codeObject={boomparis} />
      </CodeTab></TabbedLayout>
  );
};

export default BoomparisDemo;
