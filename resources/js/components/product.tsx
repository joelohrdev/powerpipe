import { Button } from '@headlessui/react';
import { useState } from 'react';

import { BatFinish, BatLength } from '@/types/enums';

export default function Product() {
    const [selectedFinish, setSelectedFinish] = useState<BatFinish>(
        BatFinish.MATTE_BLACK,
    );
    const [selectedLength, setSelectedLength] = useState<BatLength>(
        BatLength.L33,
    );

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

    return (
        <>
            <section
                id="customizer"
                className="relative overflow-hidden bg-black py-24"
            >
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid items-center gap-20 lg:grid-cols-2">
                        <div className="order-2 lg:order-1">
                            <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-3xl bg-zinc-900 p-12">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent"></div>
                                <div
                                    className={`h-5/6 w-12 -rotate-12 transform rounded-t-md rounded-b-2xl transition-all duration-700 ${getFinishColor(selectedFinish)} relative shadow-2xl`}
                                >
                                    <div className="absolute top-20 left-1/2 h-1/2 w-px -translate-x-1/2 bg-white/10"></div>
                                    <div className="absolute bottom-20 left-0 h-1 w-full bg-white/10"></div>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="mb-6 text-4xl leading-tight font-black uppercase italic md:text-5xl">
                                Build Your <br />
                                <span className="text-blue-500">
                                    Masterpiece.
                                </span>
                            </h2>
                            <p className="mb-10 text-lg text-gray-400">
                                Select your finish and specifications to match
                                your game.
                            </p>

                            <div className="space-y-8">
                                <div>
                                    <h4 className="mb-4 text-sm font-bold tracking-widest text-white/50 uppercase">
                                        Elite Finish
                                    </h4>
                                    <div className="grid grid-cols-2 gap-4">
                                        {Object.values(BatFinish).map(
                                            (finish) => (
                                                <button
                                                    key={finish}
                                                    onClick={() =>
                                                        setSelectedFinish(
                                                            finish,
                                                        )
                                                    }
                                                    className={`group rounded-xl border-2 p-4 text-left transition-all ${selectedFinish === finish ? 'border-blue-600 bg-blue-600/10' : 'border-white/5 hover:border-white/20'}`}
                                                >
                                                    <div
                                                        className={`mb-3 h-6 w-6 rounded-full ${getFinishColor(finish)}`}
                                                    ></div>
                                                    <span className="text-sm font-bold">
                                                        {finish}
                                                    </span>
                                                </button>
                                            ),
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="mb-4 text-sm font-bold tracking-widest text-white/50 uppercase">
                                        Bat Length
                                    </h4>
                                    <div className="flex flex-wrap gap-3">
                                        {Object.values(BatLength).map(
                                            (length) => (
                                                <button
                                                    key={length}
                                                    onClick={() =>
                                                        setSelectedLength(
                                                            length,
                                                        )
                                                    }
                                                    className={`rounded-xl border px-6 py-3 font-bold transition-all ${selectedLength === length ? 'border-white bg-white text-black' : 'border-white/10 text-white/50 hover:border-white/30'}`}
                                                >
                                                    {length}
                                                </button>
                                            ),
                                        )}
                                    </div>
                                </div>

                                <div className="border-t border-white/5 pt-8">
                                    <div className="mb-6 flex items-center justify-between">
                                        <div>
                                            <span className="text-lg text-gray-500 line-through">
                                                $249.00
                                            </span>
                                            <div className="text-3xl font-black italic">
                                                $189.00
                                            </div>
                                        </div>
                                        <Button
                                            className="px-10"
                                        >
                                            Checkout
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
