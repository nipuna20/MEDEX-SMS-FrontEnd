// import { Formik, Form, ErrorMessage, Field } from "formik";
// import React, { useEffect, useRef, useState } from "react";
// import {
//   Button,
//   Card,
//   Grid,
//   MenuItem,
//   Paper,
//   Select,
//   Typography,
// } from "@mui/material";
// import TextField from "@mui/material/TextField";
// import { services } from "../Services/services";
// import { useParams } from "react-router-dom";
// import { ModifiedTextField } from "../Theam/Theam";
// import Loade from "../componant/Loader";

// export default function Troubleshooting() {
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
//               checkDetail.tableFeeldValueID == 6 &&
//               checkDetail.cardID == cardId &&
//               checkDetail.delete_status == 0
//           )
//         );
//         //  console.log("check responssssssss", detail)
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
//         alert("Troubleshooting Tips data Row Delete successfully");
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

//   //edit show
//   const [showEditForm, setShowEditForm] = useState(false);
//   const [tableID, setTableID] = useState(null);

//   const handleEditButtonClick = (tableID) => {
//     console.log("table id is a :", tableID);
//     setTableID(tableID);
//     setShowEditForm(true);
//   };
//   const handleEditBackButtonClick = () => {
//     setShowEditForm(false);
//   };
//   /////iframe/////
//   const [showIframe, setShowIframe] = useState(false);

//   const handleShowIframe = (tableID) => {
//     console.log("table id in display card", tableID);
//     setShowIframe(true);
//   };
//   const handleCloseIframe = () => {
//     setShowIframe(false);
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
//                 troubleshootingTips_ServiceName:
//                   item.troubleshootingTips_ServiceName,
//                 troubleshootingTips_issueDiscription:
//                   item.troubleshootingTips_issueDiscription,
//                 profile_TrobleShooting: {},
//                 troubleshootingTips_resolvingProcedure:
//                   item.troubleshootingTips_resolvingProcedure,
//               }}
//               onSubmit={(values, { setSubmitting }) => {
//                 const updateValues = { ...values, tableID: item.tableID };
//                 handleUpdatingRow(updateValues);
//                 setSubmitting(false);
//               }}
//               // onSubmit={handleUpdatingRow}
//               // onSubmit={(values)=>{console.log("values :", values)}}
//             >
//               {({ isSubmitting, values, handleChange, setFieldValue }) => (
//                 <Form>
//                   <Grid item margin={4}>
//                     <ModifiedTextField
//                       name="troubleshootingTips_ServiceName"
//                       label="Service Name"
//                       value={values.troubleshootingTips_ServiceName}
//                       onChange={handleChange}
//                       placeholder="Enter Service Name"
//                       fullWidth
//                     />
//                     <br />

//                     <ModifiedTextField
//                       name="troubleshootingTips_issueDiscription"
//                       label="Issue Discription"
//                       value={values.troubleshootingTips_issueDiscription}
//                       onChange={handleChange}
//                       placeholder="Enter Issue Discription "
//                       fullWidth
//                     />
//                     <br />
//                     <ModifiedTextField
//                       name="troubleshootingTips_resolvingProcedure"
//                       label="Resolving Procedure"
//                       value={values.troubleshootingTips_resolvingProcedure}
//                       onChange={handleChange}
//                       placeholder="Enter Resolving Procedure "
//                       fullWidth
//                     />

//                     {/* <ModifiedTextField
//                         name="serverParth"
//                         label="Server Parth"
//                         value={values.serverParth}
//                         onChange={handleChange}
//                         placeholder="Enter Server Parth"
//                         fullWidth
//                       /> */}

//                     <Button
//                       variant="outlined"
//                       onClick={handleUploadClick}
//                       sx={{
//                         paddingLeft: 5,
//                         paddingRight: 5,
//                         paddingTop: 1.5,
//                         paddingBottom: 1.5,
//                       }}
//                     >
//                       Upload File
//                     </Button>
//                     <input
//                       type="file"
//                       ref={fileInputField}
//                       onChange={(e) => handleUpload(e, setFieldValue)}
//                       title=""
//                       value=""
//                       style={{ display: "block", opacity: 0, width: 0 }}
//                     />

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
//                 ServiceName
//                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                 : &nbsp;
//                 {item.troubleshootingTips_ServiceName}
//               </Typography>
//               <br />
//               <Typography>
//                 IssueDiscription
//                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :
//                 &nbsp;
//                 {item.troubleshootingTips_issueDiscription}
//               </Typography>
//               <br />
//               <Typography>
//                 Resolving Procedure &nbsp;&nbsp; : &nbsp;
//                 {item.troubleshootingTips_resolvingProcedure}
//               </Typography>
//               <br />
//               <Typography>
//                 Uploaded file &nbsp;&nbsp; : &nbsp;
//                 {/* {item.troubleshootingTips_fileUpload} */}
//                 {item.troubleshootingTips_fileUpload && (
//                   <>
//                     {!showIframe ? (
//                       <Button
//                         // onClick={() =>
//                         //   IframeComponent(item.documentation_fileUpload)
//                         // }
//                         onClick={() => handleShowIframe(item.tableID)}
//                         variant="contained"
//                         sx={{
//                           justifyContent: "center",
//                           textAlign: "center",
//                           margin: "auto",
//                           borderRadius: 3,
//                         }}
//                       >
//                         Display
//                       </Button>
//                     ) : (
//                       <>
//                         <Button
//                           onClick={handleCloseIframe}
//                           variant="contained"
//                           sx={{
//                             justifyContent: "center",
//                             textAlign: "center",
//                             margin: "auto",
//                             borderRadius: 3,
//                           }}
//                         >
//                           Close
//                         </Button>
//                         <br />
//                         <br />

