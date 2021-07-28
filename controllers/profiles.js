import { Profile } from "../models/profile.js"

export{
    newProfile as new,
    create 
}
  
function newProfile(req, res) {
    res.render('profiles/new')
}
function create(req, res) {
    Profile.create(req.body)
    .then(() =>{
    res.redirect('/profiles')
    })
    
  }