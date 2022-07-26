import React  from "react";
import Table from 'react-bootstrap/Table'
import api from '../../services/Api';

class Ranking extends React.Component{

    constructor(props) {
        super(props);
    
        this.state = {
            ranks: []
        };
      }

      async componentDidMount(){
        const res = await api('/doadores/ranking');
        this.setState({ranks: res.data});
    } 

    render(){
        const divStyle = {
            marginTop: '70px',
            overflow: 'auto',
            width: '30%', 
            height: '250px',
            marginBottom: '50px',
            marginLeft:'450px',
          };
          const divStyleBack = {
              backgroundColor: '#F0FFF0',
              height: '390px',
              paddingTop: '1px'
          }
          const {ranks} = this.state;
        return(
            <div style={divStyleBack}>
                
                <div style={divStyle}>
                    <Table striped="columns" bordered hover variant="dark">
                        <thead>
                            <tr>
                            <th>Quantidade</th>
                            <th>Nome</th>
                            </tr>
                        </thead>
                        <tbody>
                        {ranks.map(rank => (
                            <tr key={rank.id}>
                            <td>{rank.qtd}</td>
                            <td>{rank.nome}</td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
}

export default Ranking; 