import { AbstractElement } from '@nextvis/core'

export default class Line extends AbstractElement {
  name = 'line'
  render(ctx: CanvasRenderingContext2D): void {
    throw new Error('Method not implemented.')
  }
  clone(): Line {
    return new Line()
  }
}
