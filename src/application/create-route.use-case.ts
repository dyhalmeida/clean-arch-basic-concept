import { IRoute } from "../domain/route-repository.interface";
import { LatLng, Route } from "../domain/route.entity";

type CreateRouteInput = {
  title: string
  startPosition: LatLng
  endPosition: LatLng
  points?: LatLng[]
}

type CreateRouteOutput = {
  id: string
  title: string
  startPosition: LatLng
  endPosition: LatLng
  points?: LatLng[]
}

export class CreateRouteUseCase {

  constructor(private routeRepository: IRoute){}

  async run (input: CreateRouteInput): Promise<CreateRouteOutput> {
    const route = new Route(input)
    this.routeRepository.insert(route)
    return route.toJSON()
  }
}