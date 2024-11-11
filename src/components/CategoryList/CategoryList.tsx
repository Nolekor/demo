"use client";

import Image from "next/image";
import React, { useState } from "react";
import { styled } from "@mui/system";
import { Button } from "@mui/material";

const options = [
  { label: "Tutti i temi", color: "bg-gray-200" },
  { label: "Ambiente", color: "bg-teal-200" },
  { label: "Economia", color: "bg-gray-200" },
  { label: "Mondo", color: "bg-red-200" },
  { label: "Non Profit", color: "bg-gray-200" },
  { label: "Politica", color: "bg-gray-200" },
  { label: "Società", color: "bg-gray-200" },
  { label: "Welfare", color: "bg-gray-200" },
];

const CategoryList = () => {
  const [filter, setFilter] = useState(options[0].label);
  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
  };

  const [isTextMode, setIsTextMode] = useState(true);

  const handleToggle = () => {
    setIsTextMode(!isTextMode);
  };

  const [selectedOption, setSelectedOption] = useState(options[0].label);

  const handleSelect = (label: string) => {
    setSelectedOption(label);
  };

  const StyledButton = styled(Button)(() => ({
    width: "83px",
    height: "40px",
    fontSize: "10px",
    borderRadius: "4px",
    padding: "12px 16px",
    fontWeight: "bold",
    textTransform: "none",
    boxShadow: "-2px 2px 0px 0px #000000",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "4px",
    whiteSpace: "nowrap",
    border: "1px solid #000",
    "&.selected": {
      borderColor: "#FF0000",
    },
  }));

  return (
    <div className="flex items-center border-b border-black">
      {isTextMode ? (
        <div className="flex flex-wrap lg:h-24">
          {options.map((option) => (
            <button
              key={option.label}
              className={`font-raleway text-2xl font-bold pt-2 px-8 rounded mr-2 ${
                filter === option.label
                  ? "border-b-8 border-red-500 rounded-none"
                  : "border-b-8 border-transparent"
              }`}
              onClick={() => handleFilterChange(option.label)}
            >
              {option.label}
            </button>
          ))}
        </div>
      ) : (
        <div className="flex lg:h-24 space-x-4 p-4 justify-center items-center">
          <div className="flex space-x-2 flex-wrap">
            {options.map((option, index) => (
              <StyledButton
                key={index}
                className={`${option.color} text-black ${
                  selectedOption === option.label ? "selected" : ""
                }`}
                variant="contained"
                onClick={() => handleSelect(option.label)}
              >
                {option.label}
              </StyledButton>
            ))}
          </div>
        </div>
      )}
      <div className="flex ml-auto mr-16">
        <button
          onClick={handleToggle}
          className={`${
            isTextMode ? "border-black rounded-lg shadow-md shadow-black" : ""
          } flex items-center justify-center transition-colors mr-2`}
        >
          <Image src="/toggle.png" alt="icon" width={36} height={36} />
        </button>
        <button
          onClick={handleToggle}
          className={`${
            !isTextMode ? "border-black rounded-lg shadow-md shadow-black" : ""
          } flex items-center justify-center transition-colors`}
        >
          <Image src="/toggle2.png" alt="icon" width={36} height={36} />
        </button>
      </div>
    </div>
  );
};

export default CategoryList;
