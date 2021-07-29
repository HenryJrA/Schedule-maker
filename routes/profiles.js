import { Router } from 'express'
const router = Router()
import * as profilesCtrl from '../controllers/profiles.js'

export {
	router
}
router.get('/', isLoggedIn,profilesCtrl.index)
// router.get('/:id', profilesCtrl.show)
router.post('/',isLoggedIn, profilesCtrl.create)
router.delete('/:id', isLoggedIn,profilesCtrl.delete)
router.get('/new', isLoggedIn,profilesCtrl.new)
router.get('/:id/edit', isLoggedIn,profilesCtrl.edit)
router.put('/:id', isLoggedIn,profilesCtrl.update)

function isLoggedIn(req, res, next) {
	if (req.isAuthenticated()) return next();
	res.redirect("/auth/google");
  }
