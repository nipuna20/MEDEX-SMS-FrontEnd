// import { Formik, Form, Field, ErrorMessage } from "formik";
// import React, { useEffect, useState } from "react";
// import { Button, Card, Grid, Paper, Typography } from "@mui/material";
// import TextField from "@mui/material/TextField";
// import { services } from "../Services/services";
// import { useParams } from "react-router-dom";
// import { ModifiedTextField } from "../Theam/Theam";
// import Loade from "../componant/Loader";

// //

// export default function Services() {
//   let [detail, setDetail] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const { cardId } = useParams();

//   console.log("Received cardId:", cardId);

//   const logPathData = () => {
//     setLoading(true);
//     services.tableDataFeeldDetails().then((response) => {
//       if (response.isSuccess) {
//         setDetail(response.data.tableDataInDB);
//         const checkDetail = response.data.tableDataInDB;
//         console.log("check responssssssss checkDetail ", checkDetail);
//         setDetail(
//           checkDetail.filter(
//             (checkDetail) =>
//               checkDetail.tableFeeldValueID == 2 &&
//               checkDetail.cardID == cardId &&
//               checkDetail.delete_status == 0
//           )
//         );
//         console.log("check responssssssss", detail);
//       } else {
//         console.log("check responssssssss  has error");
//       }
//       setLoading(false);
//     });
//   };

//   useEffect(() => {
//     logPathData();
//   }, []);

//   const handleDelete = async (values) => {
//     console.log("table value is ", values);
//     services.tableDataDelete(values).then((response) => {
//       if (response.isSuccess) {
//         console.log("check table data delete ", values);
//         alert("Services data Row Delete successfully");
//         window.location.reload();
//       } else {
//         console.log("delet row respons error");
//       }
//     });
//   };

//   const handleUpdatingRow = async (values) => {
//     console.log("updated values is : ", values);
//     // console.log("updated values tableID is : ", tableID);
//     setLoading(true);
//     services.tableDataUpdate(values).then((response) => {
//       if (response.isSuccess) {
//         console.log("check table data update ", values);
//         alert("Log Paths data Row update successfully");
//         window.location.reload();
//       } else {
//         console.log("update row respons error");
//       }
//       setLoading(false);
//     });
//   };

//   /// show Edit form
//   const [showEditForm, setShowEditForm] = useState(false);
//   const [tableID, setTableID] = useState(null);

//   const handleEditButtonClick = (tableID) => {
//     console.log("table id is : ", tableID);
//     setTableID(tableID);
//     setShowEditForm(true);
//   };
//   const handleEditBackButtonClick = () => {
//     setShowEditForm(false);
//   };

//   const cardData = (item, key) => (
//     <Grid item xs={12} sm={12} md={12} key={key}>
//       <Card
//         sx={{ borderRadius: 6 }}
//         style={{ padding: "16px", marginBottom: "20px" }}
//         elevation={10}
//       >
//         {showEditForm && tableID == item.tableID ? (
//           <>
//             <Grid align={"left"}>
//               <Button
//                 // onClick={() => handleDelete(item.tableID)}
//                 variant="contained"
//                 sx={{
//                   // flexDirection: "column",
//                   justifyContent: "center",
//                   textAlign: "center",
//                   margin: "auto",
//                   borderRadius: 3,
//                 }}
//                 onClick={handleEditBackButtonClick}
//               >
//                 {" < "} back{" "}
//               </Button>
//             </Grid>
//             <Formik
//               enableReinitialize={true}
//               initialValues={{
//                 services_serviceName: item.services_serviceName,
//                 services_serverIP: item.services_serverIP,
//                 services_serverPath: item.services_serverPath,
//                 services_relatedCommands: item.services_relatedCommands,
//               }}
//               onSubmit={(values, { setSubmitting }) => {
//                 const updateValues = { ...values, tableID: item.tableID };
//                 handleUpdatingRow(updateValues);
//                 setSubmitting(false);
//               }}
//               // onSubmit={handleUpdatingRow}
//               // onSubmit={(values)=>{console.log("values :", values)}}
//             >
//               {({ isSubmitting, values, handleChange }) => (
//                 <Form>
//                   <Grid item margin={4}>
//                     <Grid align={"left"}>
//                       <ModifiedTextField
//                         name="services_serviceName"
//                         label="ServiceName"
//                         value={values.services_serviceName}
//                         onChange={handleChange}
//                         placeholder="Enter Service Name"
//                         fullWidth
//                       />
//                       <br />

