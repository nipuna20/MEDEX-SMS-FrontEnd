import AddCourses from "../Pages/AddCourses";
import AddNewUser from "../Pages/AddNewUser";
import AddZoomSessionLecture from "../Pages/AddZoomSessionLecture";
import AddZoomSessionSubject from "../Pages/AddZoomSessionSubject";
import AdminDashBoard from "../Pages/AdminDashBoard";
import ZoomOnlineSessionsAdmin from "../Pages/ZoomOnlineSessionsAdmin";
import AuthorHeader from "./AuthorHeader";

const UserAuthorizedRoutesAdmin = [
    {
        path: "/",
        element: <AuthorHeader/>,
        children:[
        //   {
        //     path: "/",
        //     element: <DashBoard />,
        //   },
        //   {
        //     path: "/payments",
        //     element: <Payments />,
        //   },
          {
            path: "/AddZoomSessionLecture",
            element: <AddZoomSessionLecture />,
          },
          {
            path: "/",
            element: <AdminDashBoard />,
          },
          {
            path: "/AddCourses",
            element: <AddCourses/>,
          },
            {
            path: "/addNewUser",
            element: <AddNewUser />,
          },
          {
            path: "/ZoomOnlineSessions",
            element: <ZoomOnlineSessionsAdmin />,
          },
          {
            path: "/AddZoomSessionSubject",
            element: <AddZoomSessionSubject/>,
          },
          
          {
            path:"*",
            element:<AdminDashBoard />
          }
        ]
      }
      
    ];
    
    export default UserAuthorizedRoutesAdmin;