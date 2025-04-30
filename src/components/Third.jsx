"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView, useAnimation, AnimatePresence, useScroll, useTransform } from "framer-motion"
import abt from "../../public/abt.jpg"; // Ensure the image is in the public directory
import {
  BarChart3,
  ChevronRight,
  Globe,
  Lightbulb,
  LineChart,
  Menu,
  MessageSquare,
  Search,
  TrendingUp,
  X,
  ArrowRight,
  MousePointer,
  ArrowUpRight,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const Third = () => {
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [800, 1600], [0, -100]);
  const contentY = useTransform(scrollY, [800, 1600], [0, -50]);

  const stats = [
    { value: 150, label: 'Clients Worldwide' },
    { value: 95, label: 'Success Rate' },
    { value: 12, label: 'Years Experience' },
    { value: 230, label: 'Projects Completed' },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Parallax background gradient */}
     
      <div className="container relative z-10">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <AnimatedSection>
            <motion.div
              className="relative"
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 200 }}
              style={{ y: imageY }}
            >
              <Image
                src=
                {abt}
                alt="Our Team"
                width={600}
                height={600}
                className="rounded-lg object-cover"
              />

              {/* Image overlay animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />

              <motion.div
                className="absolute -bottom-6 -right-3 rounded-lg bg-primary p-6 text-primary-foreground"
                variants={{
                  hidden: { opacity: 0, scale: 0.8, rotate: -5 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                    transition: { delay: 0.3, type: 'spring' },
                  },
                }}
                whileHover={{
                  scale: 1.1,
                  boxShadow:
                    '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                }}
              >
                <p className="text-2xl font-bold">
                  <CountUp end={10} />+ Years
                </p>
                <p>of excellence</p>
              </motion.div>

              {/* Floating elements with parallax */}
              {[
                {
                  size: 'h-16 w-16',
                  position: 'top-0 -left-4',
                  color: 'bg-primary/10',
                  speed: 0.05,
                },
                {
                  size: 'h-12 w-12',
                  position: 'top-1/3 -right-2',
                  color: 'bg-secondary/10',
                  speed: -0.08,
                },
                {
                  size: 'h-10 w-10',
                  position: 'bottom-1/4 left-1/4',
                  color: 'bg-primary/10',
                  speed: 0.1,
                },
              ].map((item, index) => {
                const aboutSectionY = useTransform(
                  scrollY,
                  [800, 1600],
                  [0, 50 * item.speed]
                );
                return (
                  <motion.div
                    key={index}
                    className={`absolute ${item.position} ${item.size} rounded-full ${item.color}`}
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 0.8,
                      y: [0, -10, 0],
                      x: [0, index % 2 === 0 ? 10 : -10, 0],
                    }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 3 + index,
                      delay: index * 0.5,
                      ease: 'easeInOut',
                    }}
                    style={{ y: aboutSectionY }}
                  />
                );
              })}
            </motion.div>
          </AnimatedSection>

          <AnimatedSection>
            <motion.div
              className="space-y-10"
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              style={{ y: contentY }}
            >
              
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                <TextReveal text="We're a team of digital" delay={0.1} />
                <br />
                <TextReveal text="marketing experts" delay={0.3} />
              </h2>
              <motion.p
                className="text-xl text-muted-foreground"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.4 },
                  },
                }}
              >
                DigiGrowth was founded with a simple mission: to help businesses
                grow through innovative digital marketing strategies. Our team
                of experts combines creativity with data-driven insights to
                deliver exceptional results.
              </motion.p>
              <motion.p
                className="text-xl text-muted-foreground"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.5 },
                  },
                }}
              >
                We believe in transparency, collaboration, and measurable
                outcomes. Our success is measured by your success.
              </motion.p>

              <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 pt-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { delay: 0.2 + index * 0.1 },
                      },
                    }}
                    whileHover={{
                      scale: 1.05,
                      transition: { type: 'spring', stiffness: 300 },
                    }}
                  >
                    <motion.div
                      className="text-3xl font-bold"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{
                        duration: 2,
                        delay: index * 0.5,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatDelay: 5,
                      }}
                    >
                      <CountUp end={stat.value} />
                      {stat.value === 95 && '%'}
                      {stat.value === 12 && '+'}
                    </motion.div>
                    <div className="text-lg font-bold text-muted-foreground">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Third;
function CountUp({ end, duration = 2 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let startTime
      let animationFrame

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
        setCount(Math.floor(progress * end))

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate)
        }
      }

      animationFrame = requestAnimationFrame(animate)

      return () => cancelAnimationFrame(animationFrame)
    }
  }, [isInView, end, duration])

  return <span ref={ref}>{count}</span>
}
function AnimatedSection({ children }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            staggerChildren: 0.1,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}
function TextReveal({ text, delay = 0 }) {
  return (
    <span className="inline-block text-6xl  overflow-hidden">
      <motion.span
        className="inline-block "
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ delay, duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
      >
        {text}
      </motion.span>
    </span>
  )
}