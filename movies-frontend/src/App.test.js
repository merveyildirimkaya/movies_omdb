{/*import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});*/}
import { render } from "@testing-library/react";
import App from './App';

describe("App", ()=>{
  it("app",()=>{
      const {getByTestId}= render(<App/>)
      const app = getByTestId("app")
      expect(app).toBeTruthy();
  })
})


