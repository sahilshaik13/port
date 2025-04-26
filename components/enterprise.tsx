import React from "react";

const Enterprise: React.FC = () => {
  return (
    <section className="py-16 bg-gray-900 text-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Logo Section */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-2 rounded-lg">
            <img 
              src="/images/appignite-logo.png" // Ensure the path is correct
              alt="AppIgnite Logo" 
              className="h-12 w-12"
            />
          </div>
          <span className="font-bold text-2xl tracking-tight">
            <span className="text-cyan-500">App</span><span className="text-white">Ignite</span>
          </span>
        </div>

        {/* Description */}
        <h2 className="text-4xl font-bold mb-6">AppIgnite Learning Enterprise</h2>
        <p className="text-lg text-gray-300">
          <strong>Empowering students</strong> with real-world project skills in <strong> Web Development, Data Science, AI/ML using Generative AI</strong>—all through <strong> free mentorship</strong> and certified learning programs.
        </p>
        <p className="mt-4 text-gray-400">
          We are a <strong> registered MSME-certified</strong> enterprise, ensuring students receive <strong> valid certifications</strong> that enhance their career prospects.
        </p>
        <p className="mt-4 text-gray-400">
          At AppIgnite, we bridge the gap between academic concepts and industry demands by providing <strong> hands-on experience</strong> in building scalable, impactful applications.
        </p>
        <p className="mt-4 text-gray-400">
          Whether you're a beginner or an aspiring expert, our structured courses and personalized mentorship 
          guide you toward excellence in <strong> modern tech fields.</strong>
        </p>
        <a
          href="https://aile.vercel.app"
          className="mt-6 inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default Enterprise;