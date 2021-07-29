import mongoose from 'mongoose'

export {
  Schedule
}

const scheduleSchema = new mongoose.Schema({
  date: String,
  time: Number,
  user: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
}, {
  timestamps: true
})

const Schedule = mongoose.model('Schedule', scheduleSchema)