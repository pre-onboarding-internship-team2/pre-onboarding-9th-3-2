import React from "react";
import Link from "next/link";

interface LinkContainerProps {
  locations: string[];
}

const LinkContainer = ({ locations }: LinkContainerProps) => {
  return (
    <div>
      {locations.map((location, index) => (
        <Link
          className="link"
          href={{ pathname: "", query: { name: location, nameId: index } }}
          key={location}
        >
          {location}
        </Link>
      ))}
      <Link href={{ pathname: "/" }}>Reset</Link>
    </div>
  );
};

export default React.memo(LinkContainer);
