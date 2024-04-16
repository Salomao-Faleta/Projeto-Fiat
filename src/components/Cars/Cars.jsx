import './Cars.css';
import { listOfCars } from '../../data/listOfCars';

export function Cars() {
    return (
        <div className='container'>

            {listOfCars.map((listOfCars) => (
                <>
                    <div className='containerCar'>
                        <img className='imageCar' src={listOfCars.image} alt="" />

                        <h1 className='titleCar'>{listOfCars.name}</h1>

                        <h3 className='descriptionCar'>{listOfCars.description}</h3>

                        <p className='priceCar'>POR R$ {listOfCars.price}</p>


                        <div className='buttonsArea'>
                            <button className='button' id='Eq'>Eu quero</button>
                            <button className='button' id='wpp'>Negócie por whastApp</button>
                        </div>
                    </div>

                </>
            ))}
        </div>
    );
}