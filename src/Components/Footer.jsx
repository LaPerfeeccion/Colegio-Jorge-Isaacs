import './Footer.css';
import { Typography } from '@mui/material';

const Footer = () => {
  return (
    <>
      <footer>
        <div className="ok">
          <img className="h" src="/public/imagenes/fondo2.png" width={'120em'} alt="" />
          <Typography sx={{ fontFamily: 'Dancing Script' }} variant="h6">
            Colegio Jorge Isaacs
          </Typography>
        </div>
        <hr />
        <div className="red">
          <Typography variant="h6" sx={{ fontFamily: 'Dancing Script' }}>
            {' '}
            Redes sociales
          </Typography>
          <div className="icons">
            <a
              target="blank"
              href="https://www.instagram.com/coljorgeisaacs?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
                />
              </svg>
            </a>
            <a target='blank' href="https://www.facebook.com/colegiojorgeisaacsbarranquilla/?locale=es_LA">
              <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02"
                />
              </svg>
            </a>
            <a target='blank' href="https://www.facebook.com/messages/t/1411570305781174?locale=es_LA">
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                color="currentColor"
              >
                <path d="m7 14l1.995-2.395c.637-.763.955-1.145 1.338-1.145s.702.382 1.338 1.145l.658.79c.636.763.954 1.145 1.338 1.145c.383 0 .701-.382 1.338-1.145L17 10" />
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.379.28 2.693.784 3.888c.279.66.418.99.436 1.24c.017.25-.057.524-.204 1.073L2 22l3.799-1.016c.549-.147.823-.22 1.073-.204c.25.018.58.157 1.24.436A10 10 0 0 0 12 22" />
              </g>
            </svg>
            </a>
            
          </div>
        </div>
        <hr />
        <div className="cont">
          <Typography sx={{ fontFamily: 'Dancing Script' }} variant="h6">
            Contactenos
          </Typography>
          <span> colegiojorgeisaacs4073@gmail.com</span>
          <span> 300 4574585 </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
