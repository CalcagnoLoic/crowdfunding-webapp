import Header from "../../components/Header";
import ProductHero from "../../components/ProductHero";
import ProductStat from "../../components/ProductStat";

const Page = () => (
  <div className="bg-alabaster">
    <Header />

    <main className="-mt-20 px-10 md:px-24 xl:px-80">
      <ProductHero />
      <ProductStat positionCSS="mt-6" />
    </main>

    <footer></footer>
  </div>
);

export default Page;
