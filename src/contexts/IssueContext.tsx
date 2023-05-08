import { createContext, useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';
import { api } from '../lib/axios';

interface Issue {
  number: number;
  title: string;
  user: {
    login: string;
  };
}

interface IssueContextData {
  issues: Issue[];
  setSearch: (search: string) => void;
}

interface ApiResponse {
  items: Issue[];
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
const IssueContext = createContext<IssueContextData>({ issues: [], setSearch: () => {} });

function IssueProvider({ children }: { children: React.ReactNode }) {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const owner = 'sullivandcesaris';
    const repo = 'github-blog';

    api.get<ApiResponse>(`/search/issues?q=%20${search ? search : ''}%20repo:${owner}/${repo}`)
      .then((response: AxiosResponse<ApiResponse>) => {
        if (response && response.data && response.data.items) {
          setIssues(response.data.items);
        } else {
          console.error('Invalid response');
        }
      }) 
      .catch((error: any) => {
        console.error(error);
      });
  }, [search]);

  return (
    <IssueContext.Provider value={{ issues, setSearch }}>
      {children}
    </IssueContext.Provider>
  );
}

export { IssueContext, IssueProvider };
