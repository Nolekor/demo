"use client";
import {
  IArticles,
  IAuthor,
  IBlog,
  ICategories,
  ISubMenu,
} from "@/types/IArticles";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import data from "../mocks/data";

type BlogData = {
  articles: IArticles[];
  blog: IBlog[];
  author: IAuthor[];
  categories: ICategories[];
  subMenuCategories: ISubMenu[];
};

// Define the default data
const defaultData: BlogData = {
  articles: [],
  blog: [],
  author: [],
  categories: [],
  subMenuCategories: [],
};

// Define the context type
type BlogContextType = {
  data: BlogData;
  setData: React.Dispatch<React.SetStateAction<BlogData>>;
};

// Create the context
const BlogContext = createContext<BlogContextType | undefined>(undefined);

// Fake API call to fetch data
const fetchData = async () => {
  return Promise.resolve(data);
};

// Provider component
export const BlogProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState<BlogData>(defaultData);

  useEffect(() => {
    const fetchDataAsync = async () => {
      const data = await fetchData();
      setData(data);
    };
    fetchDataAsync();
  }, []);

  return (
    <BlogContext.Provider value={{ data, setData }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogContext = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error("useBlogContext must be used within a BlogProvider");
  }
  return context;
};
