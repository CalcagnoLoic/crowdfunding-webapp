import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProductHero from "../../components/Product/ProductHero";
import ProductStat from "../../components/Product/ProductStat";
import ProductSection from "../../components/Product/ProductSection";


const Page = () => (
  <div className="bg-alabaster">
    <Header />

    <main className="-mt-20 px-10 md:px-24 xl:px-80">
      <ProductHero />
      <ProductStat positionCSS="mt-6" />
      <ProductSection positionCSS="mt-6" />
    </main>

    <Footer />
  </div>
);

export default Page;
