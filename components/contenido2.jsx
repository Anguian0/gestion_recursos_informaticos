// Al darle al botón ver en el contenido, muestra este contenido2
import Link from "next/link";

export default function Contenido2() {
    return (
        <>

            <div>
                <h1 className="rounded-lg text-slate-900 bg-slate-300 text-xl uppercase p-2 mx-6 lg:mr-0 px-6 text-center mt-4 lg:mt-0">Laboratorio SC1</h1>
            </div>

            <div className="grid grid-cols-1 m-6 lg:mr-0 gap-6">

                <div className=" flex flex-col items-center bg-slate-300 rounded-lg lg:flex-row text-slate-900">
                    <img src="/monitor.jpg" className=" object-cover rounded-t-lg w-full h-full md:w-56 md:rounded-none md:rounded-l-lg" alt="imagenrecurso"/>
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
                        <Link href="dashboard">
                            <a className=" p-6 bg-gray-100 rounded-lg  cursor-pointer">Regresar</a>
                        </Link>

                    </div>
                </div>


                <div className="overflow-x-auto relative rounded-lg mb-6 border border-slate-300">
                    <table className="w-full text-center text-sm text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase  bg-slate-300">
                            <tr>
                                <th scope="col" className="py-3 px-6">
                                    No. Inventario
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Marca
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Modelo
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    RFC
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-slate-100 border-b">
                                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                                    <a href="/">
                                    1
                                    </a> 
                                </th>
                                <td className="py-4 px-6">
                                    HP
                                </td>
                                <td className="py-4 px-6">
                                    AEC1897
                                </td>
                                <td className="py-4 px-6">
                                    UJI7890
                                </td>
                                <td className="py-4 px-6">
                                <p href="#" className="font-medium text-blue-600 hover:underline">Ver</p>
                                </td>
                            </tr>
                            <tr className="bg-slate-100 border-b">
                                <th scope="row" className="py-4 px-6 text-center font-medium text-gray-900 whitespace-nowrap ">
                                    2
                                </th>
                                <td className="py-4 px-6">
                                    Acer
                                </td>
                                <td className="py-4 px-6">
                                    ARS1234
                                </td>
                                <td className="py-4 px-6">
                                    123EFB7
                                </td>
                                <td className="py-4 px-6">
                                <p href="#" className="font-medium text-blue-600 hover:underline">Ver</p>
                                </td>
                            </tr>
                            <tr className="bg-slate-100 border-b">
                                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                                    3
                                </th>
                                <td className="py-4 px-6">
                                    HP
                                </td>
                                <td className="py-4 px-6">
                                    RFV4567
                                </td>
                                <td className="py-4 px-6">
                                    7UI9O0P
                                </td>
                                <td className="py-4 px-6">
                                <p href="#" className="font-medium text-blue-600 hover:underline">Ver</p>
                                </td>
                            </tr>
                            <tr className="bg-slate-100 border-b">
                                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                                    4
                                </th>
                                <td className="py-4 px-6">
                                    HP
                                </td>
                                <td className="py-4 px-6">
                                    EQD4561
                                </td>
                                <td className="py-4 px-6">
                                    345TGH6
                                </td>
                                <td className="py-4 px-6">
                                <p href="#" className="font-medium text-blue-600 hover:underline">Ver</p>
                                </td>
                            </tr>
                            <tr className="bg-slate-100 border-b">
                                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                                    5
                                </th>
                                <td className="py-4 px-6">
                                    Compaq
                                </td>
                                <td className="py-4 px-6">
                                    EQW2314
                                </td>
                                <td className="py-4 px-6">
                                    7UJH546
                                </td>
                                <td className="py-4 px-6">
                                <p href="#" className="font-medium text-blue-600 hover:underline">Ver</p>
                                </td>
                            </tr>
                            <tr className="bg-slate-100 border-b">
                                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                                    6
                                </th>
                                <td className="py-4 px-6">
                                    HP
                                </td>
                                <td className="py-4 px-6">
                                    TYU1345
                                </td>
                                <td className="py-4 px-6">
                                    5T6Y8UI7
                                </td>
                                <td className="py-4 px-6">
                                <p href="#" className="font-medium text-blue-600 hover:underline">Ver</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>



            </div>
        </>
    );
};