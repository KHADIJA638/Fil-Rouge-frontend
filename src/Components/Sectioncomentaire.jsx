import { FaStar } from "react-icons/fa";
import { useState } from "react";
import ProfilImage from "../assets/dog.jpg";
import ProfilHumter from "../assets/profilhumster.jpg";

export default function Sectioncomentaire() {
  // 1️⃣ commentaires (list)
  const [commentaires, setCommentaires] = useState([
    {
      name: "Saad Bouheria",
      img: ProfilImage,
      rating: 5,
      text: "My pet was in good hands",
    },
    {
      name: "Amin Elanbi",
      img: ProfilHumter,
      rating: 4,
      text: "Excellent care and very professional",
    },
  ]);

  // 2️⃣ new comment (form)
  const [newComment, setNewComment] = useState({
    name: "",
    rating: 0,
    text: "",
  });

  // 3️⃣ submit handler
  const handleSubmit = () => {
    if (!newComment.name || !newComment.text || newComment.rating === 0) {
      alert("Please fill all fields");
      return;
    }

    setCommentaires([
      ...commentaires,
      {
        ...newComment,
        img: ProfilImage, // default image
      },
    ]);

    // reset form
    setNewComment({ name: "", rating: 0, text: "" });
  };

  return (
    <section className="bg-stone-50 py-16 px-6">
      {/* Title */}
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-4xl font-bold text-stone-600">
          What Our Clients Say
        </h1>
        <h3 className="text-sm text-stone-950">
          Real feedback from pet owners who trust PetCare
        </h3>
      </div>

      {/* Comments list */}
      <div className="flex flex-col gap-4 items-center mb-10">
        {commentaires.map((comment, index) => (
          <div
            key={index}
            className="border border-amber-600 max-w-md w-full p-4 rounded-xl shadow-md bg-white"
          >
            <div className="flex gap-4 items-center">
              <img
                src={comment.img}
                alt={comment.name}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h4 className="font-bold">{comment.name}</h4>

                <div className="flex gap-1 text-amber-500">
                  {Array.from({ length: comment.rating }).map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                <p className="text-sm text-stone-700 mt-2">
                  {comment.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add comment form */}
      <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md border">
        <h3 className="text-lg font-bold mb-4 text-center">
          Add Your Comment
        </h3>

        <input
          type="text"
          placeholder="Your name"
          value={newComment.name}
          onChange={(e) =>
            setNewComment({ ...newComment, name: e.target.value })
          }
          className="border p-2 w-full rounded mb-3"
        />

        <textarea
          placeholder="Your comment"
          value={newComment.text}
          onChange={(e) =>
            setNewComment({ ...newComment, text: e.target.value })
          }
          className="border p-2 w-full rounded mb-3"
        />

        {/* Rating */}
        <div className="flex gap-2 mb-4 justify-center text-amber-500">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              className={`cursor-pointer ${
                star <= newComment.rating ? "opacity-100" : "opacity-30"
              }`}
              onClick={() =>
                setNewComment({ ...newComment, rating: star })
              }
            />
          ))}
        </div>

        <button
          onClick={handleSubmit}
          className="bg-amber-800 text-white w-full py-2 rounded-xl hover:bg-amber-900 transition"
        >
          Add Comment
        </button>
      </div>
    </section>
  );
}
