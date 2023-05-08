
import { PostContent } from "./styles";
import { Issue } from "../../../../types";
import { differenceInDays, differenceInHours, differenceInMinutes } from 'date-fns';


interface PostCardProps {
  issue: Issue;
}

interface TruncatedTextProps {
  text: string
  limit?: number
}

export function PostCard({ issue }: PostCardProps) {

  function formatTimeAgo(dateString: string): string {
    const now = new Date();
    const diffInDays = differenceInDays(now, new Date(dateString));
    const diffInHours = differenceInHours(now, new Date(dateString));
    const diffInMinutes = differenceInMinutes(now, new Date(dateString));
  
    if (diffInDays > 0) {
      return `há ${diffInDays} dia${diffInDays > 1 ? 's' : ''} atrás`;
    } else if (diffInHours > 0) {
      return `há ${diffInHours} hora${diffInHours > 1 ? 's' : ''} atrás`;
    } else {
      return `há ${diffInMinutes} minuto${diffInMinutes > 1 ? 's' : ''} atrás`;
    }
  }

  function TruncatedText(props: TruncatedTextProps) {
    const maxWords = 27;
    const words = props.text.split(" ");
    const truncatedText = words.length > maxWords
      ? words.slice(0, maxWords).join(" ") + "..."
      : props.text;
  
    return <p>{truncatedText}</p>;
  }
  return (
    <PostContent href={"/post?id=" + issue.number}>
      <header>
        <h2>{issue.title}</h2>
        <span>{formatTimeAgo(issue.created_at)}</span>
      </header>
      <section>
        <TruncatedText
          text={issue.body}
        />
      </section>
    </PostContent>
  )
}