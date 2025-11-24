export const projects = [
  {
    title: 'Symbolik Social',
    images: [
      require('../Assets/project_image/symbolik-dashboard.jpg'),
    ],
    description: `Symbolik Social is an online community platform integrated within the Symbolik financial analytics application, designed to facilitate communication, education, and collaboration among market professionals and enthusiasts.`,
    solution: `Built a modular social platform using Next.js, React, and TypeScript with Tailwind/Radix UI for a modern UX, and developed high-performance C# ASP.NET Core APIs with Entity Framework Core and MySQL to deliver scalable, efficient data-driven functionality.
               Implemented real-time capabilities using WebSockets and RabbitMQ for instant updates, strengthened authentication with Auth0/IdentityServer, and maintained system reliability through Serilog logging, Grafana (Loki) monitoring, and comprehensive HealthChecks.
               Integrated MagicBell for real-time notifications and advanced charting tools for deep financial analysis, while API-driven data syncing kept watchlists, posts, and messaging continuously up to date.
               Implemented scalable infrastructure with Hangfire, Scrutor, Swagger, comprehensive automated testing (xUnit, AutoFixture, in-memory DB), and secure AWS S3 storage—ensuring a reliable, high-performance platform for seamless user collaboration.`,
    skills: ['React', 'Next.js', 'OpenAI API', 'Automation', 'LangChain'],
    url: 'https://symbolik.com/',
  },
  {
    title: 'LYS Academy',
    images: [
      require('../Assets/project_image/LYS academy_dashboard.jpg'),
    ],
    description: `LYS Academy is an EdTech startup that implements educational courses through WhatsApp for enterprises' workforce.`,
    solution: `Designed a flexible user flow for creating, managing, and delivering course content across multiple message types.
               Developed the backend for the admin panel using Python and Django, enabling efficient course management and automated messaging workflows.
               Built an intuitive tutor-facing web platform—styled after WhatsApp Web—to simplify sending, tracking, and managing conversations with students.
               Implemented the frontend using React and integrated Twilio APIs to reliably send messages through WhatsApp.
               Applied best-practice Twilio and WhatsApp compliance techniques, including automated permission requests and the 24-hour free messaging window.
               Created a bot workflow to request student consent and ensure message delivery stays within WhatsApp’s anti-spam policies.`,
   
    skills: ['React.js', 'Node.js', 'Express', 'OpenAI/DALL·E API','Firebase', 'RESTful APIs'],
    url: 'https://www.lys.academy/',
  },
  {
    title: 'Optix Volt',
    images: [
      require('../Assets/project_image/optixvolt_dashboard.png'),
    ],
    description: 'A scalable investment platform built with modern backend architecture, automated trading logic, and real-time portfolio analytics.',
    solution: `Architected backend systems using Python, Node.js, and Django/FastAPI to power advanced technical analysis pipelines, automated trading workflows, and high-interest investment strategies.
               Designed microservice-based components deployed on AWS (Lambda, EC2, S3) and containerized with Docker, ensuring high availability and scalable financial operations.
               Implemented diversified asset-management logic supported by PostgreSQL, MongoDB, and optimized data models for cryptocurrencies, stocks, commodities, and real-estate investments.
               Built risk-management modules monitoring market conditions, volatility, and trading volume in real time, enabling intelligent strategy adjustments and stable performance.
               Enhanced platform reliability and transparency through efficient algorithms, secure API integrations, and compliance-ready execution flows aligned with financial best practices.`,
    skills: ['Angular', 'TypeScript', 'Express', 'PostgreSQL', 'WebSocket'],
    url: 'https://optixvolt.com/',
  },
];


