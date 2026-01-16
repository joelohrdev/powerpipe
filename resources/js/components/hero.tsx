import { ChevronRight, Play } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { BatFinish } from '@/types/enums';

const getFinishColor = (finish: BatFinish) => {
    switch (finish) {
        case BatFinish.MATTE_BLACK:
            return 'bg-zinc-900';
        case BatFinish.CHROME_BLUE:
            return 'bg-blue-600';
        case BatFinish.CARBON_FIBER:
            return 'bg-zinc-800';
        case BatFinish.NATURAL_MAPLE:
            return 'bg-orange-200';
        default:
            return 'bg-zinc-900';
    }
};

export default function Hero() {
    const [selectedFinish] = useState<BatFinish>(
        BatFinish.MATTE_BLACK,
    );

    return (
        <>
            <section className="bg-grid relative overflow-hidden pt-32 pb-20 md:pt-48 md:pb-32">
                <div className="absolute top-0 right-0 h-full w-1/2 translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[120px]"></div>
                <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
                    <div>
                        <h1 className="mb-8 text-6xl leading-none font-black tracking-tighter italic md:text-8xl">
                            PRECISION <br />
                            <span className="text-blue-500">REDEFINED.</span>
                        </h1>
                        <p className="mb-10 max-w-lg text-xl leading-relaxed text-gray-400">
                            The only weighted drill bat engineered with
                            pro-grade maple and aerodynamic flow technology.
                            Built to build champions.
                        </p>
                        <div className="flex flex-col gap-4 sm:flex-row">
                            <Button className="group">
                                Shop The Collection{' '}
                                <ChevronRight className="transition-transform group-hover:translate-x-1" />
                            </Button>
                            <Button
                                variant="secondary"
                                onClick={() =>
                                    document
                                        .getElementById('film')
                                        ?.scrollIntoView({ behavior: 'smooth' })
                                }
                            >
                                Watch The Film{' '}
                                <Play size={18} fill="currentColor" />
                            </Button>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="relative z-10 flex aspect-square w-full items-center justify-center">
                            {/* Bat Mockup Visual */}
                            <div className="group relative h-[600px] w-24 -rotate-45 transform">
                                <div
                                    className={`h-full w-full rounded-t-lg rounded-b-3xl shadow-2xl transition-all duration-500 ${getFinishColor(selectedFinish)}`}
                                >
                                    <div className="absolute top-1/4 left-1/2 h-1/2 w-px -translate-x-1/2 bg-white/20"></div>
                                    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-4xl font-black tracking-[1em] text-white/30 uppercase [writing-mode:vertical-lr]">
                                        APEX
                                    </div>
                                </div>
                                <div className="absolute -bottom-10 left-1/2 h-4 w-48 -translate-x-1/2 rounded-full bg-blue-500/40 blur-xl"></div>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute top-1/2 left-1/2 h-[140%] w-[140%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5"></div>
                    </div>
                </div>
            </section>
        </>
    );
}
