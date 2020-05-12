import Polygon from '../../src/element/polygon'

describe('Element Polygon', () => {
  const polygon = new Polygon()

  it('create', () => {
    expect(polygon).toBeInstanceOf(Polygon)
  })

  it('clone', () => {
    expect(polygon.clone()).toBeInstanceOf(Polygon)
  })
})
