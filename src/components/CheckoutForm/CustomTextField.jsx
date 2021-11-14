// Component connects react-hook-form with MaterialUI text input
import React from "react";
import { TextField, Grid } from "@mui/material";
import { useForm, Controller } from "react-hook-form";

const CustomTextField = ({ name, label, required }) => {
  const { control } = useForm();
  return (
    <Grid item xs={12} sm={6}>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <TextField {...field} fullWidth label={label} required />
        )}
      />
    </Grid>
  );
};

export default CustomTextField;
