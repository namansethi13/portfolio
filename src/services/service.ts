const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const BACKEND_BASE_URL = API_BASE_URL.replace(/\/api$/, "");

export function getMediaUrl(path: string): string {
  if (!path || path.startsWith("http")) return path;
  return `${BACKEND_BASE_URL}${path}`;
}

export interface FetchResult<T> {
  error: boolean;
  data: T | null;
}

async function handleResponse<T>(response: Response): Promise<FetchResult<T>> {
  const error = response.status !== 200;
  const data = !error ? await response.json() : null;
  return { error, data };
}

export async function fetchBlogPosts<T = any>(): Promise<FetchResult<T>> {
  const response = await fetch(`${API_BASE_URL}/blog/`);
  return handleResponse(response);
}

export async function fetchBlogPost<T = any>(id: string): Promise<FetchResult<T>> {
  const response = await fetch(`${API_BASE_URL}/blog/${id}`);
  return handleResponse(response);
}

export async function fetchProfile<T = any>(): Promise<FetchResult<T>> {
  const response = await fetch(`${API_BASE_URL}/profile/`);
  return handleResponse(response);
}
