import './App.css';
import { Section2 } from './Sections/Section2/Section';
import { Section3 } from './Sections/Section3/Section3';
import { Cars } from './components/Cars/Cars';
import { Cookies } from './components/Cookies/Cookies';
import { Header } from './components/Header/Header';

function App() {
    return (
        <div className='containerTags'>
            <Header/>

            <Cars/>

            {/* Carrosel de carros */}
            {/* <Section1/> */}

            <Section2/>

            <Section3/>

            <Cookies/>
        </div>
       

    );
}

export default App;