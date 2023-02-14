import { fakeDb } from "../db/FakeDb.js"
import { BadRequest } from "../utils/Errors.js";



class BurgersService {


    removeBurgerById(burgerId) {

        let removedBurger = fakeDb.burgers.findIndex(b => b.id == burgerId)

        if (removedBurger == -1) {
            throw new BadRequest('Bad Burger Id')
        }

        const removed = fakeDb.burgers.splice(removedBurger, 1)

        return removed[0]
    }


    getBurgersById(burgerId) {

        const burger = fakeDb.burgers.find(b => b.id == burgerId)

        if (!burger) {
            throw new BadRequest("Bad Burger Id")
        }

        return burger

    }

    getBurgers() {

        return fakeDb.burgers
    }


    createBurger(rawBurgerData) {


        if (!rawBurgerData.name || rawBurgerData.emoji != '🍔' && rawBurgerData.emoji != '🥗') {
            throw new BadRequest("Invalid Burger Data")
        }

        rawBurgerData.id = (Math.floor(Math.random() * 19000000) + '_ab_' + Math.floor(Math.random() * 19000000))

        fakeDb.burgers.push(rawBurgerData)

        return rawBurgerData

    }




}
export const burgersService = new BurgersService();
