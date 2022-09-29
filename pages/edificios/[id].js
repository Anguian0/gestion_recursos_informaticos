import Head from "next/head";
import Contenido from "/components/contenido.jsx"
import Layout from "../../components/layout";

export default function Inicio() {
    return (
        <Layout>

            <Head>
                <title>GRI</title>
                <script src="https://unpkg.com/flowbite@1.5.3/dist/flowbite.js" />
            </Head>

            <div>
                <Contenido />
                {/* <Contenido2 /> */}
            </div>

        </Layout>
    )
};