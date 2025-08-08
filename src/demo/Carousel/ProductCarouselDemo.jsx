import { CodeTab, PreviewTab, TabbedLayout } from "../../components/common/TabbedLayout";
import CodeExample from "../../components/code/CodeExample";
import Dependencies from "../../components/code/Dependencies";
import FullScreenPreview from "../../components/common/Preview/FullScreenPreview";
import ProductCarouselPreview from "../../content/Carousel/ProductCarousel/ProductCarouselPreview";
import { productCarousel } from '../../constants/code/Carousel/productCarouselCode';

const ProductCarouselDemo = () => {
  return (
    <TabbedLayout>
      <PreviewTab>
        <FullScreenPreview height={600}>
          <ProductCarouselPreview />
        </FullScreenPreview>
        <Dependencies dependencyList={['react', 'framer-motion']} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={productCarousel} />
      </CodeTab>
    </TabbedLayout>
  );
};

export default ProductCarouselDemo;
