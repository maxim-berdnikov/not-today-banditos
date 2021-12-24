import { DB } from "./DB";
import { CHECK } from "./DB";

export function Table() {
  const tableDB = DB.sort((a, b) => a.game.localeCompare(b.game));
  const tableCHECK = CHECK.sort((a, b) => a.game.localeCompare(b.game));

  const Link = ({ link, title }: { link: string; title: string }) => (
    <a className="link" href={link} target="_blank" rel="noreferrer">
      <span className={link === "" ? "link_alert" : void 0}>{title}</span>
    </a>
  );

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <td className="title">Игра</td>
            <td className="title">Играли</td>
            <td className="title">Прошли</td>
          </tr>
        </thead>
        <tbody>
          {tableDB
            .filter((item) => item.played !== "")
            .map((item) => {
              return (
                <tr key={item.game}>
                  <td
                    align="left"
                    className={
                      item.ended === item.played
                        ? "win game_title"
                        : "game_title"
                    }
                  >
                    <Link link={item.link} title={item.game} />
                  </td>
                  <td align="left">{item.played}</td>
                  <td align="left">{item.ended}</td>
                </tr>
              );
            })}
          {tableCHECK.length > 0 && (
            <>
              <tr>
                <td align="center" colSpan={3}>
                  На проверку
                </td>
              </tr>
              {tableCHECK.map((item) => {
                return (
                  <tr key={item.game}>
                    <td align="left" colSpan={3} className="game_title">
                      <Link link={item.link} title={item.game} />
                    </td>
                  </tr>
                );
              })}
            </>
          )}
          <tr>
            <td align="center" colSpan={3}>
              Планы
            </td>
          </tr>
          {tableDB
            .filter((item) => item.played === "")
            .map((item) => {
              return (
                <tr key={item.game}>
                  <td align="left" colSpan={3} className="game_title">
                    <Link link={item.link} title={item.game} />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}
