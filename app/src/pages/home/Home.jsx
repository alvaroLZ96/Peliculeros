import React from "react";
import FilterMovie from "../../components/filtermovie";
import { motion } from "framer-motion";
import "./styles.css";

const Home = () => {
  return (
    <div className="homeDiv">
      <motion.h1
        className="homeTitle"
        transition={{ duration: 1 }}
        animate={{
          y: 30,
        }}
      >
        Bienvenidx peliculerx!
      </motion.h1>
      <h3>¿Tienes algo en mente? 🤔</h3>
      <div>
        <FilterMovie />
      </div>
    </div>
  );
};

export default Home;
