import React, { useEffect, useState } from "react";

export default function ManageProducts() {
  const [products, setProducts] = useState(() => {
    const stored = localStorage.getItem("customProducts");
    return stored ? JSON.parse(stored) : [];
  });

  const [form, setForm] = useState({
    title: "",
    price: "",
    description: "",
    thumbnail: "",
  });

  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem("customProducts", JSON.stringify(products));
  }, [products]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title || !form.price || !form.description || !form.thumbnail) return;

    if (editMode) {
      const updated = [...products];
      updated[editIndex] = form;
      setProducts(updated);
      setEditMode(false);
      setEditIndex(null);
    } else {
      setProducts([...products, form]);
    }

    setForm({ title: "", price: "", description: "", thumbnail: "" });
  };

  const handleEdit = (index) => {
    setForm(products[index]);
    setEditMode(true);
    setEditIndex(index);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      const filtered = products.filter((_, i) => i !== index);
      setProducts(filtered);
    }
  };

  return (
    <section className="min-h-screen px-6 py-12 bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">
          {editMode ? "Edit Product" : "Add New Product"}
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-xl shadow mb-10 space-y-4"
        >
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Product Title"
            className="w-full px-4 py-2 border border-gray-300 rounded"
            required
          />
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder="Price"
            className="w-full px-4 py-2 border border-gray-300 rounded"
            required
          />
          <input
            type="text"
            name="thumbnail"
            value={form.thumbnail}
            onChange={handleChange}
            placeholder="Image URL"
            className="w-full px-4 py-2 border border-gray-300 rounded"
            required
          />
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Description"
            className="w-full px-4 py-2 border border-gray-300 rounded"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            {editMode ? "Update Product" : "Add Product"}
          </button>
        </form>

        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Product List</h2>
        {products.length === 0 ? (
          <p className="text-gray-500 text-center">No products added yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white border rounded-lg shadow p-4 flex flex-col justify-between"
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-40 object-cover rounded mb-4"
                />
                <h3 className="text-xl font-bold text-gray-800">{product.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                <p className="text-blue-600 font-semibold mb-4">${product.price}</p>
                <div className="flex justify-between">
                  <button
                    onClick={() => handleEdit(index)}
                    className="bg-yellow-500 text-white px-4 py-1 rounded hover:bg-yellow-600 transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
