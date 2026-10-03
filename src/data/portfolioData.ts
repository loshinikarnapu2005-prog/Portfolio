import { SkillItem, ProjectItem, ExperienceItem, EducationItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Karnapu Loshini',
  titles: [
    'Software Testing & QA Automation Engineer',
    'Playwright & Python Automation Specialist',
    'B.Tech in Artificial Intelligence & Data Science'
  ],
  email: 'loshinikarnapu@gmail.com',
  phone: '+91 7989443471',
  phoneDisplay: '7989443471',
  location: 'Vizianagaram, Andhra Pradesh, India',
  summary:
    'B.Tech graduate specializing in Computer Science and Engineering (Artificial Intelligence & Data Science) with hands-on experience in Python and Playwright automation. Completed a 2-month internship in Playwright automation and developed a web automation testing project using Python, Playwright, and Pytest. Seeking an entry-level Software Testing / QA / Automation role to apply technical skills and grow in the IT industry.',
  bio: {
    whoIAm:
      'I am a pre-final year engineering student specializing in Computer Science and Engineering (Artificial Intelligence & Data Science) at Satya Institute of Technology and Management, Vizianagaram. I am passionate about ensuring software reliability through robust automated test engineering.',
    technicalInterests:
      'Web Automation, End-to-End Functional Testing, Browser Automation with Playwright, Test Scenario Formulation with Pytest, and Intelligent Test Coverage.',
    currentlyLearning:
      'Advanced Playwright locators & page object models, resilient assertion design, CI/CD automated test pipelines, and enterprise test reporting.',
    careerGoal:
      'Seeking an entry-level Software Testing / QA / Automation role where I can apply my automation testing skills, expand functional test suites, and contribute to delivering high-quality web applications in the IT industry.'
  },
  socials: {
    github: 'https://github.com/loshinikarnapu',
    linkedin: 'https://linkedin.com/in/loshinikarnapu',
    email: 'mailto:loshinikarnapu@gmail.com'
  }
};

export const METRICS = [
  {
    label: 'Secondary School GPA',
    value: 10.0,
    prefix: '',
    suffix: ' / 10',
    description: 'Perfect 10.0 grade point average'
  },
  {
    label: 'Intermediate Board GPA',
    value: 8.6,
    prefix: '',
    suffix: ' / 10',
    description: 'Mathematics, Physics & Chemistry'
  },
  {
    label: 'QA Automation Internship',
    value: 2,
    prefix: '',
    suffix: ' Months',
    description: 'Intensive Playwright automation at Gvpathshala'
  },
  {
    label: 'E2E Critical Workflows',
    value: 5,
    prefix: '',
    suffix: '+ Suites',
    description: 'Login, forms, checkout & browser flows'
  }
];

