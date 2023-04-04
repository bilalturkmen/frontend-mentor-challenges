interface WelProps {
  email: string;
  setError: any;
}

const WelcomeMsg = ({ email, setError }: WelProps) => {
  return (
    <p className="content--welcome">
      Welcome aboard {email} <i aria-hidden="true">🚢</i>
      <span>
        Please check your{" "}
        <a href="/" onClick={() => setError(false)}>
          inbox
        </a>
      </span>
    </p>
  );
};

export default WelcomeMsg;
