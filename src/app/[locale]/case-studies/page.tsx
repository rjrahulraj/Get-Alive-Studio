export default async function CaseStudies() {
 
  const { default: CaseStudiesPage } = await import("../../../app/case-studies/page");
  return <CaseStudiesPage />;
}