//                         <iframe
//                           title="Embedded Content"
//                           width="560"
//                           height="315"
//                           // src="http://localhost:3000/image/documentation_fileUpload_1692005078743_891.jpg"
//                           src={`http://localhost:3000/image/${item.troubleshootingTips_fileUpload}`}
//                           frameBorder="0"
//                           allowFullScreen
//                         ></iframe>
//                       </>
//                     )}
//                   </>
//                 )}
//               </Typography>
//               <br />
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
//               variant="contained"
//               sx={{
//                 // flexDirection: "column",
//                 justifyContent: "center",
//                 textAlign: "center",
//                 margin: "auto",
//                 borderRadius: 3,
//               }}
//               onClick={() => handleEditButtonClick(item.tableID)}
//             >
//               Edit
//             </Button>
//           </>
//         )}
//       </Card>
//     </Grid>
//   );

//   const initialValues = {
//     troubleshootingTips_ServiceName: "",
//     troubleshootingTips_issueDiscription: "",
//     profile_TrobleShooting: {},
//     troubleshootingTips_resolvingProcedure: "",
//   };

//   // const handleSubmit = (values, { setSubmitting }) => {
//   //   // Handle form submission logic here (e.g., API call)
//   //   console.log(values);
//   //   setSubmitting(false);
//   // };

//   const handleCreatingRow = async (values, { setSubmitting }) => {
//     console.log("Values before API call:", values);
//     values.tableFeeldValueID = 6;
//     values.cardID = cardId;
//     setLoading(true);
//     try {
//       const response = await services.tableDataFeeld(values);
//       console.log("API response:", response);

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
//       alert("Troubleshooting Tips data create successfully");
//       window.location.reload();
//       setLoading(false);
//     }
//   };

//   const handleUploadClick = () => {
//     fileInputField.current.click();
//   };

//   const fileInputField = useRef(null);

//   const handleUpload = (e, setFiledValue) => {
//     const { files: newFiles } = e.target;
//     if (newFiles.length) {
//       setFiledValue("profile_TrobleShooting", newFiles[0]);
//       setUrl(URL.createObjectURL(newFiles[0]));
//     }
//   };

//   const [url, setUrl] = useState(null);

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

// {showError ? (
//         <img
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
//             {({ isSubmitting, setFieldValue, values, handleChange }) => (
//               <Form>
//                 <Grid item xs={12} sm={12} md={12}>
//                   <Card
//                     sx={{ borderRadius: 6 }}
//                     style={{ padding: "16px", marginBottom: "20px" }}
//                     elevation={10}
//                   >
//                     <Grid item margin={4}>
//                       <ModifiedTextField
//                         name="troubleshootingTips_ServiceName"
//                         label="Service Name"
//                         value={values.troubleshootingTips_ServiceName}
//                         onChange={handleChange}
//                         placeholder="Enter Service Name"
//                         fullWidth
//                       />
//                       <br />
//                       <ModifiedTextField
//                         name="troubleshootingTips_issueDiscription"
//                         label="Issue Discription"
//                         value={values.troubleshootingTips_issueDiscription}
//                         onChange={handleChange}
//                         placeholder="Enter issue Discription"
//                         fullWidth
//                       />
//                       <br />
//                       <ModifiedTextField
//                         name="troubleshootingTips_resolvingProcedure"
//                         label="resolving Procedure"
//                         value={values.troubleshootingTips_resolvingProcedure}
//                         onChange={handleChange}
//                         placeholder="Enter Resolving Procedure"
//                         fullWidth
//                       />
//                       <br />
//                       <br />

//                       <Button
//                         variant="outlined"
//                         onClick={handleUploadClick}
//                         sx={{
//                           paddingLeft: 5,
//                           paddingRight: 5,
//                           paddingTop: 1.5,
//                           paddingBottom: 1.5,
//                         }}
//                       >
//                         Upload File
//                       </Button>
//                       <input
//                         type="file"
//                         accept=".png,.pdf,.jpg"
//                         ref={fileInputField}
//                         onChange={(e) => handleUpload(e, setFieldValue)}
//                         title=""
//                         value=""
//                         style={{ display: "block", opacity: 0, width: 0 }}
//                       />
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
