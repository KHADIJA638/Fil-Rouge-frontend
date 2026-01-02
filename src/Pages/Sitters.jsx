import Sitter1 from "../assets/sitter1.jpg";
import Sitter2 from "../assets/sitter2.jpg";
import Sitter3 from "../assets/sitter3.jpg";
import { useNavigate } from "react-router-dom"; 
import Herosectionsitter from "../Components/Herosectionsitter";


export default function Sitters() {
  
  const navigate = useNavigate();
  const sittercards = [
    {
      id:1,
      img:Sitter1,
      name:"Khawla Lhnin",
      specialite:"All Animals",
      experiance:"14 experience years",
      phone:"06 78 90 12 34",
      
    },
    {
      id:2,
      img: Sitter2,
      name:"Sara belkassem",
      specialite:"Cats,Dogs,Birds",
      experiance:"12 experience years",
      phone:"06 12 34 56 78",
     
    },
    {
      id:3,
      img:Sitter3,
      name:"El mahdi lahlou",
      specialite:"All Animals",
      experiance:"20 experience years",
      phone:"07 01 02 03 04",
     
    },
  ];
  return (
    <div>
    <Herosectionsitter/>
      <div  id="sitter" className="flex flex-col items-center  mb-8 "><h1 className="flex justify-center text-6xl text-amber-800 font-bold">Our Sitters</h1>
      <h3 className="text-md text-amber-950 ">Find reliable pet sitters who will take care of your animals like their own</h3></div>
      <div className="flex justify-center">{sittercards.map((sittercard,index)=>(<div key={index} className="flex flex-col items-center border border-amber-700 rounded-xl shadow-xl w-80 h-1/2 m-8 p-3"> <img className="rounded-full border-4 border-amber-950 w-36 h-36 shadow-xl " src={sittercard.img}  />
      <ul className="flex flex-col items-center gap-1">
        <li className="font-bold text-2xl text-amber-900 mt-1">{sittercard.name}</li>
        <li className="text-md text-amber-600  mt-1" >{sittercard.specialite} </li>
        <li className="text-md text-stone-500  mt-1">  {sittercard.experiance}</li>
        <li className="text-md text-amber-700  mt-1">  {sittercard.phone}</li>
      </ul>
      <div className="flex gap-2">
      <button className="border border-amber-950 rounded-xl text-white bg-amber-800 hover:bg-red-950 transition-all duration-300 hover:scale-105 mt-2 p-2">Book Sitter</button>
      <button onClick={() => navigate(`/sitter/${sittercard.id}`)} className="border border-amber-950 rounded-xl text-white bg-amber-800 hover:bg-red-950 transition-all duration-300 hover:scale-105 mt-2 p-2"> 
        View details
      </button>

      </div></div>
      ))}</div>
    </div>
  )
}
