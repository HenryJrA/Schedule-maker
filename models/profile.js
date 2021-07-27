import mongoose from 'mongoose'

export {
  Profile
}

const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  isAdmin: Boolean 
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)