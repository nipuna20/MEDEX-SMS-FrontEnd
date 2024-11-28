// import { Formik, Form, ErrorMessage, Field } from "formik";
// import React, { useEffect, useRef, useState } from "react";
// import {
//   Box,
//   Button,
//   Card,
//   FormControl,
//   Grid,
//   InputLabel,
//   MenuItem,
//   Paper,
//   Select,
//   Typography,
// } from "@mui/material";
// import TextField from "@mui/material/TextField";
// import { services } from "../Services/services";
// import { Padding } from "@mui/icons-material";
// import { useParams } from "react-router-dom";
// import { ModifiedTextField } from "../Theam/Theam";
// import ContactPageIcon from "@mui/icons-material/ContactPage";
// import Loade from "../componant/Loader";
// import { table } from "../componant/SignIn";

// export default function Documentation() {
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
//               checkDetail.tableFeeldValueID == 5 &&
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
//         alert("Documentation data Row Delete successfully");
//         window.location.reload();
//       } else {
//         console.log("delet row respons error");
//       }
//     });
//   };

//   console.log("check responssssssssaaaaaaaaaaaa", detail);

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
//   ///Edit Show
//   const [showEditForm, setShowEditForm] = useState(false);
//   const [tableID, setTableID] = useState(null);

//   const handleEditButtonClick = (tableID) => {
//     console.log("values is : ", tableID);
//     setTableID(tableID);
//     setShowEditForm(true);
//   };
//   const handleEditBackButtonClick = () => {
//     setShowEditForm(false);
//   };

//   ///Display Show
//   const [showIframe, setShowIframe] = useState(false);
//   const [displayTableID, setDisplayTableID] = useState(null);

//   const handleShowIframe = (tableID) => {
//     console.log("values is the display : ", tableID);
//     setDisplayTableID(tableID);
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
//                 documentation_documentTitle: item.documentation_documentTitle,
//                 documentation_documentType: item.documentation_documentType,
//                 profile: {},
//                 documentation_discription: item.documentation_discription,
//               }}
//               onSubmit={(values, { setSubmitting }) => {
//                 const updateValues = { ...values, tableID: item.tableID };
//                 handleUpdatingRow(updateValues);
//                 setSubmitting(false);
//               }}
//               // onSubmit={handleUpdatingRow}
//               // onSubmit={(values)=>{console.log("values :", values)}}
//             >
//               {({ isSubmitting, values, setFieldValue, handleChange }) => (
//                 <Form>
//                   <Grid item margin={4}>
//                     <Grid align={"left"}>
//                       <ModifiedTextField
//                         name="documentation_documentTitle"
//                         label="Document Title"
//                         value={values.documentation_documentTitle}
//                         onChange={handleChange}
//                         placeholder="Enter Document Title"
//                         fullWidth
//                       />
//                       <br />

//                       {/* <ModifiedTextField
//                         name="db_dbIPServerIP"
//                         label="Server IP"
//                         value={values.db_dbIPServerIP}
//                         onChange={handleChange}
//                         placeholder="Enter Server IP "
//                         fullWidth
//                       /> */}

//                       <Box sx={{ minWidth: 120 }}>
//                         <FormControl
//                           fullWidth
//                           sx={{ borderRadius: 100, borderColor: "blue" }}
//                         >
//                           <InputLabel id="documentation_documentType">
//                             DocumentType
//                           </InputLabel>
//                           <Select
//                             labelId="documentation_documentType"
//                             name="documentation_documentType"
//                             value={values.documentation_documentType}
//                             label="Document Type"
//                             onChange={handleChange}
//                           >
//                             <MenuItem value={0}>API</MenuItem>
//                             <MenuItem value={1}>Manual</MenuItem>
//                           </Select>
//                         </FormControl>
//                       </Box>

//                       <br />

//                       <ModifiedTextField
//                         name="documentation_discription"
//                         label="Discription"
//                         value={values.documentation_discription}
//                         onChange={handleChange}
//                         placeholder="Enter Documentation Discription"
//                         fullWidth
//                       />
//                     </Grid>
//                     <br />

