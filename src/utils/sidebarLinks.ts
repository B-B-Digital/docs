import type {PropSidebarItem, PropSidebarItemLink} from '@docusaurus/plugin-content-docs';

/**
 * Depth-first search for the sidebar link item pointing at a given doc ID.
 * Doc IDs are locale-invariant (path-derived), so this works the same in
 * every locale even though hrefs and labels differ per locale.
 */
export function findDocSidebarItem(
  items: PropSidebarItem[],
  docId: string,
): PropSidebarItemLink | undefined {
  for (const item of items) {
    if (item.type === 'link' && item.docId === docId) {
      return item;
    }
    if (item.type === 'category') {
      const found = findDocSidebarItem(item.items, docId);
      if (found) {
        return found;
      }
    }
  }
  return undefined;
}
