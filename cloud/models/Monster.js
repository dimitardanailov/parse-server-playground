/**
 * source: https://docs.parseplatform.org/js/guide/
 */
class Monster extends Parse.Object {
	constructor() {
		// Pass the ClassName to the Parse.Object constructor
		super('Monster');

		 // All other initialization
		 this.sound = 'Rawr';
	}

	hasSuperHumanStrength() {
    return this.get('strength') > 18;
  }

	static spawn(strength) {
    const monster = new Monster();
    monster.set('strength', strength);
		
		return monster;
  }
}

module.exports = Monster;