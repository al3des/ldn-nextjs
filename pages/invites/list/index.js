import React from "react";
import { Button, CircularProgress, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { getAllInvites, getConfigFromCMS } from "../../../src/lib/graphcms";
import Image from "next/image";

import logo from "../../../src/assets/logo-fuccia.svg";

export default function InvitationList({ count, config }) {
  const [nickname, setNickname] = React.useState("");
  const [spotsAvailable, setSpotsAvailable] = React.useState(
    config.maxInvites - count
  );
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
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
    setLoading(false);
    setSpotsAvailable(config.maxInvites - count);
  };

  return (
    <Box>
      <Image src={logo} />
      {spotsAvailable > 0 && new Date(config.limitDate) < new Date() ? (
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
              disabled={loading}
            />
            <Button type="submit" disabled={loading}>
              {loading ? <CircularProgress /> : "send"}
            </Button>
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
  const config = await getConfigFromCMS();

  return {
    props: {
      count: list.length,
      config,
    },
  };
}
