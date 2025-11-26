const express = require("express");
const postsList = require("../posts");
const router = express.Router();

// Index
router.get("/", (req, res) => {
	// res.send("Lista dei post");
	res.json(postsList);
});

// Show
router.get("/:id", (req, res) => {
	// res.send(`Visualizzazione post: ${req.params.id}`);
	res.json(postsList.find((item) => item.id === Number(req.params.id)));
});

// Store
router.post("/", (req, res) => {
	res.send("Creato un nuovo post");
});

// Update
router.put("/:id", (req, res) => {
	res.send(`Modifica interamente post: ${req.params.id}`);
});

// Modify
router.patch("/:id", (req, res) => {
	res.send(`Modifica parzialemente post: ${req.params.id}`);
});

// Destroy
router.delete("/:id", (req, res) => {
	res.send(`Elimina il post ${req.params.id}`);
});

module.exports = router;
