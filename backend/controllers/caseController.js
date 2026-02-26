const Case = require("../models/Case");
const { calculateZoneStatus } = require("../services/zoneService");
const { runFaceMatch } = require("../services/faceMatchService");

const registerCase = async (req, res) => {
  try {
    const { name, age, gender, area } = req.body;

    const photoPath = req.file ? req.file.path : null;

    let matchResult = {
      matched: false,
      camera: null,
      time: null
    };

    if (photoPath) {
      try {
        matchResult = await runFaceMatch(photoPath);
      } catch (err) {
        console.log("Face match error:", err);
      }
    }

    const zoneStatus = await calculateZoneStatus(area);

    const newCase = await Case.create({
      name,
      age,
      gender,
      area,
      photo: photoPath,
      lastSeenLocation: matchResult.camera,
      lastSeenTime: matchResult.time,
      cameraMatched: matchResult.camera,
      zoneStatus
    });

    res.status(201).json(newCase);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllCases = async (req, res) => {
  const cases = await Case.find().sort({ createdAt: -1 });
  res.json(cases);
};

const getZoneStats = async (req, res) => {
  const { area } = req.params;

  const count = await Case.countDocuments({ area });
  const zoneStatus = await calculateZoneStatus(area);

  res.json({ area, count, zoneStatus });
};

module.exports = {
  registerCase,
  getAllCases,
  getZoneStats
};