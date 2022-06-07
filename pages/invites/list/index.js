import React from "react";
import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { getAllInvites } from "../../../src/lib/graphcms";

export default function InvitationList({ count }) {
  const [nickname, setNickname] = React.useState("");
  const [spotsAvailable, setSpotsAvailable] = React.useState(10 - count);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint = "/api/invites/add?nickname=" + nickname;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(endpoint, options);
    const { count } = await response.json();
    setNickname("");
    setSpotsAvailable(10 - count);
  };

  return (
    <Box>
      {spotsAvailable > 0 ? (
        <>
          <Typography>Invite List</Typography>
          <Typography>
            {spotsAvailable} free entrance available, write your name !
          </Typography>
          <Box
            component="form"
            sx={{ display: "flex" }}
            onSubmit={handleSubmit}
          >
            <TextField
              //   disabled={sent}
              required
              type="text"
              name="nickname"
              label="Nickname"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
            <Button type="submit">send</Button>
          </Box>
        </>
      ) : (
        <Typography>
          Unfortunately, all spots are taken. Try next time !
        </Typography>
      )}
    </Box>
  );
}

export async function getStaticProps() {
  const list = await getAllInvites();
  const config = "getConfigFromCMS()";

  return {
    props: {
      count: list.length,
    },
  };
}
