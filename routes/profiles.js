import { Router } from 'express'
const router = Router()
import * as profilesCtrl from '../controllers/profiles.js'

router.get('/', profilesCtrl.index)
router.post('/', profilesCtrl.create)
router.delete('/:id', profilesCtrl.delete)
router.get('/new', profilesCtrl.new)

export {
	router
}