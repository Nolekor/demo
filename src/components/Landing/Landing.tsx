"use client";
import React from "react";
import BlogPosts from "../BlogPosts/BlogPosts";
import { useBlogContext } from "@/hook/useContext";
import { IArticles } from "@/types/IArticles";

const Landing = () => {
  const { data } = useBlogContext();
  const topBlog: IArticles[] = data?.articles?.slice(0, 4) || [];
  return (
    <div>
      <BlogPosts articles={topBlog} />
    </div>
  );
};

export default Landing;
