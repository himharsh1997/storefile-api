import axios, { AxiosResponse } from 'axios';

export class Auth0HTTP {

  async login(
    username: string,
    password: string
  ): Promise<AxiosResponse> {
    try {
      const url = `https://${process.env.AUTH0_DOMAIN}/oauth/token`;
      const payload = {
        client_id: process.env.AUTH0_CLIENTID,
        client_secret: process.env.AUTH0_CLIENTSECRET,
        username,
        password,
        grant_type: 'password',
        scope: 'offline_access'
      };
      console.log(payload);
      return await axios.post(
        url, payload, 
        { headers: { 'Content-Type': 'Application/json' } }
      );
    } catch (err) {
      throw err;
    }
  }
}