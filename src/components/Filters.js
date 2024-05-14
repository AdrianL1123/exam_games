import React from "react";

function Filters(props) {
  const {
    search,
    genre,
    sort,
    limit,
    genres,
    onSearchChange,
    onGenreChange,
    onSortChange,
    onLimitChange,
  } = props;
  return (
    <div className="filters">
      {/* INSTRUCTION: Add a text input for searching by title */}
      <input
        value={search}
        placeholder="searching by title"
        onChange={(e) => {
          onSearchChange(e.target.value);
        }}
      />
      {/* INSTRUCTION: Add a selector for filtering by genre */}
      <select
        onChange={(e) => {
          onGenreChange(e.target.value);
        }}
        value={genre}
      >
        <option value={"all"}>All Genres</option>;
        {genres.map((g) => (
          <option key={g} value={g}>
            {g}
          </option>
        ))}
      </select>

      {/* INSTRUCTION: Add a selector for sorting */}
      <select
        onChange={(e) => {
          onSortChange(e.target.value);
        }}
        value={sort}
      >
        <option value={"title"}>Title</option>
        <option value={"rating"}>Rating</option>
      </select>
      {/* INSTRUCTION: Add a selector for limiting the number of games per page */}
      <select
        onChange={(e) => {
          onLimitChange(e.target.value);
        }}
      >
        <option value={5}>5 per page</option>
        <option value={10}>10 per page</option>
        <option value={20}>Show All</option>;
      </select>
    </div>
  );
}

export default Filters;
