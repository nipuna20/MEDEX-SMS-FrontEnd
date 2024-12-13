import * as api from "../componant/SignIn";

export const services = {
  employeeDetails,
  creatEmployee,
  deleteEmployee,
  updateEmployee,
  employeeTypeDetails,
  createEmployyeeType,
  deleteEmployyeeType,
  updateEmployyeeType,
  departmentDetails,
  createdepartment,
  deleteDepartment,
  updateDepartment,
  workLocationDetails,
  createWorkLocation,
  deleteWorkLocation,
  updateWorkLocation,
  jobpositionDetails,
  createJobPosition,
  deleteJobPosition,
  updateJobPosition,
  departureDetails,
  createdepartureReson,
  deletedepartureReson,
  updateDepartureReson,
  salaryDetails,
  createSalary,
  deleteSalary,
  updateSalary,
  allowanceDetails,
  createAllowance,
  deleteAllowance,
  updateAllowance,
  slipOneDetails,
  slipTwoDetails,
  cardCreat,
  cardDetails,
  tableDataFeeld,
  tableDataFeeldDetails,
  tableDataDelete,
  tableDataUpdate,
  CoursesData,
  createCourses,
  updateCourses,
  courseDataDelete,
  updateDataOfCourses,
  newUserLogin,
  updateUserPassword,
  userDelete,
  createNewUser,
  ZoomLinksData,
  createNewZoomSubject,
  zoomSubjectDelete,
  zoomLectureDelete,
  createNewZoomLink,
  ZoomRecordingsData,
  createNewZoomRecordingSubject,
  recordingSubjectDelete,
  recordingLectureDelete,
  createNewRecordingLink,
  lectureMaterialData,
  addPaidStudentInLectureMaterial,
  addMaterialsForCourse,
  createExamDetails,
  getExamDetails,
  updateExamDetails,
  deleteExamDetails,
  createNewPayment,
  paymentStudentData,
  paymentPlansData,
  createPaymentPlan,
  ResultsData,
  createExamSubject,
  createExamSubjectResult

};


// Service to add exam details
async function createExamDetails(formData) {
  try {
    const result = await api.addExam(formData); // Ensure `api.addExam` is defined in your API component
    return { isSuccess: true, result: result };
  } catch (error) {
    return { isSuccess: false, result: error };
  }
}

// Service to get all exam details
async function getExamDetails() {
  try {
    const { data } = await api.getExams(); // Ensure `api.getExams` is defined in your API component
    return { isSuccess: true, data: data };
  } catch (error) {
    return { isSuccess: false, result: error };
  }
}

// Service to update exam details
async function updateExamDetails(formData) {
  try {
    const result = await api.updateExam(formData); // Ensure `api.updateExam` is defined in your API component
    return { isSuccess: true, result: result };
  } catch (error) {
    return { isSuccess: false, result: error };
  }
}

// Service to delete exam details
async function deleteExamDetails(id) {
  try {
    const result = await api.deleteExam(id); // Ensure `api.deleteExam` is defined in your API component
    return { isSuccess: true, result: result };
  } catch (error) {
    return { isSuccess: false, result: error };
  }
}

////User login
async function newUserLogin(formData) {
  console.log("sssssssssssssssssssssssssssssss 111111111", formData)
  try {
    const result = await api.newUser(formData);
    console.log("API response:", result);
    console.log("sssssssssssssssssssssssssssssss")
    return { isSuccess: true, result: result };
  } catch (error) {
    return { isSuccess: false, result: error };
  }
}

////user password update 
async function updateUserPassword(formData) {
  try {
    const result = await api.UpdatePassword(formData);
    return { isSuccess: true, result: result };
  } catch (error) {
    return { isSuccess: false, result: error }
  }
}

////// user delete
async function userDelete(formData) {
  try {
    const { result } = await api.deleteUser(formData)
    return { isSuccess: true, result: result }
  } catch (error) {
    return { isSuccess: false, data: error };
  }
}

