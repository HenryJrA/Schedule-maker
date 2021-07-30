import { Router } from 'express'
const router = Router()
import * as schedulesCtrl from '../controllers/schedules.js'

export {
	router
}

router.get('/', isLoggedIn,schedulesCtrl.index)
// router.get('/:id', isLoggedIn, schedulesCtrl.show)
router.post('/',isLoggedIn, schedulesCtrl.create)
router.delete('/:id', isLoggedIn,schedulesCtrl.delete)
router.get('/new', isLoggedIn,schedulesCtrl.new)
router.get('/:id/edit', isLoggedIn,schedulesCtrl.edit)
router.put('/:id', isLoggedIn,schedulesCtrl.update)

function isLoggedIn(req, res, next) {
	if (req.isAuthenticated()) return next();
	res.redirect("/auth/google");
  }