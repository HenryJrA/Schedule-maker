import { Schedule } from "../models/schedule.js"
import { Profile } from "../models/profile.js"
export{
    index,
    newSchedule as new,
    create,
    deleteSchedule as delete,
    edit,
    update
    // show
}
// function show(req, res){
//     console.log(req.res)
//     res.redirect("/schedules/schedule")
// }

// function show(req,res){
//     Schedule.findById(req.params.id)
//     .then(schedule => {
//         res.render('schedules/index',{
//             schedule
//         })
//     })
// }
// function show(req, res) {
//     Schedule.findById(req.params.id)
//     .populate('schedules')
//     .then(schedule => {
//       Schedule.findById(req.user.schedule)
//       .then(userSchedule => {
//         res.render('/index', {
//           // Profile of the user clicked
//           schedule,
//           // Profile of the logged in user
//           userSchedule,
//           title: `${schedule.name}'s schedule`
//         })
//       })
//     })
//     .catch(err => {
//       console.log(err)
//       res.redirect('/')
//     })
//   }
function update(req,res){
    console.log('im in the updtae function')
    // req.body.working = !! req.body.working
    // console.log(req.body.working)
    Schedule.findByIdAndUpdate(req.params.id.populate('schedule'), req.body, {new:true})
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
    Profile.find({})
    .then(profiles=>{
        console.log(profiles)
        res.render('schedules/new', {
            profiles
        })
    })
}
function create(req, res){
    // req.body.working = !!req.body.working
    Schedule.create(req.body)
    .then(() =>{
        res.redirect('/schedules')
    })
}
function deleteSchedule(req, res){
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