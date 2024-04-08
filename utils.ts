export function removeTrailingSlash(path: string | undefined): string {
  return path && path.length != 1 && path[path.length - 1] === "/"
    ? path.slice(0, -1)
    : path || "";
}
