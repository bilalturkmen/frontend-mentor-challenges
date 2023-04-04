import { useState } from "react";
import { logoImg, Content, SubsForm, WelcomeMsg, Brands } from "./components";

function App() {
  const [status, setStatus] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const validEmail =
      !/^[A-Za-z0-9._%+-]{1,64}@(?:[A-Za-z0-9-]{1,63}\.){1,125}[A-Za-z]{2,63}$/.test(
        email
      );

    if (validEmail || email === "") {
      setError(true);
    } else {
      console.log(email);
      setError(false);
      setStatus(true);
    }
  };

  return (
    <main className="main_cont">
      <div className="container">
        <div className="hero">
          <a href="/">
            <img src={logoImg} alt="podcast request logo" />
          </a>
        </div>
        <div className="hero__content">
          <Content />

          {status && <WelcomeMsg email={email} setError={setError} />}

          {!status && (
            <SubsForm
              handleSubmit={handleSubmit}
              email={email}
              setEmail={setEmail}
            />
          )}

          {error && (
            <span className="content--error" onClick={() => setError(false)}>
              Oops! Please check your email.
            </span>
          )}

          <Brands />
        </div>
      </div>
      <div className="hero__pattern"></div>
    </main>
  );
}

export default App;
