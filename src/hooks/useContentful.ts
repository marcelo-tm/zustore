import { createClient } from "contentful";

export default function useContentful() {
  const client = createClient({
    space: "7popja01mm34",
    accessToken: "czelv2QGcWuMH4dN3HSQnIbVXvi43eZtdG9Ja9SmkZ8",
    host: "preview.contentful.com",
  });

  const getCategories = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "categories",
        select: "fields",
        order: "fields.id",
      });

      const sanitizedEntries: Category[] = entries.items.map((item: any) => {
        const imgUrl = item.fields.img.fields.file.url;

        return {
          ...item.fields,
          imgUrl,
        };
      });

      return sanitizedEntries;
    } catch (err) {
      console.log("Error fetching categories:", err);
    }
  };

  const getBestSelling = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "bestSelling",
        select: "fields",
        order: "fields.id",
      });

      const sanitizedEntries: Product[] = entries.items.map((item: any) => {
        const imgUrl = item.fields.img.fields.file.url;

        return {
          ...item.fields,
          imgUrl,
        };
      });

      return sanitizedEntries;
    } catch (err) {
      console.log("Error fetching best seling:", err);
    }
  };

  return { getCategories, getBestSelling };
}
