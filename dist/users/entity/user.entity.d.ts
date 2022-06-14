export declare class UserEntity {
    id: string;
    username: string;
    password: string;
    email: string;
    createdOn?: Date;
    updatedOn?: Date;
    hashPassword(): Promise<void>;
}
