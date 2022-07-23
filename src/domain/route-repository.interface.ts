import { Route } from "./route.entity";

export interface IRoute {
  insert(input: Route): Promise<void>
  findAll(): Promise<Route[]>
}