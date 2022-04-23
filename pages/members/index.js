import { List, ListItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { getAllMembers } from "../../src/lib/graphcms";
import Image from "next/image";
import logo from "../../src/assets/logo-white.svg";
import Link from "../../src/Link";

export default function Members(props) {
  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 5 }}>
        <Image src={logo} width={300} height={300} />
        <Typography variant="h2">is:</Typography>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: 2,
        }}
      >
        {props.members.map((member) => (
          <Box key={member.id}>
            <Typography variant='h6'>{member.name}</Typography>
            <Box sx={{ position: "relative", width: "100%", height: "400px" }}>
             <Link href={`/members/${member.id}`}>

              <Image
                src={member.profilePicture.url}
                layout="fill"
                objectFit="cover"
                />
                </Link>
            </Box>
          </Box>
        ))}
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