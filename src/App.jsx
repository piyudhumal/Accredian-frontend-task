// src/App.js
import React, { useState } from "react";
import { Button, Modal, TextField, Box, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const validationSchema = Yup.object({
  referrerName: Yup.string().required("Referrer Name is required"),
  referrerEmail: Yup.string().email("Invalid email").required("Referrer Email is required"),
  refereeName: Yup.string().required("Referee Name is required"),
  refereeEmail: Yup.string().email("Invalid email").required("Referee Email is required"),
});

function App() {
  const [open, setOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      referrerName: "",
      referrerEmail: "",
      refereeName: "",
      refereeEmail: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("Form Data:", values);
      setOpen(false); // Close modal after submission
    },
  });

  return (
    <div>
      {/* Hero Section */}
      <Box textAlign="center" mt={10} marginLeft={65}>
        <Typography variant="h3" gutterBottom>
          Refer & Earn
        </Typography>
        <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
          Refer Now
        </Button>
      </Box>

      {/* Popup Modal */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={modalStyle}>
          <Typography variant="h6" gutterBottom>
            Refer a Friend
          </Typography> 
          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              label="Referrer Name"
              name="referrerName"
              value={formik.values.referrerName}
              onChange={formik.handleChange}
              error={formik.touched.referrerName && Boolean(formik.errors.referrerName)}
              helperText={formik.touched.referrerName && formik.errors.referrerName}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Referrer Email"
              name="referrerEmail"
              value={formik.values.referrerEmail}
              onChange={formik.handleChange}
              error={formik.touched.referrerEmail && Boolean(formik.errors.referrerEmail)}
              helperText={formik.touched.referrerEmail && formik.errors.referrerEmail}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Referee Name"
              name="refereeName"
              value={formik.values.refereeName}
              onChange={formik.handleChange}
              error={formik.touched.refereeName && Boolean(formik.errors.refereeName)}
              helperText={formik.touched.refereeName && formik.errors.refereeName}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Referee Email"
              name="refereeEmail"
              value={formik.values.refereeEmail}
              onChange={formik.handleChange}
              error={formik.touched.refereeEmail && Boolean(formik.errors.refereeEmail)}
              helperText={formik.touched.refereeEmail && formik.errors.refereeEmail}
              sx={{ mb: 2 }}
            />
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

export default App;