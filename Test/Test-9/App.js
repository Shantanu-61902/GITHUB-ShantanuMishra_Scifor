import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submittedData, setSubmittedData] = useState(null);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = { name, email };

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      await response.json();
      setSubmittedData(userData);
      setMessage("✅ User added successfully!");
      setName("");
      setEmail("");
    } catch (error) {
      console.error("Error submitting user:", error);
      alert("Error submitting user");
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "20px auto", padding: 20, fontFamily: "Arial, sans-serif" }}>
      <h2>Add User Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 10 }}>
          <label>Name:</label><br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ width: "100%", padding: 8, boxSizing: "border-box" }}
          />
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>Email:</label><br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: "100%", padding: 8, boxSizing: "border-box" }}
          />
        </div>
        <button type="submit" style={{ padding: "8px 16px" }}>Submit</button>
      </form>

      {message && <p style={{ color: "green", marginTop: 10 }}>{message}</p>}

      {submittedData && (
        <div style={{ marginTop: 20 }}>
          <h3>Submitted Data:</h3>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
        </div>
      )}
    </div>
  );
}

export default App;
