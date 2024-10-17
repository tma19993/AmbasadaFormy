async function getData(collection) {
  try {
    const data = await collection.find({}).toArray();
    return data;
  } catch (err) {
    return err;
  }
}
function getPostsFromDB(page, size, data) {
  const startIndex = (page - 1) * size;
  return data.slice(startIndex, startIndex + size);
}
  module.exports = { getData, getPostsFromDB };