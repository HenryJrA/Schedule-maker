import mongoose from 'mongoose'

export {
  Schedule
}

const scheduleSchema = new mongoose.Schema({
  date: String,
  time: Number,
  user: reference
}, {
  timestamps: true
})

const Schedule = mongoose.model('Schedule', scheduleSchema)