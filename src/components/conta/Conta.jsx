import './Conta.css';
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { CgCloseR } from "react-icons/cg";
import { FcGoogle } from "react-icons/fc";
import { useState } from 'react';

export function Conta() {

    const [openConta, setOpenConta] = useState(false);

    //abrindo a parte da conta
    function openToggleConta() {
        setOpenConta(true);
    }

    //Fechando a parte da conta
    function closeToggleConta(){
        setOpenConta(false);
    }


    return (
        <div>

            <div className='conta-icone' onClick={openToggleConta}>
                <MdOutlinePermContactCalendar className='icone-conta' />
                <p className='text-conta'>Entre ou Cadastre-se</p>
            </div>


            {openConta &&
                <div className='conta-area'>

                    <div className='close' onClick={closeToggleConta}>
                        <CgCloseR />
                    </div>

                    <h1 className='titulo'>
                        <IoMdContact/>
                        FIAT ID
                    </h1>

                    <div className='infos'>
                        <p>Acesse sua área exclusiva</p>

                        <ul>
                            <li>Salve os carros montados</li>
                            <li>Acompanhe suas negociações</li>
                            <li>Salve seus carros na garagem digital</li>
                            <li>Cadastre-se ou entre com login Fiat e Jeep</li>
                        </ul>
                    </div>


                    <div className="login">
                        <div className="lg google">
                            <p> <FcGoogle/> Entar com Google</p>
                        </div>

                        <div className="lg facebook">
                            <p>Entar com Facebook</p>
                        </div>

                        <div className="lg email">
                            <p>Entar com E-mail</p>
                        </div>


                    </div>

                   
                </div>

            }



        </div>
    );
}