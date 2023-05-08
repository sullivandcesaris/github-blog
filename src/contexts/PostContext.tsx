import { createContext, useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import { api } from "../lib/axios";

interface PostContextData {
  post: any;
}

interface ApiResponse {
  title: string;
  body: string;
}

const PostContext = createContext<PostContextData>({
  post: {},
});

function PostProvider({ children }: { children: React.ReactNode }) {
  const [post, setPost] = useState<any>({});

  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get("id");
    if (!id) {
      console.error("ID not found");
      return;
    }
  
    const owner = 'sullivandcesaris';
    const repo = 'github-blog';
  
    api
      .get<ApiResponse>(`/repos/${owner}/${repo}/issues/${id}`)
      .then((response: AxiosResponse<ApiResponse>) => {
        if (response && response.data && response.data) {
          setPost(response.data);
        } else {
          console.error("Invalid response");
        }
      })
      .catch((error: any) => {
        console.error(error);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
 
  return (
    <PostContext.Provider value={{ post }}>
      {children}
    </PostContext.Provider>
  );
}

export { PostContext, PostProvider };
