import Link from 'next/link';
import Image from 'next/image';

const logo = '/logo.png';
const cart = '/cart.png';

export default function Header() {
    return (
        <header className="w-full border-b border-gray-200 bg-white flex justify-between absolute top-0 left-0 right-0 items-center h-20">
            <Image src={logo} width={60} height={70} className='ml-10' alt='logo' />
            <nav className='flex justify-between items-center text-black gap-10 w-80 text-400 font-medium'>
                <Link href={'/'} className='text-3x1 hover:font-bold'>
                    Inicio
                </Link>
                <Link href={'/Man'} className='text-3x1 hover:font-bold'>
                    Hombre
                </Link>
                <Link href={'/Women'} className='text-3x1 hover:font-bold'>
                    Mujeres
                </Link>
            </nav>
            <div className='flex justify-between items-center text-black gap-10 mr-10 '>
                <Link href="/Login" className='bg-gray-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-700  transition-colors 200ms ease-in-out'>
                    Iniciar sesion
                </Link>
                <Link href="/Cart">
                    <Image src={cart} width={45} height={30} alt='Carrito de compras' className='' />
                </Link>
            </div>
        </header>
    );
}