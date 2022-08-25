function personalityTest(survey, choices) {
  const personalityScore = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };
  setPersonalityScore(personalityScore, survey, choices);

  const personalityScoreKeys = Object.keys(personalityScore);

  calculatePersonality(personalityScore, personalityScoreKeys);

  return Object.keys(personalityScore).join("");
}

function setPersonalityScore(personality, survey, choices) {
  for (let index = 0; index < survey.length; index++) {
    if (choices[index] < 4) {
      personality[survey[index][0]] += Math.abs(4 - choices[index]);
    } else {
      personality[survey[index][1]] += Math.abs(4 - choices[index]);
    }
  }
}

function calculatePersonality(personalityScore, personalityScoreKeys) {
  for (let index = 0; index < 4; index++) {
    if (
      personalityScore[personalityScoreKeys[index]] <
      personalityScore[personalityScoreKeys[index + 1]]
    ) {
      delete personalityScore[personalityScoreKeys[index]];
      personalityScoreKeys.splice(index, 1);
    } else {
      delete personalityScore[personalityScoreKeys[index + 1]];
      personalityScoreKeys.splice(index + 1, 1);
    }
  }
}

console.log(personalityTest(survey, choices));
