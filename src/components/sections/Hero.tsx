import Link from "next/link";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-[70vh] flex flex-col justify-center items-center text-center"
    >
      <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
        Merhaba, ben <span className="text-primary">Eda</span>
      </h1>
      <p className="max-w-2xl text-lg md:text-xl text-muted-foreground mb-8">
        Web teknolojilerine ilgi duyan bir bilgisayar mühendisiyim. React,
        Next.js, Nodejs ve TypeScript ile kullanıcı dostu arayüzler geliştirmeye
        çalışıyor ve her gün yeni şeyler öğrenmeye devam ediyorum.
      </p>
      <div className="flex gap-4">
        <Button asChild size="lg">
          <Link href="#projeler">Projeler</Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <a
            href="https://linkedin.com/in/eda-eylül-günay-a6764a238"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
