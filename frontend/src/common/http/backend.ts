import axios, { AxiosInstance } from 'axios';

const DEFAULT_HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

class Backend {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}`,
      headers: {
        ...DEFAULT_HEADERS,
      },
    });
  }

  async postWaitlist(e: string): Promise<void> {
    const res = await this.api.post(
      '/v1/waitlists/scientific-publishing',
      {
        email: e,
      },
    );
    return res.data;
  }
}

export default new Backend();