//                       <ModifiedTextField
//                         name="services_serverIP"
//                         label="ServerIP"
//                         value={values.services_serverIP}
//                         onChange={handleChange}
//                         placeholder="Enter Server IP "
//                         fullWidth
//                       />
//                       <br />

//                       <ModifiedTextField
//                         name="services_serverPath"
//                         label="Server Path"
//                         value={values.services_serverPath}
//                         onChange={handleChange}
//                         placeholder="Enter Server Path"
//                         fullWidth
//                       />
//                       <br />

//                       <ModifiedTextField
//                         name="services_relatedCommands"
//                         label="RelatedCommands"
//                         value={values.services_relatedCommands}
//                         onChange={handleChange}
//                         placeholder="Enter Related Commands "
//                         fullWidth
//                       />
//                     </Grid>
//                     <Button
//                       type="submit"
//                       disabled={isSubmitting}
//                       variant="contained"
//                       sx={{
//                         flexDirection: "column",
//                         justifyContent: "center",
//                         textAlign: "center",
//                         margin: "auto",
//                         borderRadius: 3,
//                       }}
//                     >
//                       Submit
//                     </Button>
//                   </Grid>
//                 </Form>
//               )}
//             </Formik>
//             {loading && <Loade />}
//           </>
//         ) : (
//           <>
//             <Grid align={"left"}>
//               <Typography>
//                 ServiceName &nbsp; : &nbsp;
//                 {item.services_serviceName}
//               </Typography>
//               <br />
//               <Typography>
//                 ServerIP &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :
//                 &nbsp;
//                 {item.services_serverIP}
//               </Typography>
//               <br />
//               <Typography>
//                 ServerPath &nbsp;&nbsp;&nbsp;&nbsp; : &nbsp;
//                 {item.services_serverPath}
//               </Typography>
//               <br />
//               <Typography>
//                 RelatedCommands : &nbsp;
//                 {item.services_relatedCommands}
//               </Typography>
//             </Grid>
//             <br />
//             <Button
//               onClick={() => handleDelete(item.tableID)}
//               variant="contained"
//               sx={{
//                 // flexDirection: "column",
//                 justifyContent: "center",
//                 textAlign: "center",
//                 margin: "auto",
//                 borderRadius: 3,
//               }}
//             >
//               Delete
//             </Button>
//             &nbsp;&nbsp;&nbsp;&nbsp;
//             <Button
//               // onClick={() => handleDelete(item.tableID)}
//               onClick={() => handleEditButtonClick(item.tableID)}
//               // onClick={handleEditButtonClick}
//               variant="contained"
//               sx={{
//                 // flexDirection: "column",
//                 justifyContent: "center",
//                 textAlign: "center",
//                 margin: "auto",
//                 borderRadius: 3,
//               }}
//             >
//               Edit
//             </Button>
//           </>
//         )}
//       </Card>
//     </Grid>
//   );

//   const initialValues = {
//     services_serviceName: "",
//     services_serverIP: "",
//     services_serverPath: "",
//     services_relatedCommands: "",
//   };

//   const handleCreatingRow = async (values, { setSubmitting }) => {
//     console.log("Values before API call:", values);
//     values.tableFeeldValueID = 2;
//     values.cardID = cardId;
//     setLoading(true);
//     try {
//       const response = await services.tableDataFeeld(values);
//       console.log("API response:", response);
//       // values.tableFeeldValueID = 2;

