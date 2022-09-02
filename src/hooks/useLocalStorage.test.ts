import { act, renderHook } from '@testing-library/react-hooks'
import { useSampleStorage } from './useLocalStorage'

describe('useLocalStorage', () => {
  test(`storage key has 'value'`, () => {
    const { result } = renderHook(() => useSampleStorage())
    expect(result.current.sample).toBe('value')
  })
  
  test(`storage update key from 'value' to 'update'`, () => {
    const { result } = renderHook(() => useSampleStorage())
    act(() => {
      result.current.changeUpdate();
    })
    expect(result.current.sample).toBe('update')
  })
})
