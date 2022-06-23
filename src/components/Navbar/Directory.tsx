import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { authModalState } from "../../atoms/authModalAtom";
import { BsPeopleFill, BsPencilFill } from "react-icons/bs";
import { SiLivejournal } from "react-icons/si";
import { Page, pageState } from "../../atoms/pageAtom";
import { useRouter } from "next/router";

type DirectoryProps = {};

const Directory: React.FC<DirectoryProps> = () => {
  const setModalState = useSetRecoilState(authModalState);
  const [pageStateVal, setPageStateVal] = useRecoilState(pageState);
  const router = useRouter();
  const { asPath } = useRouter();

  const handleRoute = (destination: string) => {
    const newPage: Page = {
      name: destination,
    };
    setPageStateVal({ currentPage: newPage });

    router.push(`/${destination.replace(/\s/g, "").toLowerCase()}`);
  };

  useEffect(() => {
    const newPage: Page = {
      name: asPath === "/discuss" ? "Discuss" : "Write a Host",
    };

    setPageStateVal({ currentPage: newPage });
  }, [asPath]);

  return (
    <Menu>
      <MenuButton
        cursor="pointer"
        borderRadius="10px"
        _hover={{ bg: "brand.200" }}
        padding="2px 12px"
        height="35px"
        mr="5px"
      >
        <Flex alignItems="center" justify="space-between">
          <Flex alignItems="center">
            {asPath === "/discuss" && <Icon as={BsPeopleFill} fontSize={20} />}
            {asPath === "/writeahost" && (
              <Icon as={SiLivejournal} fontSize={20} />
            )}
            <Flex display={{ base: "none", lg: "flex" }}>
              <Text margin={2} fontWeight="bold">
                {pageStateVal.currentPage.name}
              </Text>
            </Flex>
          </Flex>
          <ChevronDownIcon />
        </Flex>
      </MenuButton>
      <MenuList padding="0px">
        {/* Discuss page => Write a Host menuItem */}
        {asPath === "/discuss" && (
          <MenuItem
            borderRadius="10px"
            _focus={{ bg: "brand.100" }}
            bg="brand.100"
            padding="0px 10px"
            onClick={() => handleRoute("Write a Host")}
          >
            <Flex direction="row" flex={1} align="center">
              <Icon fontSize={22} right={2} as={SiLivejournal} />
              <Text m={2} fontWeight="bold">
                Write a Host
              </Text>
            </Flex>
          </MenuItem>
        )}

        {/* Write a Host page => Discuss menuItem */}
        {pageStateVal.currentPage.name === "Write a Host" && (
          <MenuItem
            borderRadius="10px"
            _focus={{ bg: "brand.100" }}
            bg="brand.100"
            padding="0px 10px"
            onClick={() => handleRoute("Discuss")}
          >
            <Flex direction="row" flex={1} align="center">
              <Icon fontSize={20} right={2} as={BsPeopleFill} />
              <Text m={2} fontWeight="bold">
                Discuss
              </Text>
            </Flex>
          </MenuItem>
        )}
      </MenuList>
    </Menu>
  );
};
export default Directory;
