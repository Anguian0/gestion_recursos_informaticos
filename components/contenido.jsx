import Link from "next/link";
import Image from "next/image";

export default function Contenido() {
    return (
        <>
            <div>
                <h1 className="text-2xl px-6 pt-4 lg:pt-1">SC1</h1>
            </div>

            <div className="grid grid-cols-1 m-6 gap-6">

                <div className="flex flex-col items-center bg-slate-200 rounded-lg lg:flex-row">
                    <img src="/monitor.jpg" className="object-cover rounded-t-lg w-full h-full md:w-56 md:rounded-none md:rounded-l-lg" />
                    <div className="grid px-6 grid-cols-1 lg:grid-cols-2 my-6 gap-6 w-full">
                        <p className="p-6 bg-gray-100 rounded-lg">
                            Nombre: Monitor
                        </p>
                        <p className="p-6 bg-gray-100 rounded-lg">
                            Cantidad: 10
                        </p>
                        <p className="p-6 bg-gray-100 rounded-lg">
                            Encargado: Julio Aguilar Carmona
                        </p>
                        <Link href="dashboard2">
                            <a className="p-6 bg-gray-100 rounded-lg">Ver</a>
                        </Link>

                    </div>
                </div>

                <div className="rounded-lg p-6 flex flex-col items-center lg:flex-row bg-slate-200">
                    <Image className="rounded-lg" src="/mouse.webp" height={250} width={250} objectFit="cover" />
                    <div className="grid grid-cols-1 lg:grid-cols-2 my-6 mb-0 lg:my-6 lg:ml-6 gap-6 w-full">
                        <p className="p-6 bg-gray-100 rounded-lg">
                            Nombre: Monitor
                        </p>
                        <p className="p-6 bg-gray-100 rounded-lg">
                            Cantidad: 10
                        </p>
                        <p className="p-6 bg-gray-100 rounded-lg">
                            Encargado: Julio Aguilar Carmona
                        </p>
                        <Link href="dashboard2">
                            <a className="p-6 bg-gray-100 rounded-lg">Ver</a>
                        </Link>
                    </div>
                </div>

                <div className="rounded-lg p-6 flex flex-col items-center lg:flex-row bg-slate-200">
                    <Image className="rounded-lg" src="/teclado.webp" height={250} width={250} objectFit="cover" />
                    <div className="grid grid-cols-1 lg:grid-cols-2 my-6 mb-0 lg:my-6 lg:ml-6 gap-6 w-full">
                        <p className="p-6 bg-gray-100 rounded-lg">
                            Nombre: Teclado
                        </p>
                        <p className="p-6 bg-gray-100 rounded-lg">
                            Cantidad: 10
                        </p>
                        <p className="p-6 bg-gray-100 rounded-lg">
                            Encargado: Julio Aguilar Carmona
                        </p>
                        <Link href="dashboard2">
                            <a className="p-6 bg-gray-100 rounded-lg">Ver</a>
                        </Link>
                    </div>
                </div>

                <div className="rounded-lg p-6 flex flex-col mb-6 items-center lg:flex-row bg-slate-200">
                    <Image className="rounded-lg" src="/monitor.jpg" height={250} width={250} objectFit="cover" />
                    <div className="grid grid-cols-1 lg:grid-cols-2 my-6 mb-0 lg:my-6 lg:ml-6 gap-6 w-full">
                        <p className="p-6 bg-gray-100 rounded-lg">
                            Nombre: Monitor
                        </p>
                        <p className="p-6 bg-gray-100 rounded-lg">
                            Cantidad: 10
                        </p>
                        <p className="p-6 bg-gray-100 rounded-lg">
                            Encargado: Julio Aguilar Carmona
                        </p>
                        <Link href="dashboard2">
                            <a className="p-6 bg-gray-100 rounded-lg">Ver</a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};