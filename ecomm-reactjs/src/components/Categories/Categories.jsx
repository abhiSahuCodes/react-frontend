import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products/categories"
        );
        setCategories(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError("Failed to fetch products");
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);
  return (
    <div>
      <h2 className="text-md text-gray-500 tracking-widest front-bold title-font mb-2">
        Categories
      </h2>
      <div className="grid lg:grid-cols-4 grid-cols 1 lg:w-full w-[50%] mx-auto">
        {loading ? (
          <div>Loading...</div>
        ) : (
          categories.map((category, index) => {
            return (
              <Link
                to={`/categories/${category}`}
                className="p-4 md:w-full text-center cursor-pointer"
                key={index}
              >
                <div className="flex rounded-[1rem] h-full bg-violet-200 p-8 flex-col ">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-orange-600 text-white flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                      </svg>
                    </div>
                    <h2 className="text-gray-900 text-lg title-font font-medium">
                      {category}
                    </h2>
                  </div>
                </div>
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Categories;
