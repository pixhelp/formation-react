import axios from 'axios';

class Fetcher {
  static async post<T>(url: string, data: object): Promise<T> {
    const response = await axios.post<T>(`${url}`, data);
    return response.data;
  }

  static async get<T>(url: string): Promise<T> {
    const response = await axios.get<T>(`${url}`);
    return response.data;
  }
}

type AuthResponse = {
  accessToken: string;
  id: number;
  email: string;
  user: {
    id: number;
    email: string;
  }
};

export const registerUser = async ({ email, password }: { email: string, password: string }): Promise<AuthResponse> => {
  const response = await fetch('http://localhost:4000/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  return (await response.json());
};

export const logUser = async ({ email, password }: { email: string, password: string }): Promise<AuthResponse> => {
  const response = await Fetcher.post<AuthResponse>('http://localhost:4000/login', {
    email: email,
    password: password,
  });
  return response;
};