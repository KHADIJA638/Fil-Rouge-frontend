import { FaUser, FaSignInAlt, FaPaw } from "react-icons/fa"; 
// import { FaDog, FaCat, FaPaw } from "react-icons/fa";
 import { Link } from "react-router-dom";
 import { useNavigate } from "react-router-dom";


export default function Nav() {
const navigate = useNavigate();
  return (
    <div className= "bg-[#FDE7B8] ">
     <div className="flex items-center justify-between py-2 px-6"><div className="flex text-3xl font-bold text-amber-950 gap-2 "><FaPaw size={34}/><h1 className=" bg-linear-to-r from-amber-950 via-amber-700  via-amber-650 to-amber-500  text-transparent bg-clip-text ">  PetCare</h1></div>
   <ul className="flex flex-row gap-4 text-amber-800">
  <li><Link to={'/'} >Home</Link></li>
   <li><Link to={'/addanimal'} >Add animal</Link></li>
<li><Link to={'/vet'} >Vets</Link></li>
   <li><Link to={'/sitter'} >Sitters</Link></li>
  <li><Link to={'/appointment'} >Appointment</Link></li>
  <li><Link to={'/reservation'} >Reservation</Link></li>
   
      {/* <li><Link to={'/dashboarduser'} >Home</Link></li> */}
      {/* <li><Link to={'/dashboardadmin'} >DashboardAdmin</Link> </li>
      <li><Link to={'/Appointmentpage'} > CreateAppointmentPage</Link></li> */}
    </ul>

      <div className="flex gap-4 ">
        <button className="px-2 py-2 border border-amber-800 text-amber-800 hover:bg-amber-900 hover:text-white rounded-xl flex items-center justify-between gap-1 transition-all duration-300 hover:scale-105"> <FaSignInAlt size={18}/>  Login</button>
        <button  onClick={() => navigate("/registre")} className="px-2 py-2 bg-amber-700 text-white hover:bg-green-700 rounded-xl flex items-center justify-between gap-1 transition-all duration-300 hover:scale-105"><FaUser size={14} />  Registre</button>
      </div>
    </div>
    <div className="border-t border-black my-8 mt-1"></div>
  </div> 
   );
}


