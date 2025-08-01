
const About = () => {
  return (
    <section id="hakkimda" className="py-24">
      <h2 className="text-3xl font-bold text-center mb-12">Hakkımda</h2>
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div>{/* image */}</div>
        <div className="flex-1 text-lg text-muted-foreground">
          <p className="mb-4">
            Ankara/Türkiye’de yaşayan bir Bilgisayar Mühendisiyim. Web
            teknolojilerine ilgim var ve özellikle React, Next.js, Nodejs ve TypeScript
            gibi modern araçlarla kullanıcı dostu arayüzler geliştirmekten keyif
            alıyorum. Öğrenmeye açık bir yapım var ve her geçen gün kendimi bu
            alanda biraz daha ileri taşımaya çalışıyorum.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
