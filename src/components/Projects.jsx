"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { MapPin } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        name: "THRIVIN",
        location: "ACE Certified Nutrition Specialist",
        image: "/p1.jpg?height=300&width=500",
        link: "https://www.instagram.com/thrivinwithektaa?igsh=MjR5dTVmMzA4NGl2",
    },
    {
        name: "DK-Fitness Studio",
        location: "Gym/Physical Fitness Center",
        image: "/p2.jpg?height=400&width=600",
        link: "https://www.instagram.com/dkfitnessstudio?igsh=MWphNWRxd3R1ejFsZg==",
    },
    {
        name: "The Hair House Salon",
        location: "Your hub for hair, color, skincare & Makeup Nails, pamper, repeat!",
        image: "/p3.jpg?height=400&width=600",
        link: "https://www.instagram.com/the.hairhousesalon?igsh=NXhqMzEzeHlkbTFw",
    },
    {
        name: "The Astro Nexus",
        location: "Team of professional Astrologist, Numerologist and Vastu Experts. ",
        image: "/p4.jpg?height=400&width=600",
        link: "https://www.instagram.com/theastronexus?igsh=MzluamI3NGU0OTdr",
    },
];

const Projects = () => {
    const controls = useAnimation();
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, threshold: 0.2 });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
            },
        },
    };

    return (
        <section
            className="container md:py-16 py-10 w-full md:px-2.5 px-1 md:mb-8 bg-white xl:max-w-[1280px] xl:mx-auto"
            ref={ref}
        >
            {/* Title Section */}
            <motion.div
                className="flex flex-col items-center text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                }}
            >
                <h2 className="text-3xl md:text-5xl xl:text-6xl font-extrabold tracking-tight text-gray-800">
                    What we Manage
                </h2>
                <p className="mt-4 max-w-2xl text-gray-600 text-lg md:text-xl xl:text-2xl">
                    Discover our diverse range of projects that showcase our expertise in various domains.
                </p>
            </motion.div>

            {/* Destinations Grid */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-8"
                variants={containerVariants}
                initial="hidden"
                animate={controls}
            >
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="overflow-hidden rounded-lg shadow-lg group bg-white hover:shadow-2xl transition-shadow duration-300"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                    >
                        <a href={project.link}>
                            <div className="relative h-64 w-full overflow-hidden xl:h-[600]">
                                <motion.img
                                    src={project.image}
                                    alt={project.name}
                                    className="object-fill w-full h-full group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                                <div className="absolute bottom-0 left-0 p-4 text-white">
                                    <div className="flex items-center gap-1 mb-1">


                                    </div>
                                    <h3 className="text-xl xl:text-2xl font-bold">
                                        {project.name}
                                    </h3>
                                    <span className="text-sm xl:text-base">
                                        {project.location}
                                    </span>
                                </div>
                            </div>
                        
                        </a>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Projects;