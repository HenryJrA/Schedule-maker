import { Schedule } from "../models/schedule.js"

export{
    index,
    create
}
  
function index(req, res) {
    res.render('/new')
}

function create(req, res){
    console.log(req.body)
    res.redirect('/new')
}