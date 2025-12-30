import  HeroImage from "../assets/grpanimals.png"
import { FaStethoscope, FaCalendarAlt,FaHome, FaClipboardList,FaStar } from "react-icons/fa";
import ProfilImage from "../assets/dog.jpg"

export default function Home() {
  return (
    <div>
      <section className= "bg-[#FDE7B8]  flex  items-center justify-center">
      <div className="flex gap-10 md:gap-20"><div className="flex flex-col justify-center gap-5 ml-8">
      <div className="flex flex-col gap-1"><h2 className="text-amber-800 italic text-m">Welcome To PetCare</h2>
      <h1 className="font-bold text-5xl  text-amber-950 leading-tight">The Best Care <br></br>
      For Your Best Friend</h1></div>
      <div><button className="bg-amber-800 px-6 py-3 text-white border border-amber-950 rounded-xl hover:bg-amber-900 hover:scale-105 transition-all duration-300">Our Services</button></div></div>
      <div className=""><img className=" max-w-xl  max-h-[500px] object-contain" src={HeroImage} alt="Hero"/></div></div>
      </section>
      <section className="bg-[#FDF5E6] px-6 py-12 mx-auto">
      <div className="flex justify-center gap-6 flex-wrap">

      <div className="border border-amber-900 rounded-xl bg-white flex flex-col justify-center items-center gap-2 hover:bg-amber-900 hover:text-white  transition-all duration-300 shadow-md w-60 p-2"><h3 className="flex text-2xl font-bold text-md">Vet</h3><div className="flex gap-4"><FaStethoscope size={44}/><p className=" flex  gap-4">Find a vet <br/> near you</p></div></div>
      <div className="border border-amber-900 rounded-xl bg-white flex flex-col justify-center items-center gap-2 p-2 hover:bg-amber-900 hover:text-white  transition-all duration-300 shadow-md w-60"><h3 className="flex text-2xl font-bold text-md">PetSitter</h3><div className="flex gap-4"><FaHome size={44}/><p className=" flex gap-4">Book a trusted<br/>
      pet sitter</p></div></div>
      <div className="border border-amber-900 rounded-xl bg-white flex flex-col justify-center items-center gap-2 p-2 hover:bg-amber-900 hover:text-white  transition-all duration-300 shadow-md w-60"><h3 className="flex text-2xl font-bold text-md">Appointment</h3><div className="flex  gap-4"><FaCalendarAlt size={44}/><p>Schedule medical <br/> checkups</p></div></div>
      <div className=" border border-amber-900 rounded-xl bg-white flex flex-col justify-center items-center gap-2 p-2 hover:bg-amber-900 hover:text-white  transition-all duration-300 shadow-md w-60"><h3 className="flex text-2xl font-bold text-md">Reservation</h3><div className="flex gap-4"><FaClipboardList size={44}/><p className=" flex gap-4">Reserve services <br/>easily</p></div></div></div>
      </section>
      <section className="flex bg-stone-100 justify-center items-center p-10 gap-10 flex-wrap">
      <div className="flex flex-col items-center justify-center
 border border-amber-950 rounded-xl w-40 h-36 bg-white text-2xl hover:bg-amber-900 hover:text-white transition-all duration-300 shadow-xl gap-2 p-4"><h3 className=" font-bold text-3xl">+120</h3>
      <p className="text-base text-center">Registered Pets</p></div>
      <div className="flex flex-col items-center justify-center
 border border-amber-950 rounded-xl w-40 h-36 bg-white text-2xl hover:bg-amber-900 hover:text-white transition-all duration-300 shadow-xl  gap-2 p-4"><h3 className=" font-bold text-3xl">+85</h3>
      <p className="text-base text-center">Available Vets</p></div>
      <div className="flex flex-col items-center justify-center
 border border-amber-950 rounded-xl w-40 h-36 bg-white text-2xl hover:bg-amber-900 hover:text-white transition-all duration-300 shadow-xl gap-2  p-4"><h3 className=" font-bold text-3xl">+150</h3>
      <p className="text-base text-center">Active Sitters</p></div>
      <div className="flex flex-col items-center justify-center
 border border-amber-950 rounded-xl w-40 h-36 bg-white text-2xl hover:bg-amber-900 hover:text-white transition-all duration-300 shadow-xl gap-2 p-4"><h3 className=" font-bold text-3xl">+350</h3>
      <p className="text-base text-center">Completed Reservations</p></div>
      </section>
      <section className="bg-stone-50 py-16 px-6">
      <div className="flex flex-col items-center mb-8 "><h1 className="text-4xl font-bold text-stone-600">What Our Clients Say</h1>
      <h3 className="text-sm text-stone-950 ">Real feedback from pet owners who trust PetCare</h3></div>
          <div className="border border-amber-600 max-w-md p-4 rounded-xl shadow-md bg-white">
          <div className="flex gap-4 items-start"><img className="  w-16 h-16 rounded-full" src={ProfilImage} alt="SB"/>
          <div className="flex flex-col gap-1"><h4 className="font-bold text-md">Saad bouheria</h4>
          <div className="flex gap-0.5 text-amber-500">
          <FaStar/>
          <FaStar/>
          <FaStar/>
          <FaStar/>
          <FaStar/>
          </div>
          <p className="text-sm text-stone-700 mt-2">"My pet was in good hands" </p></div></div>
      </div>
      </section>
    </div>
  )
}
