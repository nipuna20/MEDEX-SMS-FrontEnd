import React, { lazy } from 'react'
import Loadable from "./Loadable";
import AuthorHeader from "./AuthorHeader";
import AddDepartment from '../Pages/AddDepartment';
import DashBoard from '../Pages/DashBoard';
import Payments from '../Pages/Payments';
import Login from '../Pages/Login';
import MainLogin from '../Pages/MainLogin';
import EXAMS from '../Pages/EXAMS';
import ZoomRecordings from '../Pages/ZoomRecordings';
import ZoomOnlineSessions from '../Pages/ZoomOnlineSessions';
import Resources from '../Pages/Resources';
import AdminDashBoard from '../Pages/AdminDashBoard';
import AddCourses from '../Pages/AddCourses';


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
        {
          path: "/payments",
          element: <Payments />,
        },
        {
          path: "/Login",
          element: <Login />,
        },
        {
          path: "/",
          element: <MainLogin />,
        },
        {
          path: "/EXAMS",
          element: <EXAMS/>,
        },
        {
          path: "/ZoomRecordings",
          element: <ZoomRecordings/>,
        },
        {
          path: "/ZoomOnlineSessions",
          element: <ZoomOnlineSessions/>,
        },
        {
          path: "/Resources",
          element: <Resources />,
        },
        {
          path: "/AdminDashBoard",
          element: <AdminDashBoard />,
        },
        {
          path: "/AddCourses",
          element: <AddCourses/>,
        },
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
  
