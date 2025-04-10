// import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import ProfilePage from './profile-page';
import Navbar from './NavBar';

export default function Dashboard() {
    return (
        <>
            <Head title="Dashboard" />
            <Navbar/>
        </>
    );
}
