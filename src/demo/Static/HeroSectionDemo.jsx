import { CodeTab, PreviewTab, TabbedLayout } from "../../components/common/TabbedLayout";
import CodeExample from "../../components/code/CodeExample";
import Dependencies from "../../components/code/Dependencies";
import FullScreenPreview from "../../components/common/Preview/FullScreenPreview";
import HeroSectionPreview from "../../content/Static/HeroSection/HeroSectionPreview";
import { heroSection } from '../../constants/code/Static/heroSectionCode';

const HeroSectionDemo = () => {
  return (
    <TabbedLayout>
      <PreviewTab>
        <FullScreenPreview height={600}>
          <HeroSectionPreview />
        </FullScreenPreview>
        <Dependencies dependencyList={['react']} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={heroSection} />
      </CodeTab>
    </TabbedLayout>
  );
};

export default HeroSectionDemo;
