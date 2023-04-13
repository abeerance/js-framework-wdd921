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
