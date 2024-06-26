import './App.css';
import { Section2 } from './Sections/Section2/Section';
import { Section3 } from './Sections/Section3/Section3';
import { Section4 } from './Sections/Section4/OfertaFiat';
import { Cars } from './components/Cars/Cars';
import { Cookies } from './components/Cookies/Cookies';
import { Footer } from './components/Footer/Footer';
import { FooterSub } from './components/FooterSub/FooterSub';
import { Header } from './components/Header/Header';
import { VerMais } from './components/VerMais/VerMais';

function App() {
    return (
        <div className='containerTags'>
            <Header/>

            <Cars/>

            <VerMais/>

            {/* Carrosel de carros */}
            {/* <Section1/> */}

            <Section2/>

            <Section3/>

            <Section4/>

            <Footer/>

            <FooterSub/>

            <Cookies/>
        </div>
       

    );
}

export default App;