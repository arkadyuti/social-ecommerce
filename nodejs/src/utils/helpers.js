export const IsJsonString = str => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};

export const invalidCustomParam = (req, res, paramater, message) => {
  if (!req.query[paramater] || req.query[paramater] === "undefined" || req.query[paramater] === "null") {
    res.status(400);
    res.send({
      message: message ? message : "Invalid paramaters"
    });
    return true;
  }
  return false;
};
