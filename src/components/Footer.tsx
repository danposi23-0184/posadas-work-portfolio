import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between">
        <p className="text-xs text-secondary">
          &copy; {new Date().getFullYear()} {personalInfo.name}
        </p>
        <p className="text-xs text-secondary/60">
          Built from scratch with Next.js
        </p>
      </div>
    </footer>
  );
}
