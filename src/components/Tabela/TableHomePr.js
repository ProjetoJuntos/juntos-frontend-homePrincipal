import React, {useState} from 'react';
// import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import style from '../../css/tableStyle.module.css';
// import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button';
import style1 from '../../css/pesquisacepStyle.module.css';
import api from '../../services/Api';
// import Data from '../../mock-data-doacoes.json'

class TableHomePr extends React.Component {
    state={
        cep: '',
        filmes: [],
    }

    async componentDidMount(){
        const res = await api('');
        console.log(res.data);
        this.setState({filmes: res.data});
    }
    
    render() {
        return (
        <div>
            <div className={style1.pesquisacep}>
                <InputGroup>
                    <Form.Control 
                    id="cep"
                    value={this.state.value}
                    placeholder="Procurar doações por CEP" 
                    onChange={this.handleChange}
                    />
                    <Button type="submit" 
                    variant="outline-info" 
                    // onClick={this.buscar} 
                    id="button-addon2">
                    Buscar
                    </Button>
                </InputGroup>
            </div>
            
            <div className={style.styleTable}>
        
                <table className='table table-hover'>
                    <thead>
                        <tr>
                            <th>Doação</th>
                            <th>Bairro de destino</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {
                        this.state.data.map(this.renderRows)
                        } */}
                    </tbody>
                </table>
            </div>
        </div>
        );
    }
}

export default TableHomePr;