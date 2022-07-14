import React from 'react';
import hr_linha from '../../img/hr_linha.png';

    class Hr_divisao extends React.Component{

        render(){
            return(
                <div id='linha_divisao'>
                    <img src={hr_linha} className="d-block" width="100%"></img>
                </div>
            );
        }
    }
    export default Hr_divisao;