import './Inicio.css'
import Swal from 'sweetalert2'
import emailjs from 'emailjs-com';

const Inicio = () => {

    const mostrarSweetAlert = async () => {
        const { value: email } = await Swal.fire({
            title: 'Registrate con tu correo electrónico',
            input: 'email',
            inputPlaceholder: 'Ingrese tu correo electrónico',
            showCancelButton: true,
            customClass: "sweet-registro",
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'OK',
            preConfirm: (email) => {
              return email;
            }
        });

        if (email) {
            emailjs.init("gouPJROr_f-maiE0l");

            const templateParams = {
              from_email: email,
              from_name: email,
            };
        
            emailjs.send("service_5loet3x", "template_kaewdwn", templateParams)
              .then(function(response) {
                Swal.fire('¡Te registraste con exito!', 'Su registro ha sido enviado con éxito', 'success');
              }, function(error) {
                Swal.fire('Error', 'Ocurrió un error al registrarte. Intente nuevamente.', 'error');
              });
          } else if (dismiss === Swal.DismissReason.cancel) {
            // El usuario hizo clic en el botón "Cancelar"
            Swal.fire('Operación cancelada', '', 'info');
          }
        }

    return (
        <div className="presentacion">
            <h2>excel.arq</h2>
            <p>Todo sobre excel aplicado a tus proyectos de Arquitectura</p>
            <h3>PRESENTACIÓN DE EXCEL.ARQ</h3>
            <h3>LUNES 1 DE DICIEMBRE A LAS 18hs.</h3>
            <button onClick={mostrarSweetAlert}>REGISTRATE GRATIS</button>
        </div>
    )
}

export default Inicio