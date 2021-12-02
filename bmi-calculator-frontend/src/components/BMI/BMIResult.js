import React from "react"

import "./bmi.css"

const BMIResult = ({result}) => {
    return (
        <>
            {
                result.bmi === 'NaN' 
                ? <div className="bmi-result-error">
                    <p>{result.bmi}</p>
                    <p>({result.health})</p>
                </div>
                : <div className="bmi-result-success">
                    <p>{result.bmi}</p>
                    <p>( {result.health} )</p>
                </div>
            }
            
        </>
    )
}

export default BMIResult