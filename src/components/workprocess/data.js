import {
    FiPenTool,
    FiLayers,
    FiCode,
    FiCheckCircle,
    FiSend,
    FiCpu,
    FiSearch,
    FiLayout,
    FiDroplet,
    FiGrid,
    FiGitBranch,
    FiFolder,
    FiShield,
    FiServer,
    FiTarget,
    FiLink,
    FiEye,
    FiUploadCloud,
    FiActivity,
    FiZap,
} from 'react-icons/fi';
import { SiReact } from 'react-icons/si';

// Root of the mindmap. Everything radiates outward from here.
export const rootNode = {
    id: 'root',
    label: 'Work Process',
    sub: 'How an idea becomes a product',
    icon: FiCpu,
};

// Five phases (ring 1), each expanding into the concepts that define it (ring 2).
export const phases = [
    {
        id: 'design',
        title: 'Design Plan',
        icon: FiPenTool,
        description: 'Research, wireframes, and visual direction.',
        children: [
            { id: 'design-research', label: 'UX Research', icon: FiSearch, description: 'Understanding user needs and business goals before a single pixel is placed.' },
            { id: 'design-wireframe', label: 'Wireframing', icon: FiLayout, description: 'Mapping layout and user flow to validate structure early.' },
            { id: 'design-visual', label: 'Visual Direction', icon: FiDroplet, description: 'Defining color, type, and mood that carries through the whole build.' },
        ],
    },
    {
        id: 'structure',
        title: 'Prioritize Structure',
        icon: FiLayers,
        description: 'Architecture, information flow, and roadmap.',
        children: [
            { id: 'structure-arch', label: 'Code Structure', icon: FiGrid, description: 'Feature-first folders, clear boundaries between UI, logic, and data.' },
            { id: 'structure-hierarchy', label: 'Component Hierarchy', icon: FiGitBranch, description: 'Small, composable, reusable pieces instead of monolithic screens.' },
            { id: 'structure-files', label: 'File Organization', icon: FiFolder, description: 'Consistent naming and colocation so any file is easy to predict.' },
        ],
    },
    {
        id: 'development',
        title: 'Development',
        icon: FiCode,
        description: 'Clean, modular code with modern best practices.',
        children: [
            { id: 'dev-quality', label: 'Code Quality', icon: FiShield, description: 'Linting, reviews, and readable code that stays maintainable at scale.' },
            { id: 'dev-react', label: 'React Style', icon: SiReact, description: 'Functional components, hooks, and declarative, composable UI.' },
            { id: 'dev-backend', label: 'Backend Services', icon: FiServer, description: 'APIs, databases, and secure server-side logic powering the frontend.' },
        ],
    },
    {
        id: 'testing',
        title: 'Testing',
        icon: FiCheckCircle,
        description: 'Rigorous checks so nothing ships broken.',
        children: [
            { id: 'test-unit', label: 'Unit Testing', icon: FiTarget, description: 'Verifying individual functions and components in isolation.' },
            { id: 'test-integration', label: 'Integration Testing', icon: FiLink, description: 'Confirming that connected pieces behave correctly together.' },
            { id: 'test-review', label: 'Code Review', icon: FiEye, description: 'A second pair of eyes on every change before it merges.' },
        ],
    },
    {
        id: 'production',
        title: 'Production',
        icon: FiSend,
        description: 'Ship, monitor, and continuously improve.',
        children: [
            { id: 'prod-deploy', label: 'Deployment', icon: FiUploadCloud, description: 'Automated, repeatable releases to the live environment.' },
            { id: 'prod-monitor', label: 'Monitoring', icon: FiActivity, description: 'Watching real usage to catch issues before users report them.' },
            { id: 'prod-optimize', label: 'Optimization', icon: FiZap, description: 'Iterating on performance and experience after launch.' },
        ],
    },
];
