import Link from "../../Link";
import { useRouter } from "next/router";

import Box from "@mui/material/Box";
import Footer from "./footer";

export default function Layout({ children }) {
  const router = useRouter();
  const { pathname, asPath, query } = router;
  // change just the locale and maintain all other route information including href's query

  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          position: "absolute",
          backgroundColor: "inherit",
          top: 0,
          right: 10,
        }}
      >
        <Link href={router.asPath} locale="en">
          en
        </Link>{" "}
        |{" "}
        <Link href={router.asPath} locale="es">
          es
        </Link>
      </Box>
      <Box component="main" sx={{ p: 5, minHeight: "100vh" }}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
}
