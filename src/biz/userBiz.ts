import { Auth0HTTP } from '../proxy/auth0HTTP';
import { RESPONSE_MSG } from '../constants/message';
import { UserQuery } from '../db/query/userQuery';
import { UserSiginBody, UserSignupBody } from '../model/index';
import { Auth0Mgmt } from '../proxy/auth0Mgmt';


export class UserBiz {

  async handlerSignup(userSignupInfo: UserSignupBody): Promise<unknown> {
    try {
      console.log('Signup process started =========');
      console.log('Body of signup API', userSignupInfo);
      const { name, email, password, phone_no }: UserSignupBody = userSignupInfo;

      const userQuery = new UserQuery();
      const user = await userQuery.getByEmail(email);
      console.log('User', user);

      if (user) {
        const error = new Error();
        error.message = RESPONSE_MSG.USER_ALREADY_REGISTER;
        throw error;
      }

      const auth0Mgmt = new Auth0Mgmt();
      const userCreatedInAuth0 = await auth0Mgmt.register(email, name, password);

      await userQuery.createUser({ name, email, phone_no, user_id: userCreatedInAuth0.user_id, is_email_verified: userCreatedInAuth0.email_verified });

      return { ...userSignupInfo, user_id: userCreatedInAuth0.user_id, is_email_verified: userCreatedInAuth0.email_verified }
    } catch (error) {
      throw error;
    }
  }

  async handlerLogin(userSignupInfo: UserSiginBody): Promise<unknown> {
    try {
      console.log('Login process started =========');
      console.log('Body of login API', userSignupInfo);
      const { email, password }: UserSiginBody = userSignupInfo;

      const userQuery = new UserQuery();
      const user = await userQuery.getByEmail(email);
      if (!user) {
        const error = new Error();
        error.message = RESPONSE_MSG.USER_NOT_FOUND;
        throw error;
      }

      const auth0HTTP = new Auth0HTTP();
      const result = await auth0HTTP.login(email, password);
      return result.data;
    } catch (error) {
      throw error;
    }
  }
}