
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home.jsx";
import Layout from "../Layoutes/layout.jsx";
import Reservation from "../Pages/Reservation.jsx";
import Vet from "../Pages/Vet.jsx"
import Sitters from "../Pages/Sitters.jsx"
import Addanimal from "../Pages/Addanimal.jsx";
import Vetdetails from "../Pages/Vetdetails.jsx";
import Sitterdetails from "../Pages/Sitterdetails.jsx";

import Appointment from "../Pages/Appointment.jsx";
// import CreateAppointmentPage from "../Pages/CreateAppointmentPage.jsx"

export const router = createBrowserRouter([
    {
        element: <Layout/>,
        children:[{
    path: "/",
    element:<Home />,
  },
  {path:"/vet/:id",
   element:<Vetdetails />,
  },
  {path:"/sitter/:id",
   element:<Sitterdetails />,
  },
  
  {
    path: "/reservation",
    element:<Reservation />,
  },
  {
    path: "/vet",
    element:<Vet/>,
  },
  {
    path: "/addanimal",
    element:<Addanimal/>,
  },
   {
    path: "/appointment",
    element:<Appointment />,
  },
   {
    path: "/sitter",
    element:<Sitters />,
  },
]
    }
  
]);
