import AddCourses from "../Pages/AddCourses";
import AddLectureMaterial from "../Pages/AddLectureMaterial";
import AddNewUser from "../Pages/AddNewUser";
import AddPayedStudent from "../Pages/AddPayedStudent";
import AddZoomRecordingSubject from "../Pages/AddZoomRecordingSubject";
import AddZoomSessionLecture from "../Pages/AddZoomSessionLecture";
import AddZoomSessionRecording from "../Pages/AddZoomSessionRecording";
import AddZoomSessionSubject from "../Pages/AddZoomSessionSubject";
import AdminDashBoard from "../Pages/AdminDashBoard";
import CourseDataUpdate from "../Pages/CourseDataupdate";
import CoursesAdmin from "../Pages/CoursesAdmin";
import DeleteUser from "../Pages/DeleteUser";
import ResourcesAdmin from "../Pages/ResourcesAdmin";
import ZoomOnlineSessionsAdmin from "../Pages/ZoomOnlineSessionsAdmin";
import ZoomRecordingsAdmin from "../Pages/ZoomRecordingsAdmin";
import AuthorHeader from "./AuthorHeader";
import AddExamDetails from "../Pages/AddExam"
import ExamDetails from "../Pages/ExamList"
import PaymentsAdmin from "../Pages/PaymentsAdmin";
import AddPaymentPlan from "../Pages/AddPaymentPlan";

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
        path: "/courseDataUpdate",
        element: <CourseDataUpdate />,
      },
      {
        path: "/Resources",
        element: <ResourcesAdmin />,
      },
      {
        path:"/AddLectureMaterial",
        element:<AddLectureMaterial/>
      },
      {
        path:"/AddPayedStudent",
        element:<AddPayedStudent/>
      },
      {
        path: "/AddExam",
        element: <AddExamDetails />
      },
      {
        path: "/Results",
        element: <ExamDetails />
      },
      {
        path: "/payments",
        element: <PaymentsAdmin />
      },
      {
        path: "/PaymentPlan",
        element:<AddPaymentPlan/>
      },

      {
        path: "*",
        element: <AdminDashBoard />,
      },
    ],
  },
];

export default UserAuthorizedRoutesAdmin;
