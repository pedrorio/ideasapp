import { UserEntity } from "../user.entity";

export class UserAuthenticationRO {
  id: string;
  username: string;
  created: Date;
  token: string;

  static fromUser(userEntity: UserEntity) {
    const { id, created, username, token } = userEntity;

    const userAuthenticationRO: UserAuthenticationRO = {
      id,
      created,
      username,
      token
    };

    return userAuthenticationRO;
  }
}
