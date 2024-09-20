class Battle extends Scene {
  constructor(arg) {
    super(arg);
    const { enemies, player } = arg;
    this.enemies = enemies;
    this.player = player;
    this.id = 'battle';
  }
  isSelecting = false;

  generateTurns() {
    const unitsTurns = [];
    this.enemies.forEach((enemy) => {
      unitsTurns.push(enemy);
    });
    this.player.party.forEach((hero) => {
      unitsTurns.push(hero);
    });
    unitsTurns.sort((a, b) => a.speed - b.speed);
    return unitsTurns;
  }

  onSkillSelect(skill, caster) {
    this.enemiesDiv.forEach((enemyDiv, i) => {
      enemyDiv.style.cursor = 'pointer';
      enemyDiv.addEventListener('click', () => {
        skill.cast(caster, this.enemies[i]);
        enemyDiv.style.cursor = 'auto';
        this.showEnemies();
      });
    });
  }

  processTurn() {
    const currentUnitTurn = this.unitsTurns.pop();
    if (currentUnitTurn.owner === 'player') {
      const battleUi = document.getElementById('battleUi');
      battleUi.hidden = false;
      currentUnitTurn.skills.forEach((skill) => {
        const button = document.createElement('button');
        button.innerText = skill.name;
        battleUi.appendChild(button);
        button.addEventListener('click', () =>
          this.onSkillSelect(skill, currentUnitTurn)
        );
      });
    }
  }

  showEnemies() {
    if (this.enemiesDiv) {
      this.enemies.forEach((enemy, i) => {
        this.enemiesDiv[i].innerText = `${enemy.name} ${enemy.health}`;
      });
      return;
    }
    const battleUi = document.getElementById('battleUi');
    const enemiesDiv = document.createElement('div');
    battleUi.appendChild(enemiesDiv);
    this.enemiesDiv = this.enemies.map((enemy) => {
      const enemyDiv = document.createElement('div');
      enemyDiv.innerText = `${enemy.name} ${enemy.health}`;
      enemiesDiv.appendChild(enemyDiv);
      return enemyDiv;
    });
  }

  init() {
    this.unitsTurns = this.generateTurns();
    this.showEnemies();
    this.processTurn();
  }
}
