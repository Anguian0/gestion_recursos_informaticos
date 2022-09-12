import Link from "next/link";

export default function Contenido2() {
    return (
        <>

            <div>
                <h1 className="border-2 border-slate-400 rounded-lg bg-slate-200 text-2xl p-2 mx-6 lg:mr-0 pt-1 text-center">Laboratorio SC1</h1>
            </div>

            <div className="grid grid-cols-1 m-6 lg:mr-0 gap-6">

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
                        <Link href="dashboard">
                            <a className="border-2 border-slate-400 p-6 bg-gray-100 rounded-lg hover:bg-slate-300">Regresar</a>
                        </Link>

                    </div>
                </div>


                <div className="overflow-x-auto relative rounded-lg border-2 mb-6 border-slate-400">
                    <table className="w-full text-center text-sm text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase  bg-slate-200">
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
                                <a href="#" className="font-medium text-blue-600 hover:underline">Ver</a>
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
                                <a href="#" className="font-medium text-blue-600 hover:underline">Ver</a>
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
                                <a href="#" className="font-medium text-blue-600 hover:underline">Ver</a>
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
                                <a href="#" className="font-medium text-blue-600 hover:underline">Ver</a>
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
                                <a href="#" className="font-medium text-blue-600 hover:underline">Ver</a>
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
                                <a href="#" className="font-medium text-blue-600 hover:underline">Ver</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>



            </div>
        </>
    );
};