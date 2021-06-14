const Cors = require("cors");

export const setCors = async (req, res, methods) => {
  const cors = Cors({ methods });
  await cors(req, res, () => {});
  return;
};
