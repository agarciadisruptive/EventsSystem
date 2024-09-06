import mongoose from 'mongoose'

const categorySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: true,
    unique: true
  }
}, {
  timestamps: true
})

export default mongoose.model('Category', categorySchema)