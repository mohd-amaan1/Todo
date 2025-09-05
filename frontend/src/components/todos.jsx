import React from "react";

const Todos = ({ todos }) => {
  const handleClick = async (id) => {
    try {
      const res = await fetch("http://localhost:3000/completed", {
        method: "PUT",
        body: JSON.stringify({ id }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error("Failed to mark as completed");
      }

      // Refresh UI logic can be added here (lifting state up or refetching todos)
    } catch (error) {
      console.error(error);
      alert("Error marking todo as completed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">
        📋 My Todos
      </h2>

      <div className="max-w-3xl mx-auto grid gap-6">
        {todos.map((todo) => (
          <div
            key={todo._id}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
          >
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-xl font-semibold text-gray-800">
                  {todo.title}
                </h1>
                <p className="text-gray-600 mt-2">{todo.desc}</p>
              </div>

              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  todo.completed
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {todo.completed ? "✅ Completed" : "⏳ Pending"}
              </span>
            </div>

            <button
              onClick={() => handleClick(todo._id)}
              className={`mt-4 w-full py-2 rounded-lg font-medium transition ${
                todo.completed
                  ? "bg-gray-300 text-gray-700 cursor-not-allowed"
                  : "bg-indigo-600 text-white hover:bg-indigo-700"
              }`}
              disabled={todo.completed}
            >
              {todo.completed ? "Completed" : "Mark as Completed"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todos;
