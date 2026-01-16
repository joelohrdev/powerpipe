import { Maximize2, Play, Volume2 } from 'lucide-react';

export default function Video() {
    return (
        <>
            <section
                id="film"
                className="relative overflow-hidden bg-zinc-950 py-24"
            >
                <div className="absolute top-0 left-0 h-1/2 w-full bg-gradient-to-b from-black to-transparent opacity-50"></div>
                <div className="relative z-10 mx-auto max-w-7xl px-6">
                    <div className="mb-16 text-center">
                        <h2 className="mb-4 text-3xl font-black tracking-tighter uppercase italic md:text-5xl">
                            WATCH THE FILM
                        </h2>
                        <div className="mx-auto h-1 w-24 rounded-full bg-blue-600"></div>
                    </div>

                    <div className="group relative mx-auto aspect-video w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/5 shadow-2xl shadow-blue-500/10">
                        <div className="absolute inset-0 flex items-center justify-center bg-zinc-900">
                            <img
                                src="https://images.unsplash.com/photo-1508344928928-7165b67de128?w=900&auto=format&fit=crop"
                                className="absolute inset-0 h-full w-full object-cover opacity-40 transition-transform duration-1000 group-hover:scale-105"
                                alt="Video Thumbnail"
                            />
                            <div className="relative z-10 flex flex-col items-center">
                                <button className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-600 text-white shadow-2xl shadow-blue-600/50 transition-transform duration-300 group-hover:bg-blue-500 hover:scale-110">
                                    <Play size={40} fill="currentColor" />
                                </button>
                                <span className="mt-6 text-xl font-black tracking-widest text-white/80 uppercase italic">
                                    Play Showcase
                                </span>
                            </div>
                        </div>

                        {/* Mock Player UI */}
                        <div className="absolute bottom-0 left-0 flex w-full items-center justify-between bg-gradient-to-t from-black/80 to-transparent p-8 opacity-0 transition-opacity group-hover:opacity-100">
                            <div className="flex items-center gap-6">
                                <Play
                                    size={20}
                                    fill="currentColor"
                                    className="text-white"
                                />
                                <div className="h-1 w-64 overflow-hidden rounded-full bg-white/20">
                                    <div className="h-full w-1/3 bg-blue-600"></div>
                                </div>
                                <span className="text-xs font-bold text-white/50">
                                    01:24 / 04:00
                                </span>
                            </div>
                            <div className="flex items-center gap-6">
                                <Volume2 size={20} className="text-white/50" />
                                <Maximize2
                                    size={20}
                                    className="text-white/50"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
