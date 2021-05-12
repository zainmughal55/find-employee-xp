// Import stylesheets
import "./style.css";

const findXp = xp => {
  if (xp >= 0 && xp <= 1000) return "level1";
  let countLevel = 0;
  let levelEndXp = 1000;
  let levelStartXp = 0;
  let prevLevelEndXp = 0;
  while (!(prevLevelEndXp >= xp && xp <= levelEndXp)) {
    levelStartXp = levelEndXp + 1;
    prevLevelEndXp = levelEndXp;
    levelEndXp = levelEndXp / 2 + levelStartXp;
    countLevel++;
  }
  return `level${countLevel}`;
};

console.log(findXp(100000));
