import Cabecera from "/components/cabecera";
import Head from "next/head";
import Link from "next/link";

export default function Usuarios() {
    return (
        <>
            <Head>
                <title>Usuarios</title>
                <script src="https://unpkg.com/flowbite@1.5.3/dist/flowbite.js" />
            </Head>

            <div className="bg-slate-300 m-6 rounded-lg lg:py-2.5 py-4 lg:px-6 px-4 flex justify-between flex-wrap">
                <Link href="/dashboard">
                    <div className="fm:w-full sm:w-auto self-center bg-gray-100 lg:p-2 lg:px-4 p-3 px-4 rounded-lg flex cursor-pointer justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                        </svg>

                    </div>
                </Link>

                <div className="fm:mt-1 fm:w-full sm:mt-0 sm:w-auto rounded-lg flex justify-evenly right-0">
                    <button className="text-green-600 border border-green-600 bg-green-50 px-4 py-2 rounded-lg fm:mt-2 fm:w-full sm:mt-0 sm:w-auto flex" type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                        </svg>
                        Añadir usuario
                    </button>
                </div>
            </div>

            <div className="bg-slate-300 rounded-lg p-4 lg:p-6 mx-6 text-gray-900">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                    <div className="p-3 px-4 bg-gray-100 rounded-lg">
                        <h3 className="font-bold">Datos</h3>
                        <li>Nombre: Julio Aguilar Carmona</li>
                        <li>Usuario: Admin</li>
                        <li>Contraseña: 123457</li>
                        <hr className="my-3" />
                        <h3 className="font-bold">Permisos</h3>
                        <li>Modificar recursos: <span className="text-green-700">Si</span></li>
                        <li>Modificar usuarios: <span className="text-green-700">Si</span></li>
                        <hr className="my-3" />
                        <button className="mr-2 border border-blue-600 bg-blue-50 text-blue-600 rounded-lg py-1 px-3" type="button">
                            Actualizar
                        </button>
                        <button className="border border-red-600 bg-red-50 text-red-600 rounded-lg py-1 px-3" type="button">
                            Eliminar
                        </button>

                    </div>
                    <div className="p-3 px-4 bg-gray-100 rounded-lg">
                        <h3 className="font-bold">Datos</h3>
                        <li>Nombre: Personal</li>
                        <li>Usuario: Personal</li>
                        <li>Contraseña: 123457</li>
                        <hr className="my-3" />
                        <h3 className="font-bold">Permisos</h3>
                        <li>Modificar recursos: <span className="text-red-700">No</span></li>
                        <li>Modificar usuarios: <span className="text-green-700">Si</span></li>
                        <hr className="my-3" />
                        <button className="mr-2 border border-blue-600 bg-blue-50 text-blue-600 rounded-lg py-1 px-3" type="button">
                            Actualizar
                        </button>
                        <button className="border border-red-600 bg-red-50 text-red-600 rounded-lg py-1 px-3" type="button">
                            Eliminar
                        </button>
                    </div>
                    <div className="p-3 px-4 bg-gray-100 rounded-lg">
                        <h3 className="font-bold">Datos</h3>
                        <li>Nombre: Lectura</li>
                        <li>Usuario: Lectura</li>
                        <li>Contraseña: 123457</li>
                        <hr className="my-3" />
                        <h3 className="font-bold">Permisos</h3>
                        <li>Modificar recursos: <span className="text-red-700">No</span></li>
                        <li>Modificar usuarios: <span className="text-red-700">No</span></li>
                        <hr className="my-3" />
                        <button className="mr-2 border border-blue-600 bg-blue-50 text-blue-600 rounded-lg py-1 px-3" type="button">
                            Actualizar
                        </button>
                        <button className="border border-red-600 bg-red-50 text-red-600 rounded-lg py-1 px-3" type="button">
                            Eliminar
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}