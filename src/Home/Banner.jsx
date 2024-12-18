import { easeOut } from "motion";
import { motion } from "motion/react";
import team1 from "../assets/icon/1.jpg";
import team2 from "../assets/icon/2.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-96">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <motion.img
            src={team1}
            animate={{ y: [40, 85, 40] }}
            transition={{
              duration: 10,

              repeat: Infinity,
            }}
            className="max-w-sm w-64  
          rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-400 shadow-2xl"
          />
          <motion.img
            src={team2}
            animate={{ x: [120, 160, 110] }}
            transition={{
              duration: 10,
              delay: 5,
              repeat: Infinity,
            }}
            className="max-w-sm w-64 
          rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-400 shadow-2xl"
          />
        </div>

        <div className="flex-1">
          <motion.h1
            animate={{ x: 50 }}
            transition={{
              duration: 3,
              delay: 1,
              ease: easeOut,
              repeat: Infinity,
            }}
            className="text-5xl font-bold"
          >
            Latest{" "}
            <motion.span
              animate={{ color: ["#ecff33", "#33ffe3", "#ecfc33"] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              Job
            </motion.span>{" "}
            For You!
          </motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
