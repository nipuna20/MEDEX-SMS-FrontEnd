import { Formik, Form, FieldArray, ErrorMessage, Field } from "formik";
import React, { useEffect, useState } from "react";
import { Button, Card, Grid, Paper, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { services } from "../Services/services";
import * as yup from "yup";
import { useParams } from "react-router-dom";
import { ModifiedTextField } from "../Theam/Theam";
import Loade from "../componant/Loader";

//   {
//     Service: "John Doe",
//     ServiceIp: 30,
//     ServerParth: "123-456-7890",
//     Discription:
//       "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
//   },
//   {
//     Service: "John Doe02",
//     ServiceIp: 3003,
//     ServerParth: "123-456-7890",
//     Discription: "bbbbbbbbbbb",
//   },
// ];

export default function LogParth() {
  let [detail, setDetail] = useState([]);
  const [loading, setLoading] = useState(false);

  const { cardId } = useParams();

  console.log("Received cardId:", cardId);

  const logPathData = () => {
    setLoading(true);
    services.tableDataFeeldDetails().then((response) => {
      if (response.isSuccess) {
        setDetail(response.data.tableDataInDB);
        const checkDetail = response.data.tableDataInDB;
        console.log("check responssssssss checkDetail ", checkDetail);
        setDetail(
          checkDetail.filter(
            (checkDetail) =>
              checkDetail.tableFeeldValueID == 1 &&
              checkDetail.cardID == cardId &&
              checkDetail.delete_status == 0
          )
        );
        // console.log("check responssssssss newCheckDetail ", newCheckDetail )
      } else {
        console.log("check responssssssss  has error");
      }
      setLoading(false);
    });
  };

  useEffect(() => {
    logPathData();
  }, []);

  console.log("check responssssssssaaaaaaaaaaaa", detail);
  //   const newArray = detail?.filter(obj => obj.tableFeeldValueID === 1);

  // console.log("check responssssssssaaaaaaaaaaaa for new array", newArray);

  // const tabaleRowDeletFuntion =async (values, { setSubmitting }) =>{

  //   try {
  //     const response = await services.tableDataDelete(values);

  //     if (response.isSuccess) {
  //       console.log("table Row Data:", values);
  //     } else {
  //       console.log("Add Table Row response error");
  //     }
  //   } catch (error) {
  //       console.error("API call error:", error);

  //   } finally {
  //     setSubmitting(false);
  //     alert("Log Paths data create successfully");
  //     window.location.reload();

  //   }
  // }

  // const handleCreating = (values) => {
  //   setLoading(true);
  //   services.cardCreat(values).then((response) => {
  //     if (response.isSuccess) {
  //       console.log("card Data:", values);
  //       navigate("/Cards");
  //       alert("your card create successfully");
  //     } else {
  //       console.log("add card respons error");
  //     }

  //     setLoading(false);
  //   });
  // };

  const handleDelete = async (values) => {
    console.log("table value is ", values);
    // setLoading(true);
    services.tableDataDelete(values).then((response) => {
      if (response.isSuccess) {
        console.log("check table data delete ", values);
        alert("Log Paths data Row Delete successfully");
        window.location.reload();
      } else {
        console.log("delet row respons error");
      }
      // setLoading(false);
    });
  };

  const handleUpdatingRow = async (values) => {
    console.log("updated values is : ", values);
    setLoading(true);
    // console.log("updated values tableID is : ", tableID);
    services.tableDataUpdate(values).then((response) => {
      if (response.isSuccess) {
        console.log("check table data update ", values);
        alert("Log Paths data Row update successfully");
        window.location.reload();
      } else {
        console.log("update row respons error");
      }
      setLoading(false);
    });
  };
  /// show Edit frame
  const [showEditForm, setShowEditForm] = useState(false);
  const [tableID, setTableID] = useState(null);

  const handleEditButtonClick = (tableID) => {
    console.log("table id is : ", tableID);
    setTableID(tableID);
    setShowEditForm(true);
  };
  const handleEditBackButtonClick = () => {
    setShowEditForm(false);
  };

  const cardData = (item, key) => (
    <Grid item xs={12} sm={12} md={12} key={key}>
      <Card
        sx={{ borderRadius: 6 }}
        style={{ padding: "16px", marginBottom: "20px" }}
        elevation={10}
      >
        {showEditForm && tableID == item.tableID ? (
          <>
            <Grid align={"left"}>
              <Button
                // onClick={() => handleDelete(item.tableID)}
                variant="contained"
                sx={{
                  // flexDirection: "column",
                  justifyContent: "center",
                  textAlign: "center",
                  margin: "auto",
                  borderRadius: 3,
                }}
                onClick={handleEditBackButtonClick}
              >
                {" < "} back{" "}
              </Button>
            </Grid>
            <Formik
              enableReinitialize={true}
              initialValues={{
                service: item.service,
                serverIp: item.serverIp,
                serverParth: item.serverParth,
                discription: item.discription,
              }}
              onSubmit={(values, { setSubmitting }) => {
                const updateValues = { ...values, tableID: item.tableID };
                handleUpdatingRow(updateValues);
                setSubmitting(false);
              }}
              // onSubmit={handleUpdatingRow}
              // onSubmit={(values)=>{console.log("values :", values)}}
            >
              {({ isSubmitting, values, handleChange }) => (
                <Form>
                  <Grid item margin={4}>
                    <Grid align={"left"}>
                      <ModifiedTextField
                        name="service"
                        label="Service"
                        value={values.service}
                        onChange={handleChange}
                        placeholder="Enter Sevice Name"
                        fullWidth
                      />
                      <br />

                      <ModifiedTextField
                        name="serverIp"
                        label="Server Ip"
                        value={values.serverIp}
                        onChange={handleChange}
                        placeholder="Enter Server Ip "
                        fullWidth
                      />
                      <br />

                      <ModifiedTextField
                        name="serverParth"
                        label="Server Parth"
                        value={values.serverParth}
                        onChange={handleChange}
                        placeholder="Enter Server Parth"
                        fullWidth
                      />
                      <br />

                      <ModifiedTextField
                        name="discription"
                        label="Discription"
                        value={values.discription}
                        onChange={handleChange}
                        placeholder="Enter Discription "
                        fullWidth
                      />
                    </Grid>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      variant="contained"
                      sx={{
                        flexDirection: "column",
                        justifyContent: "center",
                        textAlign: "center",
                        margin: "auto",
                        borderRadius: 3,
                      }}
                    >
                      Submit
                    </Button>
                  </Grid>
                </Form>
              )}
            </Formik>
            {loading && <Loade />}
          </>
        ) : (
          <>
            <Grid align={"left"}>
              <Typography>
                Service &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :
                &nbsp;
                {item.service}
              </Typography>
              <br />
              <Typography>
                Server Ip &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &nbsp;
                {item.serverIp}
              </Typography>
              <br />
              <Typography>
                Server Parth &nbsp; : &nbsp;
                {item.serverParth}
              </Typography>
              <br />
              <Typography>
                Discription &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &nbsp;
                {item.discription}
              </Typography>
            </Grid>
            <br />
            <Button
              onClick={() => handleDelete(item.tableID)}
              variant="contained"
              sx={{
                // flexDirection: "column",
                justifyContent: "center",
                textAlign: "center",
                margin: "auto",
                borderRadius: 3,
              }}
            >
              Delete
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Button
              // onClick={() => handleDelete(item.tableID)}
              variant="contained"
              sx={{
                // flexDirection: "column",
                justifyContent: "center",
                textAlign: "center",
                margin: "auto",
                borderRadius: 3,
              }}
              onClick={() => handleEditButtonClick(item.tableID)}
            >
              Edit
            </Button>
          </>
        )}
      </Card>
    </Grid>
  );

  const initialValues = {
    service: "",
    serverIp: "",
    serverParth: "",
    discription: "",
  };

  // const handleSubmit = (values, { setSubmitting }) => {
  //   // Handle form submission logic here (e.g., API call)
  //   console.log(values);
  //   setSubmitting(false);
  // };

  const handleCreatingRow = async (values, { setSubmitting }) => {
    console.log("Values before API call:", values);
    values.tableFeeldValueID = 1;
    values.cardID = cardId;
    console.log(
      "Values before API call and after the add table feeld value:",
      values
    );
    setLoading(true);
    try {
      const response = await services.tableDataFeeld(values);
      // console.log("API response:", response);

      if (response.isSuccess) {
        // console.log("table Row Data:", values);
      } else {
        // console.log("Add Table Row response error");
      }
    } catch (error) {
      // console.error("API call error:", error);
    } finally {
      setSubmitting(false);
      alert("Log Paths data create successfully");
      window.location.reload();
      setLoading(false);
    }
  };

  const [showForm, setShowForm] = useState(false);

  const handleAddButtonClick = () => {
    setShowForm(true);
  };

  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (detail.length === 0) {
      setShowError(true);
    } else {
      setShowError(false);
    }
  }, [detail]);


  return (
    <>
     {showError ? (
      <img
          src="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-2506.jpg?w=900&t=st=1694405711~exp=1694406311~hmac=c82523df6ca43ec5e98d8efda0809b3d8959bbb90c7be5f28af065d38a772ac8"
          width="300"
          height="150"
        />
      ) : (
      <Grid container margin={2}>
        {detail.map((card, key) => cardData(card, key))}
        {loading && <Loade />}
      </Grid>
      )}
      {showForm ? (
        <>
          <Formik
            enableReinitialize={true}
            initialValues={initialValues}
            // validationSchema={validationSchema}
            onSubmit={handleCreatingRow}
          >
            {({ isSubmitting, values, handleChange }) => (
              <Form>
                <Grid item xs={12} sm={12} md={12}>
                  <Card
                    sx={{ borderRadius: 6 }}
                    style={{ padding: "16px", marginBottom: "20px" }}
                    elevation={10}
                  >
                    <Grid item margin={4}>
                      <ModifiedTextField
                        name="service"
                        label="Service"
                        value={values.service}
                        onChange={handleChange}
                        placeholder="Enter Sevice Name"
                        fullWidth
                      />
                      <br />

                      <ModifiedTextField
                        name="serverIp"
                        label="Server Ip"
                        value={values.serverIp}
                        onChange={handleChange}
                        placeholder="Enter Server Ip "
                        fullWidth
                      />
                      <br />

                      <ModifiedTextField
                        name="serverParth"
                        label="Server Parth"
                        value={values.serverParth}
                        onChange={handleChange}
                        placeholder="Enter Server Parth"
                        fullWidth
                      />
                      <br />

                      <ModifiedTextField
                        name="discription"
                        label="Discription"
                        value={values.discription}
                        onChange={handleChange}
                        placeholder="Enter Discription "
                        fullWidth
                      />
                      <br />
                      <br />
                      {/* <br/> */}
                      {/* <div>
                  <label htmlFor="service">
                    Service
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </label>
                  <Field type="text" id="service" name="service" />
                  <ErrorMessage name="service" component="div" />
                </div> */}
                      {/*                 
                <div>
                  <label htmlFor="serverIp">
                    serverIp &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </label>
                  <Field type="text" id="serverIp" name="serverIp" />
                  <ErrorMessage name="serverIp" component="div" />
                </div>
                <div>
                  <label htmlFor="serverParth">serverParth &nbsp;&nbsp;</label>
                  <Field type="text" id="serverParth" name="serverParth" />
                  <ErrorMessage name="serverParth" component="div" />
                </div>
                <div>
                  <label htmlFor="discription">
                    discription &nbsp;&nbsp;&nbsp;&nbsp;
                  </label>
                  <Field type="text" id="discription" name="discription" />
                  <ErrorMessage name="discription" component="div" />
                </div> */}

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        variant="contained"
                        sx={{
                          flexDirection: "column",
                          justifyContent: "center",
                          textAlign: "center",
                          margin: "auto",
                          borderRadius: 3,
                        }}
                      >
                        Submit
                      </Button>
                    </Grid>
                  </Card>
                </Grid>
              </Form>
            )}
          </Formik>
          {loading && <Loade />}
        </>
      ) : (

        <Button
          type="submit"
          variant="contained"
          sx={{
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            borderRadius: 3,
            marginBottom: 4,
            marginTop:6,
            display: showForm ? "none" : "block",
          }}
          onClick={handleAddButtonClick}
        >
          ADD
        </Button>
      )}
    </>
  );
}

