import { CodeTab, PreviewTab, TabbedLayout } from "../../components/common/TabbedLayout";
import CodeExample from "../../components/code/CodeExample";
import Dependencies from "../../components/code/Dependencies";
import FullScreenPreview from "../../components/common/Preview/FullScreenPreview";
import TestimonialCarouselPreview from "../../content/Carousel/TestimonialCarousel/TestimonialCarouselPreview";
import { testimonialCarousel } from '../../constants/code/Carousel/testimonialCarouselCode';

const TestimonialCarouselDemo = () => {
  return (
    <TabbedLayout>
      <PreviewTab>
        <FullScreenPreview height={600}>
          <TestimonialCarouselPreview />
        </FullScreenPreview>
        <Dependencies dependencyList={['react', 'framer-motion']} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={testimonialCarousel} />
      </CodeTab>
    </TabbedLayout>
  );
};

export default TestimonialCarouselDemo;
