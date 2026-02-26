const Case = require("../models/Case");

const calculateZoneStatus = async (area) => {
  const count = await Case.countDocuments({ area });

  if (count > 10) return "Danger";
  if (count > 5) return "Moderate";
  return "Safe";
};

module.exports = { calculateZoneStatus };