import chalk from "chalk";

export function p1(): string {
  return 'p1';
}

export function logBlue(message: string) {
  console.log(chalk.blue(message));
}
