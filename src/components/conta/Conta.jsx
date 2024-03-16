import './Conta.css';
import { MdOutlinePermContactCalendar } from "react-icons/md";
// import { IoMdContact } from "react-icons/io";
import { CgCloseR } from "react-icons/cg";
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

                   
                </div>

            }



        </div>
    );
}