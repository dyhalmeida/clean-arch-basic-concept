import { LatLng, Route, RouteProps } from "./route.entity"

describe("Route tests", () => {
  it("O objeto route deve ser instanciado com points um array de LatLng vázio", () => {

    const routeProps: RouteProps = {
      title: 'any_title',
      startPosition: { lat: 0,  lng: 10 },
      endPosition: { lat: 10, lng: 20 }
    }

    const sut = new Route(routeProps)
    expect(sut.id).toBeDefined()
    expect(sut.props).toStrictEqual({
      ...routeProps,
      points: []
    })

  })

  it("O objeto route deve ser instanciado com points um array de LatLng preenchido", () => {
    const routeProps: RouteProps = {
      title: 'any_title',
      startPosition: { lat: 0,  lng: 10 },
      endPosition: { lat: 10, lng: 20 },
      points: [ { lat: 10, lng: 20 } ]
    }
    const sut = new Route(routeProps)
    expect(sut.id).toBeDefined()
    expect(sut.props).toStrictEqual({
      ...routeProps,
      points: [{ lat: 10, lng: 20 }]
    })
  })

  it("Deve alterar o título da rota corretamente", () => {
    const routeProps: RouteProps = {
      title: 'any_title',
      startPosition: { lat: 0,  lng: 10 },
      endPosition: { lat: 10, lng: 20 }
    }
    const sut = new Route(routeProps)
    expect(sut.id).toBeDefined()
    const newTitle = 'new_title'
    sut.updateTitle(newTitle)
    expect(sut.props.title).toBe(newTitle)
  })

  it("Deve alterar startPosition e endPosition corretamente", () => {
    const routeProps: RouteProps = {
      title: 'any_title',
      startPosition: { lat: 0,  lng: 10 },
      endPosition: { lat: 15, lng: 20 }
    }

    const sut = new Route(routeProps)
    expect(sut.id).toBeDefined()
    const startPosition: LatLng = { lat: 30, lng: 40 }
    const endPosition: LatLng = { lat: 35, lng: 45 }

    sut.updatePosition(startPosition, endPosition)
    expect(sut.props.startPosition).toStrictEqual(startPosition)
    expect(sut.props.endPosition).toStrictEqual(endPosition)
  })

  it("Deve alterar points corretamente", () => {
    const routeProps: RouteProps = {
      title: 'any_title',
      startPosition: { lat: 0,  lng: 10 },
      endPosition: { lat: 15, lng: 20 },
      points: [
        { lat: 25, lng: 30 }
      ]
    }

    const sut = new Route(routeProps)
    expect(sut.id).toBeDefined()
    const points = [
      { lat: 35, lng: 40 }
    ]
    sut.updatePoints(points)
    expect(sut.props.points).toHaveLength(1)
    expect(sut.props.points).toStrictEqual(points)
  })
})