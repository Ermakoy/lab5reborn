import mongoose from 'mongoose'

const noteSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true
  },
  text: {
    type: String
  }
})

const Note = mongoose.model('Note', noteSchema)

export default Note
