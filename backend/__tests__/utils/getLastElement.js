module.exports = async Model => {
  const result = await Model.find().sort({ _id: -1 }).limit(1);

  return result[0];
};
