/**
 * Swizzled (ejected) from @docusaurus/theme-classic 3.10.2.
 *
 * Only change from upstream: a doc link carrying `customProps.icon` (the
 * "Start" home entry, set via sidebar_custom_props in start.mdx frontmatter)
 * renders that icon before its label. Everything else is copied verbatim.
 * Re-diff against upstream when bumping Docusaurus. See AGENTS.md.
 */
import React from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {isActiveSidebarItem} from '@docusaurus/plugin-content-docs/client';
import Link from '@docusaurus/Link';
import isInternalUrl from '@docusaurus/isInternalUrl';
import IconExternalLink from '@theme/Icon/ExternalLink';
import type {Props} from '@theme/DocSidebarItem/Link';

import styles from './styles.module.css';

export default function DocSidebarItemLink({
  item,
  onItemClick,
  activePath,
  level,
  index,
  ...props
}: Props): React.JSX.Element {
  const {href, label, className, autoAddBaseUrl} = item;
  const icon = item.customProps?.icon as string | undefined;
  const isActive = isActiveSidebarItem(item, activePath);
  const isInternalLink = isInternalUrl(href);
  return (
    <li
      className={clsx(
        ThemeClassNames.docs.docSidebarItemLink,
        ThemeClassNames.docs.docSidebarItemLinkLevel(level),
        'menu__list-item',
        icon && 'sidebar-link--with-icon',
        className,
      )}
      key={label}>
      <Link
        className={clsx(
          'menu__link',
          !isInternalLink && styles.menuExternalLink,
          {
            'menu__link--active': isActive,
          },
        )}
        autoAddBaseUrl={autoAddBaseUrl}
        aria-current={isActive ? 'page' : undefined}
        to={href}
        {...(isInternalLink && {
          onClick: onItemClick ? () => onItemClick(item) : undefined,
        })}
        {...props}>
        {icon && (
          <span className="sidebar-link__icon" aria-hidden="true">
            {icon}
          </span>
        )}
        <span className={styles.linkLabel}>{label}</span>
        {!isInternalLink && <IconExternalLink />}
      </Link>
    </li>
  );
}
