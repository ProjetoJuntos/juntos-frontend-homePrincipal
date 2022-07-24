// import api from './Api';

// export const LoginService = {
//     login,
//     logout
// }

// function login(nome, senha){

//     const requestOptions = {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' }
//     };
//     return api.post('/login' + nome, senha, requestOptions).then(
//         person => {
//             console.log(person)
//             if(person.data !== ""){
//                 localStorage.setItem('user', JSON.stringify(person.data));
//                 console.log(person.data);
//                 alert('Bem vindo!');
//                 return {person};
//             }else{
//                 alert('Usuario e/ou senha incorretos');                
//                 return null;
//             }
//         }
//     )

// }

// function logout() {
//     // remove user from local storage to log user out
//     localStorage.removeItem('user');
// }