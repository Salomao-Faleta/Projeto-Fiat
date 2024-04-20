import './Footer.css';

export function Footer() {
    return (
        <div className='container-footer'>
            <div className="container-svg">
                <img className='svg-footer' src="https://www.fiat.com.br/content/dam/fiat/nova_home/logos/logo_footer_hub_fiat.svg" alt="FIAT" />
            </div>

            <div className="container-listItens">
                <ul>
                    <li> <a href="">Carros</a> </li>
                    <li> <a href="">Fiat Profissional</a> </li>
                    <li> <a href="">Conheça Abarth</a> </li>
                    <li> <a href="">Fale com a Fiat</a> </li>
                    <li> <a href="">Fiat Comunità</a> </li>
                    <li> <a href="">Política De Privacidade</a> </li>
                </ul>
                <ul>
                    <li> <a href="">Ofertas Fiat</a> </li>
                    <li> <a href="">Vendas Diretas</a> </li>
                    <li> <a href="">Serviços Financeiros</a> </li>
                    <li> <a href="">Reparador Fiat</a> </li>
                    <li> <a href="">Cart</a> </li>
                    <li> <a href="">Mais sites</a> </li>
                </ul>
                <ul>
                    <li> <a href="">Programa Acesse Fiat</a> </li>
                    <li> <a href="">Fiat SemiNovos</a> </li>
                    <li> <a href="">Fiat Lovers</a> </li>
                    <li> <a href="">Giro Fiat</a> </li>
                    <li> <a href="">fiatwear</a> </li>
                </ul>
                <ul>
                    <li> <a href="">Proprietários</a> </li>
                    <li> <a href="">Concessionárias</a> </li>
                    <li> <a href="">Institucional</a> </li>
                    <li> <a href="">Fiat Connect////Me</a> </li>
                    <li> <a href="">Política de Qualidade</a> </li>
                </ul>
            </div>
        </div>
    );

}