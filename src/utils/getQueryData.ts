export const getQueryData = (url: string) => {
  if (url === "") return null;

  const params = new URLSearchParams(url);
  const keyword = params.get("targetId");

  return keyword;
};
