import { List, ListItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { getAllMembers } from "../../src/lib/graphcms";
import Image from "next/image";
import logo from "../../src/assets/logo-fuccia.svg";
import Link from "../../src/Link";

export default function Members(props) {
  return (
    <Box sx={{ background: "#120052", px: 5, minHeight: "100vh" }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 5 }}>
        <Image src={logo} width={300} height={300} />
        <Typography variant="h2">is:</Typography>
      </Box>
      <Box sx={{ display: "grid", gridTemplateColumns: "300px auto", gap: 5 }}>
        <Typography variant="h5">
          <i>La Doble Nelson</i> is a Berlin-based (and formed) Cumbia band with
          integrants from Argentina, Chile, The Netherlands and Spain. Taking
          influence from different Cumbia-Sounds like Colombian, Peruvian and
          from their respective upbringings, <i>La Doble Nelson</i> has created
          their own Sound while still interpreting the Cumbia classics everybody
          knows and loves.
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(500px, 1fr))",
            gap: 2,
            flexGrow: 1,
          }}
        >
          {shuffleArray(props.members).map((member) => (
            <Box key={member.id}>
              <Typography variant="h6">{member.name}</Typography>
              <Box
                sx={{ position: "relative", width: "100%", height: "400px" }}
              >
                <Image
                  src={member.profilePicture.url}
                  layout="fill"
                  objectFit="cover"
                />
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export async function getStaticProps() {
  const members = await getAllMembers();
  return {
    props: {
      members,
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
