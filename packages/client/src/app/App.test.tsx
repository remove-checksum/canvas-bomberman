import { App } from '.'
import { render, screen } from '@testing-library/react'

const appContent = 'Есть вопросы?'

// @ts-ignore
global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve('hey') })
)

test('Example test', async () => {
  render(<App />)
  expect(screen.getByText(appContent, { exact: false })).toBeDefined()
})
