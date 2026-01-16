import Features from '@/components/features';
import Gallery from '@/components/gallery';
import Hero from '@/components/hero';
import { Navigation } from '@/components/navigation';
import Product from '@/components/product';
import Video from '@/components/video';

export default function Welcome() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-blue-500 selection:text-white">
            <Navigation />
            <Hero />
            <Features />
            <Gallery />
            <Video />
            <Product />
        </div>
    );
}
