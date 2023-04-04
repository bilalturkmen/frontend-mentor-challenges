import { Key } from "react";
import { data } from "./";

const Brands = () => {
  return (
    <div className="content--brands ">
      {data.map((brand: { logo: string; name: string }, i: Key) => (
        <img
          key={i}
          src={brand.logo}
          alt={brand.name}
          className="brand--logo"
        />
      ))}
    </div>
  );
};

export default Brands;
