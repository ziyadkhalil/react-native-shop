import {api} from '@src/api';
import {useQuery, UseQueryOptions} from 'react-query';

const CLOTHES_CATEGORY_ID = '1-32838';

type Response = {
  categories: (Category & {subCategories: Category[]})[];
};

export function useCategoriesQuery(options?: UseQueryOptions<Category[]>) {
  return useQuery<Category[]>(
    'categories',
    () =>
      api.get<Response>('/categories').then(res => {
        const clothesCategory = res.data.categories.find(c => c.id === CLOTHES_CATEGORY_ID);
        if (!clothesCategory || clothesCategory.subCategories.length === 0)
          throw new Error('Clothes category not found.');
        return [
          {
            id: clothesCategory.id,
            productCount: clothesCategory.productCount,
            name: 'All',
          },
          ...clothesCategory.subCategories,
        ];
      }),
    options,
  );
}
