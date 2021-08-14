import {api} from '@src/api';
import {useQuery} from 'react-query';

export function useCategoriesQuery() {
  return useQuery<string[]>('categories', () => api.get('/categories', {params: {}}).then(res => res.data));
}
