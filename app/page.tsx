import Image from "next/image";
import Hero from "./'components'/hero";
import Search from "./'components'/search";
import CustomFilter from "./'components'/filter";
import { fetchCars } from "./utils";
import Carcard from "./'components'/carcard";

export default async function Home() {

  const res = await fetchCars();
  
  const isInfoEmpty = !Array.isArray(res) || res.length < 1 || !res;   

  return (
    <main className="overflow-hidden">
      <Hero/>
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <Search/>
          <div className="home__filter-container">
            <CustomFilter />
            <CustomFilter/>
          </div>
        </div>
        {!isInfoEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {
                res?.map((car) => <Carcard car={car}/>)
              }
            </div>
          </section>
        ): (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">no results</h2>
            <p>{res?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
