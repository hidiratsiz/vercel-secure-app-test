// pages/index.js
export default function Home() {
  // Ortam değişkeninden şifreyi al
  const SECRET_PASSWORD = process.env.SECRET_PASSWORD;

  return (
    <div>
      <h1>Password Check</h1>
      {SECRET_PASSWORD === 'pWd1122' ? (
        <p>Password is correct!!!</p>
      ) : (
        <p>Password is incorrect or not defined.</p>
      )}
    </div>
  );
}
