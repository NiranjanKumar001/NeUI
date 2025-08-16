import { useRef } from "react";
import { Link as RouterLink } from "react-router-dom";

import {
  Box,
  Drawer,
  Flex,
  Icon,
  IconButton,
  Image,
  Separator,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import { FiMenu, FiStopCircle } from "react-icons/fi";

import { useStars } from "../../hooks/useStars";
import Logo from "../../assets/logos/react-bits-logo.svg";
import Star from "../../assets/common/star.svg";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const stars = useStars();
  const starCountRef = useRef(null);

  return (
    <Box zIndex={100} className="main-nav">
      <Flex className="nav-items" h={20} alignItems="center" justifyContent="space-between" px={4}>
        <RouterLink to="/" className="logo">
          <h1>NotDecided</h1>
        </RouterLink>

        <IconButton
          aria-label="Open Menu"
          icon={<FiMenu size="1.3em" />}
          size="md"
          display={{ md: "none" }}
          onClick={onOpen}
        />

        <Flex display={{ base: "none", md: "flex" }} alignItems="center" gap={2}>

          {/* <FadeContent blur> */}
            <button
              className="cta-button-docs"
              onClick={() =>
                window.open("https://github.com/NiranjanKumar001/NeUI", "_blank")
              }
            >
              Star On GitHub
              <span ref={starCountRef}>
                <img src={Star} alt="Star Icon" />
                {stars}
              </span>
            </button>
          {/* </FadeContent> */}
        </Flex>
      </Flex>

      <Drawer.Root
        placement="top"
        open={isOpen}
        onOpenChange={(v) => (v ? onOpen() : onClose())}
      >
        <Drawer.Backdrop display={{ md: "none" }}>
          <Drawer.Content bg="black" h="100%">
            <Drawer.Body p={0}>
              <Flex direction="column">
                <Flex
                  align="center"
                  justify="space-between"
                  h="57px"
                  px={6}
                  mb={6}
                  borderBottom="1px solid #ffffff1c"
                >
                  <Image src={Logo} alt="Logo" h="25px" />
                  <IconButton
                    aria-label="Close Menu"
                    icon={<Icon as={FiStopCircle} boxSize={4} />}
                    size="md"
                    display={{ md: "none" }}
                    onClick={onClose}
                  />
                </Flex>

                <Flex direction="column" px={6} gap={2}>
                  <Text fontWeight="bold">Links</Text>

                  <Separator my={4} />

                  <Text fontWeight="bold">Other</Text>
                </Flex>
              </Flex>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Backdrop>
      </Drawer.Root>
    </Box>
  );
};

export default Header;


