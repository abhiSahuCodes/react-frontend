import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Categories from "../../components/Categories/Categories";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError("Failed to fetch products");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <div className="flex flex-col text-center w-full mb-5">
        <h1 className="text-[2rem] text-orange-600 tracking-widest font-medium title-font mb-1">
          Products
        </h1>
        <Categories />
        <h2 className="text-md text-gray-500 tracking-widest front-bold title-font mb-2">
          All Products
        </h2>
      </div>
      <section className="text-gray-600 body-font w-full">
        <div className="container px-5 py-12 mx-auto w-full">
          <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-16 gap-y-6 m-auto lg:w-[100%] md:w-[90%] w-[80%]">
            {loading ? (
              <div>Loading...</div>
            ) : (
              products.map(({ id, title, price, category, image }) => (
                <Link
                  to={`/products/${id}`}
                  key={id}
                  className="w-full p-2 text-center bg-white rounded-xl cursor-pointer hover:scale-105 ease-out duration-300"
                  style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)" }}
                >
                  <div className="block relative h-48 w-full rounded overflow-hidden">
                    <img
                      alt={title}
                      className="object-contain object-center w-full h-full m-auto"
                      style={{ height: "100%" }}
                      src={image}
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">
                      {category}
                    </h3>
                    <h2 className="text-gray-600 title-font text-md font-medium">
                      {title}
                    </h2>
                    <p className="mt-1 text-md">${price}</p>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
