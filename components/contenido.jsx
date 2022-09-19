import Link from "next/link";
import { useRouter } from "next/router";
import Script from "next/script";

export default function Contenido() {

    const ruta = useRouter();
    const { id } = ruta.query;
    console.log(id);

    return (
        <>

            <div>
                <h1 className="text-center rounded-lg bg-slate-300 text-xl p-2 px-6 mx-6 lg:mr-0 uppercase mt-4 lg:mt-0">Laboratorio {id}</h1>
            </div>

            <div className="grid grid-cols-1 m-6 gap-6 lg:mr-0">

                <div className=" flex flex-col items-center bg-slate-300 rounded-lg lg:flex-row">
                    <img src="/monitor.jpg" className="  object-cover rounded-t-lg w-full h-full md:w-56 md:rounded-none md:rounded-l-lg" alt="imagenrecurso"/>
                    <div className="grid px-6 grid-cols-1 lg:grid-cols-2 my-6 gap-6 w-full">
                        <p className=" p-6 bg-gray-100 rounded-lg">
                            Nombre: Monitor
                        </p>
                        <p className=" p-6 bg-gray-100 rounded-lg">
                            Cantidad: 10
                        </p>
                        <p className=" p-6 bg-gray-100 rounded-lg">
                            Encargado: Julio Aguilar Carmona
                        </p>
                        <Link href="">
                            <p className=" p-6 bg-gray-100 rounded-lg cursor-pointer flex">Ver
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mx-2 self-center">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                            </p>
                        </Link>

                    </div>
                </div>

                <div className=" rounded-lg p-6 flex flex-col items-center lg:flex-row bg-slate-300">
                    <img className="rounded-lg  object-cover lg:w-44 w-full " src="/mouse.webp" alt="imagenrecurso"/>
                    <div className="grid grid-cols-1 lg:grid-cols-2 my-6 mb-0 lg:my-0 lg:ml-6 gap-6 w-full">
                        <p className=" p-6 bg-gray-100 rounded-lg">
                            Nombre: Monitor
                        </p>
                        <p className=" p-6 bg-gray-100 rounded-lg">
                            Cantidad: 10
                        </p>
                        <p className=" p-6 bg-gray-100 rounded-lg">
                            Encargado: Julio Aguilar Carmona
                        </p>
                        <Link href="">
                            <p className=" p-6 bg-gray-100 rounded-lg cursor-pointer flex">Ver
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mx-2 self-center">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};