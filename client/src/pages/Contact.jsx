import { useState } from "react";
import API from "../api";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      await API.post("/api/leads", form);
      setStatus("Your request has been submitted successfully!");
      setForm({
        name: "",
        phone: "",
        city: "",
        service: "",
        message: "",
      });
    } catch (error) {
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="contact-page">
      <div className="contact-box">
        <h1>Get Free Interior Consultation</h1>
        <p>Fill this form and our team will contact you.</p>

        <form onSubmit={submitForm}>
          <input
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
          />

          <input
            name="city"
            placeholder="City"
            value={form.city}
            onChange={handleChange}
            required
          />

          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            required
          >
            <option value="">Select Service</option>
            <option>Home Interior</option>
            <option>Modular Kitchen</option>
            <option>Office Interior</option>
            <option>Painting & Renovation</option>
          </select>

          <textarea
            name="message"
            placeholder="Tell us about your requirement"
            value={form.message}
            onChange={handleChange}
          />

          <button type="submit">Submit Request</button>
        </form>

        {status && <p className="status">{status}</p>}
      </div>
    </section>
  );
}