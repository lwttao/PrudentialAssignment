export const getScoreType = (num) => {
  if (num >= 90) {
    return 'excellent';
  }
  if (num >= 80) {
    return 'good';
  }
  return 'unknown';
};

export const getAverageData = (list) => {
  let length = list.length;
  let sum = 0;

  list.forEach((listItem) => {
    if (listItem.score > 0) {
      sum += listItem.score;
    } else {
      length--;
    }
  });
  return Math.round(sum / length);
};
