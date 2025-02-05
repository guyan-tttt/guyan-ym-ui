/*
 * @Author: 顾言 13341306+DT-guyan@user.noreply.gitee.com
 * @Date: 2025-02-01 12:29:04
 * @LastEditors: 顾言 13341306+DT-guyan@user.noreply.gitee.com
 * @LastEditTime: 2025-02-01 12:29:14
 * @FilePath: \云墨UI\packages\utils\src\fetchAPI.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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
export const fetchAPI = async (
  url: string,
  options: FetchOptions = {}
): Promise<{ response?: Response; error?: string }> => {
  const controller = new AbortController();
  const timeoutId = options.timeout
    ? setTimeout(() => controller.abort(), options.timeout)
    : null;

  try {
    const headers = new Headers(options.headers);

    // 自动设置Content-Type
    if (!headers.has("Content-Type") && options.data instanceof FormData) {
      headers.set("Content-Type", "multipart/form-data");
    }

    const response = await fetch(url, {
      method: options.method || "GET",
      headers,
      body: options.data,
      credentials: options.credentials || "same-origin",
      signal: controller.signal,
    });

    clearTimeout(timeoutId!);

    if (!response.ok) {
      return { error: `HTTP error! status: ${response.status}` };
    }

    return { response };
  } catch (error) {
    clearTimeout(timeoutId!);
    if (error instanceof Error) {
      return {
        error: error.name === "AbortError" ? "请求超时" : error.message,
      };
    }
    return { error: "未知网络错误" };
  }
};
