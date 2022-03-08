import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "../../Link";
import Image from "next/image";

export default function UpcomingEvents({ items }) {
  return (
    <Box>
      {items &&
        items.map((event) => (
          <Card key={event.id} sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {event.title}
              </Typography>
              <CardMedia
              height="450"
            //   image=?{event.flyer.url}
              alt="green iguana"
            >
                <Image src={event.flyer.url} height={450} width={350} objectFit='contain' />
            </CardMedia>
              {/* <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography> */}
            </CardContent>
            <CardActions>
              <Button size="small">
                <Link href={event.venue.mapsUrl} target="_blank">
                  Map
                </Link>
              </Button>
              <Button size="small">
                  <Link href={`/events/${event.slug}`}>
                  Full details
                  </Link>
                  </Button>
            </CardActions>
          </Card>
        ))}
    </Box>
  );
}
