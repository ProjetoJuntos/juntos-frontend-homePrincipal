// import React, { Component } from 'react';
// import { LoginService } from '../../services/loginService';
// import logo from '../..';
// import { Link } from 'react-router-dom';

// export default class Login extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             nome: '',
//             senha: '',
//             loading: false
//         }

//         LoginService.logout();
//     }

//     handleChange = (e) => {
//         console.log('a');
//         const { name, value } = e.target;
//         console.log(`nome ${name}, valor ${value}`);
        
//         if (value === 'on') {
//             let valor = true;
//             valor = this.state.name ? false : true;
//             console.log(valor);
    
//         }else {
//             this.setState({ [name]: value });
//         }

//         const { nome, senha } = this.state;
//         console.log(`${nome}, ${senha}, a`);
//         if (!(nome && senha))
//             return;

//         this.setState({ loading: true });

//         this.loadDados(nome, senha);
//     }

//     // componentDidMount() {
//     //     //this.loadDados();
//     // }

//     loadDados = (nome, senha,) => {
//         LoginService.login(nome, senha)
//             .then(
//                 user => {
//                     if (user !== null) {
//                         let caminho;
                        
//                         caminho = '/HomePrivada'
                    
//                         const { from } = this.props.location.state || { from: { pathname: caminho } };
//                         this.props.history.push(from);
//                     }
//                 },
//                 error => this.setState({ error, loading: false })
//             );
//     }

//     render() {
//         return (<div>codigo login html</div>);}
// }
