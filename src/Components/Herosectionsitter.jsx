import Sitterphoto from "../assets/sitterphoto.jpg";

export default function Herosectionsitter() {
  return (

      <div className='bg-amber-50'>
            <div className="flex justify-center items-center gap-10"><div className='flex flex-col max-w-4xl  px-6 py-12'><h2 className=' italic text-amber-600 mb-3 '>Your pets, our loving care every day</h2>
            <h1 className='text-5xl text-amber-950  font-bold mb-6'>Trusted pet sitters caring for all types of animals</h1>
            <p className='text-lg text-amber-900 mb-6'>Our pet sitters are here to keep your furry friends happy, safe, and loved. From daily walks to playtime and feeding, we provide personalized care for every pet, so you can relax knowing they’re in good hands.</p>
      <ul className='flex flex-col gap-3 text-amber-950 mb-6'>
          <li>Experienced sitters</li>
          <li>Care for all animal types</li>
          <li>Trusted by pet owners</li>
      </ul>
      <div className='text-centre'><a href="#sitter"><button className=' bg-amber-900 text-white rounded-xl hover:bg-amber-950 hover:scale-105 transition-transform duration-300 px-6 py-3 w-max '>Find a Sitter</button></a></div></div>
      <div>
                <img 
                  src={Sitterphoto} 
                  alt="Vet with animals" 
                  className="w-64 h-80 rounded-full shadow-xl animate-bounce"
                />
              </div></div>
          </div>
    
  )
}
