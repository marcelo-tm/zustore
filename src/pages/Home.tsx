import { useNavigate } from "react-router-dom";

import watchesCover from "../assets/watch_cover.png";
import { Button } from "../components/Button";
import { CategoryItem } from "../components/CategoryItem";
import { ContentWrapper } from "../components/ContentWrapper";
import { Title } from "../components/Title";
import { ProductItem } from "../components/ProductItem";
import { Product } from "../types/Product";
import { Category } from "../types/Category";
import useCartStore from "../hooks/useCartStore";
import useCategoriesStore from "../hooks/useCategoriesStore";
import useBestSellingStore from "../hooks/useBestSellingStore";

export function Home() {
  const cartStore = useCartStore();
  const categoriesStore = useCategoriesStore();
  const bestSellingStore = useBestSellingStore();
  const navigate = useNavigate();

  function handleCoverClick() {
    console.log("CLICK");
  }

  function handleCategoryClick(slug: string) {
    navigate(`category/${slug}`);
  }

  return (
    <div>
      <ContentWrapper>
        <div className="flex gap-5 mt-20">
          <img src={watchesCover} className="w-[700px]" />
          <div className="text-right">
            <p className="whitespace-nowrap font-black text-3xl">
              Shop Personalize
            </p>
            <p className="whitespace-nowrap font-black text-3xl">
              Your Pineapple
            </p>
            <p className="whitespace-nowrap font-black text-3xl">Watches</p>
            <Button onClick={handleCoverClick} className="mt-5">
              Shop Now
            </Button>
          </div>
        </div>
      </ContentWrapper>

      <div className="mt-20 bg-gray-100 w-full">
        <ContentWrapper>
          <Title label="Browse Our Categories" className="text-center w-full" />

          <div className="flex justify-between mt-3">
            {categoriesStore.categories.map((category: Category) => (
              <CategoryItem
                key={`cat-${category.id}`}
                category={category}
                onClick={() => handleCategoryClick(category.slug)}
              />
            ))}
          </div>
        </ContentWrapper>
      </div>

      <div className="mt-10 w-full">
        <ContentWrapper>
          <Title label="Best Selling" className="text-center w-full" />

          <div className="flex justify-between mt-3">
            {bestSellingStore.bestSelling.map((product: Product) => (
              <ProductItem
                key={`bs-${product.id}`}
                product={product}
                onClick={() => cartStore.toggleProduct(product)}
                cartProducts={cartStore.cartProducts}
              />
            ))}
          </div>
        </ContentWrapper>
      </div>
    </div>
  );
}
