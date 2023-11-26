import './Inicio.css'
import Swal from 'sweetalert2'
import emailjs from 'emailjs-com';

const Inicio = () => {

  const mostrarSweetAlert = async () => {
    const result = await Swal.fire({
      title: 'Registrate con tu correo electrónico',
      input: 'email',
      inputPlaceholder: 'Ingrese su correo electrónico',
      showCancelButton: true,
      customClass: "sweet-registro",
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'OK',
      preConfirm: (email, dismiss) => {
        return { email, dismiss };
      }
    });

    if (result.value) {
      emailjs.init("gouPJROr_f-maiE0l");

      const templateParams = {
        from_email: result.value.email,
        from_name: result.value.email,
      };

      emailjs.send("service_5loet3x", "template_kaewdwn", templateParams)
        .then(function (response) {
          Swal.fire('¡Te registraste con exito!', 'Su registro ha sido enviado con éxito', 'success');
        }, function (error) {
          Swal.fire('Error', 'Ocurrió un error al registrarte. Intente nuevamente.', 'error');
        });
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire('Registro cancelado', '', 'info');
    }
  }

  return (
    <div className='background-img'>
      <div className="presentacion">
        <h2>excel.arq</h2>
        <p>Todo sobre excel aplicado a tus proyectos de Arquitectura</p>
        <h3>CHARLA DE PRESENTACIÓN DE EXCEL.ARQ</h3>
        <h3>LUNES 1 DE DICIEMBRE A LAS 18hs.</h3>
        <button onClick={mostrarSweetAlert}>REGISTRATE GRATIS</button>
      </div>
    </div>
  )
}

export default Inicio