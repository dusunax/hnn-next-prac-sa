import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import EditComponent from "../edit-component";

describe("EditComponent", () => {
  // EditComponent가 렌더링되었는지 확인
  it("renders form with inputs and submit button", async () => {
    const { getByLabelText, getByText } = render(<EditComponent />);
    const albumInput = getByLabelText("노래");
    const titleInput = getByLabelText("게시글 제목");
    const descriptionInput = getByLabelText("감상평");
    const submitButton = getByText("submit 클릭!");

    expect(albumInput).toBeInTheDocument();
    expect(titleInput).toBeInTheDocument();
    expect(descriptionInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  // 버튼을 눌렀을 때, Form submit
  it("submits form when submit button is clicked", async () => {
    const { getByLabelText, getByText } = render(<EditComponent />);
    const albumInput = getByLabelText("노래");
    const titleInput = getByLabelText("게시글 제목");
    const descriptionInput = getByLabelText("감상평");
    const submitButton = getByText("submit 클릭!");

    fireEvent.change(albumInput, { target: { value: "Album name" } });
    fireEvent.change(titleInput, { target: { value: "Post title" } });
    fireEvent.change(descriptionInput, {
      target: { value: "Post description" },
    });
    fireEvent.click(submitButton);

    await waitFor(() => {
      // isLoading이 true일 때, 스피너를 표시
    });
  });
});
