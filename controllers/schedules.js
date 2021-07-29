import { Schedule } from "../models/schedule.js"
export{
    index,
    newSchedule as new,
    create,
    deleteProfile as delete,
    edit,
    update
    // show
}

// function show(req,res){
//     Profile.findById(req.params.id)
//     .then(profile => {
//         res.render('profiles/show',{
//             profile
//         })
//     })
// }
function update(req,res){
    console.log('im in the updtae function')
    // req.body.working = !! req.body.working
    // console.log(req.body.working)
    Schedule.findByIdAndUpdate(req.params.id, req.body, {new:true})
        .then((schedule) =>{
            res.redirect('/schedules/')
        })
        
}
function edit(req, res){
    Schedule.findById(req.params.id, function(err, schedule){
        res.render('schedules/edit', {
            schedule,
            err
        })
    })
}
function newSchedule(req, res) {
    res.render('schedules/new')
}
function create(req, res){
    // req.body.working = !!req.body.working
    Schedule.create(req.body)
    .then(() =>{
        res.redirect('/schedules')
    })
}
function deleteProfile(req, res){
    Schedule.findByIdAndDelete(req.params.id, function(err, schedule){
        res.redirect('/schedules')
    })
}
function index(req,res) {
  Schedule.find({})
  .then(schedules => {
      
    res.render('schedules/index',{
      schedules
    })
  })
}