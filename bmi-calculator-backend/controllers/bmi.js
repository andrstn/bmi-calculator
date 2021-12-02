const BMIRouter = require("express").Router()

BMIRouter.post('', async (request, response) => {
    const body = request.body

    const answer = body.calculator === 'metric'
    ? body.weight / ((body.height / 100) * (body.height / 100))
    : (body.weight / (body.height * body.height)) * 703

    const result = Number.parseFloat(answer).toFixed(1)

    console.log(typeof result)

    if (result >= 25) {
        return response.json({
            bmi: result,
            health: 'Overweight BMI'
        })
    } else if (result < 25 && result >= 18.5) {
        return response.json({
            bmi: result,
            health: 'Healthy BMI'
        })
    } else if (result < 18.5) {
        return response.json({
            bmi: result,
            health: 'Underweight BMI'
        })
    } else if (result === 'NaN') {
        return response.json({
            bmi: result,
            health: 'Input Invalid'
        })
    }
})

module.exports = BMIRouter