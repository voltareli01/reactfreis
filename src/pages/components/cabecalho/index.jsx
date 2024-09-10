
import './index.scss';

export default function Cabecalho(){
    return(
      <div className='cabecalho'>
          <div className='titulo'>
              <img src='/logo_freiS.png' alt='logo'
              width={40}/>
              <h1>
                  React FreiS
              </h1>
          </div>
          <div className='links'>
              <a href="/" className='link'>Inicio</a>
              <a href="src/pages/sobre" className='link'>Sobre</a>
          </div>
      </div>
    )
}