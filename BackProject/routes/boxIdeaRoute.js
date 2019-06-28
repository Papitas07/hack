const ideas = require('../helpers/boxIdeaHelpers');

module.exports = (router) => {

    router.get('/boxideas', (req, res) => {

        ideas.getIdea(req, res).then(ideas=> res.json(ideas));
    });

    // router.post('/ideass', (req,res) => {

    //     ideas.createideas(req,res).then()
    // })

    router.post('/boxideas', (req,res) => {
        
        ideas.createIdea(req,res).then(ideas => res.json(ideas));
    });

};