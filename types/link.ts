export interface Link {
  platform: string;
  url: string;
}

export interface GeoInfo {
  country: string;
  city: string;
  region: string;
}

export interface LinkItem {
  type: string;
  title: string;
  url?: string,

}

export interface AnalyticsData {
  date_range: { start_date: string; end_date: string };
  total_visits: number;
  total_clicks: number;
  clicks_by_link: { link_id: string; total_clicks: number }[];
  views_by_country: { country: string; total_views: number }[];
  views_by_referrer: { source: string; total_views: number }[];
  views_over_time: {
    date: string;
    total_visits: number;
    total_clicks: number;
  }[];
  last_week_stats: {
    last_week_visits: number;
    last_week_clicks: number;
  };
}