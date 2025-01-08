import { Head } from '@inertiajs/react';
import Header from 'resources/js/Pages/src/components/Common/Header/Header';
import Banner from './src/components/Banner/Banner';
import Footer from 'resources/js/Pages/src/components/Common/Footer/Footer';
import Home from 'resources/js/Pages/src/pages/Home/Home';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            {/* Head Metadata */}
            <Head title="Welcome" />

            {/* Header Section */}
            <Header />

            {/* Banner Section */}
            <Banner />

            {/* Main Content */}
            <main className="container mx-auto px-4">
                <section className="my-8 text-center">
                    <h1 className="text-3xl font-bold">Welcome to JetSetters</h1>
                    <p className="text-gray-600 mt-2">
                        Laravel Version: {laravelVersion} | PHP Version: {phpVersion}
                    </p>
                </section>

                {/* Home Section */}
                <Home />
            </main>

            {/* Footer Section */}
            <Footer />

            {/* Background SVG */}
            <div className="relative bg-gray-50 dark:bg-black">
                <img
                    id="background"
                    className="absolute -left-20 top-0 max-w-[877px]"
                    src="https://laravel.com/assets/img/welcome/background.svg"
                    alt="background"
                    onError={handleImageError}
                />
                <div className="relative flex min-h-screen flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                    <div id="screenshot-container" className="p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold text-gray-800">
                            Beautiful UI Design
                        </h2>
                        <p className="text-gray-600">
                            Explore new features and stunning UI components with JetSetters.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
