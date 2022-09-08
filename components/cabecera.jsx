export default function Cabecera() {
    return (
        <div className="bg-[#045FB4] h-28 lg:columns-3 xl:columns-3 2xl:columns-3 shadow-sm">


            <img src="/logo_sep.png" className="w-72 ml-28 lg:ml-10 xl:ml-28 my-7 hidden lg:block xl:block 2xl:block" />

            {/* Barra superior responsive */}
            <div className="text-center text-[#FFFF66]">
                <h1 className="drop-shadow-2xl text-lg lg:text-md xl:text-xl 2xl:text-2xl font-bold pt-7 2xl:pt-5">Gestión de Recursos Informaticos</h1>
                <h2 className="text-[#DEDECA] drop-shadow-2xl text-md lg:text-sm xl:text-lg 2xl:text-xl font-bold pb-7 2xl:pb-5">Instituto Tecnólogico de Tuxtepec</h2>
            </div>

            {/* Respaldo barra superior */}
            {/* <div className="text-center text-black">
                <h1 class="text-2xl font-bold pt-6">Gestión de Recursos Informaticos</h1>
                <h2 class="text-xl font-bold pb-6">Instituto Tecnólogico de Tuxtepec</h2>
            </div> */}

            <img src="/TecNM_logo.png" className="w-52 ml-10 pt-1 hidden lg:block xl:block 2xl:block" />

        </div>
    )
};