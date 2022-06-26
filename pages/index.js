import Home from "../components/home";
import UseCasesPage from "../components/useCases";
import Footer from "../components/footer";
import dynamic from "next/dynamic";
import Head from "next/head";
const Testimonial = dynamic(() => import("../components/testimonials"), {
  ssr: false,
});

export default function App() {
  return (
    <div>
      <Head>
        <title>Felvin Search</title>
        <meta name="title" content="Felvin Search" />
        <meta
          name="description"
          content="Your all-in-one toolbox to improve your search experiences. Powerful developer tools to help you with your everyday tasks"
        />
        <meta
          name="keywords"
          content="Search, Utilities, Development, Experiences,Google, Extension"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />

        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Home />
      <UseCasesPage />
      <Testimonial />
      <Footer />
    </div>
  );
}
