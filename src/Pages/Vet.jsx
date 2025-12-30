import VetPhoto from "../assets/vetphoto.jpg"

export default function Vet() {
  return (
    <div>
     <div className="flex flex-col items-center mb-8 "><h1 className="flex justify-center text-6xl text-amber-800 font-bold">Our Veterinarians</h1>
      <h3 className="text-md text-amber-950 ">Browse our list of veterinarians specialized in caring for animals</h3></div>
     <div className="flex flex-col items-center border border-amber-700 rounded-xl shadow-md
 max-w-xs m-8 p-3"> <img className="rounded-full border-4 border-amber-950 w-36 h-36 shadow-md" src={VetPhoto} alt="VPh" />
      <ul className="flex flex-col items-center gap-1">
        <li className="font-bold text-2xl text-amber-900 mt-1">Halima Elanbi</li>
        <li className="text-md text-amber-600  mt-1" >All Animals </li>
        <li className="text-md text-stone-500  mt-1">  10 years experience </li>
        <li className="text-md text-amber-700  mt-1">  06 00 00 00 01</li>
      </ul>
      <div>
      <button className="border border-amber-950 rounded-xl text-white bg-amber-800 hover:bg-red-950 transition-all duration-300 mt-2 p-2">Book Appointment</button>
      </div></div>
      
    </div>
  )
}
