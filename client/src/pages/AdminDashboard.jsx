import { useEffect, useState } from "react";
import API from "../api";

export default function AdminDashboard() {
  const [leads, setLeads] = useState([]);

  const fetchLeads = async () => {
    const res = await API.get("/api/leads");
    setLeads(res.data);
  };

  const updateStatus = async (id, status) => {
    await API.put(`/api/leads/${id}`, { status });
    fetchLeads();
  };

  const deleteLead = async (id) => {
    await API.delete(`/api/leads/${id}`);
    fetchLeads();
  };

  const logout = () => {
    localStorage.removeItem("adminToken");
    window.location.href = "/admin";
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  return (
    <section className="admin-page">
      <div className="admin-header">
        <h1>HomeVista Admin Dashboard</h1>
        <button onClick={logout}>Logout</button>
      </div>

      <div className="lead-grid">
        {leads.map((lead) => (
          <div className="lead-card" key={lead._id}>
            <h3>{lead.name}</h3>
            <p><b>Phone:</b> {lead.phone}</p>
            <p><b>City:</b> {lead.city}</p>
            <p><b>Service:</b> {lead.service}</p>
            <p><b>Message:</b> {lead.message}</p>
            <p><b>Status:</b> {lead.status}</p>

            <select
              value={lead.status}
              onChange={(e) => updateStatus(lead._id, e.target.value)}
            >
              <option>New</option>
              <option>Contacted</option>
              <option>Site Visit Fixed</option>
              <option>Completed</option>
              <option>Rejected</option>
            </select>

            <a
              href={`https://wa.me/91${lead.phone}?text=Hello%20${lead.name},%20we%20are%20from%20HomeVista%20Interior.`}
              target="_blank"
              className="whatsapp-link"
            >
              WhatsApp Client
            </a>

            <button onClick={() => deleteLead(lead._id)} className="delete-btn">
              Delete
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}