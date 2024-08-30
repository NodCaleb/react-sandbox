import axios from "axios";

const BACKEND_URL = 'https://react-native-cource-d8368-default-rtdb.europe-west1.firebasedatabase.app';

export function storeExpense(expenseDada) {
    axios.post(
        BACKEND_URL + '/expenses.json',
        expenseDada
    );
}

export async function fetchExpenses(){
    const response = await axios.get(BACKEND_URL + '/expenses.json');

    console.log(response.data);

    const expenses = [];

    for (const key in response.data){
        const expenseObj = {
            id: key,
            amount: response.data[key].amount,
            date: new Date(response.data[key].date),
            description: response.data[key].description
        };
        expenses.push(expenseObj);
    }

    return expenses;
}