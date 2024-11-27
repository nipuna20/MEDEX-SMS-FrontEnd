import AddCourses from "../Pages/AddCourses";
import AddNewUser from "../Pages/AddNewUser";
import AddZoomSessionLecture from "../Pages/AddZoomSessionLecture";
import AddZoomSessionRecording from "../Pages/AddZoomSessionRecording";
import AddZoomSessionSubject from "../Pages/AddZoomSessionSubject";
import AdminDashBoard from "../Pages/AdminDashBoard";
import ZoomOnlineSessionsAdmin from "../Pages/ZoomOnlineSessionsAdmin";
import ZoomRecordingsAdmin from "../Pages/ZoomRecordingsAdmin";
import AuthorHeader from "./AuthorHeader";

const UserAuthorizedRoutesAdmin = [
    {
        path: "/",
        element: <AuthorHeader/>,
        children:[
        
          {
            path: "/ZoomRecordings",
            element: <ZoomRecordingsAdmin />,
          },
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
            path: "/ZoomRecordings",
            element: <ZoomRecordingsAdmin />,
          },
          {
            path: "/AddZoomSessionRecording",
            element: <AddZoomSessionRecording />,
          },
          
          {
            path:"*",
            element:<AdminDashBoard />
          }
        ]
      }
      
    ];
    
    export default UserAuthorizedRoutesAdmin;