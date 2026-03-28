"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import PageTransition from "./PageTransition";
import ScrollReveal from "./ScrollReveal";
import type { ArtifactNav } from "@/lib/document-nav";

interface DocumentPageProps {
  title: string;
  description: string;
  backLink: { href: string; label: string };
  nav?: ArtifactNav;
  children: React.ReactNode;
}

function Sidebar({ nav, currentPath }: { nav: ArtifactNav; currentPath: string }) {
  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden md:block w-[200px] shrink-0 sticky top-6 self-start">
        <div className="bg-[#f0eeeb] border-r border-[#e8e4df] rounded-sm p-4">
          <Link
            href="/portfolio"
            className="block text-[10px] uppercase tracking-[0.12em] text-[#a69e95] hover:text-[#1a1a1a] transition-colors mb-4"
          >
            &larr; Back to Portfolio
          </Link>
          <Link
            href={nav.overviewHref}
            className="block text-[10px] uppercase tracking-[0.12em] font-semibold text-[#b45309] mb-3"
          >
            {nav.artifactTitle}
          </Link>
          <nav className="space-y-1">
            {nav.documents.map((doc) => {
              const isActive = currentPath === doc.href;
              return (
                <Link
                  key={doc.href}
                  href={doc.href}
                  className={`block text-[13px] py-1.5 transition-colors ${
                    isActive
                      ? "border-l-2 border-[#b45309] pl-3 text-[#1a1a1a] font-semibold"
                      : "pl-3.5 text-[#6b6560] hover:text-[#1a1a1a]"
                  }`}
                >
                  {doc.title}
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Mobile horizontal nav */}
      <div className="md:hidden mb-8 -mx-6 px-6 overflow-x-auto">
        <div className="flex items-center gap-1 pb-2 min-w-max">
          <Link
            href={nav.overviewHref}
            className="text-[10px] uppercase tracking-[0.12em] font-semibold text-[#b45309] mr-2 shrink-0"
          >
            {nav.artifactTitle}
          </Link>
          {nav.documents.map((doc) => {
            const isActive = currentPath === doc.href;
            return (
              <Link
                key={doc.href}
                href={doc.href}
                className={`shrink-0 text-[12px] px-2.5 py-1 rounded-sm transition-colors ${
                  isActive
                    ? "bg-[#b45309] text-white font-semibold"
                    : "text-[#6b6560] hover:text-[#1a1a1a]"
                }`}
              >
                {doc.title}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default function DocumentPage({
  title,
  description,
  backLink,
  nav,
  children,
}: DocumentPageProps) {
  const pathname = usePathname();

  if (nav) {
    return (
      <PageTransition>
        <div className="py-16">
          {/* Mobile: back link + horizontal nav */}
          <div className="md:hidden">
            <Link
              href="/portfolio"
              className="text-xs uppercase tracking-[0.12em] text-[#a69e95] hover:text-[#1a1a1a] transition-colors"
            >
              &larr; Back to Portfolio
            </Link>
          </div>

          <div className="flex gap-8 mt-4 md:mt-0">
            <Sidebar nav={nav} currentPath={pathname} />

            <div className="flex-1 min-w-0">
              {/* Mobile horizontal nav */}
              <div className="md:hidden mb-8 -mx-6 px-6 overflow-x-auto">
                <div className="flex items-center gap-1 pb-2 min-w-max">
                  <Link
                    href={nav.overviewHref}
                    className="text-[10px] uppercase tracking-[0.12em] font-semibold text-[#b45309] mr-2 shrink-0"
                  >
                    {nav.artifactTitle}
                  </Link>
                  {nav.documents.map((doc) => {
                    const isActive = pathname === doc.href;
                    return (
                      <Link
                        key={doc.href}
                        href={doc.href}
                        className={`shrink-0 text-[12px] px-2.5 py-1 rounded-sm transition-colors ${
                          isActive
                            ? "bg-[#b45309] text-white font-semibold"
                            : "text-[#6b6560] hover:text-[#1a1a1a]"
                        }`}
                      >
                        {doc.title}
                      </Link>
                    );
                  })}
                </div>
              </div>

              <ScrollReveal>
                <h1 className="text-3xl md:text-4xl font-[family-name:var(--font-serif)] font-normal text-[#1a1a1a] leading-tight">
                  {title}
                </h1>
                <p className="mt-3 text-base text-[#6b6560] max-w-2xl">{description}</p>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="mt-12 prose">{children}</div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </PageTransition>
    );
  }

  // Original layout without sidebar
  return (
    <PageTransition>
      <div className="py-16">
        <Link
          href={backLink.href}
          className="text-xs uppercase tracking-[0.12em] text-[#a69e95] hover:text-[#1a1a1a] transition-colors"
        >
          &larr; {backLink.label}
        </Link>

        <ScrollReveal>
          <h1 className="mt-8 text-3xl md:text-4xl font-[family-name:var(--font-serif)] font-normal text-[#1a1a1a] leading-tight">
            {title}
          </h1>
          <p className="mt-3 text-base text-[#6b6560] max-w-2xl">{description}</p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-12 prose">{children}</div>
        </ScrollReveal>
      </div>
    </PageTransition>
  );
}
