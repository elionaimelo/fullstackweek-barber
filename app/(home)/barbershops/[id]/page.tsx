import { Button } from "@/app/_components/ui/button";
import { db } from "@/app/_lib/prisma";

import BarbershopInfo from "./_components/barbershop-info";

interface barbershopDetailsPageProps {
  params: {
    id?: string;
  };
}

const barbershopDetailsPage = async ({
  params,
}: barbershopDetailsPageProps) => {
  if (!params.id) return <h1>Barbershop not found</h1>;

  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!barbershop) return <h1>Barbershop not found</h1>;

  return <BarbershopInfo barbershop={barbershop} />;
};

export default barbershopDetailsPage;
