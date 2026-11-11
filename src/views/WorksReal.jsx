'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from '@/lib/routerCompat';
import { PROJECTS } from '@/lib/projectsData';

const WorksReal = () => {
    return (
        <div className="container mx-auto pt-4 pb-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
                {PROJECTS.map((project) => (
                    <Link to={`/works/${project.id}`} key={project.id} className="block">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="group cursor-pointer"
                        >
                            <div className="aspect-[4/3] overflow-hidden bg-white mb-4 relative">
                                <img
                                    src={project.thumbnail}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                                />
                                {project.hoverImage && (
                                    <img
                                        src={`${project.hoverImage}?v=diagram2`}
                                        alt=""
                                        className="pointer-events-none absolute inset-0 h-full w-full object-contain bg-white opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                                    />
                                )}
                            </div>
                            <h3 className="font-bold text-[11px] md:text-sm leading-tight tracking-tight">
                                {project.title}
                            </h3>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default WorksReal;
