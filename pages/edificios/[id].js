import Head from "next/head";
import Contenido from "/components/contenido.jsx"
import Contenido2 from "/components/contenido2.jsx"
import Layout from "../../components/layout";

export default function Inicio() {
    return (
        <Layout>

            <Head>
                <title>GRI</title>
            </Head>

            <div>
                <Contenido />
                {/* <Contenido2 /> */}
            </div>

        </Layout>
    )
};