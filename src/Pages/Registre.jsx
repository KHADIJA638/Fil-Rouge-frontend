import { FaUserShield, FaStethoscope, FaHome, FaPaw } from "react-icons/fa";



export default function Registre() {
  const registercards = [
    {icon:<FaStethoscope size={44}/>,
    title:"Vet",
  },
  {
    icon:<FaHome size={44}/>,
    title:"PetSitter",
  },
  {
    icon:<FaPaw size={44}/>,
    title:"PetOwner",
  },
  {
    icon:<FaUserShield size={44}/>,
    title:"Admin",
  }

]
  return (
    <div className="flex flex-col items-center">
    <h1 className="text-5xl font-bold text-amber-950 mt-6">Create your account</h1>
    <h3 className="text-xl mt-3 text-amber-700 ">Choose your role and fill your information</h3>
      <div className="flex gap-6 mt-10 mb-4">{registercards.map((registercard,index)=>(
        <div key={index} className=" flex flex-col border border-amber-950 rounded-2xl w-40 h-40 items-center px-8 py-8">
        <span className="text-amber-600">{registercard.icon}</span>
      <h1 className="font-bold text-3xl text-amber-800">{registercard.title}</h1></div>
      ) 
      )}</div>

    </div>
  )
}
