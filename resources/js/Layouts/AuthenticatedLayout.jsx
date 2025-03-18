import { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import ApplicationLogo from '../Components/ApplicationLogo';
import Dropdown from '../Components/Dropdown';
import NavLink from '../Components/NavLink';
// import ResponsiveNavLink from '../Components/ResponsiveNavLink';

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-800 text-white flex flex-col p-4">
                <div className="flex items-center justify-center mb-6">
                    <img src="/mnt/data/image.png" alt="Logo" className="h-12 w-auto" />
                </div>
                <nav className="flex flex-col space-y-2">
                    <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                        Dashboard
                    </NavLink>
                    <NavLink href={route('admin.profile.edit')}>
                        Profile
                    </NavLink>
                    <NavLink href={route('admin.user.index')}>
                        user
                    </NavLink>
                    <NavLink href={route('logout')} method="post" as="button">
                        Log Out
                    </NavLink>
                </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Top Navbar */}
                <nav className="border-b border-gray-100 bg-white dark:border-gray-700 dark:bg-gray-800 p-4 flex justify-between items-center">
                    <button onClick={() => setShowingNavigationDropdown(!showingNavigationDropdown)} className="text-gray-500 dark:text-gray-400 sm:hidden">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={showingNavigationDropdown ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                        </svg>
                    </button>
                    <div className="hidden sm:flex items-center space-x-4">
                        <Dropdown>
                            <Dropdown.Trigger>
                                <span className="inline-flex rounded-md">
                                    <button type="button" className="inline-flex items-center bg-white px-3 py-2 text-sm font-medium text-gray-500 dark:bg-gray-800 dark:text-gray-400">
                                        {user.name}
                                        <svg className="ml-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </span>
                            </Dropdown.Trigger>
                            <Dropdown.Content>
                                <Dropdown.Link href={route('admin.profile.edit')}>Profile</Dropdown.Link>
                                <Dropdown.Link href={route('logout')} method="post" as="button">Log Out</Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                    </div>
                </nav>

                {/* Page Header */}
                {header && (
                    <header className="bg-white shadow dark:bg-gray-800 p-6">
                        <div className="max-w-7xl mx-auto">{header}</div>
                    </header>
                )}

                {/* Main Content */}
                <main className="p-6 flex-1">{children}</main>
            </div>
        </div>
    );
}
