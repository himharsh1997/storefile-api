import { ManagementClient, User } from 'auth0';

export class Auth0Mgmt {
  client: ManagementClient;
  constructor(){
    this.client = new ManagementClient({
      domain: process.env.AUTH0_DOMAIN,
      clientId: process.env.AUTH0_CLIENTID,
      clientSecret: process.env.AUTH0_CLIENTSECRET
    })
  }

  async register(email: string, name: string, password: string): Promise<User>{
    console.log(email, name, password);
    return await this.client.createUser({
      connection: 'Username-Password-Authentication', 
      name, 
      email,
      password
    });
  }
}