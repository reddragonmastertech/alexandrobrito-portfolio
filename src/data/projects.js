export const projects = [
  // project_mythinkingcap
  {
    title: 'MyThinkingCap - AI Learning Tools',
    period: 'April 2016 - May 2016',
    images: [
      require('../Assets/project_mythinkingcap/project1_1.png'),
      require('../Assets/project_mythinkingcap/project1_2.png'),
    ],
    story: `An AI-powered web platform that offers personalized idea generation and brainstorming assistance using advanced language models.
            The client wanted a sleek, user-friendly web app that integrates advanced AI automation to assist in creative thinking and structured content generation.`,
    challenge: `Integrating multiple AI models while maintaining fast response times was a major challenge.Ensuring accurate context retention between user sessions required complex prompt management and state handling.`,
    solution: `I optimized API orchestration using asynchronous processing and implemented a context-aware memory system with dynamic prompt engineering for seamless AI interaction.`,
    tags: ['React', 'Next.js', 'OpenAI API', 'Automation', 'LangChain'],
    url: 'https://mythinkingcap.ai/',
  },
    // project_aiimagegenerator
  {
    title: 'AI Image Generator – Full Stack + AI Integration Project',
    period: 'January 2017 - June 2017',
    images: [
      require('../Assets/project_aiimagegenerator/project2_1.png'),
      require('../Assets/project_aiimagegenerator/project2_2.png'),
      require('../Assets/project_aiimagegenerator/project2_3.png'),

    ],
    story: `A web platform that generates high-quality images from user text prompts using advanced AI models.
            The client wanted an intuitive, fast, and scalable image generation website that connects to AI APIs and handles large user traffic efficiently.`,
    challenge: `Managing heavy API requests without latency issues and ensuring image generation stability under concurrent user load.`,
    solution: `Implemented asynchronous queue processing and intelligent caching, optimizing API throughput and server response time.`,
   
    tags: ['React.js', 'Node.js', 'Express', 'OpenAI/DALL·E API','Firebase', 'RESTful APIs'],
    url: 'https://aiimagegenerator.online/',
  },
    // project_scale360
  {
    title: 'CYFOX - Agentic AI-powered GRC & Security Platform',
    period: 'January 2018 - March 2018',
    images: [
      require('../Assets/project_cyfox/project3_1.jpg'),
      require('../Assets/project_cyfox/project3_2.jpg'),
      require('../Assets/project_cyfox/project3_3.jpg'),


    ],
    story: 'CYFOX is an agentic AI-powered GRC & Security Platform that provides a tailored solution built for real-world compliance and security challenges. This comprehensive cybersecurity suite offers efficient, automated, and future-ready protection for businesses of all sizes.',
    challenge: 'Struggling with scattered communication, missed deadlines, and lack of visibility into project progress.',
    solution: 'Developed a comprehensive platform with real-time updates, advanced analytics, and intuitive task management features.',
    tags: ['Angular', 'TypeScript', 'Express', 'PostgreSQL', 'WebSocket'],
    url: 'https://www.cyfox.com/',
  },
    // project_hautechai
  {
    title: 'Bliss Creek admin panel – Customized Dashboard for FinTech',
    period: 'March 2019 - August 2018',
    images: [
      require('../Assets/project_bliss/project4_1.png'),
      require('../Assets/project_bliss/project4_2.png'),
      require('../Assets/project_bliss/project4_3.png'),
      require('../Assets/project_bliss/project4_4.png'),
      require('../Assets/project_bliss/project4_5.png'),
      require('../Assets/project_bliss/project4_6.png'),

    ],
    story: 'A custom dashboard design that simplified user management and streamlined transaction cycles.',
    challenge: 'E-commerce businesses were spending excessive amounts on professional photography and model shoots, while struggling to showcase products effectively.',
    solution: 'Developed an AI solution that generates realistic model photos from product images, boosting engagement and reducing photography costs significantly.',
    tags: ['React', 'Next.js', 'Firebase', 'Tailwind Css', 'Redux', 'React Hook Form'],
    url: '',
  },
    // project_vexel
  {
    title: 'AirlineSim — realistic online airline management simulation',
    period: 'February 2020 - April 2020',
    images: [
      require('../Assets/project_airlinesim/project5_1.png'),
      require('../Assets/project_airlinesim/project5_2.png'),
      require('../Assets/project_airlinesim/project5_3.png'),
      require('../Assets/project_airlinesim/project5_4.png'),
      require('../Assets/project_airlinesim/project5_5.png'),
      require('../Assets/project_airlinesim/project5_6.png'),
 
    ],
    story: '',
    challenge: ``,
    solution: `I introduced a widget-based dashboard with clear navigation and immersive visuals, making data easy to scan and the experience more realistic.
Also I limited the map to contexts where it adds value — such as the homepage and route planning — and applied a neutral color scheme to reduce visual noise. 
Then I enhanced the UI with visual elements such as maps, aircraft illustrations, and dynamic widgets (e.g. weather, clocks). These “eye-candy” features made the interface more engaging while keeping it informative and functional.`,
    tags: ['React', 'Node', 'Express', 'PostgreSQL', 'WebSocket'],
    url: '',
  },
    // project_opticodds
  {
    title: 'AI Agent for Candidate Pre-Screening',
    period: 'July 2021 - October 2021',
    images: [
      require('../Assets/project_screening/project6_1.jpg'),
      require('../Assets/project_screening/project6_2.jpg'),
      require('../Assets/project_screening/project6_3.jpg'),

    ],
    story: 'A mid-sized recruitment company approached our agency to modernize their hiring workflow. They were overwhelmed by the high volume of job applications and spending excessive recruiter time on manual pre-screening. The client wanted an AI-powered agent to automate first-round candidate filtering while ensuring fairness, compliance, and ATS integration.',
    challenge: ``,
    solution: `Designed and developed an AI-powered pre-screening agent to automate first-round candidate filtering, reducing recruiter workload by 40%.
Built a resume parsing pipeline with OCR for unstructured documents and integrated LLM-based conversational AI for candidate Q&A.
Developed a candidate scoring engine (0–100) based on skills, experience, and certifications to ensure objective evaluations.
Implemented data anonymization pipelines to ensure compliance with privacy regulations and prevent bias.
Delivered a recruiter dashboard for reviewing AI-ranked candidates, screening chat summaries, and overriding AI scores.`,
    tags: ['React.js', 'Tailwind CSS', 'Node.js', 'OpenAI API','PostgreSQL'],
    url: ``,
  },
];


