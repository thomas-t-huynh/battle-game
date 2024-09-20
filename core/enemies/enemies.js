class Enemey {
  level = 1;
  health = 0;
  attack = 0;
  defense = 0;
  resist = 0;
  speed = 0;
  class = 'enemy';
}

class Goblin extends Enemey {
  level = 1;
  health = 20;
  attack = 5;
  magic = 0;
  defense = 2;
  resist = 2;
  speed = 10;
  class = 'goblin';
  name = 'golbin';
  owner = 'pc';
  skills = [new Attack()];
}
