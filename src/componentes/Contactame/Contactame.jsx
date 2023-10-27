import './Contactame.css'
import { useState } from 'react'
import emailjs from 'emailjs-com'

const Contactame = () => {

    const formularioContacto = "../img/formulario-contacto.jpeg"
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [consulta, setConsulta] = useState('');

    const enviarConsulta = (e) => {
        e.preventDefault();

        const templateParams = {
            from_name: nombre,
            from_email: email,
            from_whatsapp: whatsapp,
            message: consulta
        };

        emailjs.send(
            "service_5loet3x",
            "template_1te8te9",
            templateParams,
            "gouPJROr_f-maiE0l"
        )
            .then(() => {
                alert("Consulta enviada")
            })
            .catch(() => {
                alert("Error, intente nuevamente")
            })

        setNombre("");
        setEmail("");
        setWhatsapp("");
        setConsulta("");

    }

    return (
        <div id="contactame" className="contactame">
            <div className="container-form">
                <h2>Contáctame</h2>

                <form onSubmit={enviarConsulta} className="contact-form">

                    <input type="text" id="nombre" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}></input>
                    <input type="email" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    <input type="text" id="whatsapp" placeholder="WhatsApp" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)}></input>
                    <textarea placeholder="Escribe tu mensaje aqui..." value={consulta} onChange={(e) => setConsulta(e.target.value)}></textarea>
                    <button type="submit">Enviar consulta</button>

                </form>
            </div>
            <div className="container-img">
                <img src={formularioContacto} alt="Formulario de contacto" />
            </div>
        </div>
    )
}

export default Contactame