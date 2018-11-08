/**
 * source: https://docs.parseplatform.org/js/guide/
 */
class GameScore extends Parse.Object {
	constructor() {
		// Pass the ClassName to the Parse.Object constructor
		super('GameScore');

		 // All other initialization
		 this.score = 0;
		 this.playerName = '';
		 this.cheatMode = false;
		 this.skills = [];
	}

	static createGameScore(params) {
		const gamescore = new GameScore();
		gamescore.set('score', params.score || 0);
		gamescore.set('playerName', params.playerName || '');
		gamescore.set('cheatMode', params.cheatMode || false);
		gamescore.set('skills', params.skills || []);
		
		return gamescore;
	}
}

module.exports = GameScore;