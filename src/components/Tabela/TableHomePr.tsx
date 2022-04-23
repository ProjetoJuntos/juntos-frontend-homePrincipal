import React from 'react';
// import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import style from '../../css/tableStyle.module.css';
// import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
// import 'bootstrap/dist/css/bootstrap.min.css';

class TableHomePr extends React.Component {

    render() {
        return (
            <div className={style.styleTable}>

                <table className='table table-hover'>
                    <thead>
                        <tr>
                            <th>Vestuário</th>
                            <th>Alimentação</th>
                            <th>Bairro de destino</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Cx Calça Jeans</td>
                            <td>20 cestas básicas</td>
                            <td>Vila Oliveira - Z/N SP</td>
                        </tr>
                        <tr>

                            <td>Cx Calmisetas adulto</td>
                            <td>50 kg arroz branco</td>
                            <td>Jabaquara- Z/S SP</td>
                        </tr>
                        <tr>
                            <td>Cx Calmisetas infantil</td>
                            <td>3 cestas básicas</td>
                            <td>Pirituba - Z/O  SP</td>
                        </tr>
                        <tr>
                            <td>Cx Tênis juvenil</td>
                            <td>3cx de leite integral</td>
                            <td>Bela Vista - Centro  SP</td>
                        </tr>
                        <tr>

                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>Larry the Bird</td>
                            <td>@twitter</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>

                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>Larry the Bird</td>
                            <td>@twitter</td>
                            <td>@fat</td>
                        </tr>
                        <tr>

                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>Larry the Bird</td>
                            <td>@twitter</td>
                            <td>@fat</td>
                        </tr>
                        <tr>

                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>Larry the Bird</td>
                            <td>@twitter</td>
                            <td>@fat</td>
                        </tr>
                        <tr>

                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>Larry the Bird</td>
                            <td>@twitter</td>
                            <td>@fat</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TableHomePr;