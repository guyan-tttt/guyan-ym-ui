interface FetchOptions {
    method?: "GET" | "POST" | "PUT" | "DELETE";
    headers?: Record<string, string>;
    data?: BodyInit | null;
    timeout?: number;
    credentials?: RequestCredentials;
}
/**
 * 增强的fetch封装
 * @param url 请求地址
 * @param options 请求配置
 * @returns 包含响应和错误信息的Promise
 */
export declare const fetchAPI: (url: string, options?: FetchOptions) => Promise<{
    response?: Response;
    error?: string;
}>;
export {};
