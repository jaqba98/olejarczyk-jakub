import { AboutMeDomain } from '../model/about-me-domain.model';
import { BaseDomain } from '../model/base-domain.model';

export const aboutMeDomainConst: BaseDomain.Model<AboutMeDomain.Data, AboutMeDomain.Metadata> = {
  data: {
    descriptions: [
      'I am a software engineer with over 5 years of experience, for whom clean, readable, and well-thought-out code is a priority. I follow the principle of "Do not repeat yourself", striving for elegant and efficient solutions. My strong analytical thinking allows me to effectively solve complex technical challenges.',
      'I have hands-on experience in front-end and back-end development, creating scalable web applications using Angular, TypeScript, Node.js, and PostgreSQL. I build reusable components, design monorepo-based architectures, and ensure efficient client-server communication through REST APIs. I also focus on maintaining high code quality using Jest, ESLint, Prettier, and automated CI/CD workflows supported by Docker and GitLab.',
      'I am experienced in system and data integration, designing and managing SQL Server databases and developing automation pipelines in SnapLogic. I integrate various SaaS platforms, enabling seamless data exchange and reliable communication between distributed systems.',
      'I am eager to take on new challenges — both technological and architectural. I continuously aim to improve efficiency, scalability, and maintainability in every project I work on. In my free time, I develop personal projects and enhance my English skills.',
    ],
  },
  metadata: {},
};
