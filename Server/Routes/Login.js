const express = require(`express`)
const router = express.Router()

router.get(`/`, (req, res) => {
    res.send("WelcoME tejal")
})

module.exports = router