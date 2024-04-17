// import { useState } from 'react';
import { useState } from 'react';
import './Cookies.css';

export function Cookies() {

    const [closerCookie, setCloserCookie] = useState(true);

    function closerCookieAS() {
        setCloserCookie(!closerCookie)
    }


    return (
        <>
            {closerCookie &&
                <div className="container-cookie">
                    <div className='container-text-cookie'>
                        <p className="text-cookie">
                            Informamos que utilizamos cookies que nos permitem fornecer funcionalidades como segurança,
                            acessibilidade e gerenciamento de rede.
                            Nosso site também pode usar cookies de terceiros para enviar publicidade mais relevante para você.
                            Se quiser saber mais sobre os cookies que usamos para garantir uma melhor experiência em nosso site,
                            acesse nossa <a href="">Política de Privacidade</a>.
                        </p>
                    </div>

                    <div className='container-button-cookie'>
                        <button onClick={closerCookieAS} className='button-ok'>Entendi</button>
                    </div>
                </div>

            }
        </>
    )
}