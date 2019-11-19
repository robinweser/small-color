import parse from '../parse'

describe('Parsing color values', () => {
  it('should correctly parse', () => {
    expect(parse('rgb(255, 0, 255)')).toEqual({
      callee: 'rgb',
      h: 0.8333333333333334,
      s: 1,
      l: 0.5,
      a: 1,
    })
  })
})
