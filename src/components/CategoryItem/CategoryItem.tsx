import { Category } from "../../types/Category";
import { Button } from "../Button";
import { ItemContainer } from "../ItemContainer";

type CategoryItemProps = {
  category: Category;
  onClick: () => void;
};

export function CategoryItem({ category, onClick }: CategoryItemProps) {
  return (
    <ItemContainer
      imageUrl={category.imgUrl}
      className="relative group overflow-hidden flex justify-center items-center h-[300px]"
    >
      <Button
        onClick={onClick}
        className="absolute w-[260px] bottom-5 ease-in-out duration-300 translate-y-full opacity-0 pointer-events-none group-hover:translate-y-0 group-hover:opacity-100 group-hover:pointer-events-auto"
      >
        {category.name}
      </Button>
    </ItemContainer>
  );
}
