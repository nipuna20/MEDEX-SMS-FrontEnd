import AddCourses from "../Pages/AddCourses";
import AdminDashBoard from "../Pages/AdminDashBoard";
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
        //   {
        //     path: "/EXAMS",
        //     element: <ExamResultViewer />,
        //   },
        //   {
        //     path: "/ZoomRecordings",
        //     element: <ZoomRecordings/>,
        //   },
        //   {
        //     path: "/ZoomOnlineSessions",
        //     element: <ZoomOnlineSessions />,
        //   },
        //   {
        //     path: "/Resources",
        //     element: <ResourcesPage />,
        //   },
          {
            path: "/",
            element: <AdminDashBoard />,
          },
          {
            path: "/AddCourses",
            element: <AddCourses/>,
          },
          
          {
            path:"*",
            element:<AdminDashBoard />
          }
        ]
      }
      
    ];
    
    export default UserAuthorizedRoutesAdmin;