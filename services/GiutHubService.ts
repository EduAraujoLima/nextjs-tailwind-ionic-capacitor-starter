import useSWR, { Fetcher } from 'swr';

const BASE_URL = 'https://api.github.com/users';

const fetcher: Fetcher<GitHubUser> = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('An error occurred while fetching the data.');
  }
  return response.json();
};

export const useUser = (username: string) => {
    const { data, error } = useSWR<GitHubUser>(
        `${BASE_URL}/${username}`,
        fetcher
    );
    return {
        user: data,
        isLoading: !error && !data,
        isError: error,
    };
};

export type GitHubUser = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: string;
  hireable: string;
  bio: string;
  twitter_username: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
};
