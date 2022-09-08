import Link from "next/link";
import Image from "next/image";
import Contenido from "./contenido";

export default function Contenido2() {
    return (

        // Prueba
        <div>
        <h2>
        Hola contenido 2
        </h2>
        <Link href="dashboard">
        <h2 className="my-6 bg-slate-300 w-fit p-2 px-3 rounded-lg cursor-pointer">
        Regresar
        </h2>
        </Link>
        </div>
    );
};