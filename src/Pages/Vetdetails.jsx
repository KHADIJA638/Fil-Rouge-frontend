import { useParams } from "react-router-dom";
import Vet1 from "../assets/vet1.jpg";
import Vet2 from "../assets/vet2.jpg";
import Vet3 from "../assets/vet3.jpg";

export default function VetDetails() {
  const { id } = useParams();

  const vets = [
    {
      id: 1,
      img: Vet1,
      name: "Halima Elanbi",
      specialite: "All Animals",
      experiance: "10 years",
      phone: "06 00 00 00 01",
      address: "Rabat, Agdal",
        rating: 4.8,
        reviews: [
      "Very professional and kind",
      "My dog feels safe with her",
      "Highly recommended vet",],
      description:
        "Dr. Halima is an experienced veterinarian providing compassionate care for all types of animals.",
      services: ["Check-ups", "Vaccination", "Surgery"],
    },
    {
      id: 2,
      img: Vet2,
      name: "El mustapha Bouheria",
      specialite: "Cats, Dogs, Birds",
      experiance: "12 years",
      phone: "06 35 37 17 56",
      address: "Casablanca, Maarif",
    rating: 4.5,
    reviews: [
      "Great experience",
      "Explains everything clearly",],
      description:
        "Specialized in small animals with a strong focus on preventive care.",
      services: ["Consultation", "Dental care", "Emergency care"],
    },
    {
          id:3,
          img:Vet3,
          name:"Fatiha Zaki",
          specialite:"All Animals",
          experiance:"20 experience years",
          phone:"07 81 03 07 87",
          address: "Marrakech, Gueliz",
        rating: 4.9,
        reviews: [
      "Amazing vet",
      "Very patient with animals",
      "Best vet in town"
    ],
     description:
        "Dr. Fatiha is an experienced veterinarian providing compassionate care for all types of animals.",
        services: ["Consultation", "Dental care", "Emergency care"],
        },

  ];

  const vet = vets.find((v) => v.id === Number(id));

  if (!vet) {
    return <p className="text-center mt-10">Veterinarian not found</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={vet.img}
          alt={vet.name}
          className="w-64 h-64 rounded-xl shadow-xl object-cover"
        />

        <div>
          <h1 className="text-4xl font-bold text-amber-900 mb-2">
            {vet.name}
          </h1>
          <p className="text-amber-700 mb-1">{vet.specialite}</p>
          <p className="text-stone-600 mb-1">
            Experience: {vet.experiance}
          </p>
          <p className="text-amber-800 mb-4">
            Phone: {vet.phone}
          </p>
          <p className="text-stone-600 mb-2">
            Address: {vet.address}
            </p>


          <p className="text-gray-700 mb-4">
            {vet.description}
          </p>
          <p className="text-amber-700 font-semibold mb-3">
  ⭐ Rating: {vet.rating} / 5
</p>


          <h3 className="font-bold text-lg mb-2">Services</h3>
          <ul className="list-disc ml-5 mb-4">
            {vet.services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
          <h3 className="font-bold text-lg mb-2">Reviews</h3>

<ul className="space-y-2 mb-6">
  {vet.reviews.map((review, index) => (
    <li
      key={index}
      className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm text-stone-700"
    >
      “{review}”
    </li>
  ))}
</ul>


          <button className="bg-amber-800 text-white px-6 py-3 rounded-xl hover:bg-amber-900 transition">
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
}
