// import { Formik, Form, ErrorMessage, Field } from "formik";
// import React, { useEffect, useRef, useState } from "react";
// import { Button, Card, Grid, Paper, Typography } from "@mui/material";
// import { services } from "../Services/services";
// import { useParams } from "react-router-dom";
// import { ModifiedTextField } from "../Theam/Theam";
// import Loade from "../componant/Loader";

// export default function Scripts() {
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
//               checkDetail.tableFeeldValueID == 3 &&
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
//     // setLoading(true);
//     services.tableDataDelete(values).then((response) => {
//       if (response.isSuccess) {
//         console.log("check table data delete ", values);
//         alert("Script data Row Delete successfully");
//         window.location.reload();
//       } else {
//         console.log("delet row respons error");
//       }
//       // setLoading(false);
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

//   ///showr Edit form
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

//   ///iframe////
//   const [showIframe, setShowIframe] = useState(false);
//   const [displaytableID, setDisplaytableIDTableID] = useState(null);

//   const handleShowIframe = (tableID) => {
//     console.log("card id is a : ",tableID)
//     setDisplaytableIDTableID(tableID)
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
//                 scripts_location: item.scripts_location,
//                 scripts_serverIP: item.scripts_serverIP,
//                 scripts_uploadFile: {},
//                 scripts_discription: item.scripts_discription,
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
//                       name="scripts_location"
//                       label="Location"
//                       value={values.scripts_location}
//                       onChange={handleChange}
//                       placeholder="Enter Scripts Location"
//                       fullWidth
//                     />
//                     <br />

//                     <ModifiedTextField
//                       name="scripts_serverIP"
//                       label="Server IP"
//                       value={values.scripts_serverIP}
//                       onChange={handleChange}
//                       placeholder="Enter Server IP "
//                       fullWidth
//                     />
//                     <br />
//                     <ModifiedTextField
//                       name="scripts_discription"
//                       label="Discription"
//                       value={values.scripts_discription}
//                       onChange={handleChange}
//                       placeholder="Enter Discription "
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
//                 Location &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &nbsp;
//                 {item.scripts_location}
//               </Typography>
//               <br />
//               <Typography>
//                 ServerIP &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &nbsp;
//                 {item.scripts_serverIP}
//               </Typography>
//               <br />

//               <Typography>
//                 Discription &nbsp;&nbsp; : &nbsp;
//                 {item.scripts_discription}
//               </Typography>
//               <br />
//               <Typography>
//                 {/* {item.scripts_uploadFile} */}
//                 {item.scripts_uploadFile && (
//                   <>
//                     Upload File &nbsp; : &nbsp;
                    
//                     {/* {!showIframe && displaytableID == item.tableID ? ( */}
//                        {!showIframe ? (
                      
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
//                           src={`http://localhost:3000/image/${item.scripts_uploadFile}`}
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
//     scripts_location: "",
//     scripts_serverIP: "",
//     scripts_uploadFile: {},
//     scripts_discription: "",
//   };

//   // const handleSubmit = (values, { setSubmitting }) => {
//   //   // Handle form submission logic here (e.g., API call)
//   //   console.log(values);
//   //   setSubmitting(false);
//   // };

//   const handleCreatingRow = async (values, { setSubmitting }) => {
//     console.log("Values before API call:", values);
//     values.tableFeeldValueID = 3;
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
//       alert("Script data create successfully");
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
//       setFiledValue("scripts_uploadFile", newFiles[0]);
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
//                         name="scripts_location"
//                         label="Location"
//                         value={values.scripts_location}
//                         onChange={handleChange}
//                         placeholder="Enter Location"
//                         fullWidth
//                       />

//                       <ModifiedTextField
//                         name="scripts_serverIP"
//                         label="Server IP"
//                         value={values.scripts_serverIP}
//                         onChange={handleChange}
//                         placeholder="Enter Server IP"
//                         fullWidth
//                       />
//                       <br />
//                       <ModifiedTextField
//                         name="scripts_discription"
//                         label="Discription"
//                         value={values.scripts_discription}
//                         onChange={handleChange}
//                         placeholder="Enter Discription"
//                         fullWidth
//                       />
//                       <br />

//                       {/* <div>
//                   <label htmlFor="scripts_location">
//                     Location &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                   </label>
//                   <Field
//                     type="text"
//                     id="scripts_location"
//                     name="scripts_location"
//                   />
//                   <ErrorMessage name="scripts_location" component="div" />
//                 </div>
//                 <div>
//                   <label htmlFor="scripts_serverIP">
//                     ServerIP &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                   </label>
//                   <Field
//                     type="text"
//                     id="scripts_serverIP"
//                     name="scripts_serverIP"
//                   />
//                   <ErrorMessage name="scripts_serverIP" component="div" />
//                 </div> */}

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
