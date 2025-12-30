
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home.jsx";
import Layout from "../Layoutes/layout.jsx";
// import Connexion from "../Pages/Connexion.jsx";
import Vet from "../Pages/Vet.jsx"
import Addanimal from "../Pages/Addanimal.jsx";
// import CreateAppointmentPage from "../Pages/CreateAppointmentPage.jsx"
export const router = createBrowserRouter([
    {
        element: <Layout/>,
        children:[{
    path: "/",
    element:<Home />,
  },
//   {
//     path: "/connexion",
//     element:<Connexion />,
//   },
  {
    path: "/vet",
    element:<Vet/>,
  },
  {
    path: "/addanimal",
    element:<Addanimal/>,
  },
//    {
//     path: "/Appointmentpage",
//     element:<CreateAppointmentPage />,
//   },
]
    }
  
]);
