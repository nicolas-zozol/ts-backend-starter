import {forClassAndCoverageTest, forConfigurationTest} from '../src'

describe('simple test for configuration check', () => {
  test('everything is right', () => {
    expect(forConfigurationTest()).toBe(2)

    expect('this is a long long long long long long long long line'.length).toBeGreaterThan(50)
  })

  test('test coverage', () => {
    expect(forClassAndCoverageTest().name).toBe("John Doe")
  })
})
