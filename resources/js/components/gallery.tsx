export default function Gallery() {
    const galleryImages = [
        {
            url: 'https://images.unsplash.com/photo-1508344928928-7165b67de128?q=80&w=1000&auto=format&fit=crop',
            title: 'Power Transfer',
            size: 'col-span-1',
        },
        {
            url: 'https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?q=80&w=1000&auto=format&fit=crop',
            title: 'Precision Impact',
            size: 'md:col-span-2',
        },
        {
            url: 'https://images.unsplash.com/photo-1593341646782-e0b495cff86d?q=80&w=1000&auto=format&fit=crop',
            title: 'Max Velocity',
            size: 'md:col-span-2',
        },
        {
            url: 'https://images.unsplash.com/photo-1544049103-68f44816c7a3?q=80&w=1000&auto=format&fit=crop',
            title: 'Drill Focus',
            size: 'col-span-1',
        },
    ];

    return (
        <>
            <section id="gallery" className="bg-black py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                        <div>
                            <h2 className="mb-4 text-4xl font-black tracking-tighter uppercase italic md:text-6xl">
                                The Apex{' '}
                                <span className="text-blue-500">
                                    In Motion.
                                </span>
                            </h2>
                            <p className="max-w-xl text-lg text-gray-400">
                                See how elite athletes use the Apex Pro to
                                sharpen their mechanics and dominate the box.
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 text-gray-500">
                                01 / 04
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        {galleryImages.map((img, i) => (
                            <div
                                key={i}
                                className={`group relative h-[400px] overflow-hidden rounded-3xl bg-zinc-900 ${img.size}`}
                            >
                                <img
                                    src={img.url}
                                    alt={img.title}
                                    className="h-full w-full object-cover opacity-60 transition-all duration-700 group-hover:scale-110 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                                <div className="absolute bottom-8 left-8 translate-y-4 transform opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                    <h4 className="text-2xl font-black text-white uppercase italic">
                                        {img.title}
                                    </h4>
                                    <p className="text-sm font-bold tracking-widest text-blue-400 uppercase">
                                        Action Phase {i + 1}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
