import { Profile } from "../models/profile.js"

export{
    newProfile as new 
}
  
function newProfile(req, res) {
    res.render('profiles/new')
}