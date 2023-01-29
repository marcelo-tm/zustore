import { useParams } from "react-router-dom";
import { ContentWrapper } from "../components/ContentWrapper";
import { useEffect, useState } from "react";
import { Category } from "../types/Category";
import { Title } from "../components/Title";
import useCategoriesStore from "../hooks/useCategoriesStore";

export function Categories() {
  const { slug } = useParams();
  const categoriesStore = useCategoriesStore();
  const [category, setCategory] = useState<Category>();

  useEffect(() => {
    const cat = categoriesStore.categories.find((item) => item.slug === slug);
    setCategory(cat);
  }, [slug, categoriesStore.categories]);

  if (category) {
    return (
      <div>
        <div className="bg-gray-100 h-[350px]">
          <ContentWrapper row end>
            <img
              src={category.banner}
              alt="Category banner"
              className="h-80 self-end"
            />
          </ContentWrapper>

          <ContentWrapper>
            <Title
              label={`${category.name} Products`}
              className="text-center w-full"
            />
          </ContentWrapper>
        </div>
      </div>
    );
  }

  return <ContentWrapper>Category not found</ContentWrapper>;
}
