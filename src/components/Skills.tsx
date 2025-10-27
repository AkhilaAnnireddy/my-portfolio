import React from "react";
import { motion } from "framer-motion";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiGnubash,
  SiScikitlearn,
  SiTensorflow,
  SiPytorch,
  SiSpringboot,
  SiDjango,
  SiFlask,
  SiNodedotjs,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiAmazondynamodb,
  SiApachekafka,
  SiGit,
  SiTestinglibrary,
  SiJira,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiJenkins,
  SiGithubactions,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiAmazon,
  SiBitbucket,
  SiSpring,
  SiHibernate,
} from "react-icons/si";
import {
  FaDatabase,
  FaCloud,
  FaNetworkWired,
  FaChartLine,
  FaCode,
  FaCogs,
  FaServer,
  FaLayerGroup,
} from "react-icons/fa";
import { DiJava } from "react-icons/di";
import { TbApi, TbBrandDocker } from "react-icons/tb";
import { MdSecurity, MdComputer } from "react-icons/md";

type Skill = {
  name: string;
  icon?: React.ReactNode;
};

type Category = {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
};

export default function Skills() {
  const categories: Category[] = [
    {
      title: "Languages",
      icon: <FaCode className="text-blue-400 text-xl" />,
      skills: [
        { name: "Java", icon: <DiJava /> },
        { name: "Python", icon: <SiPython /> },
        { name: "SQL", icon: <FaDatabase /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "Bash", icon: <SiGnubash /> },
      ],
    },
    {
      title: "Backend & Systems",
      icon: <FaServer className="text-blue-400 text-xl" />,
      skills: [
        { name: "Spring Boot", icon: <SiSpringboot /> },
        { name: "REST APIs", icon: <TbApi /> },
        { name: "Django", icon: <SiDjango /> },
        { name: "Flask", icon: <SiFlask /> },
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "Spring Security", icon: <SiSpring /> },
        { name: "Hibernate / JPA", icon: <SiHibernate /> },
        { name: "Microservices", icon: <FaLayerGroup /> },
      ],
    },
    {
      title: "Cloud & Infrastructure",
      icon: <FaCloud className="text-blue-400 text-xl" />,
      skills: [
        { name: "EC2", icon: <MdComputer /> },
        { name: "Lambda", icon: <SiAmazon /> },
        { name: "S3", icon: <FaCloud /> },
        { name: "RDS", icon: <FaDatabase /> },
        { name: "SQS", icon: <SiAmazon /> },
        { name: "CloudWatch", icon: <FaChartLine /> },
        { name: "Cognito", icon: <MdSecurity /> },
        { name: "Docker", icon: <SiDocker /> },
        { name: "Kubernetes", icon: <SiKubernetes /> },
        { name: "Terraform", icon: <SiTerraform /> },
        { name: "Auto Scaling", icon: <FaCogs /> },
      ],
    },
    {
      title: "Databases",
      icon: <FaDatabase className="text-blue-400 text-xl" />,
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "DynamoDB", icon: <SiAmazondynamodb /> },
        { name: "Redis", icon: <SiRedis /> },
      ],
    },
    {
      title: "DevOps & Testing",
      icon: <FaCogs className="text-blue-400 text-xl" />,
      skills: [
        { name: "Jenkins", icon: <SiJenkins /> },
        { name: "GitHub Actions", icon: <SiGithubactions /> },
        { name: "CI/CD Pipelines", icon: <FaCogs /> },
        { name: "Testing (JUnit, Mockito)", icon: <SiTestinglibrary /> },
        { name: "Git", icon: <SiGit /> },
        { name: "Bitbucket", icon: <SiBitbucket /> },
      ],
    },
    {
      title: "Frontend",
      icon: <SiReact className="text-blue-400 text-xl" />,
      skills: [
        { name: "React", icon: <SiReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Redux", icon: <SiRedux /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      ],
    },
    {
      title: "Machine Learning & AI",
      icon: <SiTensorflow className="text-blue-400 text-xl" />,
      skills: [
        { name: "Scikit-learn", icon: <SiScikitlearn /> },
        { name: "TensorFlow", icon: <SiTensorflow /> },
        { name: "PyTorch", icon: <SiPytorch /> },
        { name: "Feature Engineering", icon: <FaCogs /> },
      ],
    },
  ];

  return (
    <section className="py-24 px-8 bg-black text-blue-200">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-400 mb-16">
          Technical Skills
        </h2>

        <div className="flex flex-col gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.01 }}
              className="flex flex-col sm:flex-row items-start sm:items-center 
                         gap-6 bg-gradient-to-r from-blue-950/40 to-blue-900/10 
                         border border-blue-800/40 rounded-xl p-6 
                         shadow-md shadow-blue-900/30 hover:shadow-blue-800/50 
                         transition-all duration-300"
            >
              {/* Category Title */}
              <div className="flex items-center gap-3 w-full sm:w-1/4">
                {cat.icon}
                <h3 className="text-xl font-semibold text-blue-300">
                  {cat.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-3 w-full sm:w-3/4">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-3 py-1.5 
                               bg-blue-950/40 border border-blue-800/40 rounded-lg 
                               text-blue-100 text-sm font-medium 
                               hover:bg-blue-900/50 hover:border-blue-600/60 
                               hover:shadow-[0_0_8px_rgba(56,189,248,0.3)]
                               hover:scale-[1.05] transition-transform duration-150"
                  >
                    {skill.icon && (
                      <span className="text-base text-blue-300">
                        {skill.icon}
                      </span>
                    )}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
