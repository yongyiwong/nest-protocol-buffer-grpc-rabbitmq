// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.181.2
//   protoc               v3.20.3
// source: user.proto

/* eslint-disable */

export const protobufPackage = "grpc";

export interface Empty {
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  user: UserResponse | undefined;
}

export interface CreateUserInput {
  /** Name of the user */
  name: string;
  /** Username for the user */
  username: string;
  /** Password for the user */
  password: string;
  /** Email address of the user */
  email: string;
  /** Optional bio for the user */
  bio: string;
}

export interface UserResponse {
  id: string;
  username: string;
  email: string;
  bio: string;
  name: string;
}

export interface UserList {
  users: UserResponse[];
}

export interface GetUserRequest {
  id: string;
}

export interface DeleteUserRequest {
  id: string;
}

export interface UserService {
  CreateUser(request: CreateUserInput): Promise<UserResponse>;
  GetUser(request: GetUserRequest): Promise<UserResponse>;
  DeleteUser(request: DeleteUserRequest): Promise<UserResponse>;
  FindUsers(request: Empty): Promise<UserList>;
  Login(request: LoginRequest): Promise<LoginResponse>;
}
