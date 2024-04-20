import './Cars.css';
import { listOfCars } from '../../data/listOfCars';

export function Cars() {
    return (
        <div className='container'>

            {listOfCars.map((listOfCars) => (
                <>
                    <div key={listOfCars.id} className='containerCar'>
                        <img className='imageCar' src={listOfCars.image}/>

                        <h1 className='titleCar'>{listOfCars.name}</h1>

                        <h3 className='descriptionCar'>{listOfCars.description}</h3>

                        <p className='priceCar'>POR R$ {listOfCars.price}</p>


                        <div className='buttonsArea'>
                            <a href="#" className='button' id='Eq'>Eu quero</a>
                            <a href="https://api.whatsapp.com/send?phone=553121236000&text=Ol%C3%A1,%20tenho%20interesse%20na%20Oferta%20365102%20Protocolo" target='_blank' className='button' id='wpp'>Negócie por whastApp</a>
                        </div>
                    </div>

                </>
            ))}
        </div>
    );
}