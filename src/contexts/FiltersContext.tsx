import React, { createContext, useState } from "react";

interface FiltersContextTypes {
  filterAll: boolean;
  filterActive: boolean;
  filterCompleted: boolean;

  setFilterAll: (newState: boolean) => void;
  setFilterActive: (newState: boolean) => void;
  setFilterCompleted: (newState: boolean) => void;
}

const INITIAL_VALUE = {
  filterAll: true,
  filterActive: false,
  filterCompleted: false,

  setFilterAll: () => {},
  setFilterActive: () => {},
  setFilterCompleted: () => {},
};

export const FiltersContext = createContext<FiltersContextTypes>(INITIAL_VALUE);

export default function FiltersProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [filterAll, setFilterAll] = useState(INITIAL_VALUE.filterAll);
  const [filterActive, setFilterActive] = useState(INITIAL_VALUE.filterActive);
  const [filterCompleted, setFilterCompleted] = useState(
    INITIAL_VALUE.filterCompleted
  );
  return (
    <FiltersContext.Provider
      value={{
        filterAll,
        setFilterAll,
        filterActive,
        setFilterActive,
        filterCompleted,
        setFilterCompleted,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}
