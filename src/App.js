import "./App.css";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    quantity: "",
    price: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  const handleCancel = () => {
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      name: "",
      description: "",
      category: "",
      quantity: "",
      price: "",
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Name: ${formData.name}, Description: ${formData.description}, Category: ${formData.category}, Quantity: ${formData.quantity}, Price: ${formData.price}`
    );
    setFormData({
      name: "",
      description: "",
      category: "",
      quantity: "",
      price: "",
    });
  };
  return (
    <div className="main border border-light rounded">
      <h1>Create New Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            required
            type="text"
            className="form-control"
            id="name"
            minLength={3}
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            minLength={25}
            maxLength={1000}
            required
            rows={3}
            className="form-control"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <input
            required
            type="text"
            minLength={3}
            className="form-control"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="quantity" className="form-label">
            Quantity
          </label>
          <input
            required
            type="number"
            min={1}
            max={1000}
            className="form-control"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            required
            type="number"
            step=".01"
            min={0.01}
            max={999.9}
            className="form-control"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <div className="btnRow">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="btn btn-danger"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
