import { db } from "@/app/_lib/prisma"

interface barbershopDetailsPageProps {
  params: {
    id?: string
  }
}

const barbershopDetailsPage = async ({ params}: barbershopDetailsPageProps) => {
  
  if(!params.id) return (<h1>Barbershop not found</h1>)

  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id
    }
  })

  if(!barbershop) return (<h1>Barbershop not found</h1>)

  return (
    <div>
      <h1>{barbershop?.name}</h1>
    </div>
  )
}

export default barbershopDetailsPage