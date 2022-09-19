import Sidebar from "./sidebar";
import Cabecera from "./cabecera"

export default function Layout({children}) {
    return (
        <>

            {/* Cabecera */}
            <div className="sticky top-0 z-20">
                <Cabecera />
            </div>

            {/* Botón menú - Sidebar */}
            <bottom data-collapse-toggle="mobile-menu-1" type="button" aria-controls="mobile-menu-1" aria-expanded="false" className="flex justify-center py-2 lg:hidden border-t border-b border-gray-200 cursor-pointer">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                <span className="self-center px-1">
                    Menú
                </span>
            </bottom>

            {/* Sidebar */}
            <div className="flex">
                <div className="lg:block absolute z-10 lg:fixed lg:top-22">
                    <Sidebar />
                </div>
                {/* Contenido */}
                <div className="p-1 lg:p-6 font-bold z-0 w-screen h-screen lg:ml-64">
                    {children}
                </div>
            </div>



        </>
    )
};