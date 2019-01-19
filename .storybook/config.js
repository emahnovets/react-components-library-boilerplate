import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.tsx
const req = require.context('../stories', true, /.stories.tsx$/);

function loadStories() {
  getSortedKeys().forEach(filename => req(filename));
}

function getSortedKeys() {
  return req.keys().sort((path1, path2) => {
    if (path1 === path2) {
      return 0;
    }

    return comparePaths(path1, path2);
  });
}

function comparePaths(path1, path2) {
  const parts1 = path1.split('/');
    const parts2 = path2.split('/');

    if (parts1.length === parts2.length) {
      let index = 0;

      while (index < parts1.length && parts1[index] === parts2[index]) {
        index += 1;
      }

      return parts1[index].localeCompare(parts2[index]);
    }

    return parts1.length > parts2.length ? 1 : -1;
}

configure(loadStories, module);
