import { CodeTab, PreviewTab, TabbedLayout } from "../../components/common/TabbedLayout";
import CodeExample from "../../components/code/CodeExample";
import Dependencies from "../../components/code/Dependencies";
import FullScreenPreview from "../../components/common/Preview/FullScreenPreview";
import PricingTablePreview from "../../content/Static/PricingTable/PricingTablePreview";
import { pricingTable } from '../../constants/code/Static/pricingTableCode';

const PricingTableDemo = () => {
  return (
    <TabbedLayout>
      <PreviewTab>
        <FullScreenPreview height={600}>
          <PricingTablePreview />
        </FullScreenPreview>
        <Dependencies dependencyList={['react']} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={pricingTable} />
      </CodeTab>
    </TabbedLayout>
  );
};

export default PricingTableDemo;
