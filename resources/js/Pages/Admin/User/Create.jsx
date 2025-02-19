import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from "react";
import axios from "axios";

export default function Dashboard() {
    const [errors, setErrors] = useState({});

    const [formData, setFormData] = useState({
        name: "",
        email: '',
        phone: "",
        conform_password: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Clear errors when user types
        setErrors({ ...errors, [name]: "" });
    };

    const handleToggle = () => {
        setFormData({ ...formData, active_status: !formData.active_status });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("/admin/user", formData);
            alert(response.data.message);
        } catch (error) {
            setErrors(error.response?.data)
            console.error("Submission error:", error.response?.data || error);
        }
    };

    return (
        <AuthenticatedLayout>
            <Head title="User Create" />
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 shadow-md rounded-lg">
                <div className="mb-4">
                    <label className="block text-sm font-medium">Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name[0]}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium">Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email[0]}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium">Phone</label>
                    <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone[0]}</p>}
                </div>

                <div className="flex gap-4">
                    <div className="mb-4 flex-grow">
                        <label className="block text-sm font-medium">Password</label>
                        <input type="password" name="password" value={formData.password} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
                        {errors.password && <p className="text-red-500 text-sm">{errors.password[0]}</p>}
                    </div>

                    <div className="mb-4 flex-grow">
                        <label className="block text-sm font-medium">Confirm Password</label>
                        <input type="password" name="conform_password" value={formData.conform_password} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
                        {errors.conform_password && <p className="text-red-500 text-sm">{errors.conform_password[0]}</p>}
                    </div>
                </div>

                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Submit</button>
            </form>
        </AuthenticatedLayout>

    );
}