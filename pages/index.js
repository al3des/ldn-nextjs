import React from "react";
import Image from "next/image";

import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Grid,
  Icon,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import {
  getAllMembers,
  getPageBySlug,
  getPortfolios,
} from "../src/lib/graphcms";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import MapIcon from "@mui/icons-material/Map";
import CelebrationIcon from "@mui/icons-material/Celebration";
import EventIcon from "@mui/icons-material/Event";

import logo from "../src/assets/logo-fuccia.svg";
import styles from "../src/styles/members.module.css";
import YoutubeEmbed from "../src/components/widgets/youtube-embed";

export default function Members(props) {
  const { portfolios } = props;
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
        <Box p={5}>
          <Typography variant="h2" className={styles.underlinedTitle}>
            Temporada Europa 2022
          </Typography>
          <Typography
            sx={{
              "& span": {
                fontSize: 60,
              },
            }}
          >
            Honrar el hermoso <span>sonido de la cumbia</span> de la manera mas
            <span>autentica</span> posible siendo fieles al estilo de cada
            region y con una formacion tipica de los conjuntos de cumbia mas
            populares.
          </Typography>
          <Grid container columns={12} spacing={4}>
            {portfolios[0].events.map((event) => (
              <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ borderRadius: 10 }}>
                  {/* <CardHeader
                    avatar={
                      <Avatar aria-label="Festival">
                        <CelebrationIcon />
                      </Avatar>
                    }
                    title={event.title}
                    subheader={
                      event.date.length > 1
                        ? "Summer 2022"
                        : new Date(event.date[0]).toLocaleDateString(
                            props.locale,
                            {
                              month: "long",
                              year: "numeric",
                            }
                          )
                    }
                  /> */}
                  <CardMedia
                    component="img"
                    height="300"
                    image={event.image.url}
                    alt="Fête de la Musique"
                  />
                  <CardContent>
                    <Typography variant="h4" component="h3" p={0}>
                      {event.title}
                    </Typography>
                    <Typography>{event.description}</Typography>
                    <List
                      sx={{
                        "& .MuiListItem-root": { px: 0 },
                      }}
                    >
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar sx={{ bgcolor: "#D62598", color: "white" }}>
                            <MapIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={event.venueName}
                          secondary={event.venueLocation}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar sx={{ bgcolor: "#D62598", color: "white" }}>
                            <EventIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={event.date.map((date) => (
                            <Chip
                              label={new Date(date).toLocaleDateString(
                                "es-AR",
                                {
                                  day: "2-digit",
                                  month: "2-digit",
                                }
                              )}
                              sx={{ mr: 2, my: 1 }}
                            />
                          ))}
                          // secondary={<Chip label="hola" variant="outlined" />}
                        />
                      </ListItem>
                    </List>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          sx={{
            p: 5,
          }}
        >
          <Typography variant="h2" className={styles.underlinedTitle}>
            We are
          </Typography>
          <Grid container columns={16} spacing={4}>
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
                      textShadow: "2px 2px 5px #000",
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
  const portfolios = await getPortfolios(locale);

  return {
    props: {
      members,
      pages,
      portfolios,
      locale,
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
