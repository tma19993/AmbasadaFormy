module.exports = function getPostsFromDB(page, size, data) {
    const startIndex = (page - 1) * size;
    return data.slice(startIndex, startIndex + size);
  }