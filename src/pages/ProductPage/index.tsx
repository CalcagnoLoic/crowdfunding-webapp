import Header from "../../components/Header";
import ProductHero from "../../components/ProductHero";

const Page = () => (
  <div className="bg-alabaster">
    <Header />

    <main className="-mt-20 px-10 md:px-24 xl:px-80">
      <ProductHero />
      <div className="mt-5 h-36 w-full bg-red-500"></div>
      <div className="mt-5 h-36 w-full bg-red-500"></div>
    </main>

    <footer></footer>
  </div>
);

export default Page;
