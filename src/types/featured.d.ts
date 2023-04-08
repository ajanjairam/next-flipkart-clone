import type {
  Meta,
  EXT,
  MIME,
  STRAPIRoot,
  ImageFormat,
  ImageAttributes,
  STRAPIAttributes,
} from ".";
import type { CategoryAttributes } from "./categories";

type FeaturedCategories = STRAPIRoot<FeaturedCategory[]>;

type FeaturedCategory = STRAPIAttributes<FeaturedCategoryAttributes>;

type FeaturedCategoryAttributes = {
  bgImage: Image;
  createdAt: Date;
  publishedAt: Date;
  subCategories: SubCategories;
  title: string;
  updatedAt: Date;
};

type ImageAttributes2 = Omit<ImageAttributes, "formats"> & {
  formats: {
    thumbnail: ImageFormat;
  };
};

type Image = {
  data: STRAPIAttributes<ImageAttributes2>;
};

type SubCategories = {
  data: STRAPIAttributes<SubCategoryAttributes>[];
};

type SubCategoryAttributes = Omit<
  CategoryAttributes,
  "hasSubCategory" | "displayOnHeader" | "image"
> & {
  image: Image;
  description: string;
  offers: string;
};

export { FeaturedCategories as Featureds, FeaturedCategory as Featured };
