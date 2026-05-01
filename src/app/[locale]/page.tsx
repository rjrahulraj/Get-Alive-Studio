import HomeContent from "@/components/HomeContent";

interface HomeProps {
  params: Promise<{ locale: string }>;
}

export default async function Home({ params }: HomeProps) {
  const { locale } = await params;

  return <HomeContent locale={locale} />;
}
