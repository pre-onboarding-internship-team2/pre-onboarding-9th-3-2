import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface LinkContainerProps {
  locations: string[];
}

const LinkContainer = ({ locations }: LinkContainerProps) => {
  const router = useRouter();
  return (
    <div className="link-container">
      {locations.map((location, index) => (
        <Link
          className="link"
          href={{ pathname: "", query: { name: location, nameId: index } }}
          key={location}
          aria-current={
            Number(router.query.nameId) === index ? "location" : "false"
          }
        >
          {location}
        </Link>
      ))}
      <Link className="link" href={{ pathname: "/" }}>
        Reset
      </Link>
    </div>
  );
};

export default React.memo(LinkContainer);
