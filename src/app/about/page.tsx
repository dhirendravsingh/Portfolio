import { Collage } from "@/components/collage";
import Container from "@/components/container";
import LandingBlogs from "@/components/landing-blogs";
import Projects from "@/components/project";
export default function AboutPage() {
  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container className="min-h-[200vh] p-4 md:pt-20 md:pb-10">
      <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-primary">About me</h1>
      <p className="text-secondary text-sm md:text-sm pt-4 max-w-lg">
I'm a full-stack developer drawn to clean interfaces and the logic behind them. I love exploring how tech shapes the world and enjoy crafting thoughtful digital experiences. When I’m not coding, you’ll find me on the streets with a camera, capturing raw, everyday moments that tell quiet, powerful stories.

      </p>
        <Collage/>
      </Container>
    </div>
  );
}
