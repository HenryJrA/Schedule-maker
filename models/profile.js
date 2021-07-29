import mongoose from 'mongoose'

export {
  Profile
}

const profileSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatar: String,
  working:Boolean,
  schedule: [{type: mongoose.Schema.Types.ObjectId, ref: "Schedule"}]
   
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)