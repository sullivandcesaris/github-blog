import { useContext } from 'react';
import { PostCard } from "./components/PostCard";
import { PostsContent } from "./styles";
import { IssueContext } from '../../../../contexts/IssueContext';

export function PostsGithub() {
  const { issues } = useContext(IssueContext);

  return (
    <PostsContent>
      {issues?.map(issue => (
        <PostCard key={issue.number} issue={issue} />
      ))}
    </PostsContent>
  )
}
