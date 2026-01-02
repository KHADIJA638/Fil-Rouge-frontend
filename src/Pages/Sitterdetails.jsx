import { useParams } from "react-router-dom";
import Sitter1 from "../assets/sitter1.jpg";
import Sitter2 from "../assets/sitter2.jpg";
import Sitter3 from "../assets/sitter3.jpg";

export default function SitterDetails() {
  const { id } = useParams();

  const sitters = [
    {
      id: 1,
      img: Sitter1,
      name: "Khawla Lhnin",
      specialite: "All Animals",
      experiance: "14 experience years",
      phone: "06 78 90 12 34",
      address: "Casa,Anfa",
        rating: 4.8,
        reviews: [
      "Very professional and kind",
      "My dog feels safe with her",
      "Highly recommended vet",],
      description:
        "Mr.Khawla is an experienced veterinarian providing compassionate care for all types of animals.",
      services: ["Grooming Assistance", "Overnight Care", "Playtime & Socialization"],
    },
    {
      id: 2,
      img: Sitter2,
      name: "Sara belkassem",
      specialite: "Cats, Dogs, Birds",
      experiance: "12 years",
      phone: "06 12 34 56 78",
      address: "Casablanca, Maarif",
    rating: 4.5,
    reviews: [
      "Great experience",
      "Explains everything clearly",],
      description:
        "Specialized in small animals with a strong focus on preventive care.",
      services: ["Medication Administration", "Overnight Care", "Dog Walking"],
    },
    {
          id:3,
          img:Sitter3,
          name:"El mahdi lahlou",
          specialite:"All Animals",
          experiance:"20 experience years",
          phone:"07 01 02 03 04",
          address: "Marrakech, Gueliz",
        rating: 4.9,
        reviews: [
      "Amazing sitter",
      "Very patient with animals",
      "Best sitter in town"
    ],
     description:
        "Mr.Lahlou is an experienced sitter providing compassionate care for all types of animals.",
        services: ["Grooming Assistance", "Playtime & Socialization", "Overnight Care"],
        },

  ];

  const sitter = sitters.find((v) => v.id === Number(id));

  if (!sitter) {
    return <p className="text-center mt-10">sitter not found</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={sitter.img}
          alt={sitter.name}
          className="w-64 h-64 rounded-xl shadow-xl object-cover"
        />

        <div>
          <h1 className="text-4xl font-bold text-amber-900 mb-2">
            {sitter.name}
          </h1>
          <p className="text-amber-700 mb-1">{sitter.specialite}</p>
          <p className="text-stone-600 mb-1">
            Experience: {sitter.experiance}
          </p>
          <p className="text-amber-800 mb-4">
            Phone: {sitter.phone}
          </p>
          <p className="text-stone-600 mb-2">
            Address: {sitter.address}
            </p>


          <p className="text-gray-700 mb-4">
            {sitter.description}
          </p>
          <p className="text-amber-700 font-semibold mb-3">
  ⭐ Rating: {sitter.rating} / 5
</p>


          <h3 className="font-bold text-lg mb-2">Services</h3>
          <ul className="list-disc ml-5 mb-4">
            {sitter.services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
          <h3 className="font-bold text-lg mb-2">Reviews</h3>

<ul className="space-y-2 mb-6">
  {sitter.reviews.map((review, index) => (
    <li
      key={index}
      className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm text-stone-700"
    >
      “{review}”
    </li>
  ))}
</ul>


          <button className="bg-amber-800 text-white px-6 py-3 rounded-xl hover:bg-amber-900 transition">
            Book Sitter
          </button>
        </div>
      </div>
    </div>
  );
}
