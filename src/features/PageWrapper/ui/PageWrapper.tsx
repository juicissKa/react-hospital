import { Box } from "@mui/material";
import React, { ReactNode } from "react";

type PageWrapperProps = {
  children: ReactNode;
};

export const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <Box
      padding={2}
      display={"flex"}
      flexDirection={"column"}
      gap={"20px"}
      width={"100%"}
      marginLeft={"200px"}
    >
      {children}
    </Box>
  );
};
