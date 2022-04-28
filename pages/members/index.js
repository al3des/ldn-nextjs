import { List, ListItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { getAllMembers, getPageBySlug } from "../../src/lib/graphcms";
import Image from "next/image";
import logo from "../../src/assets/logo-fuccia.svg";
import Link from "../../src/Link";
import styles from "./members.module.css";
import YoutubeEmbed from "../../src/components/widgets/youtube-embed";

export default function Members(props) {
  return (
    <>
      <Box sx={{ background: "#120052", minHeight: "100vh" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 5,
            px: 5,
            justifyContent: "center",
          }}
        >
          <Image src={logo} width={300} height={300} />
          {/* <Typography variant="h2">is:</Typography> */}
        </Box>
        <Box
          sx={{
            bgcolor: "#3d144c",
          }}
        >
          <Box
            sx={{
              p: 5,
              maxWidth: ["100%", "100%", "80%"],
              mx: "auto",
            }}
          >
            <Typography variant="h2" className={styles.underlinedTitle}>
              About
            </Typography>
            <Typography
              variant="h5"
              sx={
                {
                  // mb: 5,
                  // maxWidth: ["100%", "100%", "80%"],
                }
              }
            >
              {props.pages.text}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ py: 5 }}>
          <YoutubeEmbed embedId="DXsLXf6UBw4" />
        </Box>
        {/* <Box
          sx={{
            // display: "grid",
            gridTemplateColumns: ["1fr", "1fr", "300px auto"],
            gap: 5,
            p: 5,
          }}
        > */}
        <Box
        sx={{
          p: 5,

        }}
        >
          <Typography variant="h2" className={styles.underlinedTitle}>
            We are
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: [
                "1fr",
                "1fr",
                "repeat(auto-fill, minmax(200px, 1fr))",
              ],
              gap: 2,
              flexGrow: 1,
            }}
          >
            {shuffleArray(props.members).map((member) => (
              <Box key={member.id} sx={{ position: "relative" }}>
                <Typography
                  variant="h3"
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    zIndex: 99999,
                    p: 2,
                  }}
                >
                  {member.name}
                </Typography>
                <Box
                  className={styles.roundedImage}
                  sx={{ position: "relative", width: "100%", height: "400px" }}
                >
                  <Image
                    src={member.profilePicture.url}
                    layout="fill"
                    objectFit="cover"
                    className={styles.roundedImage}
                  />
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
        {/* </Box> */}
      </Box>
    </>
  );
}

export async function getStaticProps({ locales, locale }) {
  const members = await getAllMembers();
  const pages = await getPageBySlug(locale);
  return {
    props: {
      members,
      pages,
    },
  };
}

function shuffleArray(array) {
  let curId = array.length;
  // There remain elements to shuffle
  while (0 !== curId) {
    // Pick a remaining element
    let randId = Math.floor(Math.random() * curId);
    curId -= 1;
    // Swap it with the current element.
    let tmp = array[curId];
    array[curId] = array[randId];
    array[randId] = tmp;
  }
  return array;
}
