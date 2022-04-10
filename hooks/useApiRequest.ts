import axios from 'axios';
import { useQuery, UseQueryOptions } from 'react-query';

axios.defaults.baseURL = '/api';

const useApiRequest = <TData>(
  queryKey: string,
  url: string,
  options?: Omit<
    UseQueryOptions<any, any, TData, string>,
    'queryKey' | 'queryFn'
  >
) => {
  const { data, ...rest } = useQuery<any, any, { data: { count: number } }>(
    queryKey,
    ({ signal }) => axios.get(url, { signal }),
    // @ts-ignore
    options
  );

  return {
    data: data?.data,
    ...rest,
  };
};

export default useApiRequest;
