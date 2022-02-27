import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import Image from "next/image";
import Link from "../../src/Link";

import { getAllEvents, getEventBySlug } from "../../src/lib/graphcms";
import Head from "next/head";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import LanguageIcon from "@mui/icons-material/Language";
import InstagramIcon from "@mui/icons-material/Instagram";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import DateRangeIcon from "@mui/icons-material/DateRange";

export default function Event({ event }) {
  return (
    <>
      <Head>
        <title>La Doble Nelson @ {event.venue.name}</title>
        <meta
          property="og:title"
          content="La Doble Nelson | Cumbia"
          key="title"
        />
        <meta property="og:site_name" content="La Doble Nelson" />
        <meta property="og:url" content={`https://ladoblenelson.de/events/${event.slug}`} />
        <meta
          property="og:description"
          content={`La Doble Nelson @ ${event.venue.name} | ${new Date(event.date).toLocaleString('de-DE')}`}
          key="description"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={event.flyer.url}
          key="image"
        />
        <meta property="og:image:width" content={event.flyer.width} />
        <meta property="og:image:height" content={event.flyer.height} />
      </Head>
      <Box sx={{ p: 2 }}>
        <Link href="/">{"<-"} back to home</Link>
        <Typography variant="h2" component="h2" mb={2}>
          {event.title}
        </Typography>
        <Box sx={{ display: "flex", gap: 6, flexDirection: ["column", "row"] }}>
          <Image
            src={event.flyer.url}
            width={400}
            height={500}
            objectFit="contain"
          />
          <List>
            <ListItem disablePadding>
              <ListItemIcon>
                <DateRangeIcon />
              </ListItemIcon>
              <ListItemText>
                {new Date(event.date).toLocaleString("us-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: '2-digit',
                  minute: '2-digit',
                  hour12: false
                })}hs
              </ListItemText>
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <LanguageIcon />
              </ListItemIcon>
              <ListItemText>
                <Link href={event.venue.venueUrl} target="_blank">
                  {event.venue.name}
                </Link>
              </ListItemText>
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <LocationOnIcon />
              </ListItemIcon>
              <ListItemText>
                <Link href={event.venue.mapsUrl} target="_blank">
                  {event.venue.address}
                </Link>
              </ListItemText>
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <InstagramIcon />
              </ListItemIcon>
              <ListItemText>
                <Link href={event.venue.instagram} target="_blank">
                  Instagram
                </Link>
              </ListItemText>
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <ConfirmationNumberIcon />
              </ListItemIcon>
              <ListItemText>
                {event.price > 0 ? `€ ${event.price}` : "FREE ENTRANCE"}
              </ListItemText>
            </ListItem>
          </List>
        </Box>
      </Box>
    </>
  );
}

export async function getStaticProps(ctx) {
  const event = await getEventBySlug(ctx.params.slug);
  return {
    props: {
      event,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const events = await getAllEvents();
  const paths = events.map((event) => ({ params: { slug: event.slug } }));

  return {
    paths,
    fallback: "blocking",
  };
}
