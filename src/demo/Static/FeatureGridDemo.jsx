import { CodeTab, PreviewTab, TabbedLayout } from "../../components/common/TabbedLayout";
import CodeExample from "../../components/code/CodeExample";
import Dependencies from "../../components/code/Dependencies";
import FullScreenPreview from "../../components/common/Preview/FullScreenPreview";
import FeatureGridPreview from "../../content/Static/FeatureGrid/FeatureGridPreview";
import { featureGrid } from '../../constants/code/Static/featureGridCode';

const FeatureGridDemo = () => {
  return (
    <TabbedLayout>
      <PreviewTab>
        <FullScreenPreview height={600}>
          <FeatureGridPreview />
        </FullScreenPreview>
        <Dependencies dependencyList={['react']} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={featureGrid} />
      </CodeTab>
    </TabbedLayout>
  );
};

export default FeatureGridDemo;
