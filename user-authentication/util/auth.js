import axios from "axios";

const API_KEY = 'AIzaSyD2yRr3RNL8pjAlrxJ90_7TDk-H4k_t5Zo'

async function authenticate(mode, email, password){
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

    const response = await axios.post(
        url,
        {
            email: email,
            password: password,
            returnSecureToken: true
        }
    );

    const token = response.data.idToken;

    // console.log(token);

    return token;
}

export async function createUser(email, password) {
    return authenticate('signUp', email, password);
}

export async function login(email, password) {
    return authenticate('signInWithPassword', email, password);
}