// type="submit"
// variant="contained"
// disabled={!(isValid || isSubmitting)}
// sx={{
//   flexDirection: "column",
//   justifyContent: "center",
//   textAlign: "center",
//   margin: "auto",
//   borderRadius: 3,
// }}

// onSubmit={(values, { setSubmitting }) => {
//   setSubmitting(false);
//   setLoading(true);
//   dispatch(handleLogin(values, setSubmitting, navigate, setLoading));

{
  /* <Grid container spacing={2} marginTop={3}>
{data.map((card, key) => cardData(card, key))}
</Grid> */
}

{
  /* <Formik
        enableReinitialize={true}
        // initialValues={{...dataValue}}
        initialValues={{
          TablePaper: [
            { service: "", serverIp: "", serverParth: "", discription: "" },
          ],
        }}
        // initialValues={initialValues}
        onSubmit={(values) => addData(values)}
      >
        {({ values, isSubmitting, handleChange }) => (
          <Form>
            <Paper
              elevation={5}
              style={{ padding: "16px", marginBottom: "16px" }}
              sx={{ borderRadius: 6 }}
            >
              <FieldArray
                name="TablePaper"
                render={(arrayHelpers) => (
                  <>
                  
                   
                    <Button
                      variant="contained"
                      type="submit"
                      onChange={() =>
                        arrayHelpers.push({
                          service: values.service,
                          serverIp: values.serverIp,
                          serverParth: values.serverParth,
                          discription: "",
                        })
                      }
                    >
                      AddValue
                    </Button>
                  </>
                )}
              />
            </Paper> */
}

