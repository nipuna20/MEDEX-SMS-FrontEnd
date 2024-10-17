import React, { lazy } from "react";
import Loadable from "./Loadable";
import UnAthor from "./unAthor";

const Login = Loadable(lazy(()=>import("../Pages/Login"))) ;
// const DigiBill = Loadable(lazy (()=>import("../Pages/DigiBill")));
// const SmartPose = Loadable(lazy(()=>import("../Pages/SmartPose")));
// const SmartMsg = Loadable(lazy(()=>import( "../Pages/SmartMsg")));
// const CocaCola = Loadable(lazy(()=>import( "../Pages/CocaCola")));
// const InApp = Loadable(lazy(()=>import( "../Pages/InApp")));
// const EBCM = Loadable(lazy(()=>import( "../Pages/EBCM")));
// const VCard = Loadable(lazy(()=>import( "../Pages/VCard")));
// const SmartCnt = Loadable(lazy(()=>import( "../Pages/SmartCnt")));
// const Cards = Loadable(lazy(()=>import( "../Pages/Cards")));
// const AddCard = Loadable(lazy(()=>import("../Pages/AddCard")));

const unAuthorizedRoutes = [
{
    path:"/",
    element:<UnAthor/>,
    children:[
      {
        path:"/",
        element:<Login/>
      },
      
    ]
},{
  path:"*",
  element:<Login/>
}
];

export default unAuthorizedRoutes;
