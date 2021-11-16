import { DB } from "./DB";
import { Header } from "./Header";

export function Table() {
  const tableDB = DB.sort((a, b) => a.game.localeCompare(b.game));

  return (
    <>
      <Header />
      <table className="table">
        <thead>
          <tr>
            <td>Игра</td>
            <td>Играли</td>
            <td>Прошли</td>
          </tr>
        </thead>
        <tbody>
          {tableDB.filter(item => item.played !== "").map((item) => {
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
          <tr>
            <td align="center" colSpan={3}>Планы</td>
          </tr>
          {tableDB.filter(item => item === "").map((item) => {
            return (
              <tr key={item.game}>
                <td align="left" colSpan={3}>{item.game}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
