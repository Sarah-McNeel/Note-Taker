const router = require("express").Router();
const noteRoutes = require("./notes.js")
const path = require("path");

router.use(noteRoutes);

module.exports = router;

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/index.html"))
})

router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "/../../public/notes.html"))
})

module.exports = router
