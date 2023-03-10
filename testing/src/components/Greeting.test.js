import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders greeting", () => {
    //Arrange
    render(<Greeting />);
    ///Act

    //Assert
    const hello = screen.getByText("Hello", { exact: false });
    expect(hello).toBeInTheDocument();
  });

  test("버튼 누르기 전", () => {
    render(<Greeting />);
    const niceToSee = screen.getByText("만나서 반가워", { exact: false });
    expect(niceToSee).toBeInTheDocument();
  });

  test("render change", () => {
    //Arrange
    render(<Greeting />);

    //Act
    const button = screen.getByRole("button");
    userEvent.click(button);

    const changeText = screen.getByText("변화", { exact: false });
    expect(changeText).toBeInTheDocument();
  });
  test("버튼 누른 후", () => {
    render(<Greeting />);

    const button = screen.getByRole("button");
    userEvent.click(button);

    const nice = screen.queryByText("만나서 반가워", { exact: false });
    expect(nice).toBeNull();
  });
});
