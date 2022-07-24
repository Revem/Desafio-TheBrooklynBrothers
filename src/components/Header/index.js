import Logo from '../../img/Rexona-Logo.png'

function Header() {
  return(
    <div className="bg-[#16b9cf] flex justify-center lg:justify-between w-full">
      <img src={Logo} className="ml-5 p-5 w-44 object-cover" alt='Rexona Logo' />
      <span className="hidden lg:flex p-10 mr-24 font-mono text-[#0a1363] text-2xl">PRODUCTOS <svg className="ml-2 w-5 h-5 inline mt-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg></span>
    </div>
  )
}

export default Header