import React from "react";

function Contact() {
  const handleGmailClick = () => {
    window.location.href = `mailto:muhammadhusnainafghan@gmail.com?subject=Contact%20from%20Portfolio&body=Hi%20Hasnain,%20I%20would%20like%20to%20contact%20you.`;
  };

  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center mt-20 px-4"
    >
      <h1 className="font-bold text-4xl md:text-5xl text-gray-800 mb-8">
        Contact Me
      </h1>

      <div className="flex flex-wrap justify-center md:justify-between gap-10 w-full max-w-6xl">
      
        <div className="bg-gray-900 rounded-2xl shadow-xl p-10 flex flex-col items-center w-full md:w-[40%] hover:scale-105 transform transition-all duration-300">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Send Me a Message
          </h2>
          <p className="text-gray-300 text-center mb-6">
            Click the button below to send me a message directly via Gmail or
            your default email app.
          </p>
          <button
            onClick={handleGmailClick}
            className="bg-gray-200  hover:text-blue-500 cursor-pointer   font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 text-[clamp(.8rem,2vw,3rem)]"
          >
            Contact Me via Gmail
          </button>
        </div>

      
        <div className="bg-gray-900 rounded-2xl shadow-xl p-10 w-full md:w-[40%] flex flex-col gap-4 hover:scale-105 transform transition-all duration-300">
          <h2 className="font-bold text-2xl md:text-3xl text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-300 cursor-pointer hover:text-blue-500 flex items-center transition-all">
            <span className="hidden sm:flex">📧</span>
            muhammadhusnainafghan@gmail.com
          </p>
          <p className="text-gray-300">📞 +92 3379867539</p>
          <p className="text-gray-300">📍 Mardan, Pakistan</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
