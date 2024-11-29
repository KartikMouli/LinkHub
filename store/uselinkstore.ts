import { create } from 'zustand';
import { Link } from '../types/link';
import { createLink, deleteLink, fetchLinks, incrementViews } from '@/lib/links';


interface LinksStore {
    links: Link[];
    isLoading: boolean;
    error: string | null;
    fetchLinks: () => Promise<void>;
    addLink: (title: string, url: string) => Promise<void>;
    removeLink: (id: string) => Promise<void>;
    incrementViews: (id: string) => Promise<void>;
}

export const useLinksStore = create<LinksStore>((set, get) => ({
    links: [],
    isLoading: false,
    error: null,
    fetchLinks: async () => {
        set({ isLoading: true, error: null });
        try {
            const links = await fetchLinks();
            set({ links, isLoading: false });
        } catch (error) {
            set({ error: 'Failed to fetch links', isLoading: false });
        }
    },
    addLink: async (title: string, url: string) => {
        try {
            const newLink = await createLink(title, url);
            set({ links: [newLink, ...get().links] });
        } catch (error) {
            set({ error: 'Failed to add link' });
        }
    },
    removeLink: async (id: string) => {
        try {
            await deleteLink(id);
            set({ links: get().links.filter((link) => link.id !== id) });
        } catch (error) {
            set({ error: 'Failed to remove link' });
        }
    },
    incrementViews: async (id: string) => {
        try {
            const updatedLink = await incrementViews(id);
            set({
                links: get().links.map((link) =>
                    link.id === id ? updatedLink : link
                ),
            });
        } catch (error) {
            set({ error: 'Failed to increment views' });
        }
    },
}));
