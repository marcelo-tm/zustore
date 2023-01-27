import useCategoriesStore from "../useCategoriesStore";
import { renderHook, act } from "@testing-library/react";

describe("useCategoriesStore", () => {
  it("should update categories state", () => {
    const categories = [
      { id: 1, name: "Category 1", imgUrl: "", slug: "category1" },
      { id: 2, name: "Category 2", imgUrl: "", slug: "category2" },
    ];

    const { result } = renderHook(() => useCategoriesStore());
    const { setCategories } = result.current;

    act(() => {
      setCategories(categories);
    });
    expect(result.current.categories).toEqual(categories);
  });
});
