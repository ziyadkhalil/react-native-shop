import {useInfiniteQuery, UseQueryOptions} from 'react-query';
import {api} from '@src/api';

const perPage = 16;

type Response = {
  products: {
    id: number;
    name: string;
    image: {
      caption: string;
      sizes: [{url: string}, {url: string}, {url: string}];
    };
    maximumPriceString: string;
    minimumPriceString: string;
    shortDescription: string;
  }[];
};
export function useProductsInfiniteQuery(categoryId: string, options?: UseQueryOptions<Product[]>) {
  return useInfiniteQuery<Product[]>(
    ['products', categoryId],
    ({pageParam}) => {
      return api
        .get<Response>('/products', {
          params: {
            start: pageParam,
            perPage,
            categoryId,
          },
        })
        .then(({data}) =>
          data.products.map(p => ({
            id: p.id,
            name: p.name,
            price: p.maximumPriceString,
            image: {caption: p.image.caption, url: p.image.sizes[2].url},
            shortDescription: p.shortDescription,
          })),
        );
    },
    {
      getNextPageParam: (_, allPages) => allPages.length * perPage,
      enabled: !!categoryId,
    },
  );
}
