export default async function Blog() {
  const { default: BlogPage } = await import("../../../app/blog/page");
  return <BlogPage />;
}
