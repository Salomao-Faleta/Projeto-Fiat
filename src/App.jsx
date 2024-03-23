import './App.css';
import { Cars } from './components/Cars/Cars';
import { Header } from './components/Header/Header';

function App() {
    return (
        <div className='containerTags'>
            <Header/>

            <Cars/>
        </div>
       

    );
}

export default App;