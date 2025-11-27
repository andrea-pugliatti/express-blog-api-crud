const express = require("express");
const postsRouter = require("./routers/posts");

const app = express();

const PORT = 3000;

// Handle static assets
app.use(express.static("public"));

// Handle json
app.use(express.json());

app.listen(PORT, () => {
	console.log(`Listening on http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
	res.send("Main route");
});

app.use("/posts", postsRouter);
