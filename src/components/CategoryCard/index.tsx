import React, {type CSSProperties, type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useDocsSidebar, findFirstSidebarItemLink} from '@docusaurus/plugin-content-docs/client';
import type {PropSidebarItemCategory} from '@docusaurus/plugin-content-docs';

interface CategoryCardProps {
  /** Doc ID of the category's first item, e.g. "faq/czym-jest-domena" — used to find the category in the current sidebar, never a hardcoded href. */
  firstDocId: string;
  icon: string;
  title: string;
  description: string;
  /** Per-category accent hex, drives the icon tile, badge, and hover glow. */
  color: string;
}

function pluralizeArticles(count: number, locale: string): string {
  if (locale === 'pl') {
    if (count === 1) return 'artykuł';
    const lastDigit = count % 10;
    const lastTwoDigits = count % 100;
    if (lastDigit >= 2 && lastDigit <= 4 && !(lastTwoDigits >= 12 && lastTwoDigits <= 14)) {
      return 'artykuły';
    }
    return 'artykułów';
  }
  return count === 1 ? 'article' : 'articles';
}

export default function CategoryCard({
  firstDocId,
  icon,
  title,
  description,
  color,
}: CategoryCardProps): ReactNode {
  const {i18n} = useDocusaurusContext();
  const sidebar = useDocsSidebar();

  const category = (sidebar?.items ?? []).find(
    (item): item is PropSidebarItemCategory =>
      item.type === 'category' &&
      item.items[0]?.type === 'link' &&
      item.items[0].docId === firstDocId,
  );

  const href = category ? findFirstSidebarItemLink(category) : undefined;
  const count = category?.items.length ?? 0;

  return (
    <Link to={href} className="category-card" style={{'--card-accent': color} as CSSProperties}>
      <div className="category-card__header">
        <span className="category-card__icon">{icon}</span>
        <span className="category-card__badge">
          {count} {pluralizeArticles(count, i18n.currentLocale)}
        </span>
      </div>
      <h3 className="category-card__title">{title}</h3>
      <p className="category-card__description">{description}</p>
    </Link>
  );
}
