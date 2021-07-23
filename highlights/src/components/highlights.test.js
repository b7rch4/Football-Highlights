import { render, screen } from "@testing-library/react";
import Highlights from './highlights'

test("Heading displays correctly", function() {
    render(<Highlights />)
    const headingElement = screen.getByText(/Football Highlights/i)
    expect(headingElement).toBeInTheDocument();
})

test("Sub-heading displays correctly", function() {
    render(<Highlights />)
    const subHeadingElement = screen.getByText(/Select a team to see their highlights/i)
    expect(subHeadingElement).toBeInTheDocument();
})

test("First dropdown displays correctly", function() {
    render(<Highlights />)
    const dropdownElement = screen.getByRole("combobox")
    expect(dropdownElement).toBeInTheDocument();
})

test("Second dropdown displays correctly", function() {
    render(<Highlights />)
    const dropdownElement = screen.getByRole("combobox")
    expect(dropdownElement).toBeInTheDocument();
})

test("Search button displays correctly", function() {
    render(<Highlights />)
    const buttonElement = screen.getByRole("button")
    expect(buttonElement).toBeInTheDocument();
})