////Courses
async function CoursesData() {
  try {
    const { data } = await api.Courses();
    console.log("sampleeeeeee", data.CoursesData);
    return { isSuccess: true, data: data.CoursesData }
  } catch (error) {
    console.log(error)
  }
}


////create new course
async function createCourses(formData) {
  try {
    const result = await api.createNewCourse(formData);
    return { isSuccess: true, result: result };
  } catch (error) {
    return { isSuccess: false, result: error }
  }
}
////create new course
async function updateCourses(formData) {
  try {
    const result = await api.updateCourseData(formData);
    return { isSuccess: true, result: result };
  } catch (error) {
    return { isSuccess: false, result: error }
  }
}

///create new user
async function createNewUser(formData) {
  try {
    const result = await api.createNewUser(formData);
    return { isSuccess: true, result: result };
  } catch (error) {
    return { isSuccess: false, result: error }
  }
}


/////    Delet

async function courseDataDelete(formData) {
  try {
    const { result } = await api.deleteCourse(formData)
    return { isSuccess: true, result: result }
  } catch (error) {
    return { isSuccess: false, data: error };
  }
}


////// Update

async function updateDataOfCourses(formData, _id) {
  try {
    const result = await api.createNewCourse(formData);
    return { isSuccess: true, result: result };
  } catch (error) {
    return { isSuccess: false, result: error }
  }
}
///////
////create new Zoom Subject
async function createNewZoomSubject(formData) {
  try {
    const result = await api.createNewZoomSubject(formData);
    return { isSuccess: true, result: result };
  } catch (error) {
    return { isSuccess: false, result: error }
  }
}
/////    Delet zoom subject

async function zoomSubjectDelete(formData) {
  try {
    const { result } = await api.deleteZoomSubject(formData)
    return { isSuccess: true, result: result }
  } catch (error) {
    return { isSuccess: false, data: error };
  }
}
/////    Delete zoom lectur

async function zoomLectureDelete(formData) {
  try {
    const { result } = await api.deleteZoomLecture(formData)
    return { isSuccess: true, result: result }
  } catch (error) {
    return { isSuccess: false, data: error };
  }
}

////create new Zoom link using subject update
async function createNewZoomLink(formData) {
  console.log("check services form data", formData)
  try {
    console.log("createNewZoomLink in servicesform data befor ", formData)
    const result = await api.createNewZoomLink(formData);
    console.log("createNewZoomLink in servicesform data ", formData)
    return { isSuccess: true, result: result };
  } catch (error) {
    return { isSuccess: false, result: error }
  }
}


//////get zoom links

async function ZoomLinksData() {
  try {
    const { data } = await api.ZoomLinks();
    console.log("sampleeeeeee", data.CoursesData);
    return { isSuccess: true, data: data.CoursesData }
  } catch (error) {
    console.log(error)
  }
}
///////////////
////create new Recording Subject
async function createNewZoomRecordingSubject(formData) {
  try {
    const result = await api.createNewRecordingSubject(formData);
    return { isSuccess: true, result: result };
  } catch (error) {
    return { isSuccess: false, result: error }
  }
}

/////    Delet recording subject

async function recordingSubjectDelete(formData) {
  try {
    const { result } = await api.deleteRecordingSubject(formData)
    return { isSuccess: true, result: result }
  } catch (error) {
    return { isSuccess: false, data: error };
  }
}

/////    Delete recording lecture

async function recordingLectureDelete(formData) {
  try {
    const { result } = await api.deleteRecordingLecture(formData)
    return { isSuccess: true, result: result }
  } catch (error) {
    return { isSuccess: false, data: error };
  }
}

////create new Recording link using subject update
async function createNewRecordingLink(formData) {
  console.log("check services form data", formData)
  try {
    console.log("createNewZoomLink in servicesform data befor ", formData)
    const result = await api.createNewRecordingLink(formData);
    console.log("createNewZoomLink in servicesform data ", formData)
    return { isSuccess: true, result: result };
  } catch (error) {
    return { isSuccess: false, result: error }
  }
}
//////get zoom Recordings

