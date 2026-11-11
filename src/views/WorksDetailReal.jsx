'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import { Link, useParams } from '@/lib/routerCompat';
import { getProjectById } from '@/lib/projectsData';

const spanClass = {
    1: 'md:col-span-1',
    2: 'md:col-span-2',
    3: 'md:col-span-3',
    4: 'md:col-span-4',
};

const startClass = {
    1: '',
    2: 'md:col-start-2',
    3: 'md:col-start-3',
    4: 'md:col-start-4',
};

const TagList = ({ tags }) => (
    <div className="pointer-events-none absolute inset-y-0 left-0 flex w-14 flex-col items-start justify-between py-[3%]">
        {tags.map((tag) => (
            <span key={tag} className="bg-[#9a3b32] px-2 py-1 text-[11px] font-medium leading-none text-white">
                {tag}
            </span>
        ))}
    </div>
);

const Cell = ({ cell }) => {
    const place = `${spanClass[cell.span] || 'md:col-span-4'} ${startClass[cell.start] || ''} min-w-0`;

    if (cell.type === 'text') {
        const end = cell.align === 'end';
        const mid = cell.align === 'center';
        return (
            <div className={`${end ? 'self-end text-right' : mid ? 'self-center' : 'self-start'} text-[11px] leading-relaxed text-neutral-800 md:text-[12px] ${place}`}>
                {cell.kicker && <p className="mb-3 font-bold tracking-tight text-black">{cell.kicker}</p>}
                {cell.title && (
                    <p className={`${end ? '' : 'mb-3'} ${String(cell.title).startsWith('대지위치') ? '' : 'font-bold text-black'}`}>
                        {cell.title}
                    </p>
                )}
                {cell.body && <p className="whitespace-pre-line">{cell.body}</p>}
                {cell.src && <img src={cell.src} alt="" className="mt-4 block h-auto w-full" />}
            </div>
        );
    }

    if (cell.type === 'tags') {
        return (
            <div className={`flex h-full flex-col items-end justify-between self-stretch py-1 ${place}`}>
                {cell.tags.map((tag) => (
                    <span key={tag} className="bg-[#9a3b32] px-2 py-1 text-[11px] font-medium leading-none text-white">
                        {tag}
                    </span>
                ))}
            </div>
        );
    }

    return (
        <div className={`relative ${place}`}>
            {cell.tags?.length ? <TagList tags={cell.tags} /> : null}
            <img
                src={cell.src}
                alt=""
                className={`block h-auto w-full max-w-full bg-white object-contain object-left ${cell.tags?.length ? 'pl-16' : ''}`}
            />
        </div>
    );
};

const WorksDetailReal = () => {
    const { id } = useParams();
    const project = getProjectById(id);

    if (!project) {
        return (
            <div className="container mx-auto py-20">
                <p className="text-lg font-semibold">프로젝트를 찾을 수 없습니다.</p>
                <Link to="/works" className="inline-block mt-6 text-sm underline">
                    목록으로 돌아가기
                </Link>
            </div>
        );
    }

    const sections = project.sections?.length
        ? project.sections
        : [project.images.map((src) => ({ type: 'image', src, span: 4 }))];

    return (
        <div className="pb-24">
            <div className="container mx-auto py-6">
                <Link
                    to="/works"
                    className="inline-flex items-center text-xs font-bold tracking-widest hover:text-green-600 transition-colors"
                >
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    WORKS
                </Link>
            </div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                <div className="container mx-auto mb-10">
                    <h1 className="text-2xl md:text-4xl font-black tracking-tight">{project.title}</h1>
                </div>
                <div className="mx-auto flex w-full max-w-[920px] flex-col gap-16 px-4 md:gap-24">
                    {sections.map((section, index) => (
                        <div key={`${project.id}-${index}`} className="grid grid-cols-1 items-start gap-3 md:grid-cols-4 md:gap-x-4 md:gap-y-6">
                            {section.map((cell, cellIndex) => (
                                <Cell key={`${project.id}-${index}-${cellIndex}`} cell={cell} />
                            ))}
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default WorksDetailReal;
