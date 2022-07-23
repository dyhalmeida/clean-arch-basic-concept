import crypto from 'crypto'

export type LatLng = {
  lat: number
  lng: number
}

export type RouteProps = {
  title: string
  startPosition: LatLng
  endPosition: LatLng
  points?: LatLng[]
}

export class Route {
  public props: Required<RouteProps>
  public readonly id: string
  constructor(props: RouteProps, id?: string){
    this.id = id || crypto.randomUUID()
    this.props = {
      ...props,
      points: props.points || []
    }
  }

  public updateTitle(value: string): void {
    this.props.title = value
  }

  public updatePosition(startPosition: LatLng, endPosition: LatLng) {
    this.props.startPosition = {...startPosition}
    this.props.endPosition = {...endPosition}
  }

  public updatePoints(points: LatLng[]) {
    this.props.points = [...points]
  }

  public toJSON() {
    return {
      id: this.id,
      ...this.props
    }
  }
}
