import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import { getAllMembers, getMemberById } from "../../src/lib/graphcms";

export default function Member(props) {
  return (
    <Box>
      {props.member && (
        <>
          <Typography variant="h6">{props.member.name}</Typography>
          {props.member.instrument}
          <Image
            src={props.member.profilePicture.url}
            width={props.member.profilePicture.width}
            height={props.member.profilePicture.height}
          />
        </>
      )}
    </Box>
  );
}

export async function getStaticProps(ctx) {
  const member = await getMemberById(ctx.params.id);

  return {
    props: {
      member,
    },
  };
}

export async function getStaticPaths() {
  const members = await getAllMembers();
  const paths = members.map((member) => ({ params: { id: member.id } }));
  return {
    paths,
    fallback: true,
  };
}
