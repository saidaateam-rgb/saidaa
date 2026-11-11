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
                            <div className="relative aspect-[4/3] overflow-hidden bg-white">
                                <img
                                    src={project.thumbnail}
                                    alt={project.title}
                                    className="h-full w-full object-cover"
                                />
                                {project.hoverImage && (
                                    <img
                                        src={`${project.hoverImage}?v=diagram3`}
                                        alt=""
                                        className="pointer-events-none absolute left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 object-contain opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                                    />
                                )}
                            </div>
                            <h3 className="mt-1 text-right font-bold text-[11px] leading-tight tracking-tight md:text-sm">
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
