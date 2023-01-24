import { StarIcon as HollowStarIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";

type RatingProps = {
  id: number;
  rating: number;
};

export function Rating({ id, rating }: RatingProps) {
  const ratingArray = [];

  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      ratingArray.push(
        <StarIcon className="h-4 w-4" key={`rating-${i}${id}`} />
      );
    } else {
      ratingArray.push(
        <HollowStarIcon className="h-4 w-4" key={`rating-${i}${id}`} />
      );
    }
  }

  return <div className="flex items-center text-rating">{...ratingArray}</div>;
}
