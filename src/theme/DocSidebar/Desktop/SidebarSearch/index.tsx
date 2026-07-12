import React, {type ReactNode} from 'react';
import {translate} from '@docusaurus/Translate';

/**
 * Sticky search box pinned to the top of the desktop sidebar.
 *
 * NOTE: presentational only — there is no search backend wired up yet, so this
 * input is intentionally non-functional (readOnly). It matches the redesign
 * mockup; swap it for a real <SearchBar/> once a search plugin (e.g. Algolia
 * DocSearch or @easyops-cn/docusaurus-search-local) is added.
 */
export default function SidebarSearch(): ReactNode {
  const placeholder = translate({
    id: 'theme.SearchBar.sidebarPlaceholder',
    message: 'Szukaj…',
    description: 'Placeholder for the (currently decorative) sidebar search box',
  });
  return (
    <div className="sidebar-search">
      <div className="sidebar-search__box">
        <svg
          className="sidebar-search__icon"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true">
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-4-4" />
        </svg>
        <input
          className="sidebar-search__input"
          placeholder={placeholder}
          aria-label={placeholder}
          readOnly
        />
        <span className="sidebar-search__kbd">⌘K</span>
      </div>
    </div>
  );
}
