import Axios, { AxiosInstance } from 'axios';
import { ApiError, ApiHeaders, IApiBase, ID } from './types';
import environments from '@/utils/environment';

type ErrorType = {
  response: {
    status: number;
    data: {
      error: string
      }
  }
}
export default class ApiBase<T> implements IApiBase<T> {
  public axiosInstance: AxiosInstance;
  protected baseApiUrl: string;

  constructor(baseApiUrl?: string, headers?: ApiHeaders) {
    this.baseApiUrl = baseApiUrl || environments.API_URL;
    this.axiosInstance = Axios.create({
      baseURL: this.baseApiUrl,
      headers: {
        Accept: 'application/json',
        ...headers,
      },
    });
  }

  protected isError(response: object): boolean {
    return 'statusCode' in response && 'message' in response;
  }

  protected createError(e: ErrorType | unknown): ApiError {
    return {
      statusCode: (e as ErrorType)?.response?.status,
      errorMessage: (e as ErrorType)?.response?.data?.error ?? 'Server Error',
    };
  }

  public async getAllAsync(
    url: string = this.baseApiUrl,
  ): Promise<T[] | T | ApiError> {
    try {
      const { data } = await this.axiosInstance.get(`${url}`);
      if (!data) throw new Error('Data not found');

      return data;
    } catch (e) {
      return this.createError(e);
    }
  }

  public async getAsync(url: string): Promise<T | ApiError> {
    try {
      const { data } = await this.axiosInstance.get(`${url}`);
      return data;
    } catch (e) {
      return this.createError(e);
    }
  }

  public async postAsync(
    url: string = this.baseApiUrl,
    values?: T,
    headers?: Record<string, string>,
  ): Promise<T | ApiError> {
    try {
      const { data } = await this.axiosInstance.post(`${url}`, values, {
        headers: {
          ...headers
        },
        withCredentials: true,
      });
      return data;
    } catch (e) {
      return this.createError(e);
    }
  }

  public async putAllAsync(
    values: T,
    url: string = this.baseApiUrl,
    headers?: ApiHeaders,
  ): Promise<T | ApiError> {
    try {
      const { data } = await this.axiosInstance.put(`${url}`, values, {
        headers: {
          ...headers,
        },
      });
      return data;
    } catch (e) {
      return this.createError(e);
    }
  }

  public async putAsync(
    id: ID,
    values: T,
    url: string = this.baseApiUrl,
    headers?: Record<string, string>,
  ): Promise<T | ApiError> {
    try {
      const { data } = await this.axiosInstance.put(`${url}/${id}`, values, {
        headers: {
          ...headers,
        },
      });
      return data;
    } catch (e) {
      return this.createError(e);
    }
  }

  public async deleteAsync(
    id: ID,
    url: string = this.baseApiUrl,
  ): Promise<void | ApiError> {
    try {
      const { data } = await this.axiosInstance.delete(`${url}/${id}`);
      return data;
    } catch (e) {
      return this.createError(e);
    }
  }

  public async deleteAllAsync(
    values: T,
    url: string = this.baseApiUrl,
  ): Promise<T | ApiError> {
    try {
      const { data } = await this.axiosInstance.delete(`${url}`, {
        data: values,
      });
      return data;
    } catch (e) {
      return this.createError(e);
    }
  }
}
