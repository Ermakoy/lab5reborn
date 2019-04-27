import Note from '../../models/Note'
const { Router } = require('express')
const router = Router()
const uniqueId = require('lodash-es/uniqueId')

router.get('/notes', function(req, res, next) {
  Note.find((err, result) => res.json(err || result))
  next()
})

router.get('/notes/:id', function(req, res, next) {
  const { id } = req.params
  Note.findOne(
    {
      id
    },
    (err, result) => res.json(err || result)
  )
  next()
})

router.post('/notes', function(req, res, next) {
  Note.create(new Note({ id: uniqueId() })).then(res.json)
  next()
})

router.put('/notes/:id', function(req, res, next) {
  const { id, note } = req.params
  Note.updateOne({ id }, { note })
})

router.delete('/notes/:id', function(req, res, next) {
  const { id } = req.params
  Note.deleteOne({ id }, (err, result) => res.json(err || result))
  next()
})

module.exports = router
