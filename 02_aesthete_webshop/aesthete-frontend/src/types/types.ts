interface Category {
  id: number;
  attributes: {
    title: string;
  };
}

interface Image {
  id: string;
  attributes: {
    url: string;
  };
}

export interface Product {
  id: number;
  attributes: {
    title: string;
    description: string;
    price: number;
    highlights: string;
    categories: { data: Category[] };
    image: {
      data: Image;
    };
    shippingAndReturns: string;
  };
}

// interface User
export interface User {
  id: number;
  username: string;
  email: string;
}

// interface AuthContextData for AuthContext
export interface AuthContextData {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

// interface AuthProviderProps for AuthProvider
export interface AuthProviderProps {
  children: React.ReactNode;
}
