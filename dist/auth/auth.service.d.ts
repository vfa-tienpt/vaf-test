import { LoginStatus } from './interfaces/login-status.interface';
import { JwtPayload } from './interfaces/payload.interface';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from 'src/dto/user-login.dto';
import { UserDto } from 'src/dto/user.dto';
import { UsersService } from 'src/users/users.service';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    login(loginUserDto: LoginUserDto): Promise<LoginStatus>;
    validateUser(payload: JwtPayload): Promise<UserDto>;
    private _createToken;
}