async function ZoomRecordingsData() {
  try {
    const { data } = await api.ZoomRecordings();
    console.log("sampleeeeeee", data.CoursesData);
    return { isSuccess: true, data: data.CoursesData }
  } catch (error) {
    console.log(error)

  }
}
/////////////////////
///resources data get
async function lectureMaterialData() {
  try {
    const { data } = await api.lectureResources();
    console.log("sampleeeeeee", data.lectureMaterial);
    return { isSuccess: true, data: data.lectureMaterial }
  } catch (error) {
    console.log(error)
  }
}

////create new lecture material update resource data
async function addMaterialsForCourse(formData) {
  try {
    const result = await api.addLectureMaterialUpdatingResources(formData);
    return { isSuccess: true, result: result };
  } catch (error) {
    return { isSuccess: false, result: error };
  }
}

///// add new payed student for lecture material updating resources
async function addPaidStudentInLectureMaterial(formData) {
  try {
    const result = await api.addStudentInResources(formData);
    return { isSuccess: true, result: result };
  } catch (error) {
    return { isSuccess: false, result: error }
  }
}

/////////////////////////////////////////
/////////create new payment
async function createNewPayment(formData) {

  try {
    const result = await api.addNewPayment(formData);
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaassssssssssssssssssssssssssssss", formData)
    return { isSuccess: true, result: result };
  } catch (error) {
    return { isSuccess: false, result: error }
  }
}
//////////////Get Payment Plans
async function paymentPlansData() {
  try {
    const { data } = await api.paymentPlans();
    console.log("sampleeeeeee", data);
    return { isSuccess: true, data: data.CoursesData }
  } catch (error) {
    console.log(error)
  }
}

///////////////////////////////////
//////////////Get Payment Plans
async function paymentStudentData() {
  try {
    const { data } = await api.paidStudentData();
    console.log("sampleeeeeee", data);
    return { isSuccess: true, data: data.CoursesData }
  } catch (error) {
    console.log(error)
  }
}

//////////////create new payment plan
async function createPaymentPlan(formData) {
  try {
    const result = await api.createNewPaymentPlan(formData);
    return { isSuccess: true, result: result };
  } catch (error) {
    return { isSuccess: false, result: error }
  }
}
/////////////////////////////////////////////////////////////////////////////////
/////////////////////Result Data Get
async function ResultsData() {
  try {
    const { data } = await api.Result();
    console.log("sampleeeeeee", data.CoursesData);
    return { isSuccess: true, data: data.CoursesData }
  } catch (error) {
    console.log(error)
  }
}
//////////////////////// create Exam Subject
async function createExamSubject(formData) {
  try {
    const result = await api.createNewExamSubject(formData);
    return { isSuccess: true, result: result };
  } catch (error) {
    return { isSuccess: false, result: error }
  }
}

//////////////////////// create Exam Student result

async function createExamSubjectResult(formData) {
  try {
    const result = await api.createNewExamSubjectResult(formData);
    return { isSuccess: true, result: result };
  } catch (error) {
    return { isSuccess: false, result: error }
  }
}




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////
///employee///

async function employeeDetails() {
  try {
    const { data } = await api.Employee();
    console.log(data);
    return { isSuccess: true, data: data.data.empDetailDB }
  } catch (error) {
    console.log(error)
  }
}
async function creatEmployee(formData) {
  try {
    const result = await api.creatNewEmployee(formData);
    return { isSuccess: true, result: result };
  } catch (error) {
    return { isSuccess: false, result: error };
  }
}
async function deleteEmployee(formData) {
  try {
    const result = await api.deleteEmployee(formData);
    return { isSuccess: true, result: result };
  } catch (error) {
    return { isSuccess: false, result: error }
  }
}
async function updateEmployee(formData) {
  try {
    const result = await api.UpdateEmployee(formData);
    return { isSuccess: true, result: result };
  } catch (error) {
    return { isSuccess: false, result: error }
  }
}

///employee type///
async function employeeTypeDetails() {
  try {
    const { data } = await api.employeeType();
    console.log(data);
    return { isSuccess: true, data: data.data.empTypeInDB }
  } catch (error) {
    console.log(error)
  }
}
async function createEmployyeeType(formData) {
  try {
    const result = await api.createNewEmploymentType(formData);
    return { isSuccess: true, result: result };
  } catch (error) {
    return { isSuccess: false, result: error }
  }
}
async function deleteEmployyeeType(formData) {
  try {
    const result = await api.deleteEmploymentType(formData);
    return { isSuccess: true, result: result };
  } catch (error) {
    return { isSuccess: false, result: error }
  }
}
async function updateEmployyeeType(formData) {
  try {
    const result = await api.UpdateEmploymentType(formData);
    return { isSuccess: true, result: result };
  } catch (error) {
    return { isSuccess: false, result: error }
  }
}


///department///
async function departmentDetails() {
  try {
    const { data } = await api.employeeDepartment();
    console.log(data);
    return { isSuccess: true, data: data.data.empDepartmentInDB }
  } catch (error) {
    console.log(error)
  }
}

async function createdepartment(formData) {
  try {
    const result = await api.createNewDepartment(formData);
    return { isSuccess: true, result: result };
  } catch (error) {
    return { isSuccess: false, result: error }
  }
}
async function deleteDepartment(formData) {
  try {
    const result = await api.deleteDepartment(formData);
    return { isSuccess: true, result: result };
  } catch (error) {
    return { isSuccess: false, result: error }
  }
}
async function updateDepartment(formData) {
  try {
    const result = await api.UpdateDepartment(formData);
    return { isSuccess: true, result: result };
  } catch (error) {
    return { isSuccess: false, result: error }
  }
}

///work location///
async function workLocationDetails() {
  try {
    const { data } = await api.employeeWorkLocation();
    console.log(data);
    return { isSuccess: true, data: data.data.empWorkingLocationInDB }
  } catch (error) {
    console.log(error)
  }
}

async function createWorkLocation(formData) {
  try {
    const result = await api.createNewWorkLocation(formData);
    return { isSuccess: true, result: result };
  } catch (error) {
    return { isSuccess: false, result: error }
  }
}

async function deleteWorkLocation(formData) {
  try {
    const result = await api.deleteWorkLocationt(formData);
    return { isSuccess: true, result: result };
  } catch (error) {
    return { isSuccess: false, result: error }
  }
}

async function updateWorkLocation(formData) {
  try {
    const result = await api.UpdateworkingLocation(formData);
    return { isSuccess: true, result: result };
  } catch (error) {
    return { isSuccess: false, result: error }
  }
}


///job position///
async function jobpositionDetails() {
  try {
    const { data } = await api.employeeJobPosition();
    console.log(data);
    return { isSuccess: true, data: data.data.empJobPositionInDB }
  } catch (error) {
    console.log(error)
  }
}


async function createJobPosition(formData) {
  try {
    const result = await api.createNewJobPosition(formData);
    return { isSuccess: true, result: result };
  } catch (error) {
    return { isSuccess: false, result: error }
  }
}

async function deleteJobPosition(formData) {
  try {
    const result = await api.deleteJobPosition(formData);
    return { isSuccess: true, result: result };
  } catch (error) {
    return { isSuccess: false, result: error }
  }
}

async function updateJobPosition(formData) {
  try {
    const result = await api.UpdateJobPosition(formData);
    return { isSuccess: true, result: result };
  } catch (error) {
    return { isSuccess: false, result: error }
  }
}


///departure resone///
async function departureDetails() {
  try {
    const { data } = await api.employeeDeparture();
    console.log(data);
    return { isSuccess: true, data: data.data.departureEmployeeInDB }
  } catch (error) {
    console.log(error)
  }
}

async function createdepartureReson(formData) {
  try {
    const result = await api.createNewDeparture(formData);
    return { isSuccess: true, result: result };
  } catch (error) {
    return { isSuccess: false, result: error }
  }
}

async function deletedepartureReson(formData) {
  try {
    const result = await api.deleteDepartureEmployee(formData);
    return { isSuccess: true, result: result };
  } catch (error) {
    return { isSuccess: false, result: error }
  }
}

