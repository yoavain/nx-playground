import { logBlue, p1 } from "@yoavain/p1";

export function p2(): string {
  return 'p2';
}

export function p2p1(): string {
  logBlue("running p2p1");
  return `p2${p1()}`;
}
