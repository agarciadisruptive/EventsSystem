import mongoose from 'mongoose'

// título, descripción, banner, logo (evento, banda, artista, etc), fecha, hora y ubicación.

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  date: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
})

export default mongoose.model('Event', eventSchema)