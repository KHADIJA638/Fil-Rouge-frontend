import { useNavigate } from "react-router-dom"

export default function Sectionstatistique() {
    const navigate = useNavigate();
    const statistiques =[
        {
        number:"+120",
        text:"Registered Pets",
    },
    {
        number:"+85",
        text:"Available Vets",
    },
    {
        number:"+150",
        text:"Active Sitters",
    },
    {
        number:"+350",
        text:"Completed Reservations",
    },
    

]
  return (
    <div>
     <section className="flex bg-stone-100 justify-center items-center p-10 gap-10 flex-wrap">
     {statistiques.map((statistique,index)=>
     <div key={index} className="flex flex-col items-center justify-center border border-amber-950 rounded-xl w-40 h-36 bg-white text-2xl hover:bg-amber-900 hover:text-white transition-all duration-300 shadow-xl gap-2 p-4" 
      ><h3 className=" font-bold text-3xl">{statistique.number}</h3>
      <p className="text-base text-center">{statistique.text}</p></div>
      
      )}
      
      </section>  
    </div>
  )
}
