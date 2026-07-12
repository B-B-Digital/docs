import React, {type CSSProperties, type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import {useDocsSidebar} from '@docusaurus/plugin-content-docs/client';
import {findDocSidebarItem} from '@site/src/utils/sidebarLinks';

interface ArticleTileProps {
  /** Doc ID of the linked article — never a hardcoded slug, since slugs differ per locale. */
  docId: string;
  eyebrow: string;
  color: string;
}

export default function ArticleTile({docId, eyebrow, color}: ArticleTileProps): ReactNode {
  const sidebar = useDocsSidebar();
  const item = findDocSidebarItem(sidebar?.items ?? [], docId);

  return (
    <Link
      to={item?.href}
      className="article-tile"
      style={{'--tile-accent': color} as CSSProperties}
    >
      <span className="article-tile__eyebrow">
        <span className="article-tile__dot" />
        {eyebrow}
      </span>
      <span className="article-tile__title">{item?.label}</span>
    </Link>
  );
}
