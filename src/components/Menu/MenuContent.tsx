import { useBlogContext } from "@/hook/useContext";
import Grid from "@mui/material/Grid2";
import React from "react";

type IProps = {
  menuStatus: boolean;
};

type iContentSingleCell = {
  title: string;
  description?: string;
};

const MenuContent = (props: IProps) => {
  const { menuStatus } = props;

  const { data } = useBlogContext();

  const bigCellList = (cell: iContentSingleCell, index: number) => (
    <Grid
      key={index}
      size={4}
      className={`h-[313px] ${
        index !== 2 && index !== 5 ? "border-r border-b" : "border-b"
      }  border-black`}
    >
      <div className="flex flex-col h-full justify-end p-8">
        <div className="capitalize font-anybody text-5xl font-bold pb-2">
          {cell.title}
        </div>
        <div className="text-sm leading-6">{cell.description}</div>
      </div>
    </Grid>
  );

  const smallCellList = (cell: iContentSingleCell, index: number) => (
    <Grid
      size={2}
      className={`h-[130px] ${
        index !== 5 ? "border-r border-b" : "border-b"
      }  border-black`}
      key={index}
    >
      <div className="flex flex-col h-full justify-center items-center">
        {cell.title}
      </div>
    </Grid>
  );

  return (
    <div
      className={`transition-all duration-300 ${
        menuStatus
          ? "max-h-screen opacity-100"
          : "max-h-0 opacity-0 overflow-hidden"
      } absolute top:[170px] sm:top-[149px] left-0 w-full bg-white z-10`}
    >
      <Grid container>
        {data.categories.map((cell, index: number) => bigCellList(cell, index))}

        {data.subMenuCategories.map((cell, index: number) =>
          smallCellList(cell, index)
        )}
      </Grid>
    </div>
  );
};

export default MenuContent;
