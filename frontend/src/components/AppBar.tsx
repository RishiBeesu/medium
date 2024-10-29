import { Avatar } from "./Avatar";

export function AppBar({ email }: { email: string }) {
  return (
    <div className="border-b flex justify-between px-10 py-2">
      <div className="flex flex-col justify-center">Medium</div>
      <div>
        <Avatar size="big" innerText={email[0]} />
      </div>
    </div>
  );
}
