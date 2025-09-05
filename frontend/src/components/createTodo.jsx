import React, { useState } from "react";

export function CreateTodo({ onAdd }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleAddTodo = async () => {
    try {
      const res = await fetch("http://localhost:3000/todo", {
        method: "POST",
        body: JSON.stringify({ title, desc }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error("Failed to add todo");
      }

      alert("✅ Todo added successfully!");
      setTitle("");
      setDesc("");

      if (onAdd) onAdd(); // let parent refresh list
    } catch (error) {
      console.error(error);
      alert("❌ Error adding todo");
    }
  };

  return (
    <div className="bg-white shadow-md rounded-2xl p-6 w-full max-w-xl mx-auto mb-8 mt-4">
      <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
        ➕ Add a New Todo
      </h2>

      {/* Title */}
      <input
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-3 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      {/* Description */}
      <textarea
        placeholder="Enter description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        className="w-full p-3 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        rows="3"
      ></textarea>

      {/* Button */}
      <button
        onClick={handleAddTodo}
        className="w-full bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-700 transition"
      >
        Add Todo
      </button>
    </div>
  );
}
