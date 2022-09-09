import Link from "next/link";

export default function Contenido2() {
    return (
        <>

            {/* Prueba */}
            <h2>
                Contenido 2
            </h2>
            <Link href="dashboard">
                <h2 className="my-6 bg-slate-300 w-fit p-2 px-3 rounded-lg cursor-pointer">
                    Regresar
                </h2>
            </Link>

        </>
    );
};