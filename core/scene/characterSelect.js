class CharacterSelect extends Scene {
  constructor(arg) {
    const { heroes } = arg;
    super(arg);
    this.heroes = heroes;
  }
  initialEvents = [
    {
      type: 'message',
      position: 'top',
      text: 'Select your character',
    },
  ];

  selectCharacter(i) {
    this.manager.addPartyMemver(this.heroes[i]);
    this.manager.clearTopMessage();
    this.manager.playSceneInitialEvent();
  }

  init() {
    this.heroes.forEach((hero, i) => {
      const heroButton = document.createElement('button');
      heroButton.innerText = hero.class;
      heroButton.name = hero.class;
      heroButton.addEventListener('click', () => {
        this.selectCharacter(i);
      });
      document.getElementById(this.id).appendChild(heroButton);
    });
  }
}
