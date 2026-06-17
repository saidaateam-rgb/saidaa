'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';

export default function SiteShell({ children }) {
    const pathname = usePathname();
    const isHome = pathname === '/';

    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground font-sans">
            <Navbar />
            <main className={isHome ? '' : 'flex-grow pt-24 md:pt-32 max-w-[1920px] mx-auto w-full'}>
                {children}
            </main>
            {!isHome && <Footer />}
        </div>
    );
}
