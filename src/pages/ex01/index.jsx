import { Link } from 'react-router-dom'
import './index.scss'
import { useState } from 'react'
import Cabecalho from '../components/cabecalho'


export default function E01() {
    
    const [num1, setNum1] = useState('')
    const [num2, setNum2] = useState('')
    const [res, setRes] = useState(0)
    
    function desconto(){
        let res = num1 - num2
        setRes(res)
    }
    
    return (
        <div className='pagina-e01'>

            <Cabecalho/>

            <div className='exercicio'>
                <div className='titulo'>
                    <div className='texto'>
                        <Link to='/'><img src='/assets/images/setinha_freiS.png' alt='voltar' width={30}/></Link>
                        <h2>Exercício 01 - Cupom de desconto</h2>
                    </div>
                    <div className='faixa'/>
                </div>
                <div className='descricao'>
                    <p>Implementar um programa em <b>Javascript</b> para calcular o valor final de uma compra a partir do valor da compra e do cupom de desconto. <b>O cupom diz quantos reais</b> terá de desconto.</p>
                </div>
                <div className='formulario'>
                    <div className='campos'>
                        <div className='campo'>
                            <label>Informe o valor do pedido</label>
                            <input placeholder='0' value={num1} onChange={e => setNum1(e.target.value)} />
                        </div>
                        <div className='campo'>
                            <label>Informe o valor do cupom</label>
                            <input placeholder='0' value = {num2} onChange = {e => setNum2(e.target.value)}/>
                        </div>
                        <button className='executar' onClick={desconto}>Executar</button>
                    </div>
                    <h3 className='resultado'>O valor total é R${res}</h3>
                </div>

            </div>
        </div>
    )
}