"use client";
import { skillsData } from "@/data/skills";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const Skills = () => {
  return (
    <section id="yetenekler" className="py-24">
      <h2 className="text-3xl font-bold text-center mb-16">Teknolojiler</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map((category, categoryIndex) => (
          <motion.div
            key={category.category}
            className="bg-card p-6 rounded-lg border"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={categoryIndex}
          >
            <div className="flex items-center mb-4">
              <category.icon className="h-6 w-6 mr-3 text-primary" />
              <h3 className="text-xl font-semibold">{category.category}</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <Badge variant="secondary" key={skillIndex}>{skill}</Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
