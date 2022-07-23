import { IRoute } from "../domain/route-repository.interface";
import { LatLng, Route } from "../domain/route.entity";

type CreateRouteOutput = {
  id: string
  title: string
  startPosition: LatLng
  endPosition: LatLng
  points?: LatLng[]
}[]

export class ListAllRoutesUseCase {

  constructor(private routeRepository: IRoute){}

  async run (): Promise<CreateRouteOutput> {
    const routes = await this.routeRepository.findAll()
    return routes.map(r => r.toJSON())
  }
}