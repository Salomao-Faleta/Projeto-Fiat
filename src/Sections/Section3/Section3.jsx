import './Section3.css';
import { ListSection3 } from '../../data/ListSection3';

export function Section3() {
    return (
        <div className="grid-section3">

            {ListSection3.map((ListSection3) => (
                <>
                    <div className="container-section3">

                        <img className='image-section3' src={ListSection3.image} alt="Banner" />

                        <h1 className='title-section3'>{ListSection3.title}</h1>

                        <p className='description-section3'>{ListSection3.description}</p>

                    </div>
                </>
            ))}
        </div>
    );
}





// {ListSection3.map((ListSection3) => (
//     <>
//         <div className="item-image-section3">
//             <img className='image-section3' src={ListSection3.image} alt="Banner" />
//         </div>

//         <div className="item-name-section3">
//             <h1>{ListSection3.title}</h1>
//         </div>

//         <div className="item-description-section3">
//             <p>{ListSection3.description}</p>
//         </div>
//     </>
// ))}