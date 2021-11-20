// Component connects react-hook-form with Material-UI text input
import React from "react";
import { TextField, Grid } from "@mui/material";
import { useForm, Controller } from "react-hook-form";

const CustomTextField = ({ name, label, value, register }) => {
  const { control } = useForm();
  console.log("control", control);

  const displayTextInput = (field) => {
    console.log("field", field);
    return value === "Canada" ? (
      <TextField {...field} fullWidth value={value} disabled required />
    ) : (
      <TextField {...field} fullWidth label={label} required />
    );
  };

  return (
    <Grid item xs={12} sm={6}>
      <TextField
        fullWidth
        required
        label={label}
        // name="FIRSTNAME"
        {...register("FIRSTNAME")}
      />
    </Grid>
  );
};

export default CustomTextField;
