import React from "react";
import Image from "next/image";

import { Grid, List, ListItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { getAllMembers, getPageBySlug } from "../src/lib/graphcms";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

import logo from "../src/assets/logo-fuccia.svg";
import styles from "../src/styles/members.module.css";
import YoutubeEmbed from "../src/components/widgets/youtube-embed";

export default function Members(props) {
  const [loadVideo, setLoadVideo] = React.useState(false);
  const videos = ["1uxt6RqGg-k", "aLe_wzVaul8"];
  return (
    <>
      <Box
        sx={{
          bgcolor: "background.paper",
          minHeight: "100vh",
        }}
      >
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
            bgcolor: "secondary.main",
            display: "flex",
            flexDirection: ["column-reverse", "column-reverse", "row"],
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
            <Typography variant="h5">{props.pages.text}</Typography>
          </Box>
          <Box
            sx={{
              position: "relative",
              minWidth: "50%",
              minHeight: "300px",
              flexGrow: 1,
            }}
          >
            <Image src="/stage.jpg" layout="fill" objectFit="cover" />
          </Box>
        </Box>
        <Box
          sx={{
            py: 0,
            bgcolor: "primary.main",
          }}
        >
          {(!loadVideo && (
            <Box
              sx={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-evenly",
                gap: [0, 3, 5],
                py: 5,
              }}
            >
              <>
                <Typography variant="h1" component="h3">
                  Meet
                </Typography>
                <Box sx={{ flexGrow: 0, fontSize: "10rem", display: "flex" }}>
                  <PlayCircleOutlineIcon
                    fontSize="inherit"
                    onClick={() => setLoadVideo(true)}
                    sx={{
                      "&:hover": {
                        cursor: "pointer",
                      },
                    }}
                  />
                </Box>
                <Typography variant="h1" component="h3">
                  Us
                </Typography>
              </>
            </Box>
          )) || (
            <Box sx={{ p: 5 }}>
              <YoutubeEmbed embedId={shuffleArray(videos)[0]} autoplay={true} />
            </Box>
          )}
        </Box>
        <Box
          sx={{
            p: 5,
          }}
        >
          <Typography variant="h2" className={styles.underlinedTitle}>
            We are
          </Typography>
          <Grid
            container
            columns={16}
            spacing={4}
            sx={
              {
                // display: "grid",
                // gridTemplateColumns: [
                //   "1fr",
                //   "1fr",
                //   "repeat(auto-fill, minmax(400px, 1fr))",
                // ],
                // gap: 2,
                // flexGrow: 1,
              }
            }
          >
            {shuffleArray(props.members).map((member) => (
              <Grid item xs={16} md={8} lg={4}>
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
                    sx={{
                      position: "relative",
                      width: "100%",
                      height: "400px",
                    }}
                  >
                    <Image
                      src={member.profilePicture.url}
                      layout="fill"
                      objectFit="cover"
                      className={styles.roundedImage}
                    />
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
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
    revalidate: 30,
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
