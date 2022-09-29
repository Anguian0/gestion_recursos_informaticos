import Head from "next/head";
import Layout from "../components/layout";

export default function Inicio() {
    return (
        <Layout>

            <Head>
                <title>Inicio</title>
            </Head>

            
            <div className="h-fit lg:ml-6 mt-64">
            <h1 className="underline decoration-slate-500 text-4xl text-slate-400 lg:text-7xl flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">BIENVENIDO</h1>
            </div>



        </Layout>
    )
};