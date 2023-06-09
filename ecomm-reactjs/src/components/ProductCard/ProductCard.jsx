import { Link } from "react-router-dom";

const ProductCard = ({ products }) => {
  console.log(products); 
  // if (!products || products.length === 0) {
  //   return <div>No products available.</div>;
  // }
  return (
    <div>
      <div className="flex flex-col text-center w-full mb-5">
        <h2 className="text-xs text-orange-600 tracking-widest font-medium title-font mb-1">
          Products
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          Popular Products
        </h1>
      </div>
      <section className="text-gray-600 body-font w-full">
        <div className="container px-5 py-12 mx-auto w-full">
          <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-16 gap-y-6 m-auto lg:w-[100%] md:w-[90%] w-[80%]">
            {products.map(({ id, title, price, description, category, image }) => (
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
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductCard;
