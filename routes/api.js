import { Router } from 'express'
const router = Router()
import * as breadsCtrl from '../controllers/breads.js'


router.get('/breads', breadsCtrl.index)
router.get('/breads/:id', breadsCtrl.show)
router.post('/breads', breadsCtrl.create)
router.put('/breads/:id', breadsCtrl.update)
router.delete('/breads/:id', breadsCtrl.delete)

export {
  router
}
