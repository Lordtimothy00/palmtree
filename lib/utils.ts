/** Minimal className joiner (keeps the bundle free of extra dependencies). */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
