import { AppBar } from "../components/AppBar";
import { BlogCard } from "../components/BlogCard";

export function Blogs() {
  return (
    <div>
      <AppBar email="Rishi@gmail.com" />
      <div className="flex justify-center">
        <div>
          <BlogCard
            authorName="Rishi"
            title="How to code"
            content="Between June and August 2024, GMAC gathered application data for the 2024-2025 academic year from 1,090 graduate management programs at nearly 300 business schools in 40 countries worldwide. Eighty percent of two-year full-time MBA programs and 64% of one-year MBA programs experienced application growth, the highest percentage of schools reporting such expansion in the last ten years. Roughly 75% of accounting and management master's programs reported an increase in applications."
          />
          <BlogCard
            authorName="Rishi"
            title="How to code"
            content="Between June and August 2024, GMAC gathered application data for the 2024-2025 academic year from 1,090 graduate management programs at nearly 300 business schools in 40 countries worldwide. Eighty percent of two-year full-time MBA programs and 64% of one-year MBA programs experienced application growth, the highest percentage of schools reporting such expansion in the last ten years. Roughly 75% of accounting and management master's programs reported an increase in applications."
          />
        </div>
      </div>
    </div>
  );
}