//       console.log(
//         "Values before API call and after the add table feeld value:",
//         values
//       );

//       if (response.isSuccess) {
//         console.log("table Row Data:", values);
//       } else {
//         console.log("Add Table Row response error");
//       }
//     } catch (error) {
//       console.error("API call error:", error);
//     } finally {
//       setSubmitting(false);
//       alert("Services data create successfully");
//       window.location.reload();
//       setLoading(false);
//     }
//   };

//   const [showForm, setShowForm] = useState(false);

//   const handleAddButtonClick = () => {
//     setShowForm(true);
//   };

//   const [showError, setShowError] = useState(false);

//   useEffect(() => {
//     if (detail.length === 0) {
//       setShowError(true);
//     } else {
//       setShowError(false);
//     }
//   }, [detail]);

//   return (
//     <>
//      {showError ? (
//       <img
//           src="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-2506.jpg?w=900&t=st=1694405711~exp=1694406311~hmac=c82523df6ca43ec5e98d8efda0809b3d8959bbb90c7be5f28af065d38a772ac8"
//           width="300"
//           height="150"
//         />
//       ) : (
//       <Grid container margin={2}>
//         {detail.map((card, key) => cardData(card, key))}
//         {loading && <Loade />}
//       </Grid>
//       )}
//       {showForm ? (
//         <>
//           <Formik
//             enableReinitialize={true}
//             initialValues={initialValues}
//             // validationSchema={validationSchema}
//             onSubmit={handleCreatingRow}
//           >
//             {({ isSubmitting, values, handleChange }) => (
//               <Form>
//                 <Grid item xs={12} sm={12} md={12}>
//                   <Card
//                     sx={{ borderRadius: 6 }}
//                     style={{ padding: "16px", marginBottom: "20px" }}
//                     elevation={10}
//                   >
//                     <Grid item margin={4}>
//                       <ModifiedTextField
//                         name="services_serviceName"
//                         label="Service Name"
//                         value={values.services_serviceName}
//                         onChange={handleChange}
//                         placeholder="Enter Sevice Name"
//                         fullWidth
//                       />

//                       <ModifiedTextField
//                         name="services_serverIP"
//                         label="Server IP"
//                         value={values.services_serverIP}
//                         onChange={handleChange}
//                         placeholder="Enter Server Ip "
//                         fullWidth
//                       />

//                       <ModifiedTextField
//                         name="services_serverPath"
//                         label="Server Path"
//                         value={values.services_serverPath}
//                         onChange={handleChange}
//                         placeholder="Enter Server Parth"
//                         fullWidth
//                       />

//                       <ModifiedTextField
//                         name="services_relatedCommands"
//                         label="Related Commands"
//                         value={values.services_relatedCommands}
//                         onChange={handleChange}
//                         placeholder="Enter Related Commands "
//                         fullWidth
//                       />
//                       <br />
//                       <br />

//                       <Button
//                         type="submit"
//                         disabled={isSubmitting}
//                         variant="contained"
//                         sx={{
//                           flexDirection: "column",
//                           justifyContent: "center",
//                           textAlign: "center",
//                           margin: "auto",
//                           borderRadius: 3,
//                         }}
//                       >
//                         Submit
//                       </Button>
//                     </Grid>
//                   </Card>
//                 </Grid>
//               </Form>
//             )}
//           </Formik>
//           {loading && <Loade />}
//         </>
//       ) : (
//         <Button
//           type="submit"
//           variant="contained"
//           sx={{
//             flexDirection: "column",
//             justifyContent: "center",
//             textAlign: "center",
//             borderRadius: 3,
//             marginBottom: 4,
//             marginTop:6,
//             display: showForm ? "none" : "block",
//           }}
//           onClick={handleAddButtonClick}
//         >
//           ADD
//         </Button>
//       )}
//     </>
//   );
// }
