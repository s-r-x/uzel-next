export const useExtractPostCategory = (post: any) => {
  const meta = post.categories?.nodes?.[0];
  if (!meta) {
    return null;
  }
  return {
    slug: meta.slug,
    name: meta.name,
  };
};
