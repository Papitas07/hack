const food = require('../helpers/shopHelpers');

module.exports = (router) => {

    router.get('/foodsType', (req, res) => {

        food.getFoodsType(req, res).then(foodsType => res.json(foodsType));
    });

    // router.post('/foods', (req,res) => {

    //     food.createFood(req,res).then()
    // })

    router.get('/foods', (req,res) => {

        food.getFoods(req,res).then(food => res.json(food));
    })

};