import type { NextPage } from "next"
import Head from "next/head"
import Layouts from "../components/Layouts"

const Home: NextPage = () => {
  return (
    <div className="w-76">
      <Head>
        <title>Construction</title>
        <meta name="Construction"></meta>
        <link
          href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@100;500&family=Poppins:wght@300&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Layouts />
    </div>
  )
}

export default Home