{
  /* <AddCircleIcon /> */
}
{
  /* </Form>
        )}
      </Formik> */
}

{
  /* <Formik
        enableReinitialize={true}
        initialValues={editUser}
        onSubmit={(values) => console.log(values)}
      >
        {({
          values,
          isSubmitting,
          handleBlur,
          handleChange,
          handleSubmit,
          isValid,
          setFieldValue,
        }) => (
          <Form>
            {data.map((user, index) => (
              <Paper
                key={index}
                elevation={5}
                style={{ padding: "16px", marginBottom: "16px" }}
                sx={{ borderRadius: 6 }}
              >
                {editIndex === index ? (
                  <>
                    <TextField
                      name="Service"
                      label="Service"
                      value={values.Service}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <br />
                    <br />
                    <TextField
                      name="ServiceIp"
                      label="Service Ip"
                      value={values.ServiceIp}
                      onChange={handleChange}
                    />
                    <br />
                    <br />
                    <TextField
                      name="ServerParth"
                      label="Server Parth"
                      value={values.ServerParth}
                      onChange={handleChange}
                    />
                    <br />
                    <br />
                    <TextField
                      name="Discription"
                      label="Discription"
                      value={values.Discription}
                      onChange={handleChange}
                    />
                    <br />
                    <br />
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      onChange={handleChange}
                      // onLoad={isSubmitting}
                      sx={{ borderRadius: 3 }}
                    >
                      Save
                    </Button>
                  </>
                ) : (
                  <>
                    <Grid align={"left"}>
                      <Typography
                        variant="body1"
                        style={{ wordWrap: "break-word" }}
                      >
                        Service : {user.Service}
                      </Typography>
                      <br />
                      <Typography
                        variant="body1"
                        style={{ wordWrap: "break-word" }}
                      >
                        Server Ip : {user.ServiceIp}
                      </Typography>
                      <br />
                      <Typography
                        variant="body1"
                        style={{ wordWrap: "break-word" }}
                      >
                        Server Parth : {user.ServerParth}
                      </Typography>
                      <br />
                      <Typography
                        variant="body1"
                        style={{ wordWrap: "break-word" }}
                      >
                        Discription : {user.Discription}
                      </Typography>
                    </Grid>
                    <br />
                    <Button
                      type="button"
                      variant="contained"
                      color="primary"
                      onClick={() => handleEdit(index)}
                      // onLoad={isSubmitting}
                      sx={{ borderRadius: 3 }}
                    >
                      Edit
                    </Button>
                  </>
                )}
              </Paper>
            ))}
            <Button
              variant="contained"
              onClick={handleAdd}
              sx={{ borderRadius: 3 }}
            >
              <AddCircleIcon/>
            </Button>
          </Form>
        )}
      </Formik> */
}
