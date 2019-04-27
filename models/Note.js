import mongoose from 'mongoose'

const noteSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true
  },
  note: {
    type: String
  }
})

const Note = mongoose.model('Note', noteSchema)

export default Note
