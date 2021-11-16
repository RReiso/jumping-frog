// Component connects react-hook-form with Material-UI text input
import React from "react";
import { TextField, Grid } from "@mui/material";
import { useForm, Controller } from "react-hook-form";

const CustomTextField = ({ name, label, value }) => {
  const { control } = useForm();

  const displayTextInput = (field) => {
    return value === "Canada" ? (
      <TextField {...field} fullWidth value={value} disabled required />
    ) : (
      <TextField {...field} fullWidth label={label} required />
    );
  };

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        control={control}
        name={name}
        render={({ field }) => displayTextInput(field)}
      />
    </Grid>
  );
};

export default CustomTextField;
