import { Profile } from "../models/profile.js"
export{
    newProfile as new,
    create
}
function newProfile(req, res) {
    res.render('profiles/new')
}
function create(req, res){
    console.log("I'm in the profiles create function!")
    console.log(req.body)
    req.body('/profile/new')
    res.redirect('/profile/new')
}