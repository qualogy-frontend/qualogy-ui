import React from 'react';
import { BiRightArrowCircle } from 'react-icons/bi';
import { Button, CoverImage } from '../../atoms';

export interface IHeroPostProps {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author?: {
    slug: string;
    name: string;
  };
  slug: string;
  extraClasses?: string;
}

export const HeroPost: React.FC<IHeroPostProps> = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  extraClasses,
}) => {
  return (
    <div className={`relative z-1 ${extraClasses}`}>
      {/* Grid */}
      <div className="md:grid md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 md:gap-x-9 lg:gap-x-8 mb-8">
        {/* Cover image */}
        <div className="mb-8 md:mb-6 lg:row-start-1 lg:row-end-3 md:col-start-1 md:col-end-3  lg:col-start-1 lg:col-end-1 xl:col-end-3">
          <CoverImage
            title={title}
            src={coverImage}
            slug={slug}
            extraClasses={'max-h-52 md:max-h-64 xl:max-h-72 2xl:max-h-96'}
          />
        </div>
        {/* Title and date */}
        <div className="md:w-full md:row-start-2 lg:row-start-1 md:col-start-1 md:col-end-4 lg:col-start-2 lg:col-end-2 xl:col-start-3 xl:col-end-4">
          <h3 className="mb-4 text-2xl lg:text-3xl leading-tight font-bold ">
            {/* <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline">{title}</a>
            </Link> */}
            <a className="hover:underline" href={`/posts/${slug}`}>
              {title}
            </a>
          </h3>
          <div className="flex mb-4 md:mb-0 text-lg text-light-gray">
            {/* <Link href={`/authors/${author?.slug}`}>
              <a className="text-primary mr-4">{author?.name},</a>
            </Link> */}
            {/* <DateFormatter dateString={date} /> */}
            <a className="text-primary mr-4" href={`/authors/${author?.slug}`}>
              {author?.name},
            </a>
            Date: {date}
          </div>
        </div>
        {/* Content and button */}
        <div className="lg:row-start-2 lg:col-start-2 lg:col-end-2 xl:col-start-3 xl:col-end-4">
          <p className="text-lg leading-relaxed mb-4 text-light-gray">
            {excerpt}
          </p>

          <Button
            type="blank"
            width="initial"
            //color={ThemeColors.primary}
            minWidth="initial"
          >
            {/* <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <p className="mr-2">Lees meer</p>
            </Link> */}
            <a href={`/posts/${slug}`}>
              <p className="mr-2">Lees meer</p>
            </a>
            <BiRightArrowCircle size={24} />
          </Button>
        </div>
      </div>
    </div>
  );
};
