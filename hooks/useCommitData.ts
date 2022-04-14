import useApiRequest from './useApiRequest';

export const useCommitData = (repo: string) => {
  return useApiRequest(`${repo}-commits`, `/github/repo/${repo}`, {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};
