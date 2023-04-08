import type {
  EXT,
  MIME,
  STRAPIRoot,
  ImageAttributes,
  STRAPIAttributes,
} from ".";

type Categories = STRAPIRoot<Category[]>;

type Category = STRAPIAttributes<CategoryAttributes>;

type ImageAttributes2 = Omit<ImageAttributes, "formats"> & {
  formats: null;
};

type HeaderCategories = (Omit<CategoryAttributes, "image"> & {
  id: number;
  image: ImageAttributes2;
})[];

type CategoryAttributes = {
  createdAt: Date;
  image: Image;
  publishedAt: Date;
  title: string;
  updatedAt: Date;
  hasSubCategory: boolean;
  displayOnHeader: boolean;
};

type Image = {
  data: STRAPIAttributes<ImageAttributes2>;
};

export type { Categories, HeaderCategories, CategoryAttributes };
