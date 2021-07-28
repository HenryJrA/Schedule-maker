import { Router } from 'express'
const router = Router()
import * as schedulesCtrl from '../controllers/schedules.js'

export {
	router
}

router.get('/new', schedulesCtrl.index)