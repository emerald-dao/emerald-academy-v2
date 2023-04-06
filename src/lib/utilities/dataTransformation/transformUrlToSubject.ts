export function transformUrlToSubject(str: string): string {
  return str.replaceAll('-', ' ');
}
