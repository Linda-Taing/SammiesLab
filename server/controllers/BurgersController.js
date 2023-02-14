import { burgersService } from "../services/BurgersService.js"
import { logger } from "../utils/Logger.js"
import BaseController from "../utils/BaseController.js";

export class BurgersController extends BaseController {

    constructor() {
        super('api/burgers')

        this.router
            .get('', this.getBurgers)
            .get('/:burgerId', this.getBurgersById)
            .post('', this.createBurger)
            .delete('/:burgerId', this.removeBurgerById)



    }

    getBurgers(req, res, next) {
        try {
            const burger = burgersService.getBurgers()
            // logger.log('am I doing this right?')
            res.send(burger)
        } catch (error) {
            next(error)
        }
    }

    getBurgersById(req, res, next) {
        try {
            let burgerId = req.params.burgerId
            logger.log(burgerId)

            const burger = burgersService.getBurgersById(burgerId)

            res.send(burger)

        } catch (error) {
            next(error)
        }
    }

    createBurger(req, res, next) {
        try {

            let rawBurgerData = req.body

            let newBurger = burgersService.createBurger(rawBurgerData)

            res.send(newBurger)

        } catch (error) {
            next(error)
        }
    }

    removeBurgerById(req, res, next) {
        try {

            let burgerId = req.params.burgerId
            let removedBurger = burgersService.removeMBurgerById(burgerId)
            res.send(removedBurger)
        } catch (error) {
            next(error)
        }
    }


}

