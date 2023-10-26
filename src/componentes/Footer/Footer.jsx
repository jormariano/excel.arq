import './Footer.css'

const Footer = () => {
    const imgLogo = "../../img/logo-jota-01.png"
    const imgWhatsApp = "../../img/footer-icono-whatsapp.png"
    const imgInstagram = "../../img/footer-icono-instagram.png"
    const imgYouTube = "../../img/footer-icono-youtube.png"
    const imgFacebook = "../../img/footer-icono-facebook.png"

    return (
        <>
            <div className="footer">
                <h4>excel.arq@gmail.com</h4>
                <div className='footer-socialnetworks'>
                    <a href="https://www.facebook.com/excel.arq" target="_blank"><img src={imgWhatsApp}
                        alt="Enlace a WhatsApp" /></a>
                    <a href="https://www.instagram.com/excel.arq/" target="_blank"><img src={imgInstagram}
                        alt="Enlace a Instagram" /></a>
                    <a href="https://www.youtube.com/@excelarq" target="_blank"><img src={imgYouTube}
                        alt="Enlace a YouTube" /></a>
                    <a href="https://www.facebook.com/excel.arq" target="_blank"><img src={imgFacebook}
                        alt="Enlace a Facebook" /></a>
                </div>
                <p className='footer-copyright'> Copyright © 2023 <a href="https://linkedin.com/in/jorgelina-mariano" target="_blank"><img className="img-logo-footer" src={imgLogo} alt="Enlace a Empresa" /></a></p>
            </div>
        </>
    )
}

export default Footer