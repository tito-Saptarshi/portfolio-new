  import { Github, Facebook, Twitter, Linkedin, Mail, Code, Palette,  Zap } from "lucide-react"
  
  export const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      image: "/placeholder.svg?height=300&width=400",
      skills: ["React", "Node.js", "MongoDB", "Stripe"],
      type: "For Sale",
      link: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates and team collaboration features.",
      image: "/placeholder.svg?height=300&width=400",
      skills: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
      type: "For Display",
      link: "#",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather dashboard with location-based forecasts and interactive charts.",
      image: "/placeholder.svg?height=300&width=400",
      skills: ["Vue.js", "Chart.js", "API Integration", "CSS3"],
      type: "For Display",
      link: "#",
    },
  ]

  export const socialLinks = [
    { name: "GitHub", icon: Github, url: "https://github.com" },
    { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com" },
    { name: "Twitter", icon: Twitter, url: "https://twitter.com" },
    { name: "Facebook", icon: Facebook, url: "https://facebook.com" },
    { name: "Email", icon: Mail, url: "mailto:your.email@example.com" },
  ]

  export const skills = [
    { name: "Frontend Development", icon: Code, description: "React, Next.js, Vue.js" },
    { name: "UI/UX Design", icon: Palette, description: "Figma, Adobe XD, Sketch" },
    { name: "Performance", icon: Zap, description: "Optimization, SEO, Analytics" },
  ]


  export const projectsShowcase = [
 {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
    fullDescription:
      "This comprehensive e-commerce platform represents the pinnacle of modern web development, combining cutting-edge technologies with user-centric design principles. Built from the ground up using React and Node.js, this solution provides a seamless shopping experience for customers while offering powerful management tools for administrators.\n\nThe platform features a robust product catalog system with advanced filtering and search capabilities, allowing customers to easily find what they're looking for. The shopping cart functionality includes real-time inventory checking, automatic tax calculations, and multiple shipping options. Payment processing is handled through Stripe integration, supporting credit cards, digital wallets, and buy-now-pay-later options.\n\nThe admin dashboard provides comprehensive analytics, inventory management, order processing, and customer relationship management tools. Real-time notifications keep administrators informed of new orders, low stock alerts, and system updates. The platform also includes advanced SEO optimization, mobile responsiveness, and performance optimization techniques to ensure fast loading times and excellent search engine rankings.\n\nSecurity features include encrypted data transmission, secure payment processing, user authentication with JWT tokens, and protection against common web vulnerabilities. The system is designed to scale horizontally, supporting high traffic volumes and large product catalogs without performance degradation.",
    image: "/placeholder.svg?height=300&width=400",
    skills: ["React", "Node.js", "MongoDB", "Stripe"],
    type: "For Sale",
    price: "$2,500",
    category: "Web Development",
    likes: 142,
    views: 2847,
  },
  {
    id: 2,
    title: "Mobile Fitness App",
    description: "Cross-platform fitness tracking app with workout plans, progress tracking, and social features.",
    fullDescription:
      "The Mobile Fitness App is a cutting-edge solution designed to revolutionize the way users approach their health and fitness goals. Built using React Native, this cross-platform application offers a seamless experience on both iOS and Android devices, providing users with a comprehensive suite of tools to track their workouts, monitor their progress, and connect with a supportive community.\n\nThe app features a wide range of workout plans tailored to different fitness levels and goals, from beginner-friendly routines to advanced training programs. Users can track their workouts in real-time, recording metrics such as distance, time, calories burned, and heart rate. The app also integrates with wearable devices, allowing users to sync their data and gain a more accurate picture of their fitness activities.\n\nProgress tracking is a key component of the app, with detailed charts and graphs that visualize users' achievements over time. Users can set goals, track their progress towards those goals, and receive personalized recommendations based on their performance. The app also includes social features, allowing users to connect with friends, share their workouts, and participate in challenges.\n\nBuilt on Firebase, the app offers secure user authentication, real-time data synchronization, and scalable cloud storage. Redux is used for state management, ensuring a consistent and predictable user experience. TypeScript provides type safety and improves code maintainability. The app is designed to be highly customizable, allowing users to personalize their experience and tailor the app to their individual needs.",
    image: "/placeholder.svg?height=300&width=400",
    skills: ["React Native", "Firebase", "Redux", "TypeScript"],
    type: "Showcase",
    category: "Mobile Development",
    likes: 89,
    views: 1523,
  },
  {
    id: 3,
    title: "AI Dashboard Analytics",
    description: "Advanced analytics dashboard with machine learning insights and real-time data visualization.",
    fullDescription:
      "The AI Dashboard Analytics platform is a sophisticated solution designed to empower businesses with actionable insights derived from machine learning algorithms and real-time data visualization. Built using Python, TensorFlow, and D3.js, this dashboard provides a comprehensive overview of key performance indicators (KPIs), trends, and anomalies, enabling data-driven decision-making across the organization.\n\nThe platform features a wide range of data connectors, allowing users to seamlessly integrate data from various sources, including databases, APIs, and cloud storage. The data is then processed using machine learning algorithms to identify patterns, predict future outcomes, and generate personalized recommendations.\n\nThe dashboard provides a user-friendly interface for exploring the data, with interactive charts, graphs, and tables that allow users to drill down into the details and uncover hidden insights. Real-time data visualization ensures that users are always up-to-date with the latest trends and developments.\n\nThe platform also includes advanced features such as anomaly detection, predictive modeling, and natural language processing. Anomaly detection algorithms identify unusual patterns in the data, alerting users to potential problems or opportunities. Predictive modeling algorithms forecast future outcomes based on historical data, enabling proactive decision-making. Natural language processing algorithms analyze text data, extracting key insights and sentiment from customer feedback, social media posts, and other sources.\n\nBuilt on PostgreSQL, the platform offers scalable data storage and efficient query processing. The system is designed to be highly customizable, allowing users to tailor the dashboard to their specific needs and requirements.",
    image: "/placeholder.svg?height=300&width=400",
    skills: ["Python", "TensorFlow", "D3.js", "PostgreSQL"],
    type: "For Sale",
    price: "$3,200",
    category: "AI/ML",
    likes: 203,
    views: 3621,
  },
  {
    id: 4,
    title: "Blockchain Wallet",
    description: "Secure cryptocurrency wallet with multi-chain support and DeFi integration capabilities.",
    fullDescription:
      "The Blockchain Wallet is a secure and versatile cryptocurrency wallet designed to provide users with seamless access to the world of decentralized finance (DeFi). Built using Solidity, Web3.js, React, and Ethereum, this wallet offers multi-chain support, allowing users to manage their assets across multiple blockchain networks.\n\nThe wallet features a user-friendly interface for sending, receiving, and storing cryptocurrencies. Users can easily add and manage multiple accounts, track their transaction history, and monitor their portfolio performance. The wallet also supports hardware wallets, providing an extra layer of security for users who want to store their assets offline.\n\nDeFi integration is a key component of the wallet, with built-in support for popular DeFi protocols such as decentralized exchanges (DEXs), lending platforms, and yield farming opportunities. Users can easily access these protocols directly from the wallet, without having to leave the application.\n\nSecurity is a top priority, with advanced encryption techniques and multi-factor authentication to protect users' assets. The wallet also includes features such as transaction signing and address whitelisting to prevent unauthorized transactions.\n\nThe wallet is designed to be highly customizable, allowing users to tailor the wallet to their specific needs and preferences. Users can choose from a variety of themes, customize their transaction fees, and add custom tokens to their portfolio.\n\nBuilt on Ethereum, the wallet offers seamless integration with the Ethereum ecosystem, including support for ERC-20 tokens, NFTs, and smart contracts. The wallet is designed to be scalable and secure, ensuring that users can safely manage their assets in the ever-evolving world of blockchain technology.",
    image: "/placeholder.svg?height=300&width=400",
    skills: ["Solidity", "Web3.js", "React", "Ethereum"],
    type: "Showcase",
    category: "Blockchain",
    likes: 156,
    views: 2134,
  },
  {
    id: 5,
    title: "Gaming Platform",
    description: "Multiplayer gaming platform with real-time chat, tournaments, and leaderboard systems.",
    fullDescription:
      "The Gaming Platform is a dynamic and engaging multiplayer gaming environment designed to provide players with a seamless and immersive gaming experience. Built using Unity, C#, Socket.io, and Redis, this platform offers real-time chat, tournaments, and leaderboard systems, fostering a competitive and social gaming community.\n\nThe platform features a wide range of games, from classic arcade games to modern multiplayer titles. Players can easily browse the game library, join tournaments, and compete against other players from around the world.\n\nReal-time chat is a key component of the platform, allowing players to communicate with each other during gameplay. The chat system supports text and voice communication, enabling players to strategize, coordinate, and socialize with their teammates.\n\nTournaments are a regular occurrence on the platform, providing players with the opportunity to compete for prizes and recognition. The tournament system supports various game modes and formats, ensuring that there is always a tournament to suit every player's skill level and preferences.\n\nLeaderboard systems track players' performance and rank them against other players. The leaderboards are updated in real-time, providing players with instant feedback on their progress and achievements.\n\nBuilt on Redis, the platform offers scalable data storage and efficient data retrieval. The system is designed to handle high traffic volumes and large numbers of concurrent players without performance degradation.\n\nThe platform is designed to be highly customizable, allowing game developers to easily integrate their games into the platform and take advantage of its features. The platform also includes a robust set of APIs, allowing developers to create custom applications and integrations.",
    image: "/placeholder.svg?height=300&width=400",
    skills: ["Unity", "C#", "Socket.io", "Redis"],
    type: "For Sale",
    price: "$4,000",
    category: "Game Development",
    likes: 278,
    views: 4892,
  },
  {
    id: 6,
    title: "DevOps Automation Tool",
    description: "CI/CD pipeline automation tool with Docker containerization and cloud deployment features.",
    fullDescription:
      "The DevOps Automation Tool is a comprehensive solution designed to streamline and automate the software development lifecycle, from code integration to deployment. Built using Docker, Kubernetes, AWS, and Jenkins, this tool provides a robust CI/CD pipeline with containerization and cloud deployment features, enabling teams to deliver software faster and more reliably.\n\nThe tool features a user-friendly interface for configuring and managing CI/CD pipelines. Users can easily define the steps in their pipeline, from code compilation and testing to containerization and deployment.\n\nDocker containerization ensures that applications are packaged in a consistent and portable manner, making it easy to deploy them to any environment. Kubernetes provides orchestration and management for Docker containers, ensuring that applications are always running and available.\n\nAWS cloud deployment allows users to deploy their applications to the cloud with ease. The tool supports various AWS services, including EC2, S3, and RDS, providing a scalable and reliable infrastructure for running applications.\n\nJenkins provides automation and orchestration for the CI/CD pipeline. The tool integrates seamlessly with Jenkins, allowing users to trigger builds, run tests, and deploy applications automatically.\n\nThe tool also includes advanced features such as automated testing, code analysis, and security scanning. Automated testing ensures that code is thoroughly tested before it is deployed to production. Code analysis identifies potential bugs and vulnerabilities in the code. Security scanning detects security threats and vulnerabilities in the application.\n\nThe tool is designed to be highly customizable, allowing users to tailor the CI/CD pipeline to their specific needs and requirements. The tool also includes a robust set of APIs, allowing developers to create custom integrations and extensions.",
    image: "/placeholder.svg?height=300&width=400",
    skills: ["Docker", "Kubernetes", "AWS", "Jenkins"],
    type: "Showcase",
    category: "DevOps",
    likes: 94,
    views: 1687,
  },
]


interface ProjectShowcaseProps {
  onViewProject: (projectId: number) => void
}
