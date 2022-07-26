import React, {useState} from 'react';
import style from '../../css/tableStyle.module.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup'
import style1 from '../../css/pesquisacepStyle.module.css';
import api from '../../services/Api';
import Table from 'react-bootstrap/Table';


class TableHomePr extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            doacoes: [],
            doacoesFilter: [],
            busca: ''
        };
      }

    async componentDidMount(){
        const res = await api('doacoes');
        this.setState({doacoes: res.data});
        this.setState({doacoesFilter: res.data});
    } 

    arrayFilter(arg){
        const newArray = this.state.doacoes.filter(cep => cep.CEP.indexOf(arg) > -1)
        if(arg.length > 0){
            this.setState({doacoesFilter: newArray});
        }else{
            
            this.setState({doacoesFilter: this.state.doacoes});
        }
        console.log("newArray AQUI", newArray, "Arg", arg, arg.length)
    }

    render() {
        const divStyle = {
            overflow: 'auto',
            width: '55%', 
            height: '250px',
            marginLeft:'330px',
            marginBottom: '50px'
          };
        const {doacoes} = this.state;
        const {doacoesFilter} = this.state;

        console.log("Array doações", doacoes)
        return (
            
        <div>
     

            <div className={style1.pesquisacep}>
                
                <InputGroup>
                    <Form.Control 
                    id="cep"
                    placeholder="  Digite o CEP para achar doações" 
                    onChange={(ev) => this.arrayFilter(ev.target.value)}
                    />
                </InputGroup>
            </div>
            
            {/* <div className={style.styleTable} > */}
            <div style={divStyle}> 
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Doação</th>
                            <th>Descrição</th>
                            <th>CEP</th>
                        </tr>
                    </thead>
                    <tbody>
                    {doacoesFilter.map(doacao => (
                        <tr key={doacao.id}>
                            <td> {doacao.tipo}</td>
                            <td>{doacao.desc}</td>
                            <td>{doacao.CEP}</td>
                        </tr>
                        ))}
                    </tbody>
                </Table>          
            </div>
        </div>
        );
    }
}

export default TableHomePr;