import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
  branch: 'gh-pages',
  repo: 'https://github.com/kintone-workshops/intro-to-svelte.git', // Update to point to your repository
  // repo: process.env.GITHUB_REPO,
  user: {
   name: process.env.GITHUB_NAME,
   email: process.env.GITHUB_EMAIL
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);