export function Avatar({
  innerText,
  size,
}: {
  innerText: string;
  size: "small" | "big";
}) {
  return (
    <div
      className={`relative inline-flex items-center justify-center ${
        size === "small" ? "w-7 h-7" : "w-10 h-10"
      }  overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}
    >
      <span
        className={`font-medium text-gray-600 dark:text-gray-300 ${
          size === "small" ? "text-sm" : "text-lg"
        }`}
      >
        {innerText[0]}
      </span>
    </div>
  );
}
