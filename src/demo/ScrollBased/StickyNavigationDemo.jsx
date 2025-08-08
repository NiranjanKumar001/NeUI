import { CodeTab, PreviewTab, TabbedLayout } from "../../components/common/TabbedLayout";
import CodeExample from "../../components/code/CodeExample";
import Dependencies from "../../components/code/Dependencies";
import FullScreenPreview from "../../components/common/Preview/FullScreenPreview";
import StickyNavigationPreview from "../../content/ScrollBased/StickyNavigation/StickyNavigationPreview";
import { stickyNavigation } from '../../constants/code/ScrollBased/stickyNavigationCode';

const StickyNavigationDemo = () => {
  return (
    <TabbedLayout>
      <PreviewTab>
        <FullScreenPreview height={600}>
          <StickyNavigationPreview />
        </FullScreenPreview>
        <Dependencies dependencyList={['react', 'framer-motion']} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={stickyNavigation} />
      </CodeTab>
    </TabbedLayout>
  );
};

export default StickyNavigationDemo;
