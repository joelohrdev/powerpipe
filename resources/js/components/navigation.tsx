import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';

export function Navigation() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
    <nav
        className={`fixed top-0 z-50 w-full border-b transition-all duration-300 ${scrolled ? 'border-white/10 bg-black/80 py-4 backdrop-blur-md' : 'border-transparent bg-transparent py-6'}`}
    >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
            <div className="flex items-center gap-2">
                <span className="text-xl font-black tracking-tighter uppercase italic">
                Power Pipe
            </span>
            </div>
            <div className="hidden items-center gap-8 text-sm font-semibold tracking-widest text-white/70 uppercase md:flex">
                <a
                    href="#features"
                    className="transition-colors hover:text-blue-500"
                >
                    Technology
                </a>
                <a
                    href="#gallery"
                    className="transition-colors hover:text-blue-500"
                >
                    Gallery
                </a>
                <a
                    href="#customizer"
                    className="transition-colors hover:text-blue-500"
                >
                    Customizer
                </a>
                <a
                    href="#pro-ranks"
                    className="transition-colors hover:text-blue-500"
                >
                    Pro Ranks
                </a>
            </div>
            <Button className="hidden py-2 text-sm sm:flex">Order Now</Button>
        </div>
    </nav>

);
}
