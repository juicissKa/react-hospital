import React from "react";
import { Link, Breadcrumbs as MuiBreadcrumbs } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { BreadcrumbsLink, getBreadcrumbsLinks } from "../../../utils/paths";

type BreadcrumbsProps = {
  links?: BreadcrumbsLink[];
};

export const Breadcrumbs: React.FC<BreadcrumbsProps> = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const links: BreadcrumbsLink[] =
    props.links || getBreadcrumbsLinks(location.pathname);

  return (
    <MuiBreadcrumbs
      sx={{
        "& .MuiBreadcrumbs-separator": {
          color: "primary.main",
          fontSize: "1.5rem",
        },
      }}
    >
      {links.map((link) => (
        <Link
          underline="none"
          key={link.url}
          onClick={() => navigate(link.url)}
          sx={{ cursor: "pointer", fontSize: "1.5rem" }}
        >
          {link.title}
        </Link>
      ))}
    </MuiBreadcrumbs>
  );
};
