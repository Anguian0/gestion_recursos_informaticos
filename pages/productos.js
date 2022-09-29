import Head from "next/head";
import Link from "next/link";

export default function Productos() {
    return (
        <>

            <Head>
                <title>Añadir recurso</title>
            </Head>

            <div className="bg-white rounded-lg shadow-xl m-6 p-6">
                <div className="flex justify-start self-center mb-1">
                    <Link href="/dashboard">
                        <div className="bg-gray-100 lg:p-2 lg:px-4 p-3 px-4 mb-3 rounded-lg flex cursor-pointer justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                            </svg>
                        </div>
                    </Link>
                    <h3 className="mb-4 text-xl font-medium text-gray-900 ml-5 self-center">Añade un recurso</h3>
                </div>

                <form>
                    <div className="grid gap-6 mb-6 md:grid-cols-3">
                        {/* Selecciona el área */}
                        <div>
                            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 ">Selecciona el área</label>
                            <select type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required="">
                                <option>Edificio A</option>
                                <option>Edificio B</option>
                                <option>Edificio C</option>
                                <option>Edificio D</option>
                                <option>Edificio E</option>
                            </select>
                        </div>

                        {/* Selecciona el espacio */}
                        <div>
                            <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900">Selecciona el espacio</label>
                            <select type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required="" >
                                <option>SC1</option>
                                <option>SC2</option>
                                <option>SC3</option>
                                <option>Oficina</option>
                                <option>Sala de maestros</option>
                            </select>
                        </div>

                        {/* Tipo de equipo */}
                        <div>
                            <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900">Tipo de equipo</label>
                            <select type="text" id="tipo" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Flowbite" required="">
                                <option>Pc</option>
                                <option>Laptop</option>
                                <option>Impresora</option>
                                <option>Switch</option>
                                <option>Router</option>
                            </select>
                        </div>

                        {/* Marca */}
                        <div>
                            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">Marca</label>
                            <input type="text" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Hp" required="" />
                        </div>

                        {/* Modelo */}
                        <div>
                            <label htmlFor="website" className="block mb-2 text-sm font-medium text-gray-900">Modelo</label>
                            <input type="text" id="website" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="H48DHI29K" required="" />
                        </div>

                        {/* Número de serie */}
                        <div>
                            <label htmlFor="visitors" className="block mb-2 text-sm font-medium text-gray-900">Número de serie</label>
                            <input type="number" id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="18274637" required="" />
                        </div>

                        {/* Número de inventario */}
                        <div>
                            <label htmlFor="visitors" className="block mb-2 text-sm font-medium text-gray-900">Número de inventario - En dudas este</label>
                            <input type="number" id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="1" required="" />
                        </div>

                        {/* Personal asignado */}
                        <div>
                            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 ">Personal asignado</label>
                            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Nombre Apellido Apellido" required="" />
                        </div>

                        {/* RFC */}
                        <div>
                            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 ">RFC</label>
                            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="I3893FH3F" required="" />
                        </div>

                        {/* Números de interfaces */}
                        <div>
                            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 ">Número de interfaces</label>
                            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="7" required="" />
                        </div>

                        {/* Observaciones */}
                        <div>
                            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 ">Observaciones</label>
                            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Escribe las observaciones" required="" />
                        </div>

                        {/* Descripción */}
                        <div>
                            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 ">Descripción</label>
                            <textarea type="message" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Detalles adicionales" required="" />
                        </div>
                    </div>

                    <hr className="mb-4" />
                    <h3 className="mb-4 text-xl font-medium text-gray-900">Interfaz red del recurso</h3>
                    <div className="grid gap-6 mb-6 md:grid-cols-3">

                        {/* Tipo de conectividad */}
                        <div>
                            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 ">Tipo de conectividad</label>
                            <select type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="John" required="">
                                <option>Ethernet</option>
                                <option>Fibra Óptica</option>
                                <option>Inalámbrico</option>
                            </select>
                        </div>

                        {/* Conectado a */}
                        <div>
                            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 ">Conectado a</label>
                            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="A que otro equipo se conecta por esta interfaz" required="" />
                        </div>

                        {/* Puerto de origen */}
                        <div>
                            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 ">Puerto origen</label>
                            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="En el caso de Ethernet y FO, apuntar número de puerto del equipo en cuestión" required="" />
                        </div>

                        {/* Puerto de destino */}
                        <div>
                            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 ">Puerto de destino</label>
                            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="En el caso de Ethernet y FO, apuntar número de puerto del equipo al que se conecta" required="" />
                        </div>

                        {/* SSID */}
                        <div>
                            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 ">SSID</label>
                            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Solo aplica para inalámbrico" required="" />
                        </div>

                        {/* IP */}
                        <div>
                            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 ">IP</label>
                            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="192.228.17.57" required="" />
                        </div>

                        {/* MAC */}
                        <div>
                            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 ">MAC</label>
                            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="00:1B:44:11:3A:B7" required="" />
                        </div>
                    </div>
                    <button type="submit" className="text-white bg-slate-600 hover:bg-slate-700 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Añadir</button>
                </form>
            </div>

        </>
    )
}