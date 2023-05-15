import * as React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import Navbar from "./navbar";

jest.mock("next/router", () => ({
  useRouter: () => ({
    pathname: "/",
  }),
}));

describe("Navbar", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders Navbar component", () => {
    render(<Navbar />);
  });

  it("renders all navigation links correctly", () => {
    render(<Navbar />);

    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(4);
    expect(links[1]).toHaveTextContent("Home");
    expect(links[1]).toHaveAttribute("href", "/");
    expect(links[2]).toHaveTextContent("Exchange");
    expect(links[2]).toHaveAttribute("href", "/exchange");
    expect(links[3]).toHaveTextContent("Store");
    expect(links[3]).toHaveAttribute("href", "/store");
  });

  it("applies active class to current navigation link", () => {
    render(<Navbar />);

    const homeLink = screen.getByText("Home");
    expect(homeLink).toHaveClass("text-white");
  });

  it("navigates to the Home page when logo is clicked", () => {
    render(<Navbar />);

    const logoLink = screen.getByRole("link", { name: "Home" });
    fireEvent.click(logoLink);
    expect(window.location.pathname).toBe("/");
  });
});
