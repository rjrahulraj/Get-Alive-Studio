export default async function Services() {
  const { default: ServicesPage } = await import("../../../app/services/page");
  return <ServicesPage />;
}
