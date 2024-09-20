class Attack extends Skill {
  damage = 0;
  name = 'Attack';

  cast(caster, target) {
    target.health -= caster.attack + this.damage;
  }
}
