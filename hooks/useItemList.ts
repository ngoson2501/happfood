"use client"
import { useState, useEffect } from 'react';
import { message } from 'antd';

interface Category {
    _id: string;
    title: string;
    //data: string; // Dữ liệu Base64 của ảnh
    //contentType: string;
    topic: string;
    //createdAt: string;
}

const useItemList = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchCategories = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch('/api/dashboard/categories/itemList', { method: 'GET' });
            if (response.ok) {
                const data = await response.json();
                setCategories(data);
            } else {
                const errorText = await response.text();
                setError(errorText);
                message.error("Failed to fetch categories.");
                console.error("Error:", errorText);
            }
        } catch (error: any) {
            setError(error.message);
            message.error("Failed to fetch categories.");
            console.error("Error:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    return { categories, loading, error, fetchCategories };
};

export default useItemList




