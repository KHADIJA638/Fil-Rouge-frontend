import { useState } from "react";


export default function Reservations() {
  const [reservations, setReservations] = useState([
  {
    id: 1,
      pet: "Rex",
      owner: "Saad Bouheria",
      type:"Dog",
      gender:"Male",
      date: "2026-01-09",
      time: "12:00 AM",
      services:"Overnight Care",
      status: "Confirmed",
  },
      {id: 2,
      pet: "Rosa",
      type:"Cat",
      gender:"Femele",
      owner: "Khawla Elanbi",
      services:"Grooming Assistance",
      date: "2026-01-24",
      time: "08:00 AM",
      status: "En attente",
  },
  {id: 3,
    pet:"jack",
    type:"Dog",
    gender:"Male",
    owner:"Khawla Saber",
    services:"Dog Walking",
    date:"2026-01-10",
    time:"12:00 AM",
    status:"Refused",
  }
])
const [showForm,setShowForm] =useState (false);
const [isEditing,setIsEditing] =useState(false)
const [formData,setFormData] =useState (
  {id :null,
  pet :"",
  type:"",
  gender:"",
  owner:"",
  services:"",
  date:"",
  time:"",
  status:"",
});
const handleDelete = (id) => {
    setReservations(Reservations.filter((a) => a.id !== id));
  };
  const handleSubmit = () => {
    if (!formData.pet|| !formData.date || !formData.owner) return;
    if (isEditing) {
      const ok = window.confirm("Are you sure you want to update this reservation?");
    if (!ok) return;
    setReservations(
            Reservations.map((a) => (a.id === formData.id ? formData : a))
          );
        } else {
          setReservations([...reservations, { ...formData, id: Date.now(), }]);
        }
        setShowForm(false);
        setFormData({
          id: null,
          pet: "",
          type: "",
          gender: "",
          owner: "",
          services:"",
          date:"",
          time:"",
          status: "",
        });
        setIsEditing(false);
      };

  return (
    <div>
     <div className="p-6">
      <div className="flex justify-end mb-6">
        <button
          onClick={() => {
            setFormData({ id: null, pet: "", type: "", gender: "", owner: "", services: "", date:"", time:"", status:"" });
            setIsEditing(false);
            setShowForm(true);
          }}
          className="border border-amber-800 rounded-xl bg-amber-900 hover:bg-amber-950 text-white px-6 py-2"
        >
          Add Reservation
        </button>
      </div>

      {showForm && (
        <div className="border p-6 rounded-xl max-w-md mx-auto mb-6 bg-amber-50">
          <input
            placeholder="Animal Name"
            value={formData.pet
            }
            onChange={(e) => setFormData({ ...formData, pet: e.target.value })}
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
          <input
            placeholder="services"
            value={formData.services}
            onChange={(e) => setFormData({ ...formData, services: e.target.value })}
            className="border p-2 mb-2 w-full rounded"
          />
          <input
            placeholder="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="border p-2 mb-2 w-full rounded"/>
            <input
            placeholder="time"
            value={formData.time}
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
            className="border p-2 mb-2 w-full rounded"
          />
          
          <button
            onClick={handleSubmit}
            className="bg-amber-800 text-white px-6 py-2 rounded-xl hover:bg-amber-900"
          >
            {isEditing ? "Update Reservation" : "Add Reservation"}
          </button>
        </div>
      )}

      <h1 className="text-4xl text-amber-800 font-bold text-center mb-6">Registered Reservations</h1>

      <div className="flex flex-wrap justify-center">
        {reservations.map((reservation) => (
          <div
            key={reservations.id}
            className="flex flex-col items-center text-center border border-amber-700 rounded-xl shadow-xl w-64 h-auto m-4 p-4"
          >
            
            <ul className="flex flex-col items-center gap-1 mb-2">
              <li className="text-xl font-bold text-amber-800">{reservation.pet}</li>
              <li className="text-sm text-stone-600">{reservation.type} . {reservation.gender}</li>
              <li className="text-sm font-medium">{reservation.owner}</li>
              <li className="text-sm text-stone-500 mt-2">{reservation.services}</li>
              <li className="text-sm text-stone-500 mt-2">{reservation.date}</li>
              <li className="text-sm text-stone-500 mt-2">{reservation.time}</li>
            </ul>
            <div className="flex gap-3 mt-2">
              <button
                onClick={() => {
                  setFormData(reservation);
                  setIsEditing(true);
                  setShowForm(true);
                }}
                className="border border-amber-950 rounded-lg text-white bg-blue-600 hover:bg-blue-800 px-4 py-2"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(reservation.id)}
                className="border border-amber-950 rounded-lg text-white bg-red-500 hover:bg-red-600 px-4 py-2"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
      
    </div>
  )
}
