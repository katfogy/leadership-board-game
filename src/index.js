import './styles.css';
import createScore from './modules/createScore.js';
import LeaderBoard from './modules/leadersboard.js';

const scores = new LeaderBoard();
const btn = document.getElementById('add-score');
scores.displayScores();
const refreshBtn = document.getElementById('refresh');
btn.addEventListener('click', (e) => {
  e.preventDefault();
  createScore();
});

refreshBtn.addEventListener('click', () => {
  document.location.reload();
});