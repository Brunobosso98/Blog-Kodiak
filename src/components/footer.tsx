import { IoLogoFacebook, IoLogoInstagram, IoChatbubbleEllipses, IoMail, IoLocationSharp, IoCall, IoTimeOutline } from 'react-icons/io5';

export function Footer() {
  return (
    <footer className="relative mt-20 bg-gradient-to-br from-primary/90 via-primary to-blue-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 space-y-3">
          <a href="/" className="flex items-center">
              <img
                src="/kodiakfooter.png"
                alt="Kodiak Logo"
                className="object-contain h-[50px] w-[200px]"
              />
            </a>
            <p className="text-gray-200 max-w-md">
              Transformando a gestão industrial com soluções tecnológicas inovadoras para impulsionar o crescimento do seu negócio.
            </p>
            <div className="mt-8 flex space-x-6">
              <a
                href="https://www.facebook.com/conttrotechsistemas/"
                className="text-gray-600 transition-colors duration-300 hover:text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">Facebook</span>
                <IoLogoFacebook className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/kodiakerp/"
                className="text-gray-600 transition-colors duration-300 hover:text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">Instagram</span>
                <IoLogoInstagram className="h-6 w-6" />
              </a>
              <a
                href="https://wa.me/5519989386246?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Kodiak%20ERP."
                className="text-gray-600 transition-colors duration-300 hover:text-[#25D366]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">WhatsApp</span>
                <IoChatbubbleEllipses className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">Navegação</h2>
              <ul className="text-gray-200 space-y-4">
                <li>
                  <a href="#" className="hover:text-white transition-colors">Clientes</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">Benefícios</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">Módulos</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">Contato</a>
                </li>
              </ul>
            </div>
            <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-white">Informações</h2>
              <ul className="text-gray-200 space-y-4">
                <li className="flex items-center gap-2">
                  <IoLocationSharp className="h-4 w-4" />
                  <span>Rua da Imprensa, 189<br/>Itapira - SP</span>
                </li>
                <li className="flex items-center gap-2">
                  <IoTimeOutline className="h-4 w-4" />
                    Seg à Sex: 07:15 - 17:30
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">Contato</h2>
              <ul className="text-gray-200 space-y-4">
                <li className="flex items-center gap-2">
                  <IoCall className="h-4 w-4" />
                  <span>(11) 9999-9999</span>
                </li>
                <li className="flex items-center gap-2">
                  <IoMail className="h-4 w-4" />
                  <span>contato@kodiak.com.br</span>
                </li>
                <li className="flex items-center gap-2">
                  <IoTimeOutline className="h-4 w-4" />
                  <span>São Paulo, SP</span>
                </li>
              </ul>
            </div>            
          </div>
        </div>
        <hr className="my-6 border-gray-200/20 sm:mx-auto" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-200 sm:text-center">
            2025 Kodiak. Todos os direitos reservados.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            <a href="#" className="text-gray-200 hover:text-white transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="text-gray-200 hover:text-white transition-colors">
              Privacidade
            </a>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
    </footer>
  );
}