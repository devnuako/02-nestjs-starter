// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class AuthService {}

import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
    // constructor(private usersService: UsersService) { }

    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) { }


    //ussername/ pass là 2 tham số thư viện passport nó ném về
    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.usersService.findOneByUsername(username);
        if (user) {
            const isValid = this.usersService.isValidPassword(pass, user.password);
            if (isValid === true) {
                return user;
            }
        }

        return null;
    }

    async login(user: any) {
        const payload = {
            username: user.email,
            sub: user._id
        };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }

}
