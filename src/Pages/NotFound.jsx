export default function NotFound() {
  return (
    <>
      <div className="homes" style={{ padding: "80px" }}>
        <p>
          <span>Home </span> / 404 Error
        </p>
      </div>

      <div className="notfound">
        <h1>404 Not Found</h1>
        <p>Your visited page not found. You may go home page.</p>
        <div className="back">
          <a href="/home">Back to homepage</a>
        </div>
      </div>
    </>
  );
}
