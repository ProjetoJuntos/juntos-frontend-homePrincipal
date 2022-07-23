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
        const res = await api('/entregadores/ranking');
        this.setState({ranks: res.data});
    } 

    render(){
        const divStyle = {
            marginTop: '80px',
            overflow: 'auto',
            width: '55%', 
            height: '250px',
            marginLeft:'330px',
            marginBottom: '50px'
          };
          const {ranks} = this.state;
        return(
            <div style={divStyle}>
                

                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                        <th>Nome</th>
                        </tr>
                    </thead>
                    <tbody>
                    {ranks.map(rank => (
                        <tr key={rank.id}>
                        <td>{rank.nome}</td>
                        </tr>
                    ))}
                    </tbody>
                    </Table>
               
            </div>
        );
    }
}

export default Ranking; 