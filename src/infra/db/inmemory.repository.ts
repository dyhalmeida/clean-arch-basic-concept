import { IRoute } from '../../domain/route-repository.interface'
import { Route } from '../../domain/route.entity';

export class InMemoryRepository implements IRoute {
  public dbRoutes: Route[] = []
  
  public async insert(input: Route): Promise<void> {
    this.dbRoutes.push(input)
  }

  public async findAll(): Promise<Route[]> {
    return this.dbRoutes
  }

}