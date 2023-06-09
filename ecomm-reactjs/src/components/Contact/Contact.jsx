import React from "react";

function Contact() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white w-60vw h-[60vh] max-w-60vw rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-semibold mb-4">Contact Information</h1>
        <p className="text-lg mb-4">
          Name: Abhishek Sahu
        </p>
        <p className="text-lg mb-4">
          Email: abhishek963sahu@gmail.com
        </p>
        <div className="flex">
          <a
            href="https://www.linkedin.com/in/abhishek-sahu-403977257"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg mr-4 text-blue-500 hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/abhi-sahu22"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-blue-500 hover:underline"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;

