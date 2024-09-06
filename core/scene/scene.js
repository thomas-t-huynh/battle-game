class Scene {
  constructor({ id }) {
    this.id = id;
  }
  /** @type {Manager} */
  manager = null;
  initialEvents = [];
  render() {
    document.getElementById(this.id).hidden = false;
    this.init();
  }

  endScene() {
    document.getElementById(this.id).hidden = true;
  }

  init() {}

  playInitialEvent() {
    if (this.initialEvents.length === 0) {
      return null;
    }
    return this.initialEvents.shift();
  }

  setManager(manager) {
    this.manager = manager;
  }
}
