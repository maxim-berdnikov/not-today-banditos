import { DB } from "./DB";

export function Table() {
  const tableDB = DB.sort((a, b) => a.game.localeCompare(b.game));

  return (
    <table className="table">
      <thead>
        <tr>
          <td>Игра</td>
          <td>Играли</td>
          <td>Прошли</td>
        </tr>
      </thead>
      <tbody>
        {tableDB.map((item) => {
          return (
            <tr key={item.game}>
              <td
                align="left"
                className={item.ended === item.played ? "win" : ""}
              >
                {item.game}
              </td>
              <td align="left">{item.played}</td>
              <td align="left">{item.ended}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
