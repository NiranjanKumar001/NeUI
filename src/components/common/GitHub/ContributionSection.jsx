import { Box, Text } from "@chakra-ui/react";

const ContributionSection = () => {
  return (
    <Box className="contribute-container" py={8}>
      <Text 
        fontSize={{ base: '1rem', md: '1.65rem' }} 
        color="#B19EEF" 
        className="demo-title-contribute"
        textAlign="center"
      >
        Coming Soon
      </Text>
    </Box>
  );
};

export default ContributionSection;
