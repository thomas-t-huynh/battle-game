// TODO - omit individual containers for scenes in HTML

class Manager {
  constructor({ scenes }) {
    this.scenes = scenes;
  }
  /** @type {Scene} */
  currentScene = null;
  player = {
    party: [],
  };

  init() {
    this.currentScene = this.scenes.shift();
    this.currentScene.setManager(this);
    this.currentScene.render();
    this.playSceneInitialEvent();
  }

  playSceneInitialEvent() {
    const event = this.currentScene.playInitialEvent();
    if (!event) {
      return;
    }
    this.processEvent(event);
  }

  nextScene() {
    this.currentScene.endScene();
    this.init();
  }

  addPartyMember(hero) {
    this.player.party.push(hero);
  }

  processEvent(event) {
    switch (event.type) {
      case 'message':
        document.getElementById('topMessage').innerText = event.text;
        document.getElementById('topMessageBar').hidden = false;
        break;
    }
  }

  clearTopMessage() {
    document.getElementById('topMessage').innerText = '';
    document.getElementById('topMessageBar').hidden = true;
  }
}
