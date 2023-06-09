import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";


function CategoryProducts() {
  const { name } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/category/${name}`
        );
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchProductsByCategory();
  }, [name]);

  return (
        // <ProductCard products={products} />
        <section className="text-gray-600 body-font w-full">
            <h2 className="text-md text-grey-700 tracking-widest front-bold title-font mb-2 uppercase text-center">
          {name} Products
        </h2>
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
  );
}

export default CategoryProducts;
