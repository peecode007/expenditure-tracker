"use client";
import React, { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"] });

const CreateBudget = () => {
    const [credentials, setCredentials] = useState({
        budget: '',
        description: '',
        category: '',
        date: ''
    });

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted', credentials);
    };
    const { budget, description, category, date } = credentials;

    return (
        <div className={`p-5 ${outfit.className}`}>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                <Dialog>
                    <DialogTrigger>
                        <div className='w-full p-20 text-center border-2 border-gray-400 rounded-lg cursor-pointer shadow-md'>
                            <h1>+</h1>
                            <div>Add budget</div>
                        </div>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Create a new Budget</DialogTitle>
                            <DialogDescription>
                                <form onSubmit={handleSubmit} className={`space-y-6 max-w-lg mx-auto p-6 shadow-md rounded-lg ${outfit.className}`}>
                                    <div className="flex flex-col">
                                        <label htmlFor="budget" className="font-medium text-gray-700 mb-2">Budget</label>
                                        <input
                                            type="number"
                                            id="budget"
                                            placeholder="eg. ₹5000"
                                            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            value={credentials.budget}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="description" className="font-medium text-gray-700 mb-2">Description</label>
                                        <input
                                            type="text"
                                            id="description"
                                            placeholder="eg. Grocery"
                                            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            value={credentials.description}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="category" className="font-medium text-gray-700 mb-2">Category</label>
                                        <select
                                            id="category"
                                            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            value={credentials.category}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select Category</option>
                                            <option value="1">Category 1</option>
                                            <option value="2">Category 2</option>
                                            <option value="3">Category 3</option>
                                        </select>
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="date" className="font-medium text-gray-700 mb-2">Date</label>
                                        <input
                                            type="date"
                                            id="date"
                                            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            value={credentials.date}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div>
                                        <button
                                            type="submit"
                                            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            disabled={!budget && !description && !date && !category}
                                        >
                                            Create Budget
                                        </button>
                                    </div>
                                </form>
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    );
};

export default CreateBudget;
