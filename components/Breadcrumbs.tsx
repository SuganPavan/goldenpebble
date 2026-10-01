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
    <nav className="flex items-center text-xs text-white/80 py-3 font-sans" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1.5 md:space-x-2 flex-wrap">
        <li className="inline-flex items-center">
          <Link href="/" className="inline-flex items-center gap-1.5 text-white/90 hover:text-[#C5A46D] transition-colors font-medium">
            <Home className="w-3.5 h-3.5 text-[#C5A46D]" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="inline-flex items-center space-x-1.5 md:space-x-2">
            <ChevronRight className="w-3.5 h-3.5 text-white/40" />
            {item.href ? (
              <Link href={item.href} className="text-white/80 hover:text-[#C5A46D] transition-colors font-medium">
                {item.label}
              </Link>
            ) : (
              <span className="text-[#C5A46D] font-semibold tracking-wide">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
