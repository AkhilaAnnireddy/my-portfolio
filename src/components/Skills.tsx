import React from "react";
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
  SiPostman,
  SiBitbucket,
  SiSplunk,
  SiSpring,
  SiHibernate,
} from "react-icons/si";
import {
  FaDatabase,
  FaCloud,
  FaNetworkWired,
  FaShieldAlt,
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
  skills: Skill[];
};

export default function Skills() {
  const categories: Category[] = [
    {
      title: "Languages",
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
      skills: [
        { name: "Spring Boot", icon: <SiSpringboot /> },
        { name: "Microservices Architecture", icon: <FaLayerGroup /> },
        { name: "Event-Driven Systems", icon: <FaNetworkWired /> },
        { name: "REST APIs", icon: <TbApi /> },
        { name: "Spring Security", icon: <SiSpring /> },
        { name: "Hibernate/JPA", icon: <SiHibernate /> },
        { name: "Django", icon: <SiDjango /> },
        { name: "Flask", icon: <SiFlask /> },
        { name: "Node.js", icon: <SiNodedotjs /> },
      ],
    },
    {
      title: "Distributed Systems",
      skills: [
        { name: "Apache Kafka", icon: <SiApachekafka /> },
        { name: "AWS SQS", icon: <SiAmazon /> },
        { name: "Message Queues", icon: <FaNetworkWired /> },
        { name: "Event Streaming", icon: <FaServer /> },
        { name: "Eventual Consistency", icon: <FaDatabase /> },
        { name: "Distributed Transactions", icon: <FaLayerGroup /> },
      ],
    },
    {
      title: "Cloud & Infrastructure",
      skills: [
        { name: "AWS EC2", icon: <MdComputer /> },
        { name: "AWS S3", icon: <FaCloud /> },
        { name: "AWS Lambda", icon: <SiAmazon /> },
        { name: "AWS ECS", icon: <TbBrandDocker /> },
        { name: "AWS RDS", icon: <FaDatabase /> },
        { name: "AWS SQS", icon: <SiAmazon /> },
        { name: "AWS SES", icon: <SiAmazon /> },
        { name: "AWS Batch", icon: <SiAmazon /> },
        { name: "AWS CloudWatch", icon: <FaChartLine /> },
        { name: "AWS Cognito", icon: <MdSecurity /> },
        { name: "Docker", icon: <SiDocker /> },
        { name: "Kubernetes", icon: <SiKubernetes /> },
        { name: "Terraform", icon: <SiTerraform /> },
        { name: "Auto-scaling", icon: <FaCogs /> },
        { name: "Load Balancing", icon: <FaNetworkWired /> },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "DynamoDB", icon: <SiAmazondynamodb /> },
        { name: "DocumentDB", icon: <FaDatabase /> },
        { name: "Redis", icon: <SiRedis /> },
        { name: "Query Optimization", icon: <FaChartLine /> },
      ],
    },
    {
      title: "DevOps & Testing",
      skills: [
        { name: "Jenkins", icon: <SiJenkins /> },
        { name: "GitHub Actions", icon: <SiGithubactions /> },
        { name: "CI/CD Pipelines", icon: <FaCogs /> },
        { name: "JUnit", icon: <SiTestinglibrary /> },
        { name: "Mockito", icon: <SiTestinglibrary /> },
        { name: "Cucumber", icon: <SiTestinglibrary /> },
        { name: "Integration Testing", icon: <SiTestinglibrary /> },
        { name: "Performance Testing", icon: <FaChartLine /> },
        { name: "Git", icon: <SiGit /> },
        { name: "Bitbucket", icon: <SiBitbucket /> },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <SiReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Redux", icon: <SiRedux /> },
        { name: "HTML5", icon: <SiHtml5 /> },
        { name: "CSS3", icon: <SiCss3 /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      ],
    },
    {
      title: "Machine Learning & AI",
      skills: [
        { name: "Scikit-learn", icon: <SiScikitlearn /> },
        { name: "TensorFlow", icon: <SiTensorflow /> },
        { name: "PyTorch", icon: <SiPytorch /> },
        { name: "Model Training & Evaluation", icon: <FaChartLine /> },
        { name: "Feature Engineering", icon: <FaCogs /> },
      ],
    },
    {
      title: "Practices & Methodologies",
      skills: [
        { name: "Agile (Scrum)", icon: <SiJira /> },
        { name: "Code Reviews", icon: <FaCode /> },
        { name: "System Design", icon: <FaLayerGroup /> },
        { name: "Problem-Solving", icon: <FaCogs /> },
        { name: "Cross-Functional Collaboration", icon: <FaNetworkWired /> },
      ],
    },
  ];

  return (
    <section className="py-24 px-8 bg-black text-blue-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-400 mb-12">
          Technical Skills
        </h2>

        {categories.map((cat) => (
          <div key={cat.title} className="mb-10">
            <h3 className="text-2xl font-semibold text-blue-300 mb-4 text-center">
              {cat.title}
            </h3>

            <div className="flex flex-wrap justify-center gap-3">
              {cat.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 px-4 py-2 
                             bg-blue-900/30 border border-blue-800/40 rounded-lg 
                             text-blue-100 text-sm font-medium 
                             hover:bg-blue-800/40 hover:border-blue-600/50
                             hover:shadow-[0_0_10px_rgba(56,189,248,0.3)]
                             hover:scale-[1.03] transition-transform duration-150"
                >
                  {skill.icon && (
                    <span className="text-lg text-blue-300">{skill.icon}</span>
                  )}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
