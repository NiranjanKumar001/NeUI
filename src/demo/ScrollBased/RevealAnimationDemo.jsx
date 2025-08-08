import { CodeTab, PreviewTab, TabbedLayout } from "../../components/common/TabbedLayout";
import CodeExample from "../../components/code/CodeExample";
import Dependencies from "../../components/code/Dependencies";
import FullScreenPreview from "../../components/common/Preview/FullScreenPreview";
import RevealAnimationPreview from "../../content/ScrollBased/RevealAnimation/RevealAnimationPreview";
import { revealAnimation } from '../../constants/code/ScrollBased/revealAnimationCode';

const RevealAnimationDemo = () => {
  return (
    <TabbedLayout>
      <PreviewTab>
        <FullScreenPreview height={600}>
          <RevealAnimationPreview />
        </FullScreenPreview>
        <Dependencies dependencyList={['react', 'framer-motion']} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={revealAnimation} />
      </CodeTab>
    </TabbedLayout>
  );
};

export default RevealAnimationDemo;
