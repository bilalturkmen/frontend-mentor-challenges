import { useState } from "react";

interface SubsProps {
  email: string;
  setEmail: any;
  handleSubmit: (event: React.FormEvent) => void;
}

const SubsForm = ({ handleSubmit, email, setEmail }: SubsProps) => {
  const [placeText, setPlaceText] = useState("Email address");

  return (
    <form className="content--form" onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        placeholder={placeText}
        onFocus={() => setPlaceText("")}
        onBlur={() => setPlaceText("Email address")}
        aria-label="enter your email address"
      />
      <button type="submit">Request Access</button>
    </form>
  );
};

export default SubsForm;
