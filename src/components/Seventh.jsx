"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView, useAnimation, AnimatePresence, useScroll, useTransform } from "framer-motion"

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


const Seventh = () => {
  const { scrollY } = useScroll()
  

  const testimonials = [
    {
      quote:
        "DigiGrowth transformed our online presence. Their SEO strategy increased our organic traffic by 200% in just 6 months.",
      author: "Sarah Johnson",
      role: "Marketing Director, TechCorp",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "The team at DigiGrowth is exceptional. Their content marketing strategy helped us establish ourselves as thought leaders in our industry.",
      author: "Michael Chen",
      role: "CEO, Innovate Solutions",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "Working with DigiGrowth has been a game-changer for our business. Their PPC campaigns delivered a 300% ROI in the first quarter.",
      author: "Emily Rodriguez",
      role: "E-commerce Manager, StyleShop",
      avatar: "/placeholder.svg?height=100&width=100",
    },
  ]

  const [active, setActive] = useState(0)


  const projects = [
    {
      title: "E-commerce SEO Overhaul",
      category: "SEO Optimization",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Social Media Campaign",
      category: "Social Media",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Content Strategy",
      category: "Content Marketing",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "PPC Campaign",
      category: "PPC Advertising",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    

      <div className="container relative z-10">
        <AnimatedSection>
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16 space-y-4"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          >
           
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              <TextReveal text="Recent Success Stories" delay={0.1} />
            </h2>
            <p className="text-xl text-muted-foreground">
              Take a look at some of our recent projects and the results we've achieved for our clients.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => {
              const workSectionY = useTransform(scrollY, [1600, 2200], [0, index % 2 === 0 ? -30 : -50])
              return (
                <motion.div
                  key={index}
                  className="group relative overflow-hidden rounded-lg"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { delay: index * 0.1 },
                    },
                  }}
                  whileHover={{
                    y: -10,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                  style={{ y: workSectionY }}
                >
                  <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.6 }}>
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full object-cover transition-transform duration-300"
                    />
                  </motion.div>

                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  <motion.div
                    className="absolute bottom-0 left-0 p-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <motion.span
                      className="inline-block rounded-full bg-primary/20 backdrop-blur-sm px-3 py-1 text-xs font-medium text-primary-foreground mb-2"
                      whileHover={{ scale: 1.05 }}
                    >
                      {project.category}
                    </motion.span>
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <motion.div
                      className="mt-2 flex items-center text-white"
                      initial={{ x: -10, opacity: 0 }}
                      whileHover={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-sm font-medium">View Case Study</span>
                      <motion.span whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </motion.span>
                    </motion.div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </AnimatedSection>
        <section id="testimonials" className="py-20 relative overflow-hidden">
      {/* Animated quote marks background with parallax */}
      
            "
          
       
      

      <div className="container relative z-10">
        <AnimatedSection>
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16 space-y-4"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            style={{
              y: useTransform(scrollY, [2200, 2800], [0, -50]),
            }}
          >
            <motion.span
              className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
              whileHover={{ scale: 1.05 }}
            >
              Testimonials
            </motion.span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              <TextReveal text="What Our Clients Say" delay={0.1} />
            </h2>
            <p className="text-xl text-muted-foreground">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </motion.div>

          <div
            className="relative mx-auto max-w-4xl"
            style={{
              y: useTransform(scrollY, [2200, 2800], [0, -30]),
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="relative rounded-xl bg-muted/50 p-8 md:p-12"
              >
                <motion.div
                  className="mb-6 text-6xl text-primary"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  "
                </motion.div>
                <motion.p
                  className="mb-6 text-xl italic"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  {testimonials[active].quote}
                </motion.p>
                <motion.div
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <motion.div
                    className="mr-4 h-12 w-12 overflow-hidden rounded-full border-2 border-primary"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Image
                      src={testimonials[active].avatar || "/placeholder.svg"}
                      alt={testimonials[active].author}
                      width={100}
                      height={100}
                      className="h-full w-full object-cover"
                    />
                  </motion.div>
                  <div>
                    <p className="font-bold">{testimonials[active].author}</p>
                    <p className="text-sm text-muted-foreground">{testimonials[active].role}</p>
                  </div>
                </motion.div>

                {/* Decorative elements */}
                <motion.div
                  className="absolute top-4 right-4 h-20 w-20 rounded-full border border-primary/20 -z-10"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                />
                <motion.div
                  className="absolute bottom-4 left-4 h-16 w-16 rounded-full border border-primary/20 -z-10"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                />
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActive(index)}
                  className={`h-3 w-3 rounded-full transition-colors ${
                    active === index ? "bg-primary" : "bg-muted-foreground/30"
                  }`}
                  whileHover={{ scale: 1.5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
      </div>
    
  )
}





export default Seventh;
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