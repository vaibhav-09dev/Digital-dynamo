"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import pic3 from "../../public/pic3.png"; // Ensure the image is in the public directory
import { MousePointer } from "lucide-react";
import{ useRouter} from "next/navigation";

const First = () => {
  const router = useRouter();
  const con = () => {
    router.push("/form");
    
  };
  const abt = () => {
    window.scrollTo({
      top: document.getElementById("about").offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative overflow-hidden md:mt-4 mt-7 py-20 md:py-32 px-6 md:px-10">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-background z-0" />

      {/* Animated particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary/10"
          style={{
            width: Math.random() * 20 + 5,
            height: Math.random() * 20 + 5,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * 100 - 50],
            x: [0, Math.random() * 100 - 50],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: Math.random() * 10 + 10,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="container relative z-10">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
          {/* Left Section */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-lg font-medium text-green-600">
                Digital Dynamo
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-1 md:text-6xl leading-tight">
                <TextReveal text="Grow your business" delay={0.4} />
                <br />
                <TextReveal text="with data-driven" delay={0.6} />
                <br />
                <TextReveal text="marketing" delay={0.8} />
              </h1>
            </motion.div>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.5 }}
            >
              We help brands reach their full potential through strategic digital marketing solutions tailored to your
              business goals.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <button className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 transition-all duration-300" onClick={con}>
                Get Started
              </button>
              <button className="px-6 py-3 bg-gray-100 text-green-600 rounded-lg shadow-lg hover:bg-gray-200 transition-all duration-300" onClick={abt}>
                Learn More
              </button>
            </motion.div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.6, duration: 0.8, type: "spring" }}
            className="relative h-[400px] w-full"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative h-full w-full">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.0, duration: 0.5 }}
                >
                  <Image
                    src={pic3}
                    alt="Digital Marketing Dashboard"
                    width={600}
                    height={600}
                    className="object-contain"
                    priority
                  />
                </motion.div>

                {/* Animated floating elements */}
                {[
                  { size: "h-16 w-16", position: "top-1/4 -left-4", color: "bg-primary/20", delay: 0 },
                  { size: "h-24 w-24", position: "bottom-1/4 -right-4", color: "bg-secondary/20", delay: 0.5 },
                  { size: "h-12 w-12", position: "top-1/2 right-1/4", color: "bg-primary/10", delay: 1 },
                  { size: "h-20 w-20", position: "bottom-10 left-1/4", color: "bg-secondary/10", delay: 1.5 },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className={`absolute ${item.position} ${item.size} rounded-xl ${item.color} backdrop-blur-sm`}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 + item.delay, duration: 0.5 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <motion.div
                      className="h-full w-full"
                      animate={{
                        y: [0, index % 2 === 0 ? 15 : -15, 0],
                        rotate: [0, index % 2 === 0 ? 5 : -5, 0],
                      }}
                      transition={{
                        repeat: Number.POSITIVE_INFINITY,
                        duration: 5 + index,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>
                ))}

                {/* Mouse pointer animation */}
                <motion.div
                  className="absolute bottom-0 right-0 text-primary"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.8, duration: 0.5 }}
                >
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 1.5,
                      ease: "easeInOut",
                    }}
                  >
                    <MousePointer className="h-6 w-6" />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <span className="text-sm mb-2">Scroll to explore</span>
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 1.5,
            ease: "easeInOut",
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 5V19M12 19L5 12M12 19L19 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default First;

function TextReveal({ text, delay = 0 }) {
  return (
    <span className="inline-block overflow-hidden">
      <motion.span
        className="inline-block"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ delay, duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
      >
        {text}
      </motion.span>
    </span>
  );
}