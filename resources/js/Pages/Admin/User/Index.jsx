import { useState, useEffect } from "react";
import axios from "axios";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link } from '@inertiajs/react';
import { usePage } from "@inertiajs/react";

const UserTable = () => {
    const { users, message } = usePage().props;

    useEffect(() => {
        console.error(message)
        if (message?.success) {
            alert(flash.success); // Show success message in an alert
        }
    }, [flash]);
    return (
        <AuthenticatedLayout>
            <div className="p-6 bg-white shadow rounded-lg">
                <h2 className="text-lg font-semibold mb-4">Users</h2>
                <h2 className="text-lg font-semibold mb-4" ><Link href={route('admin.user.create')}>Create</Link></h2>
                <table className="w-full border-collapse border border-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="border border-gray-300 px-4 py-2">ID</th>
                            <th className="border border-gray-300 px-4 py-2">Name</th>
                            <th className="border border-gray-300 px-4 py-2">Email</th>
                            <th className="border border-gray-300 px-4 py-2">Role</th>
                            <th className="border border-gray-300 px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id} className="hover:bg-gray-50">
                                <td className="border border-gray-300 px-4 py-2">{user.id}</td>
                                <td className="border border-gray-300 px-4 py-2">{user.name}</td>
                                <td className="border border-gray-300 px-4 py-2">{user.email}</td>
                                <td className="border border-gray-300 px-4 py-2">{user.role}</td>
                                <td className="border border-gray-300 px-4 py-2">
                                    <button className="text-blue-500 px-2">Edit</button>
                                    <button className="text-red-500 px-2">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AuthenticatedLayout>
    );
};

export default UserTable;
