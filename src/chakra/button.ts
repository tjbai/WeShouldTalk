import { ComponentStyleConfig } from "@chakra-ui/theme";

export const Button: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: "60px",
    bg: "blue.500",
    margin: "5px",
    color: "brand.100",
  },
  sizes: {
    sm: {
      fontSize: "8pt",
    },
    md: {
      fontSize: "12pt",
    },
  },
  variants: {
    log: {
      color: "white",
      backgroundColor: "brand.100",
      border: "2px solid white",
      _hover: {
        backgroundColor: "brand.200",
      },
    },
    disabled: {
      color: "white",
      backgroundColor: "#E0B9C3",
      _hover: {
        cursor: "not-allowed",
      },
      border: "2px solid white",
    },
  },
};
