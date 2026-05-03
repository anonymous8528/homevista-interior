const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");

dotenv.config();

const app = express();

app.use(cors({
  origin: "homevista-interior.vercel.app"
}));
app.use(express.json());
app.use("/uploads", express.static("uploads"));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.log("MongoDB error:", err));

const leadSchema = new mongoose.Schema(
  {
    name: String,
    phone: String,
    city: String,
    service: String,
    message: String,
    status: {
      type: String,
      default: "New",
    },
  },
  { timestamps: true }
);

const Lead = mongoose.model("Lead", leadSchema);

const portfolioSchema = new mongoose.Schema(
  {
    title: String,
    category: String,
    image: String,
  },
  { timestamps: true }
);

const Portfolio = mongoose.model("Portfolio", portfolioSchema);

const verifyAdmin = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

app.get("/", (req, res) => {
  res.send("HomeVista Interior Backend Running");
});

app.post("/api/admin/login", (req, res) => {
  const { email, password } = req.body;

  if (
    email.trim() === process.env.ADMIN_EMAIL.trim() &&
    password.trim() === process.env.ADMIN_PASSWORD.trim()
  ) {
    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    return res.json({
      success: true,
      token,
      message: "Login successful",
    });
  }

  res.status(401).json({
    success: false,
    message: "Invalid email or password",
  });
});

app.post("/api/leads", async (req, res) => {
  try {
    const lead = await Lead.create(req.body);
    res.status(201).json({ success: true, lead });
  } catch {
    res.status(500).json({ success: false, message: "Failed to save lead" });
  }
});

app.get("/api/leads", verifyAdmin, async (req, res) => {
  const leads = await Lead.find().sort({ createdAt: -1 });
  res.json(leads);
});

app.put("/api/leads/:id", verifyAdmin, async (req, res) => {
  const lead = await Lead.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.json(lead);
});

app.delete("/api/leads/:id", verifyAdmin, async (req, res) => {
  await Lead.findByIdAndDelete(req.params.id);
  res.json({ success: true, message: "Lead deleted" });
});

app.post(
  "/api/portfolio",
  verifyAdmin,
  upload.single("image"),
  async (req, res) => {
    const portfolio = await Portfolio.create({
      title: req.body.title,
      category: req.body.category,
      image: `/uploads/${req.file.filename}`,
    });

    res.status(201).json(portfolio);
  }
);

app.get("/api/portfolio", async (req, res) => {
  const items = await Portfolio.find().sort({ createdAt: -1 });
  res.json(items);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});