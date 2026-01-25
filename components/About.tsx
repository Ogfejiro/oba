"use client";

import React from "react";
import { motion } from "framer-motion";


const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const AboutPage = () => {
  const handleTwitterClick = () => {
    // Replace with your actual Twitter handle
    window.open("https://twitter.com/kingrubytech", "_blank", "noopener,noreferrer");
  };

  return (
    <div id="about" className="bg-blue-50 min-h-screen"> {/* Light blue background */}
      {/* PAGE HEADER */}
      <section className="pt-6 pb-8"> {/* Reduced top padding */}
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            About <span className="text-orange-500">Us</span>
          </h1>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            King Ruby Tech is a forward-thinking renewable energy and technology
            company committed to delivering reliable, affordable, and sustainable
            power solutions across Nigeria. We combine innovation, expertise, and
            practical experience to help homes, businesses, and institutions
            achieve energy independence while embracing smart, modern technology.
          </p>
          
          {/* GET TO KNOW BUTTON */}
          
                  </div>
      </section>

      {/* SECTION 1 — TEXT LEFT / IMAGE RIGHT */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16" // Reduced padding
      >
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
          {/* TEXT */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              King Ruby Tech is a leading player in Nigeria&apos;s solar market
            </h2>
            <p className="text-gray-600 leading-relaxed">
              King Ruby Tech is a leading player in Nigeria&apos;s solar market.
              We help consumers replace electricity sourced from utility companies
              and diesel-powered generators with clean, reliable solar energy.
              Our smart home automation solutions ensure seamless control of
              security systems, lighting, and essential appliances.
              <br /><br />
              We also operate King Ruby Tech Energy Academy, one of Nigeria&apos;s
              best solar training institutes. Through partnerships with state
              agencies, private organizations, and businesses, we provide
              hands-on solar training programs focused on skill acquisition,
              workforce development, and youth empowerment.
            </p>
          </div>

          {/* IMAGE */}
          <div className="lg:w-1/2">
            <div className="w-full h-72 rounded-xl overflow-hidden">
              <img
                src="/images/RKT 2 1.png"
                alt="King Ruby Tech"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* SECTION 2 — IMAGE LEFT / TEXT RIGHT */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 bg-white" // Kept white for contrast
      >
        <div className="container mx-auto px-4 flex flex-col lg:flex-row-reverse items-center gap-16">
          {/* TEXT */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What We Do
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We specialize in the design, installation, and maintenance of
              high-quality solar energy systems for residential, commercial,
              and industrial clients. Our services include solar panel
              installations, inverter systems, energy storage solutions, and
              smart automation technologies that enhance efficiency, security,
              and comfort.
              <br /><br />
              Beyond energy solutions, we are committed to knowledge transfer
              and capacity building. Through our Energy Academy, we train
              individuals and organizations on solar system design,
              installation best practices, and real-world deployment—helping
              bridge the skills gap in Nigeria&apos;s renewable energy sector.
            </p>
          </div>

          {/* IMAGE */}
          <div className="lg:w-1/2">
            <div className="w-full h-72 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
              <img
                src="/images/RKT 4 1.svg"
                alt="King Ruby Tech"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* SECTION 3 — TEXT LEFT / IMAGE RIGHT */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16" // Reduced padding
      >
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
          {/* TEXT */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our vision is to become a trusted leader in renewable energy and
              smart technology solutions across Africa. We aim to drive the
              transition to clean energy by making solar power accessible,
              reliable, and scalable for homes, businesses, and institutions.
              <br /><br />
              We envision a future where communities are sustainably powered,
              young people are equipped with in-demand technical skills, and
              businesses operate without reliance on unstable power sources.
              Through innovation, education, and strategic partnerships, King
              Ruby Tech is building a smarter, cleaner, and more resilient
              future.
            </p>
          </div>

          {/* IMAGE */}
          <div className="lg:w-1/2">
            <div className="w-full h-72 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
              <img
                src="/images/RKT 11 1.png"
                alt="King Ruby Tech"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutPage;