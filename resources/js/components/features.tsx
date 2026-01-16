import { Activity, Settings, ShieldCheck, Target } from 'lucide-react';

export default function Features() {
    return (
        <>
            <section
                id="features"
                className="border-y border-white/5 bg-zinc-950 py-24"
            >
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                        {[
                            {
                                icon: <Target className="text-blue-500" />,
                                title: 'Precision Weight',
                                desc: 'Perfectly balanced to increase hand speed and barrel control.',
                            },
                            {
                                icon: <Activity className="text-blue-500" />,
                                title: 'Aero-Dynamic',
                                desc: 'Reduced drag profile for maximum velocity during dry swings.',
                            },
                            {
                                icon: <ShieldCheck className="text-blue-500" />,
                                title: 'Pro Maple',
                                desc: 'Crafted from elite billets for unbreakable durability.',
                            },
                            {
                                icon: <Settings className="text-blue-500" />,
                                title: 'Custom Spec',
                                desc: 'Adjustable weights and lengths tailored to your swing profile.',
                            },
                        ].map((feature, idx) => (
                            <div key={idx} className="group">
                                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 transition-colors group-hover:bg-blue-600/20">
                                    {feature.icon}
                                </div>
                                <h3 className="mb-3 text-xl font-bold uppercase italic">
                                    {feature.title}
                                </h3>
                                <p className="leading-relaxed text-gray-500">
                                    {feature.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
