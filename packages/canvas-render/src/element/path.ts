import { AbstractElement } from '@nextvis/core'

export default class Path extends AbstractElement {
  name = 'path'
  render(ctx: CanvasRenderingContext2D): void {
    throw new Error('Method not implemented.')
  }
  clone(): Path {
    return new Path()
  }
}
