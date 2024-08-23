
import { formatter } from "../util/investment.js";
import { calculateInvestmentResults } from '../util/investment.js';

export default function Result({ data }) {

    const annualData = calculateInvestmentResults(data);

    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {annualData.map((year) => <tr key={year.year}>
                    <td>{year.year}</td>
                    <td>{formatter.format(year.investmentValue)}</td>
                    <td>{formatter.format(year.interest)}</td>
                    <td>{formatter.format(year.totalInterest)}</td>
                    <td>{formatter.format(year.investedCapital)}</td>
                </tr>)}
            </tbody>
        </table>
    );
}