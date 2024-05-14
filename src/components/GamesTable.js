import React from "react";

function GamesTable(props) {
  const { games, isLoading, isError } = props;
  /* INSTRUCTION: Show "loading..." when isLoading is true */
  if (isLoading) {
    return <h1>loading...</h1>;
  }
  /* INSTRUCTION: add an error message when isError is true */
  if (isError) {
    throw new Error("error");
  }
  /* INSTRUCTION: Show "error" when isError is true */

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Genres</th>
            <th>Rating</th>
          </tr>
        </thead>
        {games.length > 0 ? (
          <tbody>
            {games.map((g) => (
              <tr key={g}>
                <td>{g.title}</td>
                <td>{`${g.genres}`}</td>
                <td>{g.rating}</td>
              </tr>
            ))}
            {/* INSTRUCTION: if games data is available, display the games in a
        table. if not, display a "No games found." message */}
          </tbody>
        ) : (
          <tbody>
            <tr>
              <td>No games found.</td>
            </tr>
          </tbody>
        )}
      </table>
    </>
  );
}

export default GamesTable;
