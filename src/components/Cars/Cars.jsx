import './Cars.css';
import { listOfSomeCars } from '../../data/listOfCars';

export function Cars() {

    const whichCar = (id)=>{
        const car = listOfSomeCars.find(item => item.id === id);
        console.log(car);
    }

    return (
        <div className='container'>

            {listOfSomeCars.map((item) => (
                <>
                    <div key={item.id} className='containerCar'>
                        <img className='imageCar' src={item.image}/>

                        <h1 className='titleCar'>{item.name}</h1>

                        <h3 className='descriptionCar'>{item.description}</h3>

                        <p className='priceCar'>POR R$ {item.price}</p>


                        <div className='buttonsArea'>
                            <a onClick={()=> whichCar(item.id)} href="#" className='button' id='Eq'>Eu quero</a>
                            <a href="https://api.whatsapp.com/send?phone=553121236000&text=Ol%C3%A1,%20tenho%20interesse%20na%20Oferta%20365102%20Protocolo" target='_blank' className='button' id='wpp'>Negócie por whastApp</a>
                        </div>
                    </div>

                </>
            ))}
        </div>
    );
}