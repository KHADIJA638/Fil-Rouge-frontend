import ProfilImage from "../assets/dog.jpg"


export default function Addanimal() {
  return (
    <div>
    <div className='flex justify-end'><button className='border border-amber-800 rounded-xl bg-amber-900 hover:bg-amber-950 transition-all duration-300 text-white m-10 p-4 text-lg font-bold'>Add Animal</button></div>
    <h1 className='flex justify-center text-4xl text-amber-800 font-bold'>Registered Animals</h1>
    <div className='flex flex-col items-center border border-amber-700 rounded-xl shadow-md
 max-w-xs m-8 p-3'>
    <img className="rounded-full border-4 border-amber-950 w-36 h-36 shadow-md " src={ProfilImage} alt="PI"/>
    <ul className='flex flex-col items-center gap-1'>
      <li className=" text-xl font-bold text-amber-800">Rex</li>
      <li className="text-sm text-stone-600" >Dog . Male</li>
      <li className="text-sm font-medium">Owner: Saad Bouheria</li>
      <li className="text-sm text-stone-500 mt-2">lorem ;ljhkgjygklm<br/>
      bkjkfhcjj,hkg,khkhkknlk</li>
    </ul>
    <div className="flex gap-3 mt-3">
      <button className="border border-amber-950 rounded-lg text-xl text-white bg-blue-600 hover:bg-blue-800 transition-all duration-300 px-4 py-2 ">Edit</button>
      <button className="border border-amber-950 rounded-lg text-xl text-white bg-red-500 hover:bg-red-600 transition-all duration-300 px-4 py-2">Delete</button>
    </div>
    </div>
      
    </div>
  )
}
