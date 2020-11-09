const base = process.env.NODE_ENV === "production" ? "/react-pertfolio" : "";
export const ABOUT_PATH = base || "/";
export const PROJECTS_PATH = base + "/projects";
