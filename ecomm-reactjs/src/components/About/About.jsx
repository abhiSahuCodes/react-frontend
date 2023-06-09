import React from "react";

function About() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white w-60vw h-[60vh] max-w-60vw rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-semibold mb-4">Website Features</h1>
        <ul className="list-disc pl-6 text-lg">
        <li className="mb-2">
            Feature 1: API use: Fake Store API{" "}
            <a
              href="http://fakestoreapi.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-500 text-[14px] ml-6"
            >
              http://fakestoreapi.com/
            </a>
          </li>
          <li className="mb-2">Feature 2: Use of that API for category filter</li>
          <li className="mb-2">Feature 3: Individual product item page</li>
          <li className="mb-2">Feature 4: Cart feature with adding quantity and decreasing it.</li>
          <li className="mb-2">Feature 5: Checkout feature</li>
          <li className="mb-2">Feature 6: Multiple order page</li>
          <li className="mb-2">Feature 7: Local storage for cart and order. So no data loss till application is closed.</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
