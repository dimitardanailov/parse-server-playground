const nock = require('nock');

describe('app.js', () => {
	const baseUrl = 'http://localhost:1337';
	const request = require('supertest')(baseUrl);

	test('hello-advanced', () => {
		const response = {
			response: "Hello from SashiDo's Advanced Cloud Code"
		};
		
		nock(baseUrl)
			.get('/hello-advanced')
			.reply(200, response);

		request
			.get('/hello-advanced')
			.end((err, res) => {
				if (err) {
					throw err;
				}
				expect(res.res.statusCode).toBe(200);
				expect(res.body).toEqual(response);
			});
	});

	test('gamescore-create', () => {
		const response = {
			"score":1337,
			"playerName":"Sean Plott",
			"cheatMode":false,
			"skills":[
				"pwnage",
				"flying"
			],
			"date":{
				"__type":"Date",
				"iso":"2018-11-09T12:03:46.026Z"
			},
			"object":{
				"number":42,
				"string":"Hello world"
			},
			"createdAt":"2018-11-09T12:03:46.088Z",
			"updatedAt":"2018-11-09T12:03:46.088Z",
			"objectId":"S1uGfQh9yf"
		};

		nock(baseUrl)
			.get('/gamescore/create')
			.reply(200, response);

		request
			.get('/gamescore/create')
			.end((err, res) => {
				if (err) {
					throw err;
				}
				//console.log(err, res);
			});
	});
});



/*
test('create a gamescore record', () => {
	const response = 

	console.log('here ...');
}); */