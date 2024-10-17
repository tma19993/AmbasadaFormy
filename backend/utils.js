async function getData(collection) {
  try {
    const data = await collection.find({}).toArray();
    return data;
  } catch (err) {
    return err;
  }
}

  module.exports = { getData };