import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center text-xs text-[#1C2A28]/70 py-3" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1.5 md:space-x-2 flex-wrap">
        <li className="inline-flex items-center">
          <Link href="/" className="inline-flex items-center gap-1 hover:text-[#063F3C] transition-colors">
            <Home className="w-3.5 h-3.5 text-[#C9A66B]" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="inline-flex items-center space-x-1.5 md:space-x-2">
            <ChevronRight className="w-3.5 h-3.5 text-[#E8DCC5]" />
            {item.href ? (
              <Link href={item.href} className="hover:text-[#063F3C] transition-colors font-medium">
                {item.label}
              </Link>
            ) : (
              <span className="text-[#063F3C] font-semibold">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
