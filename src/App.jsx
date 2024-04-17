import './App.css';
import { Cars } from './components/Cars/Cars';
import { Cookies } from './components/Cookies/Cookies';
import { Header } from './components/Header/Header';

function App() {
    return (
        <div className='containerTags'>
            <Header/>

            <Cars/>

            <Cookies/>
        </div>
       

    );
}

export default App;