import React from "react";

class Titulo_texto extends React.Component {


    render() {
        return (
            <div style={{
                marginTop: '100px',
                textAlign: 'center'
            }}>
                <div>
                    <h1>Doações Disponíveis</h1>
                </div>
                <div>
                    <hr style={{
                        margin: '20px 520px',
                        marginBottom: '40px',
                        width: '300px',
                        borderTop: '4px solid #AECFDF'
                    }}></hr>
                </div>
            </div>
        );
    }
}

export default Titulo_texto;