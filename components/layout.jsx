import Sidebar from "./sidebar";
import Cabecera from "./cabecera"
import Head from "next/head";

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <script src="https://unpkg.com/flowbite@1.5.3/dist/flowbite.js" />
            </Head>


            {/* Cabecera */}
            {/* <div className="lg:sticky top-0 z-20">
                <Cabecera />
            </div> */}

            {/* Botón menú - Sidebar */}
            <div className="flex justify-center border-t border-b border-gray-200 lg:hidden py-2">
                <button data-collapse-toggle="mobile-menu-1" type="button" aria-controls="mobile-menu-1" aria-expanded="false" className="flex justify-center">
                    <svg className="w-6 h-6 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    <span className="self-center">
                        Menú
                    </span>
                </button>
            </div>

            <div className="flex">
                {/* Sidebar */}
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