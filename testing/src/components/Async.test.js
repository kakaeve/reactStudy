import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async!!", () => {
  test("요청 성공!", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "첫번째!" }],
    });
    render(<Async />);
    const listItem = await screen.findAllByRole("listitem");
    expect(listItem).not.toHaveLength(0);
  });
});
