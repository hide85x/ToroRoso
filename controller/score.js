const Score = require('../model/Score')

exports.getScores = async (req, res, next) => {
    const loggedUser = req.loggedUser
    try {
        let scores = await Score.findAll({ where: { userId: loggedUser.id } })
        scores = scores.sort((a, b) => a.score - b.score)

        res.json({ msg: "cool", data: scores })
    }
    catch (err) {
        console.log(err)
        next(err)
    }
};

exports.postScore = async (req, res, next) => {
    const loggedUser = req.loggedUser;
    const userId = loggedUser.id
    const { score } = req.body;
    console.log(req.body.score)
    try {
        //do sequelize  new Score( musi byc podany obiekt)
        const newScore = await new Score({ score: score, userId: userId }).save()
        console.log(newScore)
        res.json(newScore)
    }
    catch (err) {
        next(err);
    }
};

exports.scoreSummary = async (req, res, next) => {
    const loggedUser = req.loggedUser;
    try {
        const scores = await Score.findAll({ where: { userId: loggedUser.id } });

        const maxScore = scores.reduce((prev, current) => (prev.score > current.score) ? prev : current)

        const minScore = scores.reduce((prev, current) => (current.score < prev.score) ? current : prev
)
        const sumScores = scores.reduce((sum, { score }) => sum + score, 0);

        res.json({ msg: "all the scores", maxScore: maxScore, minScore: minScore, sumOfScores: sumScores })
    }
    catch (err) {
        next(err);
    }
}