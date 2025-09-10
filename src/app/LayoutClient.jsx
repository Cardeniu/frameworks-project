'use client'

import { usePathname } from 'next/navigation'

import {
    Header,
} from '@/components/index'


// paginas que no quiero mostrar el header y footer
const hiddenPaths = ['/Login'];


export default function LayoutClient({ children }) {

    // creamos una constante para manejar el path
    const pathName = usePathname();

    const hidden = hiddenPaths.includes(pathName);

    return (
        <div>

            {!hidden && <Header />}

            <main>
                {children}
            </main>


        </div>
    )
}