import axios from 'axios';
import { Link } from '../types/link';

// Base URL for Next.js API routes
const API_URL = '/api';

export const fetchLinks = async (): Promise<Link[]> => {
    const response = await axios.get(`${API_URL}/links`);
    return response.data;
};

export const createLink = async (title: string, url: string): Promise<Link> => {
    const response = await axios.post(`${API_URL}/links`, { title, url });
    return response.data;
};

export const deleteLink = async (id: string): Promise<void> => {
    await axios.delete(`${API_URL}/links`, { data: { id } });
};

export const incrementViews = async (id: string): Promise<Link> => {
    const response = await axios.patch(`${API_URL}/links`, { id });
    return response.data;
};
