import { FaStethoscope, FaCalendarAlt,FaHome, FaClipboardList } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


  
export default function Sectionservices() {
  const navigate = useNavigate();
  const services = [
          {
     title: "Vet",
     icon: <FaStethoscope size={44}/>,
     text: "Find a vet near you",
     path:"/vet",
     },
     {
    title: "PetSitter",
    icon: <FaHome size={44}/>,
    text: "Book a trusted pet sitter",
    path:"/sitter",
  },
  {
    title: "Appointment",
    icon: <FaCalendarAlt size={44}/>,
    text: "Schedule medical checkups",
    path:"/appointment",
  },
  {
    title: "Reservation",
    icon: <FaClipboardList size={44}/>,
    text: "Reserve services easily",
    path:"/reservation",
  }];
    
  return (
    <div>
      <section  id="services"  className="bg-[#FDF5E6] py-18 mx-auto">
      <div className="flex justify-center gap-7 flex-wrap">
      {services.map((service,index)=>(
          <div key={index} 
          onClick={() => navigate(service.path)}
          className=" group border border-amber-900 rounded-2xl bg-white flex flex-col justify-center items-center gap-2 hover:bg-amber-900  transition-all duration-300 ease-in-out cursor-pointer hover:scale-105 shadow-xl w-64 p-4">
          <span className="text-amber-600 mb-2 group-hover:text-white">{service.icon}</span>
          <h3 className="text-2xl font-bold text-amber-950 group-hover:text-white">{service.title}</h3>

          <p className="text-amber-900 text-lg group-hover:text-white  ">{service.text}</p></div>
      ))}
</div>
      </section>
    </div>
  );
}
