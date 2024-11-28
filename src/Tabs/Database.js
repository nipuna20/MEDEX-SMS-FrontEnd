// import { Formik, Form } from "formik";
// import React, { useEffect, useState } from "react";
// import { Button, Card, Grid, Paper, Typography } from "@mui/material";
// import TextField from "@mui/material/TextField";
// import { services } from "../Services/services";
// import { useParams } from "react-router-dom";
// import { ModifiedTextField } from "../Theam/Theam";
// import { Padding } from "@mui/icons-material";
// import Loade from "../componant/Loader";

// export default function Database() {
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
//               checkDetail.tableFeeldValueID == 4 &&
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
//         alert("Database data Row Delete successfully");
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
//   /// show form
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
//                 db_dbName: item.db_dbName,
//                 db_dbIPServerIP: item.db_dbIPServerIP,
//                 db_backupLocation: item.db_backupLocation,
//                 db_discription: item.db_discription,
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
//                         name="db_dbName"
//                         label="Db Name"
//                         value={values.db_dbName}
//                         onChange={handleChange}
//                         placeholder="Enter Database Name"
//                         fullWidth
//                       />
//                       <br />

//                       <ModifiedTextField
//                         name="db_dbIPServerIP"
//                         label="Server IP"
//                         value={values.db_dbIPServerIP}
//                         onChange={handleChange}
//                         placeholder="Enter Server IP "
//                         fullWidth
//                       />
//                       <br />

//                       <ModifiedTextField
//                         name="db_backupLocation"
//                         label="Backup Location"
//                         value={values.db_backupLocation}
//                         onChange={handleChange}
//                         placeholder="Enter Backup Location"
//                         fullWidth
//                       />
//                       <br />

//                       <ModifiedTextField
//                         name="db_discription"
//                         label="Discription"
//                         value={values.db_discription}
//                         onChange={handleChange}
//                         placeholder="Enter Discription "
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
//                 Database Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &nbsp;
//                 {item.db_dbName}
//               </Typography>
//               <br />
//               <Typography>
//                 Database Server IP &nbsp; : &nbsp;
//                 {item.db_dbIPServerIP}
//               </Typography>
//               <br />
//               <Typography>
//                 Location
//                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                 : &nbsp;
//                 {item.db_backupLocation}
//               </Typography>
//               <br />
//               <Typography>
//                 Discription
//                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                 : &nbsp;
//                 {item.db_discription}
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
//     db_dbName: "",
//     db_dbIPServerIP: "",
//     db_backupLocation: "",
//     db_discription: "",
//   };

//   const handleCreatingRow = async (values, { setSubmitting }) => {
//     console.log("Values before API call:", values);
//     values.tableFeeldValueID = 4;
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
//       alert("Database data create successfully");
//       window.location.reload();
//       setLoading(false);
//     }
//   };

//   // const [showForm, setShowForm] = useState(false);
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
//     {showError ? (
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
//                         name="db_dbName"
//                         label="db_dbName"
//                         value={values.db_dbName}
//                         onChange={handleChange}
//                         placeholder="Enter db_dbName"
//                         fullWidth
//                       />

//                       <ModifiedTextField
//                         name="db_dbIPServerIP"
//                         label="db_dbIPServerIP"
//                         value={values.db_dbIPServerIP}
//                         onChange={handleChange}
//                         placeholder="Enter db_dbIPServerIP "
//                         fullWidth
//                       />

//                       <ModifiedTextField
//                         name="db_backupLocation"
//                         label="db_backupLocation"
//                         value={values.db_backupLocation}
//                         onChange={handleChange}
//                         placeholder="Enter db_backupLocation"
//                         fullWidth
//                       />

//                       <ModifiedTextField
//                         name="db_discription"
//                         label="db_discription"
//                         value={values.db_discription}
//                         onChange={handleChange}
//                         placeholder="Enter db_discription "
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
