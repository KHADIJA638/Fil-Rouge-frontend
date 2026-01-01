import Vet1 from "../assets/vet1.jpg";
import Vet2 from "../assets/vet2.jpg";
import Vet3 from "../assets/vet3.jpg";
import Herosectionvet from "../Components/Herosectionvet";
import { useNavigate } from "react-router-dom";

export default function Vet() {
  const navigate = useNavigate();
  const vetcards = [
    {
      id:1,
      img:Vet1,
      name:"Halima Elanbi",
      specialite:"All Animals",
      experiance:"10 experience years",
      phone:"06 00 00 00 01",
      
    },
    {
      id:2,
      img: Vet2,
      name:"El mustapha Bouheria",
      specialite:"Cats,Dogs,Birds",
      experiance:"12 experience years",
      phone:"06 35 37 17 56",
     
    },
    {
      id:3,
      img:Vet3,
      name:"Fatiha Zaki",
      specialite:"All Animals",
      experiance:"20 experience years",
      phone:"07 81 03 07 87",
     
    },
  ];
  return (
    
    <div>
    <Herosectionvet/>
     <div  id="vet" className="flex flex-col items-center  mb-8 "><h1 className="flex justify-center text-6xl text-amber-800 font-bold">Our Veterinarians</h1>
      <h3 className="text-md text-amber-950 ">Browse our list of veterinarians specialized in caring for animals</h3></div>
      <div className="flex justify-center">{vetcards.map((vetcard,index)=>(<div key={index} className="flex flex-col items-center border border-amber-700 rounded-xl shadow-xl w-80 h-1/2 m-8 p-3"> <img className="rounded-full border-4 border-amber-950 w-36 h-36 shadow-xl " src={vetcard.img}  />
      <ul className="flex flex-col items-center gap-1">
        <li className="font-bold text-2xl text-amber-900 mt-1">{vetcard.name}</li>
        <li className="text-md text-amber-600  mt-1" >{vetcard.specialite} </li>
        <li className="text-md text-stone-500  mt-1">  {vetcard.experiance}</li>
        <li className="text-md text-amber-700  mt-1">  {vetcard.phone}</li>
      </ul>
      <div className="flex gap-2">
      <button className="border border-amber-950 rounded-xl text-white bg-amber-800 hover:bg-red-950 transition-all duration-300 hover:scale-105 mt-2 p-2">Book Appointment</button>
      <button onClick={() => navigate(`/vet/${vetcard.id}`)} className="border border-amber-950 rounded-xl text-white bg-amber-800 hover:bg-red-950 transition-all duration-300 hover:scale-105 mt-2 p-2"> 
        View details
      </button>

      </div></div>
      ))}</div>
     
    </div>
  )
}
