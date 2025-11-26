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
	res.send(`Elimina il post ${req.params.id}`);
};

module.exports = { index, show, store, update, modify, destroy };
