import React from 'react';

const Certificates = ({ certificates }) => {
  return (
    <section className="py-10 px-4" id="certificates">
      <h2 className="text-3xl font-bold text-center mb-8 text-purple-600">Certificates & Achievements</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {certificates.map((cert, index) => (
          <a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-3 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <span className="text-purple-600 mr-3">🎓</span>
            <span className="text-gray-800 font-medium">{cert.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
