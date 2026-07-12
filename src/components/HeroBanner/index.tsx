import React, {type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import {useDocsSidebar} from '@docusaurus/plugin-content-docs/client';
import {findDocSidebarItem} from '@site/src/utils/sidebarLinks';

interface HeroTag {
  /** Doc ID the tag links to — never a hardcoded slug, since slugs differ per locale. */
  docId: string;
  label: string;
}

interface HeroBannerProps {
  eyebrow: string;
  title: ReactNode;
  subtitle: ReactNode;
  tags: HeroTag[];
  /** Optional search box (presentational only — no backend wired up yet). */
  searchPlaceholder?: string;
  searchButton?: string;
}

export default function HeroBanner({
  eyebrow,
  title,
  subtitle,
  tags,
  searchPlaceholder,
  searchButton,
}: HeroBannerProps): ReactNode {
  const sidebar = useDocsSidebar();

  return (
    <div className="hero-banner">
      <span className="hero-banner__eyebrow">{eyebrow}</span>
      <h1 className="hero-banner__title">{title}</h1>
      <p className="hero-banner__subtitle">{subtitle}</p>
      {searchPlaceholder && (
        <div className="hero-banner__search">
          <svg
            className="hero-banner__search-icon"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4-4" />
          </svg>
          <input
            className="hero-banner__search-input"
            placeholder={searchPlaceholder}
            aria-label={searchPlaceholder}
            readOnly
          />
          {searchButton && (
            <button type="button" className="hero-banner__search-button">
              {searchButton}
            </button>
          )}
        </div>
      )}
      <div className="hero-banner__tags">
        {tags.map(({docId, label}) => {
          const item = findDocSidebarItem(sidebar?.items ?? [], docId);
          return (
            <Link key={docId} to={item?.href} className="hero-banner__tag">
              {label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
