import LeaderBoard from './leadersboard.js';

const createScore = () => {
  const username = document.getElementById('name');
  const score = document.getElementById('score');
  const newleader = new LeaderBoard(username, score);
  newleader.addScores();
};

export default createScore;