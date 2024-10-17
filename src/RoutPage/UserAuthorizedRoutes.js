import React, { lazy } from "react";
import Loadable from "./Loadable";
import AuthorHeader from "./AuthorHeader";
import Departments from "../Pages/Departments";
import AddDepartment from "../Pages/AddDepartment";
import EmploymentType from "../Pages/EmploymentType";
import AddEmploymentType from "../Pages/AddEmploymentType";
import WorkingLocation from "../Pages/WorkingLocation";
import AddWorkingLocation from "../Pages/AddWorkingLocation";
import JobPosition from "../Pages/JobPosition";
import AddJobPosition from "../Pages/AddJobPosition";
import DepartureEmployee from "../Pages/DepartureEmployee";
import AddDepartureReason from "../Pages/AddDepartureReason";
import Salary from "../Pages/Salary";
import AddSalary from "../Pages/AddSalary";
import Allowance from "../Pages/Allowance";
import AddAllowance from "../Pages/AddAllowance";
import SalarySlipTemplate from "../Pages/SalarySlipTemplate";
import SalarySlipTemplateNo01 from "../Pages/SalarySlipTemplateNo01";
import SalarySlipTemplateNo02 from "../Pages/SalarySlipTemplateNo02";



// const Login = Loadable(lazy(()=>import("../Pages/Login"))) ;
// const DigiBill = Loadable(lazy (()=>import("../Pages/DigiBill")));
// const SmartPose = Loadable(lazy(()=>import("../Pages/SmartPose")));
// const SmartMsg = Loadable(lazy(()=>import( "../Pages/SmartMsg")));
// const CocaCola = Loadable(lazy(()=>import( "../Pages/CocaCola")));
// const InApp = Loadable(lazy(()=>import( "../Pages/InApp")));
// const EBCM = Loadable(lazy(()=>import( "../Pages/EBCM")));
// const VCard = Loadable(lazy(()=>import( "../Pages/VCard")));
// const SmartCnt = Loadable(lazy(()=>import( "../Pages/SmartCnt")));
const Employee = Loadable(lazy(()=>import( "../Pages/Employee")));
const AddEmployee = Loadable(lazy(()=>import("../Pages/AddEmployee")));

const UserAuthorizedRoutes = [
  {
    path: "/",
    element: <AuthorHeader/>,
    children:[
      {
        path: "/",
        element: <Employee />,
      },
      {
        path:"/Departments",
        element:<Departments />
      },
      {
        path: "/AddDepartment",
        element: <AddDepartment/>,
      },
      {
        path: "/EmploymentType",
        element: <EmploymentType />,
      },
      {
        path: "/AddEmploymentType",
        element: <AddEmploymentType />,
      },
      {
        path: "/WorkingLocation",
        element: <WorkingLocation />,
      },
      {
        path: "/AddWorkingLocation",
        element: <AddWorkingLocation/>,
      },
      {
        path: "/JobPosition",
        element: <JobPosition/>,
      },
      {
        path: "/AddJobPosition",
        element: <AddJobPosition />,
      },
      {
        path: "/DepartureEmployee",
        element: <DepartureEmployee />,
      },
      {
        path: "/AddDepartureReason",
        element: <AddDepartureReason />,
      },
      {
        path: "/Employee",
        element: <Employee/>,
      },
      {
        path: "/AddEmployee",
        element: <AddEmployee />,
      },
      {
        path: "/Salary",
        element: <Salary />,
      },
      {
        path: "/AddSalary",
        element: <AddSalary />,
      },
      {
        path: "/Allowance",
        element: <Allowance />,
      },
      {
        path: "/AddAllowance",
        element: <AddAllowance />,
      },
      {
        path: "/SalarySlipTemplate",
        element: <SalarySlipTemplate />,
      },
      {
        path: "/SalarySlipTemplateNo01",
        element: <SalarySlipTemplateNo01 />,
      },
      {
        path: "/SalarySlipTemplateNo02",
        element: <SalarySlipTemplateNo02 />,
      },
      // {
      //   path: "/SlipOne",
      //   element: <SlipOne />,
      // },
      // {
      //   path: "/SlipTwo",
      //   element: <SlipTwo />,
      // },
      {
        path:"*",
        element:<Employee />
      }
    ]
  }
  
];

export default UserAuthorizedRoutes;
