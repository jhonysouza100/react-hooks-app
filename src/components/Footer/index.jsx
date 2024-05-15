import './footer.css'
import text from './footer.text'
import link from './footer.link'
import { Link } from 'react-router-dom';
import { RiFacebookCircleFill, RiInstagramFill, RiMailLine, RiMapPinLine, RiSendPlaneLine, RiWhatsappLine } from '@remixicon/react';

export default function Footer() {

  return (
    <footer className="footer">
      <div className="footer-container container grid">
        
        <Link to={'/'} className="footer-logo">{text.sectionTitle}</Link>

        <div className="footer-data grid">

          {/* PRODUCTOS */}
          <div>
            <h3 className="footer-title">{text.columnTitle1}</h3>
            <ul className="footer-links">
              <li className='footer-link'><Link to={'/celulares'} aria-label="Ir a la página de Celulares">{text.columnText1}</Link></li>
              <li className="footer-link"><Link to={'/informatica'} aria-label="Ir a la página de Informática">{text.columnText2}</Link></li>
              <li className="footer-link"><Link to={'/accesorios'} aria-label="Ir a la página de Accesorios">{text.columnText3}</Link></li>
            </ul>
          </div>

          {/* CONTACTO */}
          <div>
            <h3 className="footer-title">{text.columnTitle2}</h3>
            <ul className="footer-links">
              <li className="footer-link"><RiWhatsappLine /><a href={link.whatsapp} aria-label="Enviar mensaje por WhatsApp">{text.columnText4}</a></li>
              <li className="footer-link"><RiMailLine /><a href={link.email} aria-label="Enviar correo electrónico">{text.columnText5}</a></li>
              <li className="footer-link"><RiMapPinLine /><a href={link.maps} aria-label="Ver ubicación en mapa">{text.columnText6}</a></li>
            </ul>
          </div>

          {/* FROM/INPUT */}
          <div className="footer-group">
            <form className="footer-form" aria-label="Formulario de suscripción">
              <input type="email" className="footer-input" placeholder={text.emailText1} aria-label="Introduce tu dirección de correo electrónico" />
              <button className="footer-button button" aria-label="Enviar"><span>{text.buttonText1}</span> <RiSendPlaneLine className='button-icon' /></button>
            </form>

            {/* SOCIAL */}
            <div className="footer-social">
              <a className="footer-social-link" aria-label="Perfil de Instagram" href={link.instagram}><RiInstagramFill /></a>
              <a className="footer-social-link" aria-label="Perfil de Facebook" href={link.facebook}><RiFacebookCircleFill /></a>
            </div>
          </div>
        </div>
      </div>
      
      <a href={link.developer} className="footer-copyright">© All Rights Reserved By Jhony Souza 2024.</a>
      
    </footer>
  );

}