import { useState } from 'react';
import './Menu.css';
import { RxHamburgerMenu } from "react-icons/rx";

export function Menu() {

    const [menuToggle, setMenuToogle] = useState(false);

    function toogle() {
        setMenuToogle(!menuToggle);
    }

    return (
        <div className='menu' onClick={toogle}>

            <div className='menu-icone'>
                <RxHamburgerMenu className='icone-menu' />
                <p className='text-menu'>Menu</p>
            </div>


            {menuToggle &&
                <div className='menu-area'>

                    <ul>
                        <li>Carros</li>
                        <li>Ofertas Fiat</li>
                        <li>Programa Acesse Fiat</li>
                        <li>Proproetários</li>
                        <li>Fiat Professional</li>
                        <li>Vendas Diretas</li>
                        <li>Fiat Seminovos</li>
                        <li>Concessionárias</li>
                        <li>Conheça Abarth</li>
                        <li>Serviços Financeiros</li>
                        <li>Fiat Lovers</li>
                        <li>Institucional</li>
                        <li>Fale com a Fiat</li>
                        <li>Reparador Fiat</li>
                        <li>Giro Fiat</li>
                        <li>Fiat Connect////Me</li>
                        <li>Fiat Comunità</li>
                        <li>Cart</li>
                        <li>fiatwear</li>
                        <li>Política de Qualidade</li>
                        <li>Política de Privacidade</li>
                        <li>Mais</li>
                    </ul>

                    <div className='infors'>
                        <a href=""> <p>Fale conosco</p> </a>
                        <a href=""> <p>Privacidade</p> </a>
                    </div>
                </div>

            }



        </div>
    );
}