"use client";

import { useState } from "react";
import Link from "next/link";

interface Todo {
  text: string;
  completed: boolean;
}

export default function TodoApp() {
  const [task, setTask] = useState("");
  const [showCode, setShowCode] = useState(false);

  const [todos, setTodos] = useState<Todo[]>([]);

  const code = `"use client";

import { useState } from "react";
import Link from "next/link";

interface Todo {
  text: string;
  completed: boolean;
}

export default function TodoApp() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = () => {
    if (!task.trim()) return;

    setTodos([
      ...todos,
      {
        text: task,
        completed: false,
      },
    ]);

    setTask("");
  };
}
`;

  const addTodo = () => {
    if (!task.trim()) return;

    setTodos([
      ...todos,
      {
        text: task,
        completed: false,
      },
    ]);

    setTask("");
  };

  const toggleTodo = (index: number) => {
    setTodos(
      todos.map((todo, i) =>
        i === index
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      )
    );
  };

  const deleteTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-700 via-blue-600 to-blue-400 p-8">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Link
          href="/"
          className="px-4 py-2 bg-yellow-600 text-white rounded"
        >
          Home
        </Link>

        <button
          onClick={() => setShowCode(!showCode)}
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          Source Code
        </button>
</div>
      
      {/* Source Code Box */}
      {showCode && (
        <div className="bg-black text-white p-4 rounded-lg mb-6 overflow-x-auto">
          <pre>
            <code>{code}</code>
          </pre>
        </div>
      )}

      {/* Add Task */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h1 className="text-4xl  font-bold text-black">
          Tasks
        </h1>
        <div className="flex gap-3">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add a task..."
            className="flex-1 border p-2 rounded"
          />

          <button
            onClick={addTodo}
            className="bg-indigo-500 text-white px-5 py-2 rounded"
          >
            Add
          </button>
        </div>
      </div>

      {/* Task List */}
      <div className="space-y-3">
        {todos.map((todo, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow flex justify-between items-center"
          >
            <div className="flex items-center gap-3">
              <button
                onClick={() => toggleTodo(index)}
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  todo.completed
                    ? "bg-green-500 border-green-500 text-white"
                    : "border-gray-500"
                }`}
              >
                {todo.completed ? "✓" : ""}
              </button>

              <span
                className={`text-lg ${
                  todo.completed
                    ? "line-through text-gray-500"
                    : "text-black"
                }`}
              >
                {todo.text}
              </span>
            </div>

            <button
              onClick={() => deleteTodo(index)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}