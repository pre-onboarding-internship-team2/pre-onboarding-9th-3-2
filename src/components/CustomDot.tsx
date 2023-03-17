import React from 'react';

export default function CustomDot(props: any) {
  const { cx, cy, payload, currentParams } = props;
  console.log(props)

  if (payload.id === currentParams) {
    return <circle cx={cx} cy={cy} r={4} stroke="white" strokeWidth={2} fill="#38A5FF" />;
  }

  return (
    <></>
  );
}
