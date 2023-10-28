import './Contactame.css'
import { useState } from 'react'
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Contactame = () => {

    const formularioContacto = "../img/formulario-contacto.jpeg"
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [consulta, setConsulta] = useState('');

    const MySwal = withReactContent(Swal);

    const mostrarSweetAlert = () => {
        MySwal.fire({
            title: <strong>¡Consulta enviada!</strong>,
            html: <i>En breve te estare respondiendo</i>,
            icon: 'success'
        });
    };

    const enviarConsulta = (e) => {
        e.preventDefault();

        if (!nombre || !email || !consulta) {
            MySwal.fire({
                title: <strong>Error</strong>,
                html: <i>Por favor, complete todos los campos obligatorios</i>,
                icon: 'error'
            });
            return;
        }

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
                mostrarSweetAlert();
            })
            .catch(() => {
                MySwal.fire({
                    title: <strong>Error</strong>,
                    html: <i>Ha ocurrido un error. Intente nuevamente</i>,
                    icon: 'error'
                });
            });

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