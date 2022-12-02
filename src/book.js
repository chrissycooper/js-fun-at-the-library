function createTitle(title) {
  return `The ${title}`;
}

function buildMainCharacter(name, age, pronouns){
  return {
    name: name,
    age: age,
    pronouns: pronouns
  }
}

function saveReview(review, arr){
  if (arr.includes(review)){
    return arr;
  } else {
  arr.push(review);
    return arr;
  }
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
}