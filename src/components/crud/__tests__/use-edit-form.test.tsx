import { fireEvent, render, waitFor } from "@testing-library/react";
import EditComponent from "../edit/edit-component";
import { prevPostDummy } from "@/hooks/form/use-edit-form";

describe("Test custom hook: name use-edit-form.tsx", () => {
  // 컴포넌트 랜더링
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

  // 버튼 클릭 시 submit
  it("file object when submit button is clicked", async () => {
    const { getByLabelText, getByText } = render(<EditComponent />);
    const albumInput = getByLabelText("노래");
    const titleInput = getByLabelText("게시글 제목");
    const descriptionInput = getByLabelText("감상평");
    const submitButton = getByText("submit 클릭!");

    const mockUpdatePost = jest.fn();
    jest.mock("@/hooks/use-CRUD", () => {
      return () => {
        return {
          isLoading: false,
          updatePost: mockUpdatePost,
          getDraftData: jest.fn().mockReturnValue(prevPostDummy),
        };
      };
    });

    fireEvent.change(albumInput, { target: { value: "Album name" } });
    fireEvent.change(titleInput, { target: { value: "Post title" } });
    fireEvent.change(descriptionInput, {
      target: { value: "Post description" },
    });
    fireEvent.submit(submitButton);

    await waitFor(() => {
      // submit 후에 발생하는 테스트 코드
    });
  });
});