export const SKILLS: SkillItem[] = [
  // Web Automation & Testing
  {
    name: 'Playwright',
    category: 'automation',
    level: 90,
    description: 'Browser automation, multi-tab execution, dynamic locators, and resilient assertions.',
    appliedIn: 'Developed E2E web automation test project and completed 2-month internship.'
  },
  {
    name: 'Pytest',
    category: 'automation',
    level: 88,
    description: 'Test framework runner, fixtures, assertions, parameterized test cases, and test reporting.',
    appliedIn: 'Used for executing test suites and analyzing automated test results.'
  },
  {
    name: 'Web Automation',
    category: 'automation',
    level: 88,
    description: 'Simulating realistic end-user browser workflows, form submissions, and checkout paths.',
    appliedIn: 'Automated end-to-end user workflows for web applications.'
  },
  {
    name: 'Functional Testing',
    category: 'automation',
    level: 85,
    description: 'Validating application behavior, UI states, button interactions, and navigation integrity.',
    appliedIn: 'Validated application behavior and state transitions.'
  },
  {
    name: 'Locators & Assertions',
    category: 'automation',
    level: 92,
    description: 'Accurate element targeting via text, roles, CSS/XPath, and deterministic state verifications.',
    appliedIn: 'Used Playwright locators and assertions to validate application behavior.'
  },

  // Programming
  {
    name: 'Python',
    category: 'programming',
    level: 85,
    description: 'Core scripting, automation logic, modular test writing, object-oriented concepts.',
    appliedIn: 'Primary language for developing Playwright automation test suites.'
  },
  {
    name: 'Java',
    category: 'programming',
    level: 75,
    description: 'Object-oriented programming fundamentals, data structures, and foundational algorithms.',
    appliedIn: 'Academic coursework and programming foundation.'
  },

  // Tools
  {
    name: 'Visual Studio Code',
    category: 'tools',
    level: 90,
    description: 'Primary IDE for Python scripting, Playwright test debugger, extensions, and workspace management.',
    appliedIn: 'Daily development environment for coding and running automated tests.'
  },
  {
    name: 'Git & GitHub',
    category: 'tools',
    level: 80,
    description: 'Version control, repository management, tracking test script revisions and code collaboration.',
    appliedIn: 'Managing test suite code repositories.'
  },

  // Core Competencies
  {
    name: 'Communication',
    category: 'competencies',
    level: 92,
    description: 'Clear documentation of test scenarios, bug reporting, and active team discussions.',
    appliedIn: 'Collaborating on test requirements and presenting results.'
  },
  {
    name: 'Teamwork',
    category: 'competencies',
    level: 90,
    description: 'Collaborative problem solving, cross-functional alignment, and peer review feedback.',
    appliedIn: 'Team coordination during automation internship.'
  },
  {
    name: 'Adaptability',
    category: 'competencies',
    level: 90,
    description: 'Fast learner of new testing frameworks, toolchains, APIs, and project workflows.',
    appliedIn: 'Quickly mastered Playwright and Pytest for real-world projects.'
  },
  {
    name: 'Leadership',
    category: 'competencies',
    level: 85,
    description: 'Taking initiative in test scenario formulation, quality advocacy, and project execution.',
    appliedIn: 'Led end-to-end design of project test workflows.'
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'web-automation-testing',
    title: 'Web Automation Testing Project',
    subtitle: 'End-to-End Browser Automation Suite with Playwright & Python',
    category: 'QA & Test Automation',
    period: '2026',
    description:
      'An end-to-end automated testing suite engineered using Python, Playwright, and Pytest. Designed to systematically validate critical web application workflows including authentication, dynamic navigation, complex user forms, product selection, and multi-step checkout sequences with resilient assertions.',
    image: '/src/assets/images/playwright_project_1791001752911.jpg',
    technologies: ['Python', 'Playwright', 'Pytest', 'VS Code'],
    keyFeatures: [
      'Automated end-to-end web application workflows using Playwright for headless and headed browser runs.',
      'Created test scenarios covering login, navigation, forms, product selection, and checkout workflows.',
      'Used Playwright locators, assertions, and browser automation features for rigorous functional testing.',
      'Executed automated test cases using Pytest with structured fixtures, parameterized runs, and detailed test result analysis.'
    ],
    testScenarios: [
      {
        name: 'Authentication & Form Validation',
        description: 'Verifies login credentials input, CSRF tokens, button states, and post-auth redirect verification.',
        status: 'pass',
        duration: '240ms'
      },
      {
        name: 'Interactive Navigation & Page Routing',
        description: 'Validates URL route transitions, breadcrumbs, dynamic element presence, and status responses.',
        status: 'pass',
        duration: '180ms'
      },
      {
        name: 'Form Inputs & Edge Case Processing',
        description: 'Simulates user keystrokes, drop-down selection, input constraints, and real-time field error handling.',
        status: 'pass',
        duration: '310ms'
      },
      {
        name: 'Product Selection & Cart Operations',
        description: 'Automates product filtering, item selection, quantity adjustment, and cart persistence verification.',
        status: 'pass',
        duration: '290ms'
      },
      {
        name: 'Checkout Workflow & Final Assertions',
        description: 'Fills billing details, validates order summary calculations, and asserts final confirmation state.',
        status: 'pass',
        duration: '400ms'
      }
    ],
    githubUrl: 'https://github.com/loshinikarnapu/web-automation-testing',
    demoUrl: '#demo-simulator'
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'gvpathshala-internship',
    role: 'Automation Intern',
    company: 'Gvpathshala',
    period: '2026 - 2026',
    duration: '2 Months Intensive',
    location: 'Remote / Hybrid',
    type: 'Internship',
    description:
      'Completed a focused 2-month internship specializing in Playwright automation and functional web testing.',
    bullets: [
      'Developed and executed automated test cases for web applications using Playwright.',
      'Automated web workflows including login, navigation, forms, and user interactions.',
      'Used Playwright locators and assertions to identify elements and validate application behavior.',
      'Executed automation tests using Python and Pytest with thorough defect and result logging.',
      'Gained hands-on practical experience in functional testing and cross-browser automation.'
    ],
    technologies: ['Python', 'Playwright', 'Pytest', 'Visual Studio Code']
  }
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    id: 'btech-aids',
    degree: 'Bachelor of Technology (Artificial Intelligence & Data Science)',
    institution: 'Satya Institute of Technology and Management',
    period: '2023 - 2027',
    location: 'Vizianagaram, Andhra Pradesh',
    gpa: '6.99',
    maxGpa: '10.0',
    description:
      'Comprehensive curriculum encompassing Artificial Intelligence, Data Science, Software Engineering Principles, Object-Oriented Programming, and Automated Software Verification.',
    highlights: [
      'Specialized in AI & Data Science coursework with strong computational foundation',
      'Hands-on practical labs in Python, Java, Data Structures, and Software Development',
      'Developed real-world automation testing projects with industry-standard tooling'
    ]
  },
  {
    id: 'intermediate-mpc',
    degree: 'Board of Intermediate (MPC - Maths, Physics, Chemistry)',
    institution: 'Srinivasa Junior College',
    period: '2021 - 2023',
    location: 'Vizianagaram, Andhra Pradesh',
    gpa: '8.6',
    maxGpa: '10.0',
    description:
      'Rigorous secondary education focused on advanced mathematics, analytical reasoning, physics, and chemistry.',
    highlights: [
      'Achieved a strong 8.6 / 10 GPA across challenging science & math disciplines',
      'Developed sharp mathematical problem-solving skills foundational to algorithmic thinking'
    ]
  },
  {
    id: 'secondary-school',
    degree: 'Board of Secondary Education',
    institution: 'New Central School',
    period: '2020 - 2021',
    location: 'Vizianagaram, Andhra Pradesh',
    gpa: '10.0',
    maxGpa: '10.0',
    description:
      'High school academic foundation completed with highest academic honors and distinction.',
    highlights: [
      'Awarded a perfect 10.0 / 10.0 cumulative Grade Point Average (GPA)',
      'Recognized for exceptional academic consistency, discipline, and school leadership'
    ]
  }
];

