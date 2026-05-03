import { useState } from "react";
import API from "../api";

export default function PortfolioUpload() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [status, setStatus] = useState("");

  const uploadPortfolio = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);
    formData.append("image", image);

    try {
      await API.post("/api/portfolio", formData);
      setStatus("Portfolio uploaded successfully");
      setTitle("");
      setCategory("");
      setImage(null);
    } catch {
      setStatus("Upload failed");
    }
  };

  return (
    <section className="contact-page">
      <div className="contact-box">
        <h1>Upload Portfolio</h1>

        <form onSubmit={uploadPortfolio}>
          <input
            placeholder="Project Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <input
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />

          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />

          <button type="submit">Upload</button>
        </form>

        {status && <p className="status">{status}</p>}
      </div>
    </section>
  );
}