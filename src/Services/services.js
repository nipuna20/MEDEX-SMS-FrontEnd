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
  tableDataUpdate
};
///employee///

async function employeeDetails(){
  try {
    const {data} = await api.Employee();
    console.log(data);
    return{isSuccess: true, data: data.data.empDetailDB}
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
async function deleteEmployee(formData){
  try {
    const result =await api.deleteEmployee(formData);
    return {isSuccess: true, result:result };
  } catch (error) {
    return { isSuccess: false, result:error}
  }
}
async function updateEmployee(formData){
  try {
    const result =await api.UpdateEmployee(formData);
    return {isSuccess: true, result:result };
  } catch (error) {
    return { isSuccess: false, result:error}
  }
}

///employee type///
async function employeeTypeDetails(){
  try {
    const {data} = await api.employeeType();
    console.log(data);
    return{isSuccess: true, data: data.data.empTypeInDB}
  } catch (error) {
    console.log(error)
  }
}
async function createEmployyeeType(formData){
  try {
    const result =await api.createNewEmploymentType(formData);
    return {isSuccess: true, result:result };
  } catch (error) {
    return { isSuccess: false, result:error}
  }
}
async function deleteEmployyeeType(formData){
  try {
    const result =await api.deleteEmploymentType(formData);
    return {isSuccess: true, result:result };
  } catch (error) {
    return { isSuccess: false, result:error}
  }
}
async function updateEmployyeeType(formData){
  try {
    const result =await api.UpdateEmploymentType(formData);
    return {isSuccess: true, result:result };
  } catch (error) {
    return { isSuccess: false, result:error}
  }
}


///department///
async function departmentDetails(){
  try {
    const {data} = await api.employeeDepartment();
    console.log(data);
    return{isSuccess: true, data: data.data.empDepartmentInDB}
  } catch (error) {
    console.log(error)
  }
}

async function createdepartment(formData){
  try {
    const result =await api.createNewDepartment(formData);
    return {isSuccess: true, result:result };
  } catch (error) {
    return { isSuccess: false, result:error}
  }
}
async function deleteDepartment(formData){
  try {
    const result =await api.deleteDepartment(formData);
    return {isSuccess: true, result:result };
  } catch (error) {
    return { isSuccess: false, result:error}
  }
}
async function updateDepartment(formData){
  try {
    const result =await api.UpdateDepartment(formData);
    return {isSuccess: true, result:result };
  } catch (error) {
    return { isSuccess: false, result:error}
  }
}

///work location///
async function workLocationDetails(){
  try {
    const {data} = await api.employeeWorkLocation();
    console.log(data);
    return{isSuccess: true, data: data.data.empWorkingLocationInDB}
  } catch (error) {
    console.log(error)
  }
}

async function createWorkLocation(formData){
  try {
    const result = await api.createNewWorkLocation(formData);
    return {isSuccess: true, result:result };
  } catch (error) {
    return { isSuccess: false, result:error}
  }
}

async function deleteWorkLocation(formData){
  try {
    const result = await api.deleteWorkLocationt(formData);
    return {isSuccess: true, result:result };
  } catch (error) {
    return { isSuccess: false, result:error}
  }
}

async function updateWorkLocation(formData){
  try {
    const result = await api.UpdateworkingLocation(formData);
    return {isSuccess: true, result:result };
  } catch (error) {
    return { isSuccess: false, result:error}
  }
}


///job position///
async function jobpositionDetails(){
  try {
    const {data} = await api.employeeJobPosition();
    console.log(data);
    return{isSuccess: true, data: data.data.empJobPositionInDB}
  } catch (error) {
    console.log(error)
  }
}


async function createJobPosition(formData){
  try {
    const result = await api.createNewJobPosition(formData);
    return {isSuccess: true, result:result };
  } catch (error) {
    return { isSuccess: false, result:error}
  }
}

async function deleteJobPosition(formData){
  try {
    const result = await api.deleteJobPosition(formData);
    return {isSuccess: true, result:result };
  } catch (error) {
    return { isSuccess: false, result:error}
  }
}

async function updateJobPosition(formData){
  try {
    const result = await api.UpdateJobPosition(formData);
    return {isSuccess: true, result:result };
  } catch (error) {
    return { isSuccess: false, result:error}
  }
}


///departure resone///
async function departureDetails(){
  try {
    const {data} = await api.employeeDeparture();
    console.log(data);
    return{isSuccess: true, data: data.data.departureEmployeeInDB}
  } catch (error) {
    console.log(error)
  }
}

async function createdepartureReson(formData){
  try {
    const result = await api.createNewDeparture(formData);
    return {isSuccess: true, result:result };
  } catch (error) {
    return { isSuccess: false, result:error}
  }
}

async function deletedepartureReson(formData){
  try {
    const result = await api.deleteDepartureEmployee(formData);
    return {isSuccess: true, result:result };
  } catch (error) {
    return { isSuccess: false, result:error}
  }
}

async function updateDepartureReson(formData){
  try {
    const result = await api.UpdateDepartureReson(formData);
    return {isSuccess: true, result:result };
  } catch (error) {
    return { isSuccess: false, result:error}
  }
}


///salary///
async function salaryDetails(){
  try {
    const {data} = await api.employeeSalary();
    console.log(data);
    return{isSuccess: true, data: data.data.SalaryInDB}
  } catch (error) {
    console.log(error)
  }
}
async function createSalary(formData){
  try {
    const result = await api.createNewSalary(formData);
    console.log("services form data is " , formData )
    return {isSuccess: true, result:result };
  } catch (error) {
    return { isSuccess: false, result:error}
  }
}
async function deleteSalary(formData){
  try {
    const result = await api.deleteSalary(formData);
    console.log("services form data is " , formData )
    return {isSuccess: true, result:result };
  } catch (error) {
    return { isSuccess: false, result:error}
  }
}
async function updateSalary(formData){
  try {
    const result = await api.UpdateSalary(formData);
    console.log("Salary form data is " , formData )
    return {isSuccess: true, result:result };
  } catch (error) {
    return { isSuccess: false, result:error}
  }
}


///allowance///
async function allowanceDetails(){
  try {
    const {data} = await api.employeeAllowance();
    console.log(data);
    return{isSuccess: true, data: data.data.AllowanceInDB}
  } catch (error) {
    console.log(error)
  }
}

async function createAllowance(formData){
  try {
    const result = await api.createNewAllowance(formData);
    return {isSuccess: true, result:result };
  } catch (error) {
    return { isSuccess: false, result:error}
  }
}

async function deleteAllowance(formData){
  try {
    const result = await api.deleteAllowance(formData);
    return {isSuccess: true, result:result };
  } catch (error) {
    return { isSuccess: false, result:error}
  }
}

async function updateAllowance(formData){
  try {
    const result = await api.UpdateAllowance(formData);
    return {isSuccess: true, result:result };
  } catch (error) {
    return { isSuccess: false, result:error}
  }
}

///salary slip one///
async function slipOneDetails(formData){
  console.log("form data is ",formData)
  console.log("form data is ",formData.EmpID)
  try {
    const {data} = await api.SalarySlipOne(formData);
    console.log("data is a",data);
    return{isSuccess: true, data: data.data.dataSet}
  } catch (error) {
    console.log(error)
  }
}

///salary slip two///
async function slipTwoDetails(formData){
  console.log("form data is ",formData)
  console.log("form data is ",formData.EmpID)
  try {
    const {data} = await api.SalarySlipTwo(formData);
    console.log("data is a",data);
    return{isSuccess: true, data: data.data.dataSet}
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
      console.log("successaaaaaaaaaaaaaaaaaaaa check services",formData)
        const result = await api.table(formData);
        return{ isSuccess:true, result:result}
    } catch (error) {
        return{ isSuccess:false, result:error}
    }
}

async function tableDataFeeldDetails() {
  try {
    const{data} = await api.tableDetail();
    // console.log(data)
    return { isSuccess: true, data: data.data };
  } catch (error) {
    return { isSuccess: false, data: error };
  }
}

async function tableDataDelete (formData) {
  try {
    const {result} = await api.tableRowDelete(formData)
    return{ isSuccess:true, result:result}
  } catch (error) {
    return { isSuccess: false, data: error };
  }
}

async function tableDataUpdate (formData) {
  try {
    const {result} = await api.tableRowUpdate(formData)
    return{isSuccess:true, result:result}
  } catch (error) {
    return { isSuccess: false, data: error };
  }
}