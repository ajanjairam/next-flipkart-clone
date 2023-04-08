import type {
  Meta,
  EXT,
  MIME,
  STRAPIRoot,
  ImageAttributes,
  STRAPIAttributes,
} from ".";

type Carousels = STRAPIRoot<Carousel[]>;

type Carousel = STRAPIAttributes<CarouselAttributes>;

type CarouselAttributes = {
  createdAt: Date;
  image: Image;
  publishedAt: Date;
  updatedAt: Date;
};

type Image = {
  data: STRAPIAttributes<ImageAttributes>;
};

export default Carousels;
