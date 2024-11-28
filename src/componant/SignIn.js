import api from "./interceptor";

//////new////
export const newUser = (formData) => {
  let postData = {
    email: formData.username,
    password: formData.password,
  };
  return api.post("/api/v1/users/User/adminLogin", postData);
};

export const Courses = () => {
  return api.get("/api/v1/users/course");
};

////create new course
export const createNewCourse = (formData) => {
  console.log("sample course is", formData);

  const jsonData = {
    CourseName: formData.CourseName,
    CourseDuration: formData.CourseDuration,
    FullPayment: formData.FullPayment,
    InstallmentWise: formData.InstallmentWise,
    FirstPayment: formData.FirstPayment,
    RegistrationFee: formData.RegistrationFee,
    OtherDetails: formData.OtherDetails,
  };

  console.log("JSON data sample is:", jsonData);

  return api.post("/api/v1/users/course/save", jsonData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

////// Update

export const updateCourse = (formData, _id) => {
  console.log("Updating course with ID:", _id);
  console.log("sample course is", formData);

  const jsonData = {
    CourseName: formData.CourseName,
    CourseDuration: formData.CourseDuration,
    FullPayment: formData.FullPayment,
    InstallmentWise: formData.InstallmentWise,
    FirstPayment: formData.FirstPayment,
    RegistrationFee: formData.RegistrationFee,
    OtherDetails: formData.OtherDetails,
  };

  console.log("JSON data sample is:", jsonData);

  return api.put("/api/v1/users/course/update", jsonData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

///         delete
export const deleteCourse = (formData) => {
  console.log("sample employment type is", formData);

  const jsonData = {
    _id: formData,
  };

  console.log(
    "JSON data sample is:",
    `/api/v1/users/course/delete/${formData}`
  );

  return api.delete(`/api/v1/users/course/delete/${formData}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

////create new user
export const createNewUser = (formData) => {
  console.log("sample course is", formData);

  const jsonData = {
    email: formData.username,
    password: formData.password,
  };

  console.log("JSON data sample is:", jsonData);

  return api.post("/api/v1/users/AdminUserCreation", jsonData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};


/////////////////////////////////////////////////////////////////
////create new Zoom Subject
export const createNewZoomSubject = (formData) => {
  console.log("sample course is", formData);

  const jsonData = {
    subject: formData.subject,
  };

  console.log("JSON data sample is:", jsonData);

  return api.post("/api/v1/users/OnlineSessions/zoom", jsonData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

////create new Zoom Link Using Update Subject
export const createNewZoomLink = (formData) => {
  console.log("sample course is", formData);

  const jsonData = {
    title: formData.title,
    url: formData.url,
    description: formData.description,
    // id:formData.cardId
  };
  

  console.log("JSON data sample is:", jsonData);
  console.log("JSON data sample is ----:", formData.cardId);
  // console.log("JSON data sample is ---1111-:", `/api/v1/users/OnlineSessions/zoom/${formData.cardId}`);
  

  return api.post(`/api/v1/users/OnlineSessions/zoomLink/${formData.cardId}`, jsonData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  

  
};
//////get zoom links
export const ZoomLinks = () => {
  return api.get("/api/v1/users/OnlineSessions/zoom");
};

/////////////////////////////////////////////////////////////////6745ea9df06793442ed80457
//////get zoom Recordings
export const ZoomRecordings = () => {
  return api.get("/api/v1/users/OnlineRecordings/zoom");
};

////create new recording Link Using Update Subject
export const createNewRecordingLink = (formData) => {
  console.log("sample course is", formData);

  const jsonData = {
    title: formData.title,
    url: formData.url,
    description: formData.description,
    // id:formData.cardId
  };
  

  console.log("JSON data sample is:", jsonData);
  console.log("JSON data sample is ----:", formData.cardId);
  // console.log("JSON data sample is ---1111-:", `/api/v1/users/OnlineSessions/zoom/${formData.cardId}`);
  

  return api.post(`/api/v1/users/OnlineSessions/zoomRecording/${formData.cardId}`, jsonData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  

  
};


/////////////////////////////////////////////////////////////////////6745ea9df06793442ed80457

////employee////

export const Employee = () => {
  return api.get("/api/v1/users/getEmployeeData");
};
/////
export const creatNewEmployee = (formData) => {
  console.log("sample employment type is", formData);

  const jsonData = {
    EmpID: formData.EmpID,
    FName: formData.FName,
    LName: formData.LName,
    HomeCnt: formData.HomeCnt,
    PersonalCnt: formData.PersonalCnt,
    Address: formData.Address,
    WorkEmail: formData.WorkEmail,
    NIC: formData.NIC,
    JobPosition: formData.JobPosition.JobTitle,
    EmploymentType: formData.EmploymentType,
    EmpDate: formData.EmpDate,
    FinalDate: formData.FinalDate,
    Location: formData.Location,
    Manager: formData.Manager,
    WorkCnt: formData.WorkCnt,
  };

  console.log("JSON data sample is:", jsonData);

  return api.post("/api/v1/users/createEmployee", jsonData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
///         delete
export const deleteEmployee = (formData) => {
  console.log("sample employment type is", formData);

  const jsonData = {
    EmpID: formData,
  };

  console.log("JSON data sample is:", jsonData);

  return api.post("/api/v1/users/EmployeeDataDelete", jsonData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
///         update
export const UpdateEmployee = (formData) => {
  console.log("sample employment type is", formData);

  const jsonData = {
    EmpID: formData.EmpID,
    FName: formData.FName,
    LName: formData.LName,
    HomeCnt: formData.HomeCnt,
    PersonalCnt: formData.PersonalCnt,
    Address: formData.Address,
    WorkEmail: formData.WorkEmail,
    NIC: formData.NIC,
    JobPosition: formData.JobPosition.JobTitle,
    EmploymentType: formData.EmploymentType,
    EmpDate: formData.EmpDate,
    FinalDate: formData.FinalDate,
    Location: formData.Location,
    Manager: formData.Manager,
    WorkCnt: formData.WorkCnt,
  };

  console.log("JSON data sample is:", jsonData);

  return api.post("/api/v1/users/EmployeeDataUpdate", jsonData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

////employee type/////
///          get
export const employeeType = () => {
  return api.get("/api/v1/users/getEmploymentTypeData");
};

///         post
export const createNewEmploymentType = (formData) => {
  console.log("sample employment type is", formData);

  const jsonData = {
    EmploymentType: formData.EmploymentType,
    // EmploymentTypeID: formData.EmploymentTypeID,
  };

  console.log("JSON data sample is:", jsonData);

  return api.post("/api/v1/users/EmploymentTypeData", jsonData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
///         delete
export const deleteEmploymentType = (formData) => {
  console.log("sample employment type is", formData);

  const jsonData = {
    EmploymentTypeID: formData,
  };

  console.log("JSON data sample is:", jsonData);

  return api.post("/api/v1/users/EmployeTypeDataDelete", jsonData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
///         update
export const UpdateEmploymentType = (formData) => {
  console.log("sample employment type is", formData);

  const jsonData = {
    EmploymentTypeTableID: formData.EmploymentTypeTableID,
    EmploymentTypeID: formData.EmploymentTypeID,
    EmploymentType: formData.EmploymentType,
  };

  console.log("JSON data sample is:", jsonData);

  return api.post("/api/v1/users/EmploymentTypeDataUpdate", jsonData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

////department/////

export const employeeDepartment = () => {
  return api.get("/api/v1/users/getDepartmentData");
};

export const createNewDepartment = (formData) => {
  console.log("sample employment type is", formData);

  const jsonData = {
    // departmentID: formData.departmentID,
    department: formData.department,
  };

  console.log("JSON data sample is:", jsonData);

  return api.post("/api/v1/users/createDepartment", jsonData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
///         delete

export const deleteDepartment = (formData) => {
  console.log("sample employment type is", formData);

  const jsonData = {
    departmentID: formData,
  };

  console.log("JSON data sample is:", jsonData);

  return api.post("/api/v1/users/DepartmentDataDelete", jsonData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
///         update
export const UpdateDepartment = (formData) => {
  console.log("sample department type is", formData);

  const jsonData = {
    // departmentTableID: formData.departmentTableID,
    departmentID: formData.departmentID,
    department: formData.department,
  };

  console.log("JSON data sample is:", jsonData);

  return api.post("/api/v1/users/DepartmentDataUpdate", jsonData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

///work location///

export const employeeWorkLocation = () => {
  return api.get("/api/v1/users/getWorkingLocation");
};

export const createNewWorkLocation = (formData) => {
  console.log("sample employment type is", formData);

  const jsonData = {
    // workingLocationID: formData.workingLocationID,
    workingLocation: formData.workingLocation,
  };

  console.log("JSON data sample is:", jsonData);

  return api.post("/api/v1/users/createWorkingLocation", jsonData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
///         delete

export const deleteWorkLocationt = (formData) => {
  console.log("sample employment type is", formData);

  const jsonData = {
    workingLocationID: formData,
  };

  console.log("JSON data sample is:", jsonData);

  return api.post("/api/v1/users/WorkLocationDataDelete", jsonData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
///         update
export const UpdateworkingLocation = (formData) => {
  console.log("sample work location type is", formData);

  const jsonData = {
    // workingLocationTableID: formData.workingLocationTableID,
    workingLocationID: formData.workingLocationID,
    workingLocation: formData.workingLocation,
  };

  console.log("JSON data sample is:", jsonData);

  return api.post("/api/v1/users/WorkLocationDataUpdate", jsonData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

///job position///

export const employeeJobPosition = () => {
  return api.get("/api/v1/users/getJobPositionData");
};

export const createNewJobPosition = (formData) => {
  console.log("sample employment type is", formData);

  const jsonData = {
    // JobPositionID: formData.JobPositionID,
    JobTitle: formData.JobTitle,
    DepartmentName: formData.DepartmentName,
    NumberOfEmployees: formData.NumberOfEmployees,
    Reporting: formData.Reporting,
  };

  console.log("JSON data sample is:", jsonData);

  return api.post("/api/v1/users/createJobPosition", jsonData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

///         delete

export const deleteJobPosition = (formData) => {
  console.log("sample employment type is", formData);

  const jsonData = {
    JobPositionID: formData,
  };

  console.log("JSON data sample is:", jsonData);

  return api.post("/api/v1/users/JobPositionDataDelete", jsonData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
///         update

export const UpdateJobPosition = (formData) => {
  console.log("sample employment type is", formData);

  const jsonData = {
    JobPositionID: formData.JobPositionID,
    JobTitle: formData.JobTitle,
    DepartmentName: formData.DepartmentName,
    NumberOfEmployees: formData.NumberOfEmployees,
    Reporting: formData.Reporting,
  };

  console.log("JSON data sample is:", jsonData);

  return api.post("/api/v1/users/JobPositionDataUpdate", jsonData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

///departur reson///

export const employeeDeparture = () => {
  return api.get("/api/v1/users/getDepartureEmployeeData");
};

export const createNewDeparture = (formData) => {
  console.log("sample employment type is", formData);

  const jsonData = {
    // EmpID: formData.EmpID,
    DepartureReason: formData.DepartureReason,
  };

  console.log("JSON data sample is:", jsonData);

  return api.post("/api/v1/users/createDepartureEmployee", jsonData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

///         delete

export const deleteDepartureEmployee = (formData) => {
  console.log("sample employment type is", formData);

  const jsonData = {
    DepartureReasonID: formData,
  };

  console.log("JSON data sample is:", jsonData);

  return api.post("/api/v1/users/DepartureReasonDataDelete", jsonData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

///         update

export const UpdateDepartureReson = (formData) => {
  console.log("sample employment type is", formData);

  const jsonData = {
    DepartureReasonID: formData.DepartureReasonID,
    DepartureReason: formData.DepartureReason,
  };

  console.log("JSON data sample is:", jsonData);

  return api.post("/api/v1/users/DepartureReasonDataUpdate", jsonData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

///saslary///

export const employeeSalary = () => {
  return api.get("/api/v1/users/getSalary");
};

export const createNewSalary = (formData) => {
  console.log("sample employment type is", formData);

  const jsonData = {
    // AllowanceID: formData.AllowanceID,
    EmpID: formData.EmpID,
    EmpName: formData.EmpName,
    BasicSalary: formData.BasicSalary,
    allEmpAllowance: formData.allEmpAllowance,
  };

  console.log("JSON data sample is:", jsonData);

  return api.post("/api/v1/users/createSalary", jsonData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
///         delete

export const deleteSalary = (formData) => {
  console.log("sample employment type is", formData);

  const jsonData = {
    EmpID: formData,
  };

  console.log("JSON data sample is:", jsonData);

  return api.post("/api/v1/users/SalaryDataDelete", jsonData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
///         update

export const UpdateSalary = (formData) => {
  console.log("sample employment type is", formData);

  const jsonData = {
    EmpID: formData.EmpID,
    EmpName: formData.EmpName,
    BasicSalary: formData.BasicSalary,
    allEmpAllowance: formData.allEmpAllowance,
  };

  console.log("JSON data sample is:", jsonData);

  return api.post("/api/v1/users/SalaryDataUpdate", jsonData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

///allowance///

export const employeeAllowance = () => {
  return api.get("/api/v1/users/getAllowance");
};

export const createNewAllowance = (formData) => {
  console.log("sample employment type is", formData);

  const jsonData = {
    // AllowanceID: formData.AllowanceID,
    AllowanceName: formData.AllowanceName,
    AllowanceAmount: formData.AllowanceAmount,
  };

  console.log("JSON data sample is:", jsonData);

  return api.post("/api/v1/users/createAllowance", jsonData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

///         delete

export const deleteAllowance = (formData) => {
  console.log("sample employment type is", formData);

  const jsonData = {
    AllowanceID: formData,
  };

  console.log("JSON data sample is:", jsonData);

  return api.post("/api/v1/users/AllowanceDataDelete", jsonData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
///         update

export const UpdateAllowance = (formData) => {
  console.log("sample employment type is", formData);

  const jsonData = {
    AllowanceID: formData.AllowanceID,
    AllowanceName: formData.AllowanceName,
    AllowanceAmount: formData.AllowanceAmount,
  };

  console.log("JSON data sample is:", jsonData);

  return api.post("/api/v1/users/AllowanceDataUpdate", jsonData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

/// SalarySlipOne

export const SalarySlipOne = (formData) => {
  console.log("sample employment type is", formData);

  // const jsonData = {
  //   EmpID: formData.EmpID
  // };

  console.log("JSON data sample is value is :", formData.EmpID);

  return api.get(`/api/v1/users/SalarySlipOneData?EmpID=${formData.EmpID}`);
};

/// SalarySlipOne

export const SalarySlipTwo = (formData) => {
  console.log("sample employment type is", formData);

  // const jsonData = {
  //   EmpID: formData.EmpID
  // };

  console.log("JSON data sample is value is :", formData.EmpID);

  return api.get(`/api/v1/users/SalarySlipTwoData?EmpID=${formData.EmpID}`);
};

//////// old ///////

export const handleLogin = (formData) => {
  let postData = {
    email: formData.username,
    password: formData.password,
  };
  return api.post("/api/v1/users", postData);
};

export const addCard = (formData) => {
  console.log("form data ia a", formData);
  let postData = new FormData();
  postData.append("image", formData.profile);
  postData.append("cardName", formData.cardName);
  postData.append("cardDetails", formData.cardDetails);

  return api.post("/api/v1/users/createCard", postData);
};

export const cards = () => {
  return api.get("/api/v1/users/cardData");
};

///table data create
export const table = (formData) => {
  console.log(
    "successaaaaaaaaaaaaaaaaaaaa in check 11111111111111111",
    formData
  );
  let postData = new FormData();
  postData.append("service", formData.service);
  postData.append("serverIp", formData.serverIp);
  postData.append("serverParth", formData.serverParth);
  postData.append("discription", formData.discription);
  postData.append("services_serviceName", formData.services_serviceName);
  postData.append("services_serverIP", formData.services_serverIP);
  postData.append("services_serverPath", formData.services_serverPath);
  postData.append(
    "services_relatedCommands",
    formData.services_relatedCommands
  );
  postData.append("scripts_location", formData.scripts_location);
  postData.append("scripts_serverIP", formData.scripts_serverIP);
  postData.append("scripts_uploadFile", formData.scripts_uploadFile);
  postData.append("scripts_discription", formData.scripts_discription);
  postData.append("db_dbName", formData.db_dbName);
  postData.append("db_dbIPServerIP", formData.db_dbIPServerIP);
  postData.append("db_backupLocation", formData.db_backupLocation);
  postData.append("db_discription", formData.db_discription);
  postData.append(
    "documentation_documentTitle",
    formData.documentation_documentTitle
  );
  postData.append(
    "documentation_documentType",
    formData.documentation_documentType
  );
  // postData.append("documentation_fileUpload", formData.documentation_fileUpload);
  postData.append("documentation_fileUpload", formData.profile);
  postData.append(
    "documentation_discription",
    formData.documentation_discription
  );
  postData.append(
    "troubleshootingTips_ServiceName",
    formData.troubleshootingTips_ServiceName
  );
  postData.append(
    "troubleshootingTips_issueDiscription",
    formData.troubleshootingTips_issueDiscription
  );
  postData.append(
    "troubleshootingTips_resolvingProcedure",
    formData.troubleshootingTips_resolvingProcedure
  );
  postData.append(
    "troubleshootingTips_fileUpload",
    formData.profile_TrobleShooting
  );
  postData.append("cardID", formData.cardID);
  postData.append("tableFeeldValueID", formData.tableFeeldValueID);
  console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaa", postData);

  return api.post("/api/v1/users/tableData", postData);
};

///get table data
export const tableDetail = () => {
  return api.get("/api/v1/users/getTableData");
};

///table data delete
export const tableRowDelete = (formData) => {
  console.log("form data is a", formData);
  let postData = {
    ID: formData,
  };
  // postData.append("tableID", formData);
  console.log("post data is a ", postData);

  return api.delete("/api/v1/users/course/delete/", postData);
};

///update table data
export const tableRowUpdate = (formData) => {
  console.log("Updated form data is :", formData);
  let postData = new FormData();
  postData.append("tableID", formData.tableID);
  postData.append("service", formData.service);
  postData.append("serverIp", formData.serverIp);
  postData.append("serverParth", formData.serverParth);
  postData.append("discription", formData.discription);
  postData.append("services_serviceName", formData.services_serviceName);
  postData.append("services_serverIP", formData.services_serverIP);
  postData.append("services_serverPath", formData.services_serverPath);
  postData.append(
    "services_relatedCommands",
    formData.services_relatedCommands
  );
  postData.append("scripts_location", formData.scripts_location);
  postData.append("scripts_serverIP", formData.scripts_serverIP);
  postData.append("scripts_uploadFile", formData.scripts_uploadFile);
  postData.append("scripts_discription", formData.scripts_discription);
  postData.append("db_dbName", formData.db_dbName);
  postData.append("db_dbIPServerIP", formData.db_dbIPServerIP);
  postData.append("db_backupLocation", formData.db_backupLocation);
  postData.append("db_discription", formData.db_discription);
  postData.append(
    "documentation_documentTitle",
    formData.documentation_documentTitle
  );
  postData.append(
    "documentation_documentType",
    formData.documentation_documentType
  );
  // postData.append("documentation_fileUpload", formData.documentation_fileUpload);
  postData.append("documentation_fileUpload", formData.profile);
  postData.append(
    "documentation_discription",
    formData.documentation_discription
  );
  postData.append(
    "troubleshootingTips_ServiceName",
    formData.troubleshootingTips_ServiceName
  );
  postData.append(
    "troubleshootingTips_issueDiscription",
    formData.troubleshootingTips_issueDiscription
  );
  postData.append(
    "troubleshootingTips_resolvingProcedure",
    formData.troubleshootingTips_resolvingProcedure
  );
  postData.append(
    "troubleshootingTips_fileUpload",
    formData.profile_TrobleShooting
  );
  postData.append("cardID", formData.cardID);
  postData.append("tableFeeldValueID", formData.tableFeeldValueID);

  console.log("Updated post data is a ", postData);

  return api.post("/api/v1/users/TableDataUpdate", postData);
};
