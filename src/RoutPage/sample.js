import React, { lazy } from 'react'
import Loadable from "./Loadable";
import AuthorHeader from "./AuthorHeader";
import AddDepartment from '../Pages/AddDepartment';
import DashBoard from '../Pages/DashBoard';




const Employee = Loadable(lazy(()=>import( "../Pages/Employee")));


const sample = [
    {
      path: "/",
      element: <AuthorHeader/>,
      children:[
       
        {
          path: "/",
          element: <DashBoard/>,
        },
        // {
        //   path: "/EmploymentType",
        //   element: <EmploymentType />,
        // },
        // {
        //   path: "/AddEmploymentType",
        //   element: <AddEmploymentType />,
        // },
        // {
        //   path: "/WorkingLocation",
        //   element: <WorkingLocation />,
        // },
        // {
        //   path: "/AddWorkingLocation",
        //   element: <AddWorkingLocation/>,
        // },
        // {
        //   path: "/JobPosition",
        //   element: <JobPosition/>,
        // },
        // {
        //   path: "/AddJobPosition",
        //   element: <AddJobPosition />,
        // },
        // {
        //   path: "/DepartureEmployee",
        //   element: <DepartureEmployee />,
        // },
        // {
        //   path: "/AddDepartureReason",
        //   element: <AddDepartureReason />,
        // },
        // {
        //   path: "/Employee",
        //   element: <Employee/>,
        // },
        // {
        //   path: "/AddEmployee",
        //   element: <AddEmployee />,
        // },
        // {
        //   path: "/Salary",
        //   element: <Salary />,
        // },
        // {
        //   path: "/AddSalary",
        //   element: <AddSalary />,
        // },
        // {
        //   path: "/Allowance",
        //   element: <Allowance />,
        // },
        // {
        //   path: "/AddAllowance",
        //   element: <AddAllowance />,
        // },
        // {
        //   path: "/SalarySlipTemplate",
        //   element: <SalarySlipTemplate />,
        // },
        // {
        //   path: "/SalarySlipTemplateNo01",
        //   element: <SalarySlipTemplateNo01 />,
        // },
        // {
        //   path: "/SalarySlipTemplateNo02",
        //   element: <SalarySlipTemplateNo02 />,
        // },
        // {
        //   path:"*",
        //   element:<Employee />
        // }
      ]
    }
    
  ];
  
  export default sample;
  
