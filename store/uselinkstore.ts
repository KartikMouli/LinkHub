import { create } from 'zustand';
import { GeoInfo } from '../types/link';

interface LinksStore {
    isLoading: boolean;
    error: string | null;
    geoInfo: GeoInfo | null;
    visitTracked: boolean;
    setGeoInfo: (geoInfo: GeoInfo) => void;
    setVisitTracked: (status: boolean) => void;
    fetchGeoInfo: () => Promise<void>;
    trackVisit: () => Promise<void>;
    handleLinkClick: (linkId: string) => Promise<void>;
}

export const useLinksStore = create<LinksStore>((set, get) => ({
    
    isLoading: false,
    error: null,
    geoInfo: null,
    visitTracked: false,
    setGeoInfo: (geoInfo) => set({ geoInfo }),
    setVisitTracked: (status) => set({ visitTracked: status }),

    fetchGeoInfo: async () => {
        try {
            const response = await fetch("/api/geolocation");
            const data = await response.json();
            set({
                geoInfo: {
                    country: data.country,
                    city: data.city,
                    region: data.region,
                },
            });
        } catch (error) {
            console.error("Error fetching geo info:", error);
        }
    },

    trackVisit: async () => {
        const { geoInfo, visitTracked } = get();
        if (!geoInfo || visitTracked) return;

        const referrer = document.referrer;
        let source = "direct";

        if (referrer) {
            try {
                const url = new URL(referrer);
                source = url.hostname;
            } catch (error) {
                console.error("Invalid referrer URL:", error);
                source = referrer;
            }
        }

        try {
            const response = await fetch("/api/analytics", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    event_type: "visit",
                    source,
                    ...geoInfo,
                }),
            });

            if (!response.ok) {
                throw new Error("Failed to track visit");
            }

            set({ visitTracked: true });
        } catch (error) {
            console.error("Error tracking visit:", error);
        }
    },

    handleLinkClick: async (linkId: string) => {
        const { geoInfo } = get();

        try {
            const payload = {
                event_type: "click",
                link_id: linkId,
                ...(geoInfo || {}),
            };

            const response = await fetch("/api/analytics", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error("Failed to track click");
            }
        } catch (error) {
            console.error("Error tracking click:", error);
        }
    }
}));