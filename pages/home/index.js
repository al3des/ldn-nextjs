import { Box } from "@mui/material";

export default function HomeOld() {
  return <Box></Box>;
}

// import logo from "../src/assets/logo.svg";
// import styles from "../src/styles/home.module.css";

// import InstagramIcon from "@mui/icons-material/Instagram";
// import YouTubeIcon from "@mui/icons-material/YouTube";
// import Link from "@mui/material/Link";
// import Box from "@mui/material/Box";
// import AnimatedBackgroundElements from "../../src/components/widgets/animated-background-elements";
// import Image from "next/image";
// import { Typography } from "@mui/material";
// import UpcomingEvents from "../../src/components/widgets/upcoming-events";
// import { getAllEvents } from "../../src/lib/graphcms";

// function App({ upcomingEvents, pastEvents }) {
//   return (
//     <>
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           height: "100vh",
//           // backgroundColor: "#ff5d8f",
//         }}
//       >
//         <Box
//           className={styles.logo}
//           sx={{ position: "relative", width: "100%" }}
//         >
//           <Image
//             src={logo}
//             alt="La Doble Nelson"
//             objectFit="contain"
//             layout="fill"
//           />
//         </Box>
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             gap: 2,
//             "& .MuiLink-root": { color: "white" },
//           }}
//         >
//           <Link
//             href="https://www.instagram.com/ladoblenelsonberlin/"
//             target="_blank"
//             rel="noopener noreferrer"
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               gap: 2,
//               textDecoration: "none",
//             }}
//           >
//             <InstagramIcon />
//             Instagram
//           </Link>
//           <Link
//             href="https://www.youtube.com/channel/UCUZXdBepW0y5RFp9VUgkaxA"
//             target="_blank"
//             rel="noopener noreferrer"
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               gap: 2,
//               textDecoration: "none",
//             }}
//           >
//             <YouTubeIcon />
//             YouTube
//           </Link>
//         </Box>
//       </Box>
//       {/* end of main */}
//       {/* ANIMATED BACKGROUND */}
//       <Box className={styles.background} sx={{ zIndex: -9999 }}>
//         <AnimatedBackgroundElements itemsCount={20} />
//       </Box>
//       {/* EVENTS */}
//       <Box
//         id="events"
//         sx={{
//           minHeight: "100vh",
//           mx: "auto",
//           p: 6,
//           backgroundColor: "background.paper",
//           align: "center",
//         }}
//       >
//         {upcomingEvents.length > 0 && (
//           <>
//             <Typography
//               className={styles.neonText}
//               color="primary"
//               variant="h4"
//               component="h2"
//               align="center"
//               sx={{ maxWidth: "sm", mx: "auto", mb: 10 }}
//             >
//               Upcoming events
//             </Typography>
//             <UpcomingEvents items={upcomingEvents} />
//           </>
//         )}
//         {pastEvents.length > 0 && (
//           <>
//             <Typography
//               className={styles.neonText}
//               color="primary"
//               variant="h4"
//               component="h2"
//               align="center"
//               sx={{ maxWidth: "sm", mx: "auto", mb: 10 }}
//             >
//               Past events
//             </Typography>
//             <UpcomingEvents items={pastEvents} />
//           </>
//         )}
//       </Box>
//     </>
//   );
// }
// export default App;

// export async function getStaticProps() {
//   const events = await getAllEvents();
//   const upcomingEvents = events.filter(
//     (event) => new Date(event.date) > new Date()
//   );
//   const pastEvents = events.filter(
//     (event) => new Date(event.date) < new Date()
//   );
//   return {
//     props: {
//       upcomingEvents,
//       pastEvents,
//     },
//     revalidate: 10,
//   };
// }
