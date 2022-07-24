function Footer() {
  return (
    <div className="w-full bg-[#16c9bf] flex flex-col-reverse justify-center lg:flex-row lg:justify-evenly">
      <div className="flex flex-col m-auto text-center">
        <span className="p-2">Acerca de Rexona</span>

        <span className="p-2">Contáctanos</span>

        <span className="p-2">Mapa del sitio</span>

        <span className="p-2">Aviso legal</span>

        <span className="p-2">Aviso de privacidad</span>

        <span className="p-2">Acessibilidad</span>

        <span className="p-2">Aviso de cookies</span>

        <span className="p-2">Preguntas más frecuentes</span>

        <span className="p-2">Bases y Condiciones</span>
      </div>
      <div className="flex flex-col justify-evenly m-auto p-10">
        <div className="flex">
          <span className=""><img src="https://seeklogo.com/images/I/instagram-circle-logo-E285122AB7-seeklogo.com.png"  alt="instagram" className="w-16"/></span>
          <span className="mr-2 ml-2"><img src="https://seeklogo.com/images/F/facebook-icon-circle-logo-09F32F61FF-seeklogo.com.png"  alt="facebook" className="w-16"/></span>
          <span className=""><img src="https://seeklogo.com/images/Y/youtube-icon-logo-05A29977FC-seeklogo.com.png"  alt="youtube" className="w-16"/></span>
          <span className="mr-2 ml-2"><img src="https://seeklogo.com/images/T/twitter-icon-circle-blue-logo-94339974C6-seeklogo.com.png"  alt="twitter" className="w-16"/></span>
        </div>
        <div className="flex mt-5 m-auto lg:ml-36 lg:mt-10 flex-col lg:justify-end">
          <img src="https://seeklogo.com/images/U/Unilever-logo-C7995A25D2-seeklogo.com.png" alt="unilever logo" className="w-24 lg:w-36" />
          <br /><p>© 2022 Unilever</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
