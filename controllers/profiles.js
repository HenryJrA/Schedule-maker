import { Profile } from "../models/profile.js"
export{
    index,
    newProfile as new,
    create,
    deleteProfile as delete,
    edit,
    update
}
function update(req,res){
    req.body.working = !! req.body.working
    Profile.findByIdAndUpdate(req.params.id, req.body, {new:true})
        .then((profile) =>{
            res.redirect(`/profiles/${profile._id}`)
        })
        
}
function edit(req, res){
    Profile.findById(req.params.id, function(err, profile){
        res.render('profiles/edit', {
            profile,
            err
        })
    })
}
function newProfile(req, res) {
    res.render('profiles/new')
}
function create(req, res){
    req.body.working = !!req.body.working
    Profile.create(req.body)
    .then(() =>{
        res.redirect('/profiles')
    })
}
function deleteProfile(req, res){
    Profile.findByIdAndDelete(req.params.id, function(err, book){
        res.redirect('/profiles')
    })
}
function index(req,res) {
  Profile.find({})
  .then(profiles => {
      console.log(profiles)
    res.render('profiles/index',{
      profiles
    })
  })
}