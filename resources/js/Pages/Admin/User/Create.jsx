import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from "react";
import axios from "axios";

export default function Dashboard() {
    const [formData, setFormData] = useState({
        product_name: "",
        category: [],
        quantity: "",
        weight: "",
        price_type: "unit",
        active_status: false,
        description: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleToggle = () => {
        setFormData({ ...formData, active_status: !formData.active_status });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("/user/store", formData);
            alert(response.data.message);
        } catch (error) {
            console.error("Submission error:", error.response?.data || error);
        }
    };

    return (
        <AuthenticatedLayout>
            <Head title="User Create" />
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 shadow-md rounded-lg">
                <div className="mb-4">
                    <label className="block text-sm font-medium">Product Name</label>
                    <input type="text" name="product_name" value={formData.product_name} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium">Category</label>
                    <select multiple name="category" onChange={(e) => setFormData({ ...formData, category: [...e.target.selectedOptions].map(opt => opt.value) })} className="w-full px-3 py-2 border rounded">
                        <option value="sport">Sport & Outdoor</option>
                        <option value="smartphone">Smartphone & Tablet</option>
                    </select>
                </div>

                <div className="flex gap-4">
                    <div className="mb-4 flex-grow">
                        <label className="block text-sm font-medium">Quantity</label>
                        <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
                    </div>

                    <div className="mb-4 flex-grow">
                        <label className="block text-sm font-medium">Weight</label>
                        <input type="text" name="weight" value={formData.weight} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium">Price Type</label>
                    <select name="price_type" onChange={handleChange} value={formData.price_type} className="w-full px-3 py-2 border rounded">
                        <option value="unit">Unit</option>
                        <option value="wholesale">Wholesale</option>
                        <option value="bulk">Bulk</option>
                    </select>
                </div>

                <div className="mb-4 flex items-center">
                    <label className="block text-sm font-medium mr-4">Active Status</label>
                    <input type="checkbox" checked={formData.active_status} onChange={handleToggle} />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium">Description</label>
                    <textarea name="description" value={formData.description} onChange={handleChange} className="w-full px-3 py-2 border rounded"></textarea>
                </div>

                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Submit</button>
            </form>
        </AuthenticatedLayout>

    );
}