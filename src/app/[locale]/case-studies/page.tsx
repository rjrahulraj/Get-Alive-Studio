export default async function CaseStudies() {
  // Re-render the root case-studies page content
  // This ensures both /case-studies and /en/case-studies show identical content
  const { default: CaseStudiesPage } = await import("../../../app/case-studies/page");
  return <CaseStudiesPage />;
}
