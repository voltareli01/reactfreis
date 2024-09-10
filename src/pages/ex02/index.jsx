import { Link } from 'react-router-dom'
import './index.scss'
import { useState } from 'react'
import Cabecalho from '../components/cabecalho'

export default function E02() {
    
    const [kg, setKg] = useState('')
    const [res, setRes] = useState(0)
    
    function desconto(){
        let res = kg*1000
        setRes(res)
    }
    
    return (
        <div className='pagina-e02'>
            <Cabecalho/>
            
            <div className='exercicio'>
                <div className='titulo'>
                    <div className='texto'>
                    <Link to='/'><img src='/assets/images/setinha_freiS.png' alt='voltar' width={30}/></Link>
                        <h2>Exercício 02 - Converter Kg/gramas</h2>
                    </div>
                    <div className='faixa'/>
                </div>
                <div className='descricao'>
                    <p>Implementar um programa em Javascript para <b>converter kilos em gramas</b>.</p>
                </div>
                <div className='formulario'>
                    <div className='campos'>
                        <div className='campo'>
                            <label>Informe o peso em Kg</label>
                            <input placeholder='0' value={kg} onChange={e => setKg(e.target.value)} />
                        </div>
                        <button className='executar' onClick={desconto}>Executar</button>
                    </div>
                    <h3 className='resultado'>O total em gramas é {res}g</h3>
                </div>

            </div>
        </div>
    )
}