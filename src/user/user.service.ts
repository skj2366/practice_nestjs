import { Injectable } from '@nestjs/common';

import { User } from '../entities/user.entity';
import { Login, UserInfo, LoginUserInfo, Register } from './user.type';
import { UserRepository } from './user.repository';
import * as Bcrypt from 'bcryptjs';
// import { Token } from 'src/util/token.util';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository){}

  public async addUser(register: Register): Promise<UserInfo>{
    const registerUser = await this.userRepository.create();

    // Encode User Password
    const salt: string = await Bcrypt.genSalt(10);
    const password: string = await Bcrypt.hash(register.userPwd, salt);
    
    registerUser.userEmail = register.userEmail;
    registerUser.userName = register.userName;
    registerUser.userPwd = password;
    
    const user = await this.userRepository.save(registerUser);
    const userInfo: UserInfo = {
      userEmail: user.userEmail,
      userName: user.userName
    };
    return userInfo;
  }

  public async login(loginUser: Login): Promise<LoginUserInfo>{
    const user: User = await this.userRepository.findOne({
      where:{
        userEmail: loginUser.userEmail
      }
    });

    const passwordCheck = await Bcrypt.compare(loginUser.userPwd, user.userPwd);

    if(!passwordCheck){
      return null;
    }
    
    user.lastLoginDate = new Date();
    
    await this.userRepository.save(user);;

    const userInfo: LoginUserInfo = {
      userEmail: user.userEmail,
      userName: user.userName,
      lastLogin: user.lastLoginDate
    };
    return userInfo;
  }
}