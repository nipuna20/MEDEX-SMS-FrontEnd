import AddCourses from "../Pages/AddCourses";
import AddNewUser from "../Pages/AddNewUser";
import AddZoomRecordingSubject from "../Pages/AddZoomRecordingSubject";
import AddZoomSessionLecture from "../Pages/AddZoomSessionLecture";
import AddZoomSessionRecording from "../Pages/AddZoomSessionRecording";
import AddZoomSessionSubject from "../Pages/AddZoomSessionSubject";
import AdminDashBoard from "../Pages/AdminDashBoard";
import CoursesAdmin from "../Pages/CoursesAdmin";
import DeleteUser from "../Pages/DeleteUser";
import ZoomOnlineSessionsAdmin from "../Pages/ZoomOnlineSessionsAdmin";
import ZoomRecordingsAdmin from "../Pages/ZoomRecordingsAdmin";
import AuthorHeader from "./AuthorHeader";

const UserAuthorizedRoutesAdmin = [
  {
    path: "/",
    element: <AuthorHeader />,
    children: [
      {
        path: "/Courses",
        element: <CoursesAdmin />,
      },
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
        element: <AddCourses />,
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
        element: <AddZoomSessionSubject />,
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
        path: "/AddZoomRecordingSubject",
        element: <AddZoomRecordingSubject />,
      },
      {
        path: "/deleteUser",
        element: <DeleteUser />,
      },

      {
        path: "*",
        element: <AdminDashBoard />,
      },
    ],
  },
];

export default UserAuthorizedRoutesAdmin;
