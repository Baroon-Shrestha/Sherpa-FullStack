const test = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Controller working well.",
  });
};

module.exports = { test };
