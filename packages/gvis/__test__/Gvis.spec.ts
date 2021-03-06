import { Gvis, logger } from '../src'

describe('Gvis', () => {
  it('new', () => {
    logger.isDev = false

    let gvis = new Gvis({})

    expect(gvis).toBeDefined()
  })

  it('new', () => {
    document.body.innerHTML = `<canvas id="el" />`

    let gvis = new Gvis({
      id: 'el',
    })

    expect(gvis).toBeDefined()
  })
})
