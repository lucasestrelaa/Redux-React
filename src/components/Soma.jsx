import React from "react";
import { connect } from 'react-redux'

import Card from './Card';

const Soma = props => {
    const {min, max} = props 

    return(
        <Card title='Soma de Números' blue>
            <div className="Intervalo">
                <span>
                    <strong>Resultado:</strong>
                    <strong>{ min + max }</strong>
                    
                </span>
            </div>
            
        </Card>
    )
}
function mapStateToProps(state){
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

export default connect(mapStateToProps)(Soma)