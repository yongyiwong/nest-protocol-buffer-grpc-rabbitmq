// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.181.2
//   protoc               v3.20.3
// source: project.proto

/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";
import { Id } from "./common.pb";
import { Timestamp } from "./google/protobuf/timestamp.pb";

export const protobufPackage = "project";

export interface ProjectListResponse {
  projects: ProjectResponse[];
}

export interface CreateProjectRequest {
  userId: string;
  title: string;
}

export interface ProjectResponse {
  id: string;
  userId: string;
  title: string;
  createdAt: Timestamp | undefined;
  updatedAt: Timestamp | undefined;
}

export const PROJECT_PACKAGE_NAME = "project";

export interface ProjectServiceClient {
  createProject(request: CreateProjectRequest): Observable<ProjectResponse>;

  getProject(request: Id): Observable<ProjectResponse>;

  deleteProject(request: Id): Observable<ProjectResponse>;

  findProjects(request: Id): Observable<ProjectListResponse>;
}

export interface ProjectServiceController {
  createProject(
    request: CreateProjectRequest,
  ): Promise<ProjectResponse> | Observable<ProjectResponse> | ProjectResponse;

  getProject(request: Id): Promise<ProjectResponse> | Observable<ProjectResponse> | ProjectResponse;

  deleteProject(request: Id): Promise<ProjectResponse> | Observable<ProjectResponse> | ProjectResponse;

  findProjects(request: Id): Promise<ProjectListResponse> | Observable<ProjectListResponse> | ProjectListResponse;
}

export function ProjectServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["createProject", "getProject", "deleteProject", "findProjects"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("ProjectService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("ProjectService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const PROJECT_SERVICE_NAME = "ProjectService";
