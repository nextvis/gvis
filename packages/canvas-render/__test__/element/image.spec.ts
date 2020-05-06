import ImageElement from '../../src/element/image'

describe('element image', () => {
  it('download image', (done) => {
    const canvas = document.createElement('canvas')
    canvas.width = 500
    canvas.height = 500
    document.body.appendChild(canvas)
    const ctx = canvas.getContext('2d')

    const callbackFn = jest.fn(() => {
      expect(callbackFn).toBeCalled()
      done()
    })

    const imageElement = new ImageElement('image url', 0, 0, 0, 0, callbackFn)

    imageElement.imageOnloadHandler()

    imageElement.render(ctx!)
  })
})