import './Section2.css';

export function Section2() {
    return (
        <div className='container-images'>

            <div className="container-image">
                <a href="">
                <img className='banner' id='banner1' src="https://www.fiat.com.br/content/dam/fiat/mini-banner-pulse-abarth/banner-abarth-home-fiat-desk.webp" alt="BANNER" />
                </a>
            </div>

            <div className="container-image">
                <a href="">
                    <img className='banner' id='banner2' src="https://www.fiat.com.br/content/dam/fiat/servicos-financeiros/home-fiat/minibanner-home-financiamnetos-desk-2.webp" alt="BANER" />
                </a>
            </div>

        </div>
    );
}