import Link from "next/link";
import PageTransition from "./PageTransition";
import ScrollReveal from "./ScrollReveal";

interface DocumentPageProps {
  title: string;
  description: string;
  backLink: { href: string; label: string };
  children: React.ReactNode;
}

export default function DocumentPage({
  title,
  description,
  backLink,
  children,
}: DocumentPageProps) {
  return (
    <PageTransition>
      <div className="py-16">
        <Link
          href={backLink.href}
          className="text-xs uppercase tracking-[0.12em] text-[#999] hover:text-[#111] transition-colors"
        >
          &larr; {backLink.label}
        </Link>

        <ScrollReveal>
          <h1 className="mt-8 text-3xl md:text-4xl font-[family-name:var(--font-serif)] font-normal text-[#111] leading-tight">
            {title}
          </h1>
          <p className="mt-3 text-base text-[#777] max-w-2xl">{description}</p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-12 prose">{children}</div>
        </ScrollReveal>
      </div>
    </PageTransition>
  );
}
