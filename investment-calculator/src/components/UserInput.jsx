import { useState } from "react";

export default function UserInput({ data, onPropertyChange }) {

    const [investmentData, setInvestmentData] = useState(data);

    function handleChangeInitialInvestment(e) {
        setInvestmentData(prevData => {
            const updatedData = {...prevData};
            updatedData.initialInvestment = e.target.value;
            return updatedData;
        });
        onPropertyChange('initialInvestment', e.target.value);
    }

    function handleChangeAnnualInvestment(e) {
        setInvestmentData(prevData => {
            const updatedData = {...prevData};
            updatedData.annualInvestment = e.target.value;
            return updatedData;
        });
        onPropertyChange('annualInvestment', e.target.value);
    }

    function handleChangeExpectedReturn(e) {
        setInvestmentData(prevData => {
            const updatedData = {...prevData};
            updatedData.expectedReturn = e.target.value;
            return updatedData;
        });
        onPropertyChange('expectedReturn', e.target.value);
    }

    function handleChangeDuration(e) {
        setInvestmentData(prevData => {
            const updatedData = {...prevData};
            updatedData.duration = e.target.value;
            return updatedData;
        });
        onPropertyChange('duration', e.target.value);
    }

    return (
        <div id="user-input">
            <div className="input-group">
                <p>
                    <label>Intitial investment</label>
                    <input type="number" value={investmentData.initialInvestment} onChange={handleChangeInitialInvestment} />
                </p>
                <p>
                    <label>Annual investment</label>
                    <input type="number" value={investmentData.annualInvestment} onChange={handleChangeAnnualInvestment} />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected return</label>
                    <input type="number" value={investmentData.expectedReturn} onChange={handleChangeExpectedReturn} />
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" value={investmentData.duration} onChange={handleChangeDuration} />
                </p>
            </div>
        </div>
    );
}