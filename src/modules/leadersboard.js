class LeaderBoard {
  constructor(name, score) {
    this.name = name;
    this.score = score;
    this.url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/fvcdettBod/scores';
  }

  clearInput() {
    this.name.value = '';
    this.score.value = '';
  }

  async addScores() {
    const user = this.name.value;
    const score = this.score.value;
    if (user === '' || score === '') {
      alert('Input Field cannot be empty');
    } else if (score > 100) {
      alert('Score Cannot be more than 100');
    } else {
      const options = {
        method: 'POST',
        body: JSON.stringify({
          user,
          score,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      };

      if (this.name && this.score) {
        await fetch(this.url, options).then((res) => res.json());
      }
      this.clearInput();
      this.displayScores();
    }
  }

  async getScores() {
    const res = await fetch(this.url);
    const userinfo = await res.json();
    return userinfo;
  }

  async displayScores() {
    const list = await this.getScores();
    const leaderscores = document.getElementById('allscores');
    leaderscores.innerHTML = '';
    if (list.result.length === 0) {
      const msg = document.createElement('h3');
      msg.textContent = 'No scores yet! Add some!';
      msg.classList.add('display-msg');
      leaderscores.appendChild(msg);
    } else {
      list.result
        .sort((a, b) => b.score - a.score)
        .forEach((score) => {
          leaderscores.innerHTML += `
                    <li class="score">${score.user}: ${score.score}</li>
              `;
        });
    }
  }
}

export default LeaderBoard;