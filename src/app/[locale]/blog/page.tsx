export default async function Blog() {
  // Re-render the root blog page content
  // This ensures both /blog and /en/blog show identical content
  const { default: BlogPage } = await import("../../../app/blog/page");
  return <BlogPage />;
}
