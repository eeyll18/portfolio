"use client";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="iletisim" className="py-24 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-4">İletişime Geçelim!</h2>
        <p className="max-w-xl mx-auto text-muted-foreground mb-8">
          Yeni projeler, iş birliği fırsatları veya sadece bir merhaba demek
          için aşağıdaki kanallardan bana ulaşabilirsiniz.
        </p>

        <div className="flex justify-center items-center gap-6">
          <a
            href="https://github.com/eeyll18"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="h-8 w-8" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/eda-eylül-günay-a6764a238" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="h-8 w-8" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
