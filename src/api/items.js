const express = require('express')

const router = express.Router()

const items = [
    {"id": 1,"name":"orange","qty": 25},
    {"id": 2,"name":"apple","qty": 55},
]

router.get('/', (req, res) => {
  res.json({
    items
  })
})

module.exports = router