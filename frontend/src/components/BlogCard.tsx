import { Avatar } from "./Avatar";

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
}

export function BlogCard({ authorName, title, content }: BlogCardProps) {
  return (
    <div className="border-b-2 border-b-slate-200 pt-3">
      <div className="flex">
        <div className="flex flex-col justify-center">
          <Avatar innerText={authorName} size="small" />
        </div>
        <div className="flex flex-col justify-center pl-2">{authorName}</div>
      </div>
      <div className="font-bold text-xl py-1">{title}</div>
      <div>
        {content.length > 100 ? `${content.slice(0, 100)} ...` : content}
      </div>
      <div className="text-slate-500 text-sm py-2">{`${Math.ceil(
        content.length / 100
      )} min read`}</div>
    </div>
  );
}
