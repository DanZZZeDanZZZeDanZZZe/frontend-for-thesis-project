const apiService = {
  apiBase: 'api',
  async http<T>(path: string, config: RequestInit): Promise<T> {
    const fullPath = `/${this.apiBase}/${path}`;
    const request = new Request(fullPath, config);
    const response = await fetch(request);

    if (!response.ok) {
      throw new Error(`status: ${response.status}, message: ${response.statusText}`);
    }

    // may error if there is no body, return empty array
    return response.json().catch(() => ({}));
  },

  get<T>(path: string, config?: RequestInit): Promise<T> {
    const init = { method: 'get', ...config };
    return this.http<T>(path, init);
  },

  post<T, U>(path: string, body: T, config?: RequestInit): Promise<U> {
    const init = { method: 'post', body: JSON.stringify(body), ...config };
    return this.http<U>(path, init);
  },

  put<T, U>(path: string, body: T, config?: RequestInit): Promise<U> {
    const init = { method: 'put', body: JSON.stringify(body), ...config };
    return this.http<U>(path, init);
  },
};

export default apiService;
