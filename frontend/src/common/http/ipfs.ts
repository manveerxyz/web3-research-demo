import axios, { AxiosInstance } from 'axios';

class IPFS {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      // proxy the request through our backend
      baseURL: `${process.env.REACT_APP_API_URL}/v1/ipfs/https://ipfs.io/ipfs`,
    });
  }

  async fetch(uri: string): Promise<any> {
    const res = await this.api.get(uri.replace('ipfs://', '/'));
    return res.data;
  }
}

export default new IPFS();
