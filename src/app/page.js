// pages/index.js
export default function Home() {
  // Ortam değişkeninden şifreyi al
  const SECRET_PASSWORD = process.env.SECRET_PASSWORD;

  return (
    <div>
      <h1>Şifre Kontrolü</h1>
      {SECRET_PASSWORD === 'beklenen_sifre' ? (
        <p>Şifre doğru!</p>
      ) : (
        <p>Şifre yanlış veya tanımlanmamış.</p>
      )}
    </div>
  );
}
