const express = require("express");
const multer = require("multer");
const path = require("path");

const {
  registerCase,
  getAllCases,
  getZoneStats
} = require("../controllers/caseController");

const router = express.Router();

// Multer config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

router.post("/register", upload.single("photo"), registerCase);
router.get("/", getAllCases);
router.get("/zone/:area", getZoneStats);

module.exports = router;