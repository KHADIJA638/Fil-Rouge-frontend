import Vetphoto from "../assets/vetphoto.jpg";

export default function Herosectionvet() {
  return (
    <div className='bg-amber-50'>
      <div className="flex justify-center items-center gap-10"><div className='flex flex-col max-w-4xl  px-6 py-12'><h2 className=' italic text-amber-600 mb-3 '>Caring for Your Pets, Every Day</h2>
      <h1 className='text-5xl text-amber-950  font-bold mb-6'>Qualified vets providing medical care for all animals</h1>
      <p className='text-lg text-amber-900 mb-6'>Our veterinary service is committed to protecting the health and happiness of your pets. We work with experienced and caring veterinarians who provide medical care for all types of animals. From regular check-ups to treatments and advice, our goal is to make sure every pet receives the attention and care it deserves, so owners can feel confident and reassured.</p>
<ul className='flex flex-col gap-3 text-amber-950 mb-6'>
    <li>Experienced veterinarians</li>
    <li>Care for all animal types</li>
    <li>Trusted by pet owners</li>
    <li>Trusted by pet owners</li>
</ul>
<div className='text-centre'><a href="#vet"><button className=' bg-amber-900 text-white rounded-xl hover:bg-amber-950 hover:scale-105 transition-transform duration-300 px-6 py-3 w-max '>Find a veterinarian</button></a></div></div>
<div>
          <img 
            src={Vetphoto} 
            alt="Vet with animals" 
            className="w-64 h-80 rounded-full shadow-xl animate-bounce"
          />
        </div></div>
    </div>
  )
}
