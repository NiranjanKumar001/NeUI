import { CodeTab, PreviewTab, TabbedLayout } from "../../components/common/TabbedLayout";
import CodeExample from "../../components/code/CodeExample";
import Dependencies from "../../components/code/Dependencies";
import FullScreenPreview from "../../components/common/Preview/FullScreenPreview";
import ParallaxScrollPreview from "../../content/ScrollBased/ParallaxScroll/ParallaxScrollPreview";
import { parallaxScroll } from '../../constants/code/ScrollBased/parallaxScrollCode';

const ParallaxScrollDemo = () => {
  return (
    <TabbedLayout>
      <PreviewTab>
        <FullScreenPreview height={600}>
          <ParallaxScrollPreview />
        </FullScreenPreview>
        <Dependencies dependencyList={['react', 'framer-motion']} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={parallaxScroll} />
      </CodeTab>
    </TabbedLayout>
  );
};

export default ParallaxScrollDemo;
