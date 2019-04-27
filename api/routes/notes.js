import { uniqueId } from 'lodash-es'
import Note from '../../models/Note'
const { Router } = require('express')
const router = Router()

router.get('/notes', function(req, res, next) {
  Note.find((err, result) => res.json(err || result))
})

router.get('/notes/:id', function(req, res, next) {
  const { id } = req.params

  Note.findOne(
    { id: Number(id) },
    (err, result) => console.log(result) || res.json(err || result)
  )
})

router.post('/notes', function(req, res, next) {
  const newNote = new Note({ id: uniqueId(), note: '' })
  newNote
    .save()
    .then(result => console.log(result) || res.json(result))
    .catch(res.json)
})

router.put('/notes/:id', function(req, res, next) {
  const { id } = req.params
  const { note } = req.body
  console.log(req.body)
  Note.updateOne({ id }, { note })
    .then(res.json)
    .catch(res.json)
})

router.delete('/notes/:id', function(req, res, next) {
  const { id } = req.params
  Note.deleteOne({ id }, (err, result) => res.json(err || result))
})

module.exports = router
