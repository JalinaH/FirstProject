import React from "react";
import { Grid, Input, Typography } from "@mui/material";

const UserForm = (props) => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        backgroundColor: "white",
        marginBottom: "30px",
        display: "block",
      }}
    >
      <Grid item xs={12} sm={6}>
        <Typography component={"h1"} sx={{ color: "black" }}>
          User Form
        </Typography>
      </Grid>

      <Grid>
        <Typography
          component={"label"}
          htmlFor="id"
          sx={{
            color: "#000",
            fontSize: "16px",
            marginRight: "20px",
            display: "block",
            width: "100px",
          }}
        >
          ID
        </Typography>
        <Input 
            type="number"
            id="id"
            name="id"
            sx={{ width: "400px" }}
            value={""}
            onChange={e => {}}
        />
      </Grid>
    </Grid>
  );
};

export default UserForm;
