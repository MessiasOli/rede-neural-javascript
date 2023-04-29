var train = true;

function setup() {
	createCanvas(500, 500);
	background(0);

	nn = new RedeNeural(2, 3, 1);

	// XOR Problem
	dataset = {
		inputs:
			[[1, 1],
			[1, 0],
			[0, 1],
			[0, 0]],
		outputs:
			[[0],
			[1],
			[1],
			[0]]
	}
}

function draw() {
	if (train) {
		for (var i = 0; i < 500; i++) {
			var index = floor(random(4));
			nn.train(dataset.inputs[index], dataset.outputs[index]);
		}
		console.log("🦾🤖 >> nn.predict([1, 0])[0]:", nn.predict([1, 0])[0])
		console.log("🦾🤖 >> nn.predict([0, 0])[0]:", nn.predict([0, 0])[0])

		if (nn.predict([0, 0])[0] < 0.04 && nn.predict([1, 0])[0] > 0.98) {
			train = false;
			console.log("terminou");
		}
	}
}