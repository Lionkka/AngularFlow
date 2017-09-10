import {} from 'jest'
import { assert } from 'chai'
import handleError from '../src/utils/handleError'

describe("Check handleError functionality", (): void => {
  test('Should return error with custom text', (): void => {
    const customText: string = 'Something went wrong'

    assert.throw((): void => handleError(customText), customText)
  })
})
