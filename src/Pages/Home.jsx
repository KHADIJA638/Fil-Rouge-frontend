import  HeroImage from "../assets/grpanimals.png"
import Sectioncomentaire from "../Components/Sectioncomentaire";
import Sectionservices from "../Components/sectionservices";
import Sectionstatistique from "../Components/Sectionstatistique";

export default function Home() {
  return (
    <div>
      <section className= "bg-[#FDE7B8]  flex  items-center justify-center">
      <div className="flex gap-10 md:gap-20"><div className="flex flex-col justify-center gap-5 ml-8">
      <div className="flex flex-col gap-1"><h2 className="text-amber-800 italic text-m">Welcome To PetCare</h2>
      <h1 className="font-bold text-5xl  text-amber-950 leading-tight">The Best Care <br></br>
      For Your Best Friend</h1></div>
      <div><a href="#services"><button className="bg-amber-800 px-6 py-3 text-white border border-amber-950 rounded-xl hover:bg-amber-900 hover:scale-105 transition-all duration-300">Our Services</button></a></div></div>
      <div className=""><img className=" max-w-xl   animate-pulse max-h-[500px] object-contain" src={HeroImage} alt="Hero"/></div></div>
      </section>
      <Sectionservices/>
      <Sectionstatistique/>
      <Sectioncomentaire/>
    </div>
  )
}
