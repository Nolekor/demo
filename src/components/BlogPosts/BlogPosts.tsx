import React from "react";

import { useBlogContext } from "@/hook/useContext";
import Image from "next/image";
import { IArticles } from "@/types/IArticles";

function BlogPosts({ articles }: { articles: IArticles[] }) {
  const { data } = useBlogContext();
  const { authors } = data;

  const chip = (tag: string) => {
    return (
      <div className="px-4 py-1 font-raleway font-bold  justify-center items-center capitalize bg-white text-black rounded-sm inline-block">
        {tag}
      </div>
    );
  };
  return (
    <>
      <div
        style={{ backgroundImage: `url('/images/${articles[0]?.image}')` }}
        className="h-[506px] relative bg-cover bg-no-repeat bg-center"
      >
        <div className="text-white absolute bottom-0 left-0 p-4 max-w-[800px]">
          {chip(articles[0]?.tag)}
          <div className="font-anybody font-bold text-[40px] ">
            {articles[0]?.title}
          </div>
          <div>
            <div className="flex items-center">
              {authors.find((author) => author.author === articles[0]?.author)
                ?.authorImage && (
                <Image
                  src={`/images/${
                    authors.find(
                      (author) => author.author === articles[0]?.author
                    )?.authorImage
                  }`}
                  width={40}
                  height={40}
                  alt={articles[0]?.author}
                  className="h-10 w-10 rounded-full mr-2"
                />
              )}
              <div className="flex flex-col">
                <div> Di: {articles[0]?.author}</div>
                <div>
                  {new Intl.DateTimeFormat("it-IT", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  }).format(new Date(articles[0]?.date || ""))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:grid sm:grid-cols-2">
        <div
          style={{ backgroundImage: `url('/images/${articles[1]?.image}')` }}
          className="h-[845px] relative bg-cover"
        >
          <div className="text-white absolute bottom-0 left-0 p-4 max-w-[800px]">
            {chip(articles[1]?.tag)}
            <div className="font-anybody font-bold text-[40px] ">
              {articles[1]?.title}
            </div>
            <div>
              <div className="flex flex-col ">
                {authors.find((author) => author.author === articles[1]?.author)
                  ?.authorImage && (
                  <Image
                    src={`/images/${
                      authors.find(
                        (author) => author.author === articles[1]?.author
                      )?.authorImage
                    }`}
                    width={40}
                    height={40}
                    alt={articles[1]?.author}
                    className="h-10 w-10 rounded-full mr-2"
                  />
                )}
                <div className="flex flex-col">
                  <div> Di: {articles[1]?.author}</div>
                  <div>
                    {new Intl.DateTimeFormat("it-IT", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    }).format(new Date(articles[1]?.date || ""))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            style={{ backgroundImage: `url('/images/${articles[2]?.image}')` }}
            className="h-[471px] relative bg-cover brightness-75"
          >
            <div className="text-white absolute bottom-0 left-0 p-4 max-w-[800px]">
              {chip(articles[2]?.tag)}
              <div className="font-anybody font-bold text-[40px] ">
                {articles[2]?.title}
              </div>
              <div>
                <div className="flex flex-col ">
                  {authors.find(
                    (author) => author.author === articles[2]?.author
                  )?.authorImage && (
                    <Image
                      src={`/images/${
                        authors.find(
                          (author) => author.author === articles[2]?.author
                        )?.authorImage
                      }`}
                      width={40}
                      height={40}
                      alt={articles[2]?.author}
                      className="h-10 w-10 rounded-full mr-2"
                    />
                  )}
                  <div className="flex flex-col">
                    <div> Di: {articles[2]?.author}</div>
                    <div>
                      {new Intl.DateTimeFormat("it-IT", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      }).format(new Date(articles[2]?.date || ""))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url('/images/${articles[3]?.image}')` }}
            className="h-[374px] relative bg-cover brightness-75"
          >
            <div className="text-white absolute bottom-0 left-0 p-4 max-w-[800px]">
              {chip(articles[3]?.tag)}
              <div className="font-anybody font-bold text-[40px] ">
                {articles[3]?.title}
              </div>
              <div>
                <div className="flex flex-col ">
                  {authors.find(
                    (author) => author.author === articles[3]?.author
                  )?.authorImage && (
                    <Image
                      src={`/images/${
                        authors.find(
                          (author) => author.author === articles[3]?.author
                        )?.authorImage
                      }`}
                      width={40}
                      height={40}
                      alt={articles[3]?.author}
                      className="h-10 w-10 rounded-full mr-2"
                    />
                  )}
                  <div className="flex flex-col">
                    <div> Di: {articles[3]?.author}</div>
                    <div>
                      {new Intl.DateTimeFormat("it-IT", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      }).format(new Date(articles[3]?.date || ""))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogPosts;
