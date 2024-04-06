import { sync as commandExistsSync } from 'command-exists';

const promise: Promise<'npm' | 'pnpm'> = new Promise((resolve) => {
  if (!commandExistsSync('pnpm')) {
    resolve('npm');
  }
  resolve('pnpm');
});

export default promise;
