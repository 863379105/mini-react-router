export const normalizePathname = (pathname) => 
  pathname.replace(/\/+$/, "").replace(/^\/*/, "/");