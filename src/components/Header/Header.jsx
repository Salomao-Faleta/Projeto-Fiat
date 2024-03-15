import { Menu } from '../Menu/Menu';
import { Conta } from '../conta/Conta';
import './Header.css';

export function Header() {
    return (
        <div className='header'>

            <div className='menu'>
                <Menu />
            </div>


            <div>
                {/* URL vindo do site oficial */}
                <a href="#">
                    <img src='https://www.fiat.com.br/content/dam/fiat/nova_home/logos/logo_header_hub_fiat.svg' alt='Logo' />
                </a>
            </div>


            <div className='conta'>
                <Conta />
                <p className='text-conta'>Entre ou Cadastre-se</p>
            </div>



        </div>
    );
}