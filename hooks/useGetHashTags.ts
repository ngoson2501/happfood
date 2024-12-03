import { useEffect, useState } from 'react';
import { message } from 'antd';

export const useGetHashTags = () => {
    const [hashTags, setHashTags] = useState<string[]>([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('/api/dashboard/categories', { method: 'GET' });
                if (response.ok) {
                    const data = await response.json();
                    const titles = data.map((category: { title: string }) => category.title);
                    setHashTags(titles);
                } else {
                    message.error("Failed to fetch categories.");
                    console.error("Error:", await response.text());
                }
            } catch (error) {
                message.error("Failed to fetch categories.");
                console.error("Error:", error);
            }
        };

        fetchCategories();
    }, []);

    return hashTags;
};
