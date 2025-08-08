import { Children } from "react";
import {
  Flex,
  Text,
  Icon,
  Box,
} from "@chakra-ui/react";
import { RiEmotionSadLine } from "react-icons/ri";

export const CSSTab = ({ children }) => <>{children}</>;

const CodeOptions = ({ children }) => {
  const buckets = { css: null };
  Children.forEach(children, (child) => {
    if (!child) return;
    if (child.type === CSSTab) buckets.css = child;
  });

  const renderContent = () => {
    const node = buckets.css;
    return node?.props?.children ? (
      node
    ) : (
      <Flex alignItems="center" gap={2} my={6} color="#a1a1aa">
        <Text>Nothing here yet!</Text>
        <Icon as={RiEmotionSadLine} />
      </Flex>
    );
  };

  return (
    <Box w="full" rounded="lg" p={4} bg="#100A1C">
      <Flex
        mb={4}
        gap={3}
        pb={4}
        flexWrap="wrap"
        borderBottom="1px solid #ffffff1c"
        alignItems="center"
      >
      </Flex>

      <Box bg="#060010" rounded="lg" overflow="hidden">
        {renderContent()}
      </Box>
    </Box>
  );
};

export default CodeOptions;
