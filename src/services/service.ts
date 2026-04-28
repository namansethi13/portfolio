const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

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
