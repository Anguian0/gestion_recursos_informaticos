import Link from "next/link";
import { useRouter } from "next/router";

export default function Contenido() {

        const ruta = useRouter();
        const {id} = ruta.query;
        console.log(id);

    return (
        <>

            <div>
                <h1 className="border-2 border-slate-400 rounded-lg bg-slate-200 text-2xl p-2 mx-6 lg:mr-0 pt-1 text-center uppercase">Laboratorio {id}</h1>
            </div>

            <div className="grid grid-cols-1 m-6 gap-6 lg:mr-0">

                <div className="border-2 border-slate-400 flex flex-col items-center bg-slate-200 rounded-lg lg:flex-row">
                    <img src="/monitor.jpg" className="border-b-2 lg:border-b-0 lg:border-r-2 border-slate-400 object-cover rounded-t-lg w-full h-full md:w-56 md:rounded-none md:rounded-l-lg" />
                    <div className="grid px-6 grid-cols-1 lg:grid-cols-2 my-6 gap-6 w-full">
                        <p className="border-2 border-slate-400 p-6 bg-gray-100 rounded-lg">
                            Nombre: Monitor
                        </p>
                        <p className="border-2 border-slate-400 p-6 bg-gray-100 rounded-lg">
                            Cantidad: 10
                        </p>
                        <p className="border-2 border-slate-400 p-6 bg-gray-100 rounded-lg">
                            Encargado: Julio Aguilar Carmona
                        </p>
                        <Link href="/dashboard2">
                            <a className="border-2 border-slate-400 p-6 bg-gray-100 rounded-lg">Ver</a>
                        </Link>

                    </div>
                </div>

                <div className="border-2 border-slate-400 rounded-lg p-6 flex flex-col items-center lg:flex-row bg-slate-200">
                    <img className="rounded-lg border-2 border-slate-400 object-cover lg:w-44 w-full " src="/mouse.webp"  />
                    <div className="grid grid-cols-1 lg:grid-cols-2 my-6 mb-0 lg:my-0 lg:ml-6 gap-6 w-full">
                        <p className="border-2 border-slate-400 p-6 bg-gray-100 rounded-lg">
                            Nombre: Monitor
                        </p>
                        <p className="border-2 border-slate-400 p-6 bg-gray-100 rounded-lg">
                            Cantidad: 10
                        </p>
                        <p className="border-2 border-slate-400 p-6 bg-gray-100 rounded-lg">
                            Encargado: Julio Aguilar Carmona
                        </p>
                        <Link href="dashboard2">
                            <a className="border-2 border-slate-400 p-6 bg-gray-100 rounded-lg">Ver</a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};