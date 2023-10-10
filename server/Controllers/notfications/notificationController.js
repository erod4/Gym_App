const deleteNotificationController = async (req, res) => {
  try {
    res.json({ message: "delete notification" });
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = { deleteNotificationController };
