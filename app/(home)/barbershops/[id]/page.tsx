import { Button } from "@/app/_components/ui/button";
import { db } from "@/app/_lib/prisma";

import BarbershopInfo from "./_components/barbershop-info";
import ServiceItem from "./_components/service-item";

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
    include: {
      services: true,
    },
  });

  if (!barbershop) return <h1>Barbershop not found</h1>;

  return (
    <div>
      <BarbershopInfo barbershop={barbershop} />

      <div className="px-5 flex flex-col gap-5 py-6">
        {barbershop.services.map((service) => (
          <ServiceItem key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default barbershopDetailsPage;
