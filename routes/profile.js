import { Router } from 'express'
const router = Router()
import * as profilesCtrl from '../controllers/profiles.js'

export {
	router
}

router.get('/new', profilesCtrl.new)