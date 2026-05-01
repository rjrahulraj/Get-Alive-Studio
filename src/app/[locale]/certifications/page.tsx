export default async function Certifications() {
  const { default: CertificationsPage } = await import("../../../app/certifications/page");
  return <CertificationsPage />;
}
