import { Router } from 'express'

export {
  router
}

const router = Router()
router.get('/', function (req, res) {
  console.log(req.user)
  res.render('index', { title: 'Home Page', user: req.user ? req.user : null })
  
})
