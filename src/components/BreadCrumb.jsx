import Breadcrumbs from "@mui/material/Breadcrumbs";
import { useLocation } from "react-router-dom";
import Link from "@mui/material/Link";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const MUIBreadCrumb = ({ links }) => {
  const { pathname } = useLocation();

  return (
    <div role="presentation">
      <Breadcrumbs
        separator={<ArrowRightIcon />}
        sx={{ color: "white", fontWeight: "600" }}
        aria-label="breadcrumb"
      >
        {links.map((link, index) => (
          <Link
            key={index}
            color={pathname === link.url ? "gray" : "white"}
            underline="hover"
            href={link.url}
          >
            {link.name}
          </Link>
        ))}
      </Breadcrumbs>
    </div>
  );
};

export default MUIBreadCrumb;
