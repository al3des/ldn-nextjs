import { Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import Image from "next/image";

import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { RiSoundcloudLine } from "react-icons/ri";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import Link from "../../Link";

export default function Footer() {
  return (
    <Box
      sx={(theme) => ({
        bgcolor: "background.default",
        color: theme.palette.aqua.main,
        p: 5,
      })}
    >
      <List>
        <ListItem>
          <ListItemIcon sx={{ color: "inherit" }}>
            <InstagramIcon />
          </ListItemIcon>
          <ListItemText>
            <Link
              href="https://instagram.com/ladoblenelsonberlin"
              target="_blank"
            >
              Instagram
            </Link>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon sx={{ color: "inherit" }}>
            <YouTubeIcon />
          </ListItemIcon>
          <ListItemText>
            <Link
              href="https://www.youtube.com/@ladoblenelsonberlin"
              target="_blank"
            >
              YouTube
            </Link>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon sx={{ color: "inherit", fontSize: 24 }}>
            <RiSoundcloudLine />
          </ListItemIcon>
          <ListItemText>
            <Link
              href="https://soundcloud.com/ladoblenelsonberlin"
              target="_blank"
            >
              SoundCloud
            </Link>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon sx={{ color: "inherit" }}>
            <AlternateEmailIcon />
          </ListItemIcon>
          <ListItemText>
            <Link href="mailto:info@ladoblenelson.de" target="_blank">
              info@ladoblenelson.de
            </Link>
          </ListItemText>
        </ListItem>
      </List>
    </Box>
  );
}
