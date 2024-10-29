export function Avatar({ authorName }: { authorName: string }) {
  return (
    <div className="relative inline-flex items-center justify-center w-7 h-7 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
      <span className="font-medium text-gray-600 dark:text-gray-300 text-sm">
        {authorName[0]}
      </span>
    </div>
  );
}