//                     {/* <ModifiedTextField
//                         name="db_discription"
//                         label="Discription"
//                         value={values.db_discription}
//                         onChange={handleChange}
//                         placeholder="Enter Discription "
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
//                       accept=".png,.pdf,.jpg"
//                       ref={fileInputField}
//                       onChange={(e) => handleUpload(e, setFieldValue)}
//                       title=""
//                       value=""
//                       style={{ display: "block", opacity: 0, width: 0 }}
//                     />
//                   </Grid>
//                   <Button
//                     type="submit"
//                     disabled={isSubmitting}
//                     variant="contained"
//                     sx={{
//                       flexDirection: "column",
//                       justifyContent: "center",
//                       textAlign: "center",
//                       margin: "auto",
//                       borderRadius: 3,
//                     }}
//                   >
//                     Submit
//                   </Button>
//                 </Form>
//               )}
//             </Formik>
//             {loading && <Loade />}
//           </>
//         ) : (
//           <>
//             <Grid align={"left"}>
//               <Typography>
//                 <b>DocumentTitle &nbsp;&nbsp; : &nbsp; </b>
//                 {item.documentation_documentTitle}
//               </Typography>
//               <br />
//               <Typography>
//                 <b>DocumentType &nbsp; : &nbsp;</b>
//                 {item.documentation_documentType ? "Manual" : "API"}
//               </Typography>
//               <br />
//               <Typography>
//                 <b>
//                   {" "}
//                   Discription &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                   :&nbsp;
//                 </b>
//                 {item.documentation_discription}
//               </Typography>
//               <br />
//               <Typography>
//                 <b>
//                   FileUpload &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :
//                   &nbsp;
//                 </b>

//                 {item.documentation_fileUpload && (
//                   <>
//                     {/* && displayTableID==item.tableID */}
//                     {console.log("check for the value 01 : ", displayTableID)}
//                     {console.log("check for the value 02 :", item.tableID)}
//                     {!showIframe ? (
//                       <Button
//                         // onClick={() =>
//                         //   IframeComponent(item.documentation_fileUpload)
//                         // }
//                         onClick={() => handleShowIframe(item.tableID)}
//                         // onClick={() => handleEditButtonClick(item.tableID)}
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
//                           src={`http://localhost:3000/image/${item.documentation_fileUpload}`}
//                           frameBorder="0"
//                           allowFullScreen
//                         ></iframe>
//                       </>
//                     )}
//                   </>
//                 )}

//                 {/* <ContactPageIcon/>&nbsp; */}
//                 {/* { {item.documentation_fileUpload} && <ContactPageIcon/>} */}
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
//     documentation_documentTitle: "",
//     documentation_documentType: 0,
//     profile: {},
//     documentation_discription: "",
//   };

//   const handleCreatingRow = async (values, { setSubmitting }) => {
//     console.log("Values before API call:", values);
//     values.tableFeeldValueID = 5;
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
//       alert("Documentation data create successfully");
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
//       setFiledValue("profile", newFiles[0]);
//       setUrl(URL.createObjectURL(newFiles[0]));
//     }
//   };

//   const [url, setUrl] = useState(null);
//   // const [age, setAge] = React.useState("");

//   // const handleChange = (event) => {
//   //   setAge(event.target.value);
//   // };

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
//       {showError ? (
//         <img
//           src="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-2506.jpg?w=900&t=st=1694405711~exp=1694406311~hmac=c82523df6ca43ec5e98d8efda0809b3d8959bbb90c7be5f28af065d38a772ac8"
//           width="300"
//           height="150"
//         />
//       ) : (
//         <Grid container margin={2}>
//           {detail.map((card, key) => cardData(card, key))}
//           {loading && <Loade />}
//         </Grid>
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
//                         name="documentation_documentTitle"
//                         label="DocumentTitle"
//                         value={values.documentation_documentTitle}
//                         onChange={handleChange}
//                         placeholder="Enter DocumentTitle"
//                         fullWidth
//                       />
//                       <br />

//                       <Box sx={{ minWidth: 120 }}>
//                         <FormControl
//                           fullWidth
//                           sx={{ borderRadius: 100, borderColor: "blue" }}
//                         >
//                           <InputLabel id="documentation_documentType">
//                             DocumentType
//                           </InputLabel>
//                           <Select
//                             labelId="documentation_documentType"
//                             name="documentation_documentType"
//                             value={values.documentation_documentType}
//                             label="Document Type"
//                             onChange={handleChange}
//                           >
//                             <MenuItem value={0}>API</MenuItem>
//                             <MenuItem value={1}>Manual</MenuItem>
//                           </Select>
//                         </FormControl>
//                       </Box>

//                       <ModifiedTextField
//                         name="documentation_discription"
//                         label="Discription"
//                         value={values.documentation_discription}
//                         onChange={handleChange}
//                         placeholder="Enter Documentation Discription"
//                         fullWidth
//                       />
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
