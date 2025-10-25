import React from "react";
import {
  SiPython,
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiGnubash,
  SiScikitlearn,
  SiTensorflow,
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
} from "react-icons/si";
import { FaCodeBranch, FaCogs, FaAws } from "react-icons/fa";
import { DiJava } from "react-icons/di";

type Skill = {
  name: string;
  icon?: JSX.Element;
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
        { name: "C++", icon: <SiCplusplus /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "SQL", icon: <FaCodeBranch /> },
        { name: "Bash", icon: <SiGnubash /> },
      ],
    },
    {
      title: "Backend & APIs",
      skills: [
        { name: "Spring Boot", icon: <SiSpringboot /> },
        { name: "Django", icon: <SiDjango /> },
        { name: "Flask", icon: <SiFlask /> },
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "Microservices", icon: <FaCogs /> },
        { name: "Event-Driven Architecture", icon: <SiApachekafka /> },
      ],
    },
    {
      title: "Data & Messaging",
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Redis", icon: <SiRedis /> },
        { name: "DynamoDB", icon: <SiAmazondynamodb /> },
        { name: "Apache Kafka", icon: <SiApachekafka /> },
      ],
    },
    {
      title: "AWS Cloud",
      skills: [
        { name: "Compute: Lambda, ECS, EC2, Batch" },
        { name: "Storage: S3, EFS, Glacier" },
        { name: "Database: RDS, DynamoDB, DocumentDB" },
        { name: "Networking: VPC, Route53, API Gateway" },
        { name: "Security: IAM, KMS, Secrets Manager" },
        { name: "Monitoring: CloudWatch, CloudTrail" },
      ],
    },
    {
      title: "DevOps & Tooling",
      skills: [
        { name: "Docker" },
        { name: "Kubernetes" },
        { name: "Terraform" },
        { name: "CI/CD (Jenkins, GitHub Actions)" },
        { name: "Splunk" },
      ],
    },
    {
      title: "Machine Learning & Data Science",
      skills: [
        {
          name: "Data Cleaning, Feature Engineering, Model Training & Evaluation",
          icon: <SiScikitlearn />,
        },
        {
          name: "Deep Learning (TensorFlow, PyTorch)",
          icon: <SiTensorflow />,
        },
        {
          name: "Deployment (SageMaker, Lambda, Docker, REST APIs)",
          icon: <FaAws />,
        },
      ],
    },
    {
      title: "Practices & Skills",
      skills: [
        { name: "Unit Testing", icon: <SiTestinglibrary /> },
        { name: "Integration Testing", icon: <SiTestinglibrary /> },
        {
          name: "Performance Testing (JMeter, Blazemeter)",
          icon: <SiTestinglibrary />,
        },
        { name: "Code Reviews", icon: <FaCodeBranch /> },
        { name: "Git / Version Control", icon: <SiGit /> },
        { name: "Agile (Scrum)", icon: <SiJira /> },
        { name: "Problem Solving", icon: <FaCogs /> },
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
