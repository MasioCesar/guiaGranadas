import { FiUser, FiSettings, FiCalendar } from 'react-icons/fi';
import { FaBomb, FaCalendarCheck } from 'react-icons/fa';
import { useRouter } from 'next/router';

const Sidebar = () => {
    const router = useRouter()

    if (router.pathname === "/") {
        return null;
    }

    return (
        <div className="fixed h-screen w-64 bg-gray-700 flex flex-col">
            <img 
              src="/images/logoprataGlobal.png" 
              alt="Logo Knife" 
              className="mx-auto mb-4 mt-2" 
              width="250" 
            />
            <button 
              onClick={() => router.push('/perfil')} 
              className="px-4 py-2 text-gray-300 hover:bg-gray-600 mt-4 flex items-center"
            >
                <FiUser className="mr-2 w-5" />Perfil
            </button>
            <button 
              onClick={() => router.push('/home')} 
              className="px-4 py-2 text-gray-300 bg-gray-600 mt-4 flex items-center"
            >
                <FaBomb className="mr-2 w-5" />Guia de Granadas
            </button>
            <button 
              onClick={() => router.push('/config')} 
              className="px-4 py-2 text-gray-300 hover:bg-gray-600 mt-4 flex items-center"
            >
                <FiSettings className="mr-2 w-5" />Configurações
            </button>
            <button 
              onClick={() => router.push('/marcar-aula')} 
              className="px-4 py-2 text-gray-300 hover:bg-gray-600 mt-4 flex items-center"
            >
                <FaCalendarCheck className="mr-2 w-5" />Marque sua Aula
            </button>
            <button 
              onClick={() => router.push('/cronograma')} 
              className="px-4 py-2 text-gray-300 hover:bg-gray-600 mt-4 flex items-center"
            >
                <FiCalendar className="mr-2 w-5" />Cronograma de Lives
            </button>
        </div>
    );
};

export default Sidebar;
