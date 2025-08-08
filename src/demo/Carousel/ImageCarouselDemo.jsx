import { CodeTab, PreviewTab, TabbedLayout } from "../../components/common/TabbedLayout";
import CodeExample from "../../components/code/CodeExample";
import Dependencies from "../../components/code/Dependencies";
import FullScreenPreview from "../../components/common/Preview/FullScreenPreview";
import ImageCarouselPreview from "../../content/Carousel/ImageCarousel/ImageCarouselPreview";
import { imageCarousel } from '../../constants/code/Carousel/imageCarouselCode';

const ImageCarouselDemo = () => {
  return (
    <TabbedLayout>
      <PreviewTab>
        <FullScreenPreview height={600}>
          <ImageCarouselPreview />
        </FullScreenPreview>
        <Dependencies dependencyList={['react', 'framer-motion']} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={imageCarousel} />
      </CodeTab>
    </TabbedLayout>
  );
};

export default ImageCarouselDemo;
