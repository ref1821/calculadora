import { render } from '@testing-library/react'
import React, {useState} from 'react'
import './botones.css'


const Botones = () => {

    const [numero, setNumero] = useState(0)
    function cls(){
        numero = " "
    }
    
    
    function nueve(){
        setNumero(numero+9)
        console.log(numero)
    }
    
    function ocho(){
        setNumero(numero+8)
        console.log(numero)
    }
    function siete(){
        setNumero(numero+7)
        console.log(numero)
    }
    function seis(){
        setNumero(numero+6)
        console.log(numero)
    }
    function cinco(){
        setNumero(numero+5)
        console.log(numero)
    }
    function cuatro(){
        setNumero(numero+4)
        console.log(numero)
    }
    function tres(){
        setNumero(numero+3)
        console.log(numero)
    }
    function dos(){
        setNumero(numero+2)
        console.log(numero)
    }
    function uno(){
        setNumero(numero+1)
        console.log(numero)
    }
    function cero(){
        setNumero(numero+0)
        console.log(numero)
    }
    function clear(){
        setNumero(cls())
        console.log(numero)
    }
    function sumar(){
        setNumero(numero+"+")
    }
    function restar(){
        setNumero(numero+"-")
    }
    function multiplicar(){
        setNumero(numero+"*")
    }
    function dividir(){
        setNumero(numero+"/")
    }
    function igual(){
        setNumero(numero+0)
    }


    return (
        <div className="container">
            <input type="text" value={numero} id="answer"></input>
            <button className='number' id='siete' onClick={siete}>7</button>
            <button className='number' id='ocho' onClick={ocho}>8</button>
            <button className='number' id='nueve' onClick={nueve} >9</button>
            <button className='number' id='sumar' onClick={sumar}>+</button>
            <button className='number' id='cuatro' onClick={cuatro}>4</button>
            <button className='number' id='cinco' onClick={cinco}>5</button>
            <button className='number' id='seis' onClick={seis}>6</button>
            <button className='number' id='restar' onClick={restar}>-</button>
            <button className='number' id='uno' onClick={uno}>1</button>
            <button className='number' id='dos' onClick={dos}>2</button>
            <button className='number' id='tres' onClick={tres}>3</button>
            <button className='number' id='multiplicar' onClick={multiplicar}>*</button>
            <button className='number' id='cero' onClick={cero}>0</button>
            <button className='number' id='clear' onClick={clear}>clear</button>
            <button className='number' id='dividir' onClick={dividir}>/</button>
            <button className='number' id='igual' onClick={igual}>=</button>
        </div>
        
    )
    
}


export default Botones;
