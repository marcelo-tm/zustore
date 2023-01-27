import useCartStore from "../useCartStore";
import { renderHook, act, cleanup } from "@testing-library/react";

const initialStoreState = useCartStore.getState();

describe("useCartStore", () => {
  beforeEach(() => {
    useCartStore.setState(initialStoreState, true);
  });

  it("should open/close the store", () => {
    const { result } = renderHook(() => useCartStore());
    const { toggleOpen } = result.current;

    act(() => {
      toggleOpen();
    });
    expect(result.current.isOpen).toBeTruthy();
    act(() => {
      toggleOpen();
    });
    expect(result.current.isOpen).toBeFalsy();
  });

  it("should add product to cart", () => {
    const product = {
      id: 1,
      name: "Product 1",
      imgUrl: "",
      price: 39.9,
      oldPrice: 49.9,
      rating: 3,
      categoryId: 1,
      quantity: 1,
    };

    const { result } = renderHook(() => useCartStore());
    const { toggleProduct } = result.current;

    act(() => {
      toggleProduct(product);
    });
    expect(result.current.cartProducts).toHaveLength(1);
    expect(result.current.cartProducts).toEqual([product]);
  });

  it("should remove product from cart when product is already in there", () => {
    const product = {
      id: 1,
      name: "Product 1",
      imgUrl: "",
      price: 39.9,
      oldPrice: 49.9,
      rating: 3,
      categoryId: 1,
      quantity: 1,
    };

    const { result } = renderHook(() => useCartStore());
    const { toggleProduct } = result.current;

    act(() => {
      toggleProduct(product);
      toggleProduct(product);
    });
    expect(result.current.cartProducts).toHaveLength(0);
    expect(result.current.cartProducts).toEqual([]);
  });

  it("should update product quantity", () => {
    const product = {
      id: 1,
      name: "Product 1",
      imgUrl: "",
      price: 39.9,
      oldPrice: 49.9,
      rating: 3,
      categoryId: 1,
      quantity: 1,
    };

    const { result } = renderHook(() => useCartStore());
    const { toggleProduct, updateProductQuantity } = result.current;

    act(() => {
      toggleProduct(product);
      updateProductQuantity(product, 2);
    });

    expect(result.current.cartProducts).toHaveLength(1);
    expect(result.current.cartProducts).toEqual([
      {
        ...product,
        quantity: 2,
      },
    ]);
  });
});
