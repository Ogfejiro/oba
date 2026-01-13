"use client"

import React from "react"
import { motion } from "framer-motion"
import Services from "@/components/Services"
import AboutPage from "@/components/About"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

const HomeView = () => {
  return (
    <div className="bg-white min-h-screen">

      {/* HERO SECTION */}
      <section className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

            {/* LEFT TEXT */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="w-full lg:w-1/2 text-center lg:text-left"
            >
              <h1 className="text-[2.4rem] sm:text-[2.8rem] md:text-[3rem] lg:text-[3.4rem] font-extrabold leading-tight text-gray-900">
                <span className="text-orange-500">King Ruby Tech</span>
                <br />
                Powering the
                <br />
                New Generation
              </h1>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mt-8 inline-flex items-center gap-3
                  bg-orange-500 hover:bg-orange-600
                  text-white font-bold px-10 py-4 rounded-lg
                  shadow-lg transition-all duration-300"
              >
                Get to Know Us →
              </motion.button>
            </motion.div>

            {/* RIGHT IMAGE (DESKTOP ONLY) */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="hidden lg:flex w-full lg:w-1/2 justify-end"
            >
              <motion.img
                src="/images/hero.png"
                alt="King Ruby Tech"
                className="w-full max-w-lg h-auto"
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* OTHER SECTIONS */}
      <AboutPage />
      <Services />
      <Contact />
      <Footer />

    </div>
  )
}

export default HomeView
