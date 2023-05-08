import { useContext } from "react";
import ReactMarkdown from 'react-markdown';
import { HeaderPost } from "../../components/HeaderPost";
import { PostContext } from "../../contexts/PostContext";
import { PostContainer, PostContent } from "./styles";

export function Post() {
  const { post } = useContext(PostContext);

  return (
    <>
      <HeaderPost />
      <PostContainer>
        <PostContent>
          {post ? (
            <ReactMarkdown>{post.body}</ReactMarkdown>
          ) : (
            <p>Loading...</p>
          )}
        </PostContent>
      </PostContainer>
    </>
  );
}
