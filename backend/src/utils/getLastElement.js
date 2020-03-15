module.exports = async (Model) => {
  let lastElement;

  await Model
    .find()
    .sort('_id')
    .find((error, post) => {
      if (!error) {
        lastElement = post[post.length - 1];
      }
    });

  return lastElement;
}
