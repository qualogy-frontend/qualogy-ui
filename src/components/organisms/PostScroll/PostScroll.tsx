import React, { FC, useEffect, useRef, useState } from 'react';
import { IContentProps } from '../../atoms';
import { CardPost } from '../../molecules';
import { IPostProps } from '../../templates';

export interface IPostScrollProps {
  data: IContentProps & { source: string };
  baseUrl?: string;
}

const fetchPosts = async ({
  baseUrl,
  url,
  range: { start, limit },
}: {
  baseUrl?: string;
  url: string;
  range: { start: number; limit: number };
}): Promise<Response | false> => {
  try {
    const postResults = await fetch(
      `${baseUrl ? baseUrl : ''}${url}?_start=${start}&_limit=${limit}`
    );
    return postResults;
  } catch (e) {
    console.warn(e);
    console.log('failed fetching posts check warnings');
    return false;
  }
};

export const PostScroll: FC<IPostScrollProps> = ({ data, baseUrl }) => {
  const [page, setPage] = useState(0);
  const [posts, setPosts] = useState<IPostProps[]>([]);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [loading, setLoading] = useState(false);
  const postsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    window.addEventListener('scroll', pageScroll);
    return () => {
      window.removeEventListener('scroll', pageScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (page === 0 && data.source) {
      setLoading(true);

      fetchPosts({
        baseUrl,
        url: data.source,
        range: { start: 0, limit: 8 },
      }).then(async (response) => {
        if (response) {
          const parsed: IPostProps[] = await response?.json();
          if (parsed && parsed.length > 0) {
            setPosts([...posts, ...parsed]);
            setPage(9);
          } else {
            setHasNextPage(false);
          }
        }
        setLoading(false);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (hasNextPage && data.source) {
      setLoading(true);
      fetchPosts({ url: data.source, range: { start: page, limit: 8 } }).then(
        async (response) => {
          if (response) {
            const parsed: IPostProps[] = await response?.json();
            if (parsed && parsed.length > 0) {
              setPosts([...posts, ...parsed]);
            } else {
              setHasNextPage(false);
            }
          }
          setLoading(false);
        }
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  // const pageScroll = (event: Event): void => {
  const pageScroll = (): void => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = winScroll / height;
    const postsElement: HTMLDivElement | null = postsRef.current;
    if (postsElement) {
      if (postsElement.offsetHeight + postsElement.offsetTop > winScroll) {
        setPage(page + 8);
      }
    }
    if (scrolled > 0.9 && postsElement) {
      // setPage(page + 8);
    }
  };

  return (
    <div
      ref={postsRef}
      className={`grid xl:grid-cols-3 2xl:grid-cols-4 gap-8 min-h-screen pt-16 pb-16 max-w-screen-2xl px-5 md:px-10 `}
    >
      {posts.map((post) => {
        return (
          <CardPost
            title={post.title}
            date={post.date || '00-00-0000'}
            image={`${baseUrl ? baseUrl : ''}${post?.coverImage?.url}`}
            alt={post.slug}
            author={post?.author?.name}
            authorSlug={post?.author?.slug}
            body={post.excerpt}
            slug={post.slug}
            key={post.id}
          />
        );
      })}
      {loading &&
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((__, index) => (
          <CardPost loading={loading} key={index} />
        ))}
    </div>
  );
};
