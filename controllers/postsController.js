const postsList = require("../data/posts");

const index = (req, res) => {
	// res.send("Lista dei post");
	res.json(postsList);
};

const show = (req, res) => {
	// res.send(`Visualizzazione post: ${req.params.id}`);
	res.json(postsList.find((item) => item.id === Number(req.params.id)));
};

const store = (req, res) => {
	res.send("Creato un nuovo post");
};

const update = (req, res) => {
	res.send(`Modifica interamente post: ${req.params.id}`);
};

const modify = (req, res) => {
	res.send(`Modifica parzialemente post: ${req.params.id}`);
};

const destroy = (req, res) => {
	// res.send(`Elimina il post ${req.params.id}`);
	const found = postsList.find((post) => post.id === Number(req.params.id));

	if (!found) {
		res.status(404).json({ error: true, message: "Not Found!" });
	}

	postsList.splice(postsList.indexOf(found), 1);

	console.log(postsList);
	res.sendStatus(204);
};

module.exports = { index, show, store, update, modify, destroy };
