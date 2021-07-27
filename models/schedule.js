import mongoose from 'mongoose'

export {
  Schedule
}

const scheduleSchema = new mongoose.Schema({
  date: String,
  time: Number,
//   user:{ type: String, ref: 'user'}
}, {
  timestamps: true
})

const Schedule = mongoose.model('Schedule', scheduleSchema)