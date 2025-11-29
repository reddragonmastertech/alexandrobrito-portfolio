export const projects = [
    //  Moolax
    {
      title: 'Moolax',
      images: [
        require('../Assets/project_image/moolax.jpg'),
      ],
      description: `MoolaX is a stylish, easy-to-use and adaptive financial tool that is designed specifically for the dynamic lifestyles of modern professionals and entrepreneurs. MoolaX is here to track various income sources, pending payments, and real-time cash flow insights for a new generation of freelancers, part-time workers and service providers.`,
      solution: `Developed a scalable Fintech SaaS dashboard enabling users to track income, expenses, cash flow trends, and client transactions across multiple business types.
                    Integrated Stripe to support seamless payments, subscriptions, refunds, and real-time event notifications—reducing manual payment handling by 40%.
                    Delivered a clean and responsive UI with React/Next.js + Tailwind CSS, providing intuitive navigation for features like Profit Tracking, Expense Monitoring, and Payer Management.
                    Implemented optimized API communication and modular architecture in Node.js, ensuring scalable performance and smooth data reporting for entrepreneurs and small businesses.`,
      technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
      url: 'https://linkbycar.com/',
    },
  // LinkByCar
  {
    title: 'LinkByCar',
    images: [
      require('../Assets/project_image/linkbycar_dashboard.jpg'),
    ],
    description: 'LinkByCar is a SaaS startup that created a tool to collect, process, and aggregate data from vehicles. With the use of AI technology, it can predict the behavior of any vehicle — all to ensure you safely get to your destination.',
    solution: `Implemented the platform using Next.js, leveraging its server-side rendering capabilities to deliver fast, dynamic, and highly responsive interfaces aligned with client requirements.
               Strengthened application reliability by adopting Redux to manage complex data flows, ensuring consistent access to critical vehicle-related information across all modules.
               Built intuitive data-visualization features with Chart.js, enabling clear presentation of operational insights through customized bar, pie, and line charts.
               Optimized overall performance through efficient state handling, structured component architecture, and seamless integration between frontend services.
               Delivered a scalable, maintainable solution by combining modern frameworks and visualization tools to enhance user experience and support future feature expansion.`,
    technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Redux', 'Chart.js', 'TailwindCSS'],
    url: 'https://linkbycar.com/',
  },
  // TutorChase
  {
    title: 'TutorChase',
    images: [
      require('../Assets/project_image/tutorchase.jpg'),
    ],
    description: `TutorChase is a UK-based premium online tutoring platform that connects students with world-class teachers to provide top-tier academic support, particularly for those aiming to apply to elite universities such as Oxford and Harvard.`,
    solution: `Built a high-performance platform using Next.js with server-side rendering and static generation to deliver fast load times, improved SEO, and an enhanced user experience.
               Implemented a fully customizable Sanity CMS, enabling seamless content updates, tutor management, subject/level additions, and dynamic page creation through a flexible admin panel.
               Integrated IPGeolocation.io for accurate location-based UX improvements, Reviews.io for trust-building feedback management, and Nodemailer for reliable multi-purpose email communication.
               Established comprehensive rollback and deployment strategies to manage the site’s complex database-driven functionality, ultimately ensuring a smooth, error-free launch.`,
    technologies: ['Sanity', 'React', 'Next.js', 'Reviews.io', 'Nodemailer', 'ipgeolocation'],
    url: 'https://www.tutorchase.com/',
  },
  // Symbolik Social
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
    technologies: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'C#', 'ASP.NET Core', 'MySQL', 'AWS S3'],
    url: 'https://symbolik.com/',
  },
  // LYS Academy
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
   
    technologies: ['React.js', 'Node.js', 'Express', 'OpenAI/DALL·E API','Firebase', 'RESTful APIs'],
    url: 'https://www.lys.academy/',
  },
  // Optix Volt
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
    technologies: ['Angular', 'TypeScript', 'Express', 'PostgreSQL', 'WebSocket'],
    url: 'https://optixvolt.com/',
  },
];


