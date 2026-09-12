export const PROFILE = {
  name: 'Jonathan Aslam',
  role: 'Software Developer',
  bio: "Hey! I'm Jonathan, a developer who loves building clean, thoughtful digital experiences. I enjoy working across the full stack — from designing intuitive UIs to architecting solid back-end systems. Always learning, always building.",
  email: 'jonathanaslam@gmail.com',
  github: 'https://github.com/JonathanAslam',
  linkedin: 'https://linkedin.com/in/jonathanaslam',
}

export const SKILLS = [
  { label: 'Languages', items: ['JavaScript', 'Python', 'HTML/CSS', 'SQL'] },
  { label: 'Frameworks', items: ['React', 'Node.js', 'Express', 'Vite'] },
  { label: 'Tools', items: ['Git', 'Figma', 'VS Code', 'Vercel'] },
]

export const EXPERIENCES = [
  {
    id: 1,
    title: 'Software Engineering Intern - Ground Software',
    company: 'Turion Space',
    period: 'May 2026 – Aug. 2026',
    location: 'Irvine, CA',
    bullets: [
      <>Architected and executed end-to-end <strong>migration of production messaging systems</strong> from <strong>Apache Pulsar</strong> to <strong>AWS SNS/SQS</strong>, authoring the Architecture Decision Record (ADR) and leading deployment</>,
      <>Cut infrastructure operating costs by ~<strong>1500x</strong> by replacing stateful multi-node clusters with <strong>serverless AWS infrastructure</strong> (<strong>SNS, SQS, S3, CloudWatch</strong>), maintaining CPU, memory, and message delivery performance</>,
      <>Automated infrastructure provisioning and application delivery across <strong>Kubernetes</strong> clusters using GitLab CI, <strong>Terragrunt</strong>, and <strong>Docker</strong> to support <strong>Go</strong> and <strong>Python</strong> microservices</>,
    ],
  },
  {
    id: 2,
    title: 'Undergraduate Research',
    company: 'California State University, Fullerton',
    period: 'Dec 2025 – May 2026',
    location: 'Fullerton, CA',
    bullets: [
      <>Conducting exploratory <strong>clustering analysis</strong> on <strong>{'>'}3M</strong> anonymized maternal-infant records to identify patterns across maternal race and other demographic factors</>,
      <>Using <strong>unsupervised learning</strong> and <strong>data visualization</strong> to reveal emerging clusters and trends across maternal and infant health variables</>,
    ],
  },
  {
    id: 3,
    title: 'Supplemental Instructor: Computer Science',
    company: 'California State University, Fullerton',
    period: 'Jan 2024 – Jan 2026',
    location: 'Fullerton, CA',
    bullets: [
      <>Led review sessions and prepared study materials to help students better understand challenging lecture topics, helping students raise overall class scores by an average of <strong>15-20%</strong>.</>,
      <>Facilitated optional hands-on coding practice and group activities such as <strong>pair programming</strong>, aligned with homework and exam content to reinforce learning.</>,
    ],
  },
]

export const PROJECTS = [
  {
    id: 1,
    title: 'CoLabCode',
    description: <>Architected a full-stack, real-time collaborative code editor using a <strong>React</strong> frontend and <strong>Node.js</strong> backend, enabling multiple users to edit code simultaneously</>,
    tech: ['Javascript', 'Node', 'React', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/JonathanAslam',
    live: null,
  },
  {
    id: 2,
    title: 'JKKFitness',
    description: <>Built a full-stack health analytics web app <strong>(MERN + Flask)</strong> that analyzes user health metrics (BMI, diabetes, blood pressure) and delivers personalized weight management recommendations using a <strong>scikit-learn Random Forest</strong> classifier</>,
    tech: ['MongoDB', 'Express', 'Node', 'React', 'Flask(python 3)', 'Scikit-Learn'],
    github: 'https://github.com/JonathanAslam',
    live: null,
  },
  {
    id: 3,
    title: 'Merge',
    description: <>Developed a <strong>social networking platform</strong> enabling hackathon participants to form teams and network prior to events through a <strong>Tinder-style matching interface</strong> with swipeable profile cards.</>,
    tech: ['Swift/SwiftUI', 'FirebaseAuth', 'Firestore DB'],
    github: 'https://github.com/JonathanAslam',
    live: null,
  },
  {
    id: 4,
    title: 'Scan & Save',
    description: 'A project description goes here — talk about the impact, the stack, and your role in building it.',
    tech: ['Next.js', 'Tailwind', 'Supabase'],
    github: 'https://github.com/JonathanAslam',
    live: null,
  },
]
