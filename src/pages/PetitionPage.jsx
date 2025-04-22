import React, { useState, useEffect } from "react";

function PetitionPage() {
  const [signatures, setSignatures] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    state: "",
  });

  const fetchSignatures = async () => {
    try {
      const res = await fetch("http://localhost:4000/api/signatures");
      const data = await res.json();
      setSignatures(data);
    } catch (err) {
      console.error("Failed to fetch signatures", err);
    }
  };

  useEffect(() => {
    fetchSignatures();
  }, []);

  const validateAndSubmit = async (e) => {
    e.preventDefault();
    const { name, email, city, state } = formData;

    if (!name || !email || !city || !state) {
      alert("Please fill out all fields");
      return;
    }
    if (!email.includes("@")) {
      alert("Invalid email");
      return;
    }
    if (state.length !== 2 || state !== state.toUpperCase()) {
      alert("Invalid state");
      return;
    }
    if (name.length < 5 || name.length > 20) {
      alert("Name must be between 5 and 20 characters");
      return;
    }

    try {
      const res = await fetch("http://localhost:4000/api/signatures", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setFormData({ name: "", email: "", city: "", state: "" });
        fetchSignatures(); // Refresh list
      }
    } catch (err) {
      console.error("Error submitting form", err);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div className="container">
      <h1 className="mt-4 mb-3">Move CPTS 489 to Afternoon in Winter!</h1>
      <p>
        The image you see on the right is a representation of our professor every
        morning, right before his much-needed coffee that helps thaw him out a bit.
        Imagine having to wake up at 4 or 5 AM in the dead of winter just to prepare
        for class. Technically, since the sun hasn't even risen yet, can we really call 4
        AM "morning?" The frigid cold, combined with the mental fog of early hours,
        endure sub-zero temperatures just to atten an 8 AM lecture. orning brain
        freeze inevitably leads to null pointer exceptions in our heads! For these
        reasons, we humbly request the administration to consider shifting CPTS 489
        to a more humane afternoon time slot.
      </p>
      <img
        src="/images/frozen.jpg"
        alt="Frozen Prof"
        className="img-fluid mb-4"
      />

      <h2>Sign the Petition</h2>
      <form onSubmit={validateAndSubmit}>
        <div className="mb-3">
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            id="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            id="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            id="state"
            placeholder="State (e.g. WA)"
            value={formData.state}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Sign Petition
        </button>
      </form>

      <h2 className="mt-5">Signatures</h2>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>City</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          {signatures.map((sig) => (
            <tr key={sig.id}>
              <td>{sig.id}</td>
              <td>{sig.name}</td>
              <td>{sig.city}</td>
              <td>{sig.state}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PetitionPage;
