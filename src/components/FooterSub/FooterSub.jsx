import './FooterSub.css';
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

export function FooterSub() {
    return (
        <div className='container-footerSub'>

            <div className="direitos">
                <p className="direitos-text">
                    Copyright Fiat 2024 - Todos os direitos reservados.
                </p>
            </div>


            <div className="redes-sociais">
                <div>
                    <p>Acompanhe a Fiat nas Redes Sociais:</p>
                </div>

                <div>
                    <a target='_blank' href="https://twitter.com/FiatBR"><FaTwitter className='icone' /></a>
                    <a target='_blank' href="https://www.facebook.com/Fiat/?locale=pt_BR"><FaFacebook className='icone' /></a>
                    <a target='_blank' href="https://www.youtube.com/user/fiat"><FaYoutube className='icone' /></a>
                    <a target='_blank' href="https://www.instagram.com/fiatbr/"><FaInstagram className='icone' /></a>

                </div>

            </div>

            <div className="button">
                <a target='_blank' href="https://www.fiat.com.br/content/dam/fiat/fichas-de-resgate/Fichas-de-resgates-v1.pdf">
                    <button className=''>Fichas de Resgate</button>
                </a>
            </div>






        </div>
    )
}