import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { techIcons } from './tech-icons';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Helper function to map skill names to tech-icons keys
// Following the same order as tech-icons.js
export function getIcon(name) {
  const iconMap = {
    // Programming languages
    'HTML5': techIcons.html,
    'CSS3': techIcons.css,
    'JavaScript': techIcons.javascript,
    'TypeScript': techIcons.typescript,
    'Python': techIcons.python,
    'PHP': techIcons.php,
    // Frontend technologies
    'React.js': techIcons.react,
    'Next.js': techIcons.nextjs,
    'Vue.js': techIcons.vue,
    'Nuxt.js': techIcons.nuxtjs,
    'Angular': techIcons.angular,
    'Bootstrap': techIcons.bootstrap,
    'TailwindCSS': techIcons.tailwind,
    'Sass': techIcons.sass,
    'Material UI': techIcons.materialui,
    'Styled Components': techIcons.styledcomponents,
    'Three.js': techIcons.threejs,
    // Mobile development
    'React Native': techIcons.reactnative,
    'Flutter': techIcons.flutter,
    'Expo': techIcons.expo,
    'Swift': techIcons.swift,
    'Kotlin': techIcons.kotlin,
    // Backend technologies
    'Node.js': techIcons.node,
    'Express': techIcons.express,
    'Nest.js': techIcons.nestjs,
    'Django': techIcons.django,
    'Flask': techIcons.flask,
    'FastAPI': techIcons.fastapi,
    'Laravel': techIcons.laravel,
    'Redis': techIcons.redis,
    'Ruby on Rails': techIcons.rails,
    'Firebase': techIcons.firebase,
    'Supabase': techIcons.supabase,
    // Database
    'MongoDB': techIcons.mongodb,
    'PostgreSQL': techIcons.postgresql,
    'MySQL': techIcons.mysql,
    // API
    'REST API': techIcons.restapi,
    'GraphQL': techIcons.graphql,
    'WebSocket': techIcons.websocket,
    'Event-driven': techIcons.eventdriven,
    // DevOps & Cloud Technologies
    'DevOps': techIcons.devops,
    'Cloud': techIcons.cloud,
    'Cloud Native': techIcons.cloudnative,
    'CI/CD': techIcons.cicd,
    'Git': techIcons.git,
    'GitHub': techIcons.github,
    'GitLab': techIcons.gitlab,
    'Bitbucket': techIcons.bitbucket,
    'Jira': techIcons.jira,
    'Jenkins': techIcons.jenkins,
    'Azure DevOps': techIcons.azuredevops,
    'AWS': techIcons.aws,
    'Docker': techIcons.docker,
    'Kubernetes': techIcons.kubernetes,
    'Terraform': techIcons.terraform,
    'Netlify': techIcons.netlify,
    'Vercel': techIcons.vercel,
    'Postman': techIcons.postman,
    // AI
    'AI': techIcons.ai,
    'Machine Learning': techIcons.machinelearning,
    'LangChain': techIcons.langchain,
    'Natural Language Processing': techIcons.naturallanguageprocessing,
    'ChatGPT': techIcons.chatgpt,
    'Claude': techIcons.claude,
    'GPT-5': techIcons.gpt5,
    'Gemini': techIcons.gemini,
    'Microsoft 365': techIcons.microsoft365,
    'Copilot': techIcons.copilot,
    'OpenAI': techIcons.openai,
    'Google Cloud': techIcons.googlecloud,
    'Azure': techIcons.azure,
    'Tensorflow': techIcons.tensorflow,
    'Scikit-learn': techIcons.scikitlearn,
    'Pandas': techIcons.pandas,
    'NumPy': techIcons.numpy,
    // Automation
    'Automation': techIcons.automation,
    'n8n': techIcons.n8n,
    'Make': techIcons.make,
    'Zapier': techIcons.zapier,
    'Chatbot': techIcons.chatbot,
    'AI Agent': techIcons.aiagent,
    // IDE
    'VS Code': techIcons.vscode,
    'IntelliJ': techIcons.intellij,
    'SourceTree': techIcons.sourcetree,
    // CMS
    'WordPress': techIcons.wordpress,
    'Shopify': techIcons.shopify,
    'WooCommerce': techIcons.woocommerce,
  };
  return iconMap[name] || '';
}