export const CODE_SNIPPET_SAMPLE = `import pytest
from playwright.sync_api import Page, expect

def test_login_and_checkout_workflow(page: Page):
    """
    Automated E2E Test Suite:
    Validates authentication, navigation, product selection, and checkout.
    """
    # 1. Navigate to target web application
    page.goto("https://application.example.com/login")
    expect(page).to_have_title("Portal - Secure Login")

    # 2. Complete login credentials and submit
    page.locator("#username").fill("standard_user")
    page.locator("#password").fill("secure_pass_2026")
    page.locator("button[type='submit']").click()

    # 3. Assert successful dashboard redirection
    expect(page.locator(".dashboard-header")).to_be_visible()
    expect(page).to_have_url("/dashboard")

    # 4. Navigate to catalog and select target item
    page.locator("[data-testid='catalog-link']").click()
    page.locator(".product-card:first-child .add-to-cart-btn").click()
    
    # Assert cart count increments
    cart_badge = page.locator(".cart-badge")
    expect(cart_badge).to_have_text("1")

    # 5. Execute checkout workflow
    page.locator(".cart-btn").click()
    page.locator("#checkout-btn").click()
    
    page.locator("#customer-name").fill("Karnapu Loshini")
    page.locator("#customer-email").fill("loshinikarnapu@gmail.com")
    page.locator("button#submit-order").click()

    # 6. Final verification assertion
    success_banner = page.locator(".order-confirmation-message")
    expect(success_banner).to_contain_text("Order Completed Successfully")
    print("✓ All Playwright locators and assertions passed successfully!")
`;
