import type Carousels from "./carousels";
import type { Featureds, Featured } from "./featured";
import type { Categories, HeaderCategories } from "./categories";

type EXT = ".jpg" | ".png";

type MIME = "image/jpeg" | "image/png";

type ImageAttributes = {
  alternativeText: string;
  caption: string;
  createdAt: Date;
  ext: EXT;
  formats: Formats;
  hash: string;
  height: number;
  mime: MIME;
  name: string;
  previewUrl: null;
  provider: "local";
  provider_metadata: null;
  size: number;
  updatedAt: Date;
  url: string;
  width: number;
};

type Formats = {
  large: ImageFormat;
  medium: ImageFormat;
  small: ImageFormat;
  thumbnail: ImageFormat;
};

type ImageFormat = {
  ext: EXT;
  hash: string;
  height: number;
  mime: MIME;
  name: string;
  path: null;
  size: number;
  url: string;
  width: number;
};

type Meta = {
  pagination: {
    page: number;
    pageCount: number;
    pageSize: number;
    total: number;
  };
};

type STRAPIRoot<T> = {
  data: T;
  meta: Meta;
};

type STRAPIAttributes<T> = {
  id: number;
  attributes: T;
};

export type {
  EXT,
  MIME,
  Featured,
  Carousels,
  Featureds,
  Categories,
  STRAPIRoot,
  ImageFormat,
  ImageAttributes,
  STRAPIAttributes,
  HeaderCategories,
};
