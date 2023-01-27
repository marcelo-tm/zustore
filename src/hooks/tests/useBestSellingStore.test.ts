import useBestSellingStore from "../useBestSellingStore";
import { renderHook, act } from "@testing-library/react";

describe("useBestSellingStore", () => {
  it("should update best selling state", () => {
    const bestSelling = [
      {
        id: 1,
        name: "Product 1",
        imgUrl: "",
        price: 39.9,
        oldPrice: 49.9,
        rating: 3,
        categoryId: 1,
        quantity: 1,
      },
      {
        id: 2,
        name: "Product 2",
        imgUrl: "",
        price: 120,
        rating: 4,
        categoryId: 2,
        quantity: 1,
      },
    ];

    const { result } = renderHook(() => useBestSellingStore());
    const { setBestSelling } = result.current;

    act(() => {
      setBestSelling(bestSelling);
    });
    expect(result.current.bestSelling).toEqual(bestSelling);
  });
});
