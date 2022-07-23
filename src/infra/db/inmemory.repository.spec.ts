import { Route, RouteProps } from "../../domain/route.entity"
import { InMemoryRepository } from "./inmemory.repository"

describe("InMemoryRepostory", () => {
  it("Deve inserir uma rota corretamente", async () => {
    const sut = new InMemoryRepository()
    const routeProps: RouteProps = {
      title: 'any_title',
      startPosition: { lat: 0,  lng: 10 },
      endPosition: { lat: 10, lng: 20 }
    }
    const route = new Route(routeProps)
    await sut.insert(route)
    expect(sut.dbRoutes).toHaveLength(1)
    expect(sut.dbRoutes).toStrictEqual([route])
  })
})