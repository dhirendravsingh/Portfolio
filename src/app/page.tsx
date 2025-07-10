import Container from "@/components/container";
export default function Home() {
  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container className="min-h-[200vh] p-4 md:pt-20 md:pb-10">
      <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-primary">Dhirendra Vikram Singh</h1>
      <p className="text-secondary text-sm md:text-sm pt-4 max-w-lg">
        I'm a full-stack developer with experience in DevOps tools, currently learning Web3 to build more connected and resilient applications.
      </p>
      </Container>
    </div>
  );
}
