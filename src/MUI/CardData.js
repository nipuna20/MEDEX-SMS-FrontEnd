import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from "@mui/material";
import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

export default function CardData() {

  const handleCreating = (values) => {
    console.log("User Data:", values);
  };

  const validationSchema = Yup.object().shape({
    cardName: Yup.string().required("Username is required"),
    cardName: Yup.string().required("Username is required"),
  });

  return (
    <>
      <Formik
        initialValues={{ cardName: "", cardTitle: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => handleCreating(values)}
      >
        {({ values, isSubmitting, handleBlur, handleChange, handleSubmit }) => (
          <Form>
            <Card sx={{ borderRadius: 6 }}>
              <CardHeader
                title="Card Data"
                subheader="Add data of your Card"
              ></CardHeader>
              <CardContent>
                <Box
                  sx={{
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Grid container spacing={1}>
                    <Grid xs={12} md={6} padding={1}>
                      <TextField
                        fullWidth
                        label="Card Name"
                        name="cardName"
                        value={values.cardName}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        required
                      />
                    </Grid>
                    <Grid xs={12} md={6} padding={1}>
                      <TextField
                        fullWidth
                        label="Card Details"
                        name="cardDetails"
                        value={values.cardDetails}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        required
                      />
                    </Grid>
                    <Divider />
                    <Button
                      variant="contained"
                      disabled={isSubmitting}
                      sx={{
                        flexDirection: "column",
                        justifyContent: "center",
                        textAlign: "center",
                        margin: "auto",
                        borderRadius: 3,
                      }}
                    >
                      Create Card
                    </Button>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Form>
        )}
      </Formik>
    </>
  );
}
