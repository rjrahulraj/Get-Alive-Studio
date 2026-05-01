export default async function Team() {
  const { default: TeamPage } = await import("../../../app/team/page");
  return <TeamPage />;
}