async function updateDepartureReson(formData) {
  try {
    const result = await api.UpdateDepartureReson(formData);
    return { isSuccess: true, result: result };
  } catch (error) {
    return { isSuccess: false, result: error }
  }
}


///salary///
async function salaryDetails() {
  try {
    const { data } = await api.employeeSalary();
    console.log(data);
    return { isSuccess: true, data: data.data.SalaryInDB }
  } catch (error) {
    console.log(error)
  }
}
async function createSalary(formData) {
  try {
    const result = await api.createNewSalary(formData);
    console.log("services form data is ", formData)
    return { isSuccess: true, result: result };
  } catch (error) {
    return { isSuccess: false, result: error }
  }
}
async function deleteSalary(formData) {
  try {
    const result = await api.deleteSalary(formData);
    console.log("services form data is ", formData)
    return { isSuccess: true, result: result };
  } catch (error) {
    return { isSuccess: false, result: error }
  }
}
async function updateSalary(formData) {
  try {
    const result = await api.UpdateSalary(formData);
    console.log("Salary form data is ", formData)
    return { isSuccess: true, result: result };
  } catch (error) {
    return { isSuccess: false, result: error }
  }
}


///allowance///
async function allowanceDetails() {
  try {
    const { data } = await api.employeeAllowance();
    console.log(data);
    return { isSuccess: true, data: data.data.AllowanceInDB }
  } catch (error) {
    console.log(error)
  }
}

async function createAllowance(formData) {
  try {
    const result = await api.createNewAllowance(formData);
    return { isSuccess: true, result: result };
  } catch (error) {
    return { isSuccess: false, result: error }
  }
}

async function deleteAllowance(formData) {
  try {
    const result = await api.deleteAllowance(formData);
    return { isSuccess: true, result: result };
  } catch (error) {
    return { isSuccess: false, result: error }
  }
}

async function updateAllowance(formData) {
  try {
    const result = await api.UpdateAllowance(formData);
    return { isSuccess: true, result: result };
  } catch (error) {
    return { isSuccess: false, result: error }
  }
}

///salary slip one///
async function slipOneDetails(formData) {
  console.log("form data is ", formData)
  console.log("form data is ", formData.EmpID)
  try {
    const { data } = await api.SalarySlipOne(formData);
    console.log("data is a", data);
    return { isSuccess: true, data: data.data.dataSet }
  } catch (error) {
    console.log(error)
  }
}

///salary slip two///
async function slipTwoDetails(formData) {
  console.log("form data is ", formData)
  console.log("form data is ", formData.EmpID)
  try {
    const { data } = await api.SalarySlipTwo(formData);
    console.log("data is a", data);
    return { isSuccess: true, data: data.data.dataSet }
  } catch (error) {
    console.log(error)
  }
}








//////////

async function cardCreat(formData) {
  try {
    const result = await api.addCard(formData);
    return { isSuccess: true, result: result };
  } catch (error) {
    return { isSuccess: false, result: error };
  }
}

async function cardDetails() {
  try {
    const { data } = await api.cards();
    console.log(data);
    return { isSuccess: true, data: data.data.cardDetailDB };
  } catch (error) {
    return { isSuccess: false, data: error };
  }
}

async function tableDataFeeld(formData) {
  try {
    console.log("successaaaaaaaaaaaaaaaaaaaa check services", formData)
    const result = await api.table(formData);
    return { isSuccess: true, result: result }
  } catch (error) {
    return { isSuccess: false, result: error }
  }
}

async function tableDataFeeldDetails() {
  try {
    const { data } = await api.tableDetail();
    // console.log(data)
    return { isSuccess: true, data: data.data };
  } catch (error) {
    return { isSuccess: false, data: error };
  }
}

async function tableDataDelete(formData) {
  try {
    const { result } = await api.tableRowDelete(formData)
    return { isSuccess: true, result: result }
  } catch (error) {
    return { isSuccess: false, data: error };
  }
}

async function tableDataUpdate(formData) {
  try {
    const { result } = await api.tableRowUpdate(formData)
    return { isSuccess: true, result: result }
  } catch (error) {
    return { isSuccess: false, data: error };
  }
}