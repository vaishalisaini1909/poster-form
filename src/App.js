import React, { useState } from "react";

function App() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    image: ""
  });

  return (
    <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl w-full grid md:grid-cols-2 gap-10">
        
        {/* Form Section */}
        <div>
          <h1 className="text-2xl font-bold mb-4">Poster Input Form</h1>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Poster Title"
              className="p-2 border border-gray-300 rounded"
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />
            <textarea
              placeholder="Poster Description"
              className="p-2 border border-gray-300 rounded"
              onChange={(e) => setForm({ ...form, description: e.target.value })}
            />
            <input
              type="text"
              placeholder="Image URL (optional)"
              className="p-2 border border-gray-300 rounded"
              onChange={(e) => setForm({ ...form, image: e.target.value })}
            />
          </form>
        </div>

        {/* Preview Section */}
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-4">Poster Preview</h2>
          <img
            src="https://img.freepik.com/premium-photo/design-laptop-friends-outdoors-concept_53876-85925.jpg?ga=GA1.1.939208479.1744189181&semt=ais_country_boost&w=740"
            alt="Poster Preview"
            className="w-full h-48 object-cover rounded mb-4 border"
          />
          <h3 className="text-lg font-bold">{form.title || "Your Poster Title"}</h3>
          <p className="text-gray-600">{form.description || "Your poster description will appear here."}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
