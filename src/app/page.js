import Heading from "@/components/Heading/Heading";


export default function Home() {
  const services = {
    title : 'Service',
    subTitle : 'Our Service Area',
    description : "the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
  }
  return (
   <>
   <section>
     <Heading title={services.title} subTitle={services.subTitle} description={services.description}></Heading>
   </section>
   </>
  );
}
