type UserType = {
  id: number;
  name: string;
  email: string;
  status: string;
  joinDate: string;
};

type OverviewType = {
  totalUsers: number;
  activeUsers: number;
  revenue: number;
  growth: number;
};

type AnalyticsType = {
  date: string;
  views: number;
  clicks: number;
  conversions: number;
};

type ProductType = {
  id: number;
  name: string;
  price: number;
  sales: number;
  category: string;
};

export type { AnalyticsType, OverviewType, ProductType, UserType };
