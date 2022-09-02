import '@testing-library/jest-dom'
import { render, screen, userEvent } from '../utils/test-utils'
import { Button } from './Button'

describe('Button', async () => {
  it('should render the input', () => {
    render(
      <Button type='button'><span>Save</span></Button>,
    )
    expect(screen.getByText('Save')).toBeInTheDocument()
  })
})
