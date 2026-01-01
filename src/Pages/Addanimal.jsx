import ProfilImage from "../assets/dog.jpg";
import Cat from "../assets/cat.jpg";
import Petdog from "../assets/Petdog.jpg";
import { useState } from "react";

export default function Addanimal() {
  const [animals, setAnimals] = useState([
    {
      id: 1,
      img: ProfilImage,
      name: "Rex",
      type: "Dog",
      gender: "Male",
      owner: "Saad Bouheria",
      description: "Playful dog who loves walks and socializing with people",
    },
    {
      id: 2,
      img: Cat,
      name: "Rosa",
      type: "Cat",
      gender: "Female",
      owner: "Khawla Elanbi",
      description: "Calm and clean cat, vaccinated and very affectionate",
    },
    {
      id: 3,
      img: Petdog,
      name: "Jack",
      type: "Dog",
      gender: "Male",
      owner: "Khawla Sber",
      description: "Friendly and energetic dog, vaccinated and in good health",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    id: null,
    name: "",
    type: "",
    gender: "",
    owner: "",
    description: "",
  });

  const handleDelete = (id) => {
    setAnimals(animals.filter((a) => a.id !== id));
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.type || !formData.owner) return;

    if (isEditing) {
      const ok = window.confirm("Are you sure you want to update this animal?");
    if (!ok) return;
      setAnimals(
        animals.map((a) => (a.id === formData.id ? formData : a))
      );
    } else {
      setAnimals([...animals, { ...formData, id: Date.now(), img: ProfilImage }]);
    }
    setShowForm(false);
    setFormData({
      id: null,
      name: "",
      type: "",
      gender: "",
      owner: "",
      description: "",
    });
    setIsEditing(false);
  };

  return (
    <div className="p-6">
      <div className="flex justify-end mb-6">
        <button
          onClick={() => {
            setFormData({ id: null, name: "", type: "", gender: "", owner: "", description: "" });
            setIsEditing(false);
            setShowForm(true);
          }}
          className="border border-amber-800 rounded-xl bg-amber-900 hover:bg-amber-950 text-white px-6 py-2"
        >
          Add Animal
        </button>
      </div>

      {showForm && (
        <div className="border p-6 rounded-xl max-w-md mx-auto mb-6 bg-amber-50">
          <input
            placeholder="Animal Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="border p-2 mb-2 w-full rounded"
          />
          <input
            placeholder="Type (Dog, Cat...)"
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
            className="border p-2 mb-2 w-full rounded"
          />
          <input
            placeholder="Gender"
            value={formData.gender}
            onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
            className="border p-2 mb-2 w-full rounded"
          />
          <input
            placeholder="Owner"
            value={formData.owner}
            onChange={(e) => setFormData({ ...formData, owner: e.target.value })}
            className="border p-2 mb-2 w-full rounded"
          />
          <textarea
            placeholder="Description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="border p-2 mb-2 w-full rounded"
          />
          <button
            onClick={handleSubmit}
            className="bg-amber-800 text-white px-6 py-2 rounded-xl hover:bg-amber-900"
          >
            {isEditing ? "Update Animal" : "Add Animal"}
          </button>
        </div>
      )}

      <h1 className="text-4xl text-amber-800 font-bold text-center mb-6">Registered Animals</h1>

      <div className="flex flex-wrap justify-center">
        {animals.map((animal) => (
          <div
            key={animal.id}
            className="flex flex-col items-center text-center border border-amber-700 rounded-xl shadow-xl w-64 h-auto m-4 p-4"
          >
            <img className="rounded-full border-4 border-amber-950 w-36 h-36 shadow-xl mb-2" src={animal.img} />
            <ul className="flex flex-col items-center gap-1 mb-2">
              <li className="text-xl font-bold text-amber-800">{animal.name}</li>
              <li className="text-sm text-stone-600">{animal.type} . {animal.gender}</li>
              <li className="text-sm font-medium">{animal.owner}</li>
              <li className="text-sm text-stone-500 mt-2">{animal.description}</li>
            </ul>
            <div className="flex gap-3 mt-2">
              <button
                onClick={() => {
                  setFormData(animal);
                  setIsEditing(true);
                  setShowForm(true);
                }}
                className="border border-amber-950 rounded-lg text-white bg-blue-600 hover:bg-blue-800 px-4 py-2"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(animal.id)}
                className="border border-amber-950 rounded-lg text-white bg-red-500 hover:bg-red-600 px-4 py-2"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
