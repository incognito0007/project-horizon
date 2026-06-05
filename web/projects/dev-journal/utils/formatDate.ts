export function formatDate(isoString: string): string {
  return new Date(isoString).toLocaleDateString(undefined, {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
