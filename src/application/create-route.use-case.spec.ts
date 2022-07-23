import { InMemoryRepository } from "../infra/db/inmemory.repository"
import { CreateRouteUseCase } from "./create-route.use-case"

describe('CreateUseCase', () => {

  it('Deve criar uma nova rota', async () => {

    const repository = new InMemoryRepository()
    const createRouteUseCase = new CreateRouteUseCase(repository)

    const output = await createRouteUseCase.run({
      title: 'any_title',
      startPosition: { lat: 1 , lng: 2},
      endPosition: { lat: 3, lng: 4 }
    })

    expect(repository.dbRoutes).toHaveLength(1)
    expect(output).toStrictEqual({
      id: repository.dbRoutes[0].id,
      title: 'any_title',
      startPosition: { lat: 1 , lng: 2},
      endPosition: { lat: 3, lng: 4 },
      points: []
    })

  })

})