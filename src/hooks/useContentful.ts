import { createClient } from "contentful";

export default function useContentful() {
  const client = createClient({
    space: import.meta.env.VITE_CONTENTFUL_SPACE,
    accessToken: import.meta.env.VITE_CONTENTFUL_TOKEN,
    host: import.meta.env.VITE_CONTENTFUL_HOST,
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
