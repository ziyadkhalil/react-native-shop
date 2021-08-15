type TabsParamList = {
  Home: undefined;
  CatalogueStack: undefined;
  Favorite: undefined;
  Profile: undefined;
};

type CatalougeStackParamList = {
  Catalogue: undefined;
  Product: {productId: string; filter?: string};
};

type TextVariant = 'title1' | 'title2' | 'title3' | 'body' | 'tabbar' | 'tag';

type WithGradient<T> = T & {
  gradient?: [string, string];
  gradientFill?: boolean;
  gradientStroke?: boolean;
  stroke?: string;
  fill?: string;
};

type Category = {
  id: string;
  name: string;
  productCount: number;
};

type Product = {
  id: number;
  name: string;
  image: {
    caption: string;
    url: string;
  };
  price: string;
  shortDescription: string;
};
