import React, { useState } from "react"
import BMIService from "../../services/BMI"
import BMIResult from "./BMIResult"

import "./bmi.css"

const BMI = () => {

    const [weight, setWeight] = useState(0)
    const [height, setHeight] = useState(0)
    const [calculator, setCalculator] = useState('metric')
    const [result, setResult] = useState()

    const calculate = async (event) => {
        event.preventDefault()

        const newBMI = {
            weight: parseInt(weight),
            height: parseInt(height),
            calculator: calculator
        }

        try {
            const response = await BMIService.create(newBMI)
            setResult(response)
            setHeight(0)
            setWeight(0)
        } catch {
            console.log('There seems to be an error contacting the server')
        }
    }

    const handleWeight = (event) => {
        event.preventDefault()
        setWeight(event.target.value)
    }

    const handleHeight = (event) => {
        event.preventDefault()
        setHeight(event.target.value)
    }

    return (
        <div className="bmi">
            <form className="bmi-form" onSubmit={calculate}>
                <p>Weight: </p>
                <input 
                value={weight === 0 ? '' : weight}
                type="text"
                onChange={handleWeight}
                required
                />
                <br />
                <p>Height: </p>
                <input 
                value={height === 0 ? '' : height}
                type="text"
                onChange={handleHeight}
                required
                />
                <br />
                <br />
                <div className="bmi-form-unit" onChange={(event) => setCalculator(event.target.value)}>
                    <input type="radio" id="metric" name="units" value="metric" defaultChecked/>
                    <label htmlFor="metric">(kg, cm)</label>
                    <input type="radio" id="us" name="units" value="us"/>
                    <label htmlFor="us">(lbs, in)</label><br />
                <br />
                </div> 
                <button type="submit">Calculate</button>
                <p className="bmi-form-note">Make sure the input corresponds to the right unit</p>
            </form>
            {
                result && (
                        <BMIResult result={result} />
                )
            }
        </div>
    )
}

export default BMI