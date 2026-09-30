import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  ExternalLink, 
  X, 
  TrendingUp, 
  Users, 
  ShieldCheck, 
  Sparkles, 
  DollarSign, 
  Clock, 
  Layers, 
  CreditCard, 
  CheckCircle2, 
  Lock, 
  FileText, 
  GraduationCap,
  User,
  Calendar,
  Globe,
  Briefcase
} from 'lucide-react';
import Navbar from './Navbar';

const projectData = {
  binaqar: {
    id: 'binaqar',
    title: 'Bin Aqar Platform',
    subtitle: 'A Full-Scale Saudi Real Estate Marketplace & Custom CRM',
    client: 'Riyad Moussa',
    date: 'Avril 2026',
    website: 'https://binaqar.com/',
    serviceType: 'Real Estate Marketplace & Custom CRM',
    thumbnail: '/projects/binaqar/homepage.png',
    link: 'https://binaqar.com/',
    role: 'Lead Full-Stack Developer & System Architect',
    stats: [
      { label: 'Development Timeline', value: '1.5 Months', icon: Clock },
      { label: 'Backend Architecture', value: '15 API Modules', icon: Layers },
      { label: 'Payment Gateway', value: 'Telr API', icon: CreditCard },
      { label: 'Security & Auth', value: 'JWT RS256 + OTP', icon: ShieldCheck },
    ],
    tech: [
      'Next.js', 'React', 'Node.js', 'Express.js', 'Prisma', 'PostgreSQL', 
      'Redis', 'Socket.io', 'Telr API', 'Cloudflare R2', 'Clerk Auth', 'Tailwind CSS'
    ],
    overview: [
      'I successfully built and delivered Bin Aqar for our Saudi client — a full-scale Saudi real estate marketplace developed and shipped in just 1.5 months. We engineered the entire ecosystem completely from scratch, including the dedicated CRM admin panel, the bilingual client frontend, and a high-performance backend infrastructure.'
    ],
    paymentGateway: {
      title: 'Telr Payment Gateway Integration',
      desc: 'Seamlessly integrated the Telr Payment Gateway using their merchant API keys to process real-time property transactions, listing fees, and deposit payments. Engineered secure server-to-server transaction verification, Saudi Riyal (SAR) currency flows, automatic webhook callbacks, and instant payment reconciliation for buyer and owner deals.'
    },
    architectureSections: [
      {
        title: 'Backend Core',
        subtitle: 'Express.js + Prisma + PostgreSQL + Redis + Socket.io',
        highlights: [
          '15 Modular API Services: Auth, listings, leads, chat, affiliates, deals, blog, media, notifications, admin, cities, settings, owner applications, favorites, and Telegram automations.',
          'Phone OTP Authentication: Asymmetric JWT RS256 token rotation with automated token reuse and replay attack detection.',
          'Role-Based Access Control: Granular security policies for Admin, Manager, Property Owner, and End-User accounts.',
          'Cloudflare R2 Media Engine: Presigned URL architecture ensuring media uploads transfer directly from client to Cloudflare R2, keeping heavy files completely off the backend servers.',
          'Real-Time Inquiries (Socket.io): Low-latency WebSocket chat connecting property seekers, owners, and support agents with live presence detection.',
          'Comprehensive Affiliate System: End-to-end referral tracking (Click → Register → Convert funnel), automatic commission splitting, IBAN management, and automated payout withdrawal requests.',
          'Lead Pipeline & Signals: Structured contact inquiry pipeline integrated with automated WhatsApp direct interest signals.',
          'High-Speed Blog with Deduplication: Redis-backed view deduplication engine (1 count per IP per 24 hours via SHA256 hashing) with instant caching.',
          'Telegram Automations: Autonomous bot triggers for scheduled channel broadcasts and instant team alerts.',
          'Production Security: Zod strict schema validation, Helmet security headers, per-route rate limiting, and comprehensive audit logs.'
        ]
      },
      {
        title: 'CRM Admin Panel',
        subtitle: 'React + Vite + Clerk Auth',
        highlights: [
          'Executive Dashboard: Real-time platform KPI metrics and automated weekly trend comparisons.',
          'Listing Moderation Workflow: Streamlined inspection pipeline to approve, reject, request pricing amendments, and toggle featured homepage placements.',
          'Bilingual CMS Blog Editor: Rich text editor with AR/EN translation tabs, automatic RTL/LTR direction switching, and an SEO optimization panel with live Google SERP preview.',
          'Back-Office Operations: Real-time chat monitor, KYC owner verification pipeline, affiliate tracking, and financial withdrawal processing.',
          'Telegram & User Management: Schedule marketing channel posts and manage user roles and permissions.'
        ]
      },
      {
        title: 'Modern Bilingual Frontend',
        subtitle: 'Next.js + i18n Arabic / English',
        highlights: [
          'Property Search & Discovery: Fast multi-criteria search filters, high-resolution galleries, and interactive geo-mapping across Saudi cities.',
          'Owner Dashboard: Self-service portal for property owners to create listings, submit documents, and monitor lead engagement.',
          'Affiliate Dashboard: Live tracking of unique referral links, click-through rates, and earned commissions.',
          'SEO-Optimized Real Estate Blog: Fast static rendering with automatic Table of Contents, social sharing, and Schema.org structured data for maximum Google indexing.'
        ]
      }
    ],
    gallery: [
      {
        src: '/projects/binaqar/homepage.png',
        title: 'Main Marketplace Homepage & Search',
        desc: 'Hero search interface with city filters, property type selectors, and bilingual navigation'
      },
      {
        src: '/projects/binaqar/otp login.png',
        title: 'Phone OTP Authentication Modal',
        desc: 'Secure mobile number OTP verification with JWT RS256 token rotation'
      },
      {
        src: '/projects/binaqar/1775868743606.jpg',
        title: 'CRM Admin Panel Dashboard',
        desc: 'Central administration panel with real-time analytics, user moderation, and management tools'
      },
      {
        src: '/projects/binaqar/Screenshot 2026-09-30 194431.png',
        title: 'Property Categories & Discovery',
        desc: 'Category showcase and property type browsing across residential and commercial real estate'
      },
      {
        src: '/projects/binaqar/Screenshot 2026-09-30 194457.png',
        title: 'Featured Property Listings',
        desc: 'Curated real estate listings with pricing, specifications, and direct WhatsApp contact'
      },
      {
        src: '/projects/binaqar/Screenshot 2026-09-30 194510.png',
        title: 'Platform Footer & Navigation',
        desc: 'Footer section with comprehensive site navigation, social channels, and legal links'
      }
    ]
  },
  wazayefksa: {
    id: 'wazayefksa',
    title: 'Wazayefksa Job Board',
    subtitle: 'A Comprehensive AI-Powered Saudi Job Platform',
    client: 'ALSAHLI, KHUZAYYIM ALHUMAIDA K',
    date: 'December 2025',
    website: 'https://wazayefksa.com',
    serviceType: 'AI Recruitment Platform & Web Development',
    thumbnail: '/projects/wazayefksa/Screenshot 2026-07-19 020501.png',
    link: 'https://wazayefksa.com',
    role: 'Full-Stack Developer & AI Automation Engineer',
    stats: [
      { label: 'First 30 Days Traffic', value: '20,000+ Visits', icon: TrendingUp },
      { label: 'Daily Automated Jobs', value: '300+ Listings', icon: Sparkles },
      { label: 'Account Roles', value: '3 User Types', icon: Users },
      { label: 'Monetization', value: 'Google AdSense', icon: DollarSign },
    ],
    tech: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'OpenAI API', 'Content Automation'],
    overview: [
      'I developed a comprehensive recruitment platform specifically designed for the Saudi job market. It automatically collects more than 300 job listings every day from LinkedIn and several Saudi job websites, then uses OpenAI GPT to rewrite the content and automatically publish it in an SEO-friendly format.',
      'The platform includes dedicated sections for jobs, courses, events, and a blog, along with a role-based access system supporting three types of accounts:'
    ],
    roles: [
      { title: 'System Administrator (Admin)', desc: 'Full control over system settings, user management, analytics, and content publication.' },
      { title: 'Job Seeker', desc: 'Can browse verified job postings, utilize the interactive CV builder, and apply directly to vacancies.' },
      { title: 'Employer / Recruitment Company', desc: 'Can manage company profiles, post job vacancies, and review qualified candidates.' },
    ],
    features: [
      {
        title: 'Job Approval Workflow',
        desc: 'Employers can add job listings through their own dashboard. These listings appear in a dedicated Job Approval section where they are reviewed and approved by the administrator before going live.'
      },
      {
        title: 'Central Admin Dashboard',
        desc: 'Includes a robust admin dashboard for managing users, regulating content, inspecting analytics, and overseeing all active job listings.'
      },
      {
        title: 'Google AdSense Integration',
        desc: 'The website is fully compatible with Google AdSense and generates sustainable revenue through targeted advertising units.'
      }
    ],
    metricsHighlight: 'The website generated more than 20,000 visits during its first 30 days after launch, driven by a strong focus on search engine optimization (SEO).',
    gallery: [
      {
        src: '/projects/wazayefksa/Screenshot 2026-07-19 020501.png',
        title: 'Homepage & Search Interface',
        desc: 'Hero section with real-time job filters, category tags, and AdSense placement'
      },
      {
        src: '/projects/wazayefksa/screencapture-crm-wazayefksa-dashboard-2026-07-19-02_09_22.png',
        title: 'Admin CRM & Approval Dashboard',
        desc: 'Complete back-office system for moderating listings, users, and content'
      },
      {
        src: '/projects/wazayefksa/screencapture-wazayefksa-cv-builder-2026-07-19-02_08_52.png',
        title: 'Interactive CV Builder',
        desc: 'Online resume generator helping candidates create professional CVs'
      },
      {
        src: '/projects/wazayefksa/screencapture-wazayefksa-jobs-saber-product-certification-specialist-2026-07-19-02_06_37.png',
        title: 'Job Details & Application Portal',
        desc: 'Clean, SEO-optimized vacancy detail view with role requirements and direct apply'
      },
      {
        src: '/projects/wazayefksa/Screenshot 2026-07-19 020618.png',
        title: 'Filtered Job Search Results',
        desc: 'Interactive search filters by Saudi city, industry, and keyword'
      },
      {
        src: '/projects/wazayefksa/Screenshot 2026-07-19 020723.png',
        title: 'Courses & Educational Hub',
        desc: 'Dedicated directory for professional certifications and career development courses'
      },
      {
        src: '/projects/wazayefksa/Screenshot 2026-07-19 020750.png',
        title: 'Career Resources & Blog',
        desc: 'Articles and career guides written and optimized to rank high on search engines'
      },
      {
        src: '/projects/wazayefksa/Screenshot 2026-07-19 020810.png',
        title: 'Upcoming Events & Career Fairs',
        desc: 'Curated calendar of Saudi recruitment exhibitions and job events'
      },
      {
        src: '/projects/wazayefksa/Screenshot 2026-07-19 020836.png',
        title: 'Employer Job Submission Portal',
        desc: 'Intuitive multi-step form for companies to submit new job listings'
      }
    ]
  },
  algerietelecom: {
    id: 'algerietelecom',
    title: 'Centralized Software Deployment Platform',
    subtitle: 'Automated Software Distribution & Workstation Management System for Algérie Télécom',
    client: 'Algérie Télécom',
    date: 'Juin 2026',
    website: 'https://www.algerietelecom.dz/',
    serviceType: 'Centralized Enterprise Software Deployment & System Architecture',
    thumbnail: '/projects/algerietelecom/photo_2026-05-05_00-41-20.jpg',
    link: 'https://www.algerietelecom.dz/',
    role: 'Lead System Architect & Full-Stack Developer (Final Year PFE Capstone)',
    stats: [
      { label: 'Host Organization', value: 'Algérie Télécom', icon: ShieldCheck },
      { label: 'Polling Frequency', value: 'Every 30s', icon: Clock },
      { label: 'Integrity Check', value: 'SHA-256 Hash', icon: Lock },
      { label: 'System Tiers', value: '3-Tier Arch', icon: Layers },
    ],
    tech: ['TypeScript', 'React', 'Vite', 'Node.js', 'Express.js', 'Bash Scripting', 'SQLite', 'TypeORM', 'JWT'],
    overview: [
      'Developed at the Information Systems Division (Direction des Systèmes d’Information — DSI) of Algérie Télécom to replace an entirely manual software distribution process with an automated, centralized enterprise platform.',
      'Prior to this platform, software updates across hundreds of workstations in regional agencies were distributed manually using USB keys or shared drives without version control, deployment tracking, or failure detection. The Centralized Software Deployment Platform (CSDP) eliminates human error and guarantees 100% compliant, secure, and verifiable software rollouts across the nationwide telecom workstation fleet.'
    ],
    pfeNotice: {
      title: 'Academic & Industrial Capstone Project (PFE)',
      institution: 'University of Algiers 1 (Benyoucef Benkhedda) — Faculty of Sciences, Computer Science Department',
      supervisors: 'Supervised by Mme Besma Bekkai & Mr Ouali Laarbi (Algérie Télécom DSI)',
      authors: 'Directed by Meziti Rayane Aymane, Djelouah Youcef & Messaouali Abdelhadi',
      pdfUrl: '/projects/algerietelecom/46_Djelouah_Messaouali_Meziti.pdf'
    },
    architectureSections: [
      {
        title: 'Autonomous Client Agent Daemon',
        subtitle: 'Bash Shell Scripting + Systemd / Background Daemon',
        highlights: [
          'Autonomous 30-Second Heartbeat: Client agent polls the central server every 30 seconds to report machine liveness and check for pending deployment tasks.',
          'Cryptographic Integrity Check: Automatically computes SHA-256 checksums to verify downloaded binaries against the server signature before execution.',
          'Silent Background Installation: Executes unattended package installations silently without interrupting telecom employees.',
          'Real-Time Status Reporting: Reports execution exit codes, terminal logs, and completion status immediately back to the central API.'
        ]
      },
      {
        title: 'Central Backend API & Database',
        subtitle: 'Node.js + Express.js + TypeScript + TypeORM + SQLite',
        highlights: [
          'RESTful API Architecture: Endpoints for client machine registration, package version catalog, deployment orchestration, and audit logging.',
          'TypeORM Data Layer: Lightweight zero-configuration SQLite database managing packages, versions, target machines, and execution history.',
          'Stateless JWT Authentication: Secure 24-hour token-based administrative sessions with bcrypt password encryption.',
          'Automated Hash Calculation: Server automatically computes SHA-256 hashes upon package upload and embeds cryptographic signatures in task payloads.'
        ]
      },
      {
        title: 'Modern Admin Web Dashboard',
        subtitle: 'React + Vite + TypeScript + Tailwind CSS',
        highlights: [
          'Executive Fleet Overview: Real-time dashboard showing active client machines, package catalogs, and deployment success/failure rates.',
          'Package Catalog Management: Upload, version, categorize, and archive software packages with multi-architecture targeting (x86/x64).',
          'Targeted Deployment Wizard: Create deployments targeting specific workstation IDs or bulk fleet rollout with live progress tracking.',
          'Workstation Inspection View: In-depth client detail view displaying hostname, IP, operating system specs, and deployment logs.'
        ]
      }
    ],
    gallery: [
      {
        src: '/projects/algerietelecom/photo_2026-05-05_00-41-20.jpg',
        title: 'Central Admin Dashboard',
        desc: 'Global monitoring interface showing registered client workstations, package catalogs, and deployment stats'
      },
      {
        src: '/projects/algerietelecom/photo_2026-05-05_00-38-26.jpg',
        title: 'Administrative Authentication Portal',
        desc: 'Secure JWT authentication interface for Algérie Télécom system administrators'
      },
      {
        src: '/projects/algerietelecom/photo_2026-05-05_00-43-01.jpg',
        title: 'Software Package Catalog',
        desc: 'Management interface displaying active software packages, versions, architectures, and statuses'
      },
      {
        src: '/projects/algerietelecom/photo_2026-05-05_00-46-42.jpg',
        title: 'New Package Upload & SHA-256 Hashing',
        desc: 'Form to upload ZIP binaries with automatic server-side SHA-256 checksum generation'
      },
      {
        src: '/projects/algerietelecom/photo_2026-05-05_00-47-05.jpg',
        title: 'Package Version History & Metadata',
        desc: 'Detailed view of package versions, changelogs, architecture support, and download records'
      },
      {
        src: '/projects/algerietelecom/photo_2026-05-05_00-48-29.jpg',
        title: 'Deployment Creation Wizard',
        desc: 'Selecting target software versions and choosing target workstation machines for automated rollout'
      },
      {
        src: '/projects/algerietelecom/photo_2026-05-05_00-50-51.jpg',
        title: 'Live Deployment Progress Tracking',
        desc: 'Real-time status monitor displaying in-progress, completed, and failed installations with terminal logs'
      },
      {
        src: '/projects/algerietelecom/photo_2026-05-05_00-52-34.jpg',
        title: 'Client Workstation Fleet Directory',
        desc: 'Catalog of all registered client machines across Algérie Télécom network with active heartbeat timestamps'
      },
      {
        src: '/projects/algerietelecom/photo_2026-05-05_00-58-08.jpg',
        title: 'Client Workstation Profile & Hardware Info',
        desc: 'Detailed hardware specifications, network configurations, and past deployment records per client'
      },
      {
        src: '/projects/algerietelecom/photo_2026-05-05_01-03-47.jpg',
        title: 'Client Agent Daemon Terminal Execution',
        desc: 'Autonomous Bash script running on client workstations, querying tasks and executing silent installs'
      },
      {
        src: '/projects/algerietelecom/photo_2026-05-05_01-16-33.jpg',
        title: 'Silent Package Installation & Verification',
        desc: 'Command-line execution of distributed packages with SHA-256 verification and status reporting'
      },
      {
        src: '/projects/algerietelecom/photo_2026-05-05_01-17-33.jpg',
        title: 'Deployment Completion Logs',
        desc: 'Terminal output confirming successful silent package installation and report submission to the API'
      }
    ]
  }
};

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projectData[id];
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveImage(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#fefae0] dark:bg-[#151c11] px-4 transition-colors">
        <h1 className="text-4xl font-bold text-[#283618] dark:text-[#fefae0] mb-4">Project not found</h1>
        <Link to="/" className="text-[#dda15e] font-bold underline">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fefae0] dark:bg-[#151c11] text-[#283618] dark:text-[#fefae0] pt-28 pb-24 px-4 sm:px-6 lg:px-8 transition-colors duration-500">
      <Navbar />

      <div className="max-w-5xl mx-auto">
        <Link 
          to="/#projects" 
          className="inline-flex items-center gap-2 text-[#283618] dark:text-[#dda15e] hover:text-[#dda15e] dark:hover:text-[#bc6c25] font-bold mb-8 transition-colors text-base group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Projects
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Main Title & Subtitle */}
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#283618] dark:text-[#fefae0] tracking-tight mb-3">
              {project.title}
            </h1>
            {project.subtitle && (
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#bc6c25] dark:text-[#dda15e]">
                {project.subtitle}
              </h2>
            )}
          </div>

          {/* Hero Thumbnail / Preview Banner */}
          {project.thumbnail && (
            <div className="mb-10 rounded-3xl overflow-hidden shadow-2xl border border-[#283618]/15 dark:border-[#dda15e]/20 bg-white dark:bg-[#1c2617]">
              <img 
                src={project.thumbnail} 
                alt={project.title} 
                className="w-full h-auto max-h-[480px] object-cover object-top cursor-pointer hover:opacity-95 transition-opacity"
                onClick={() => setActiveImage(project.thumbnail)}
              />
            </div>
          )}

          {/* Project Metadata Card: Client, Date, Service, Website */}
          <div className="bg-white dark:bg-[#1c2617] rounded-3xl p-6 md:p-8 border border-[#283618]/10 dark:border-[#dda15e]/20 shadow-xl mb-10 transition-colors">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Client */}
              <div className="flex items-start gap-3">
                <div className="p-3 rounded-2xl bg-[#606c38]/10 dark:bg-[#dda15e]/15 text-[#606c38] dark:text-[#dda15e]">
                  <User size={22} />
                </div>
                <div>
                  <span className="text-xs uppercase font-bold text-[#606c38] dark:text-[#a3b18a] tracking-wider block">Client</span>
                  <span className="font-extrabold text-[#283618] dark:text-[#fefae0] text-sm md:text-base leading-snug">{project.client}</span>
                </div>
              </div>

              {/* Date */}
              <div className="flex items-start gap-3">
                <div className="p-3 rounded-2xl bg-[#606c38]/10 dark:bg-[#dda15e]/15 text-[#606c38] dark:text-[#dda15e]">
                  <Calendar size={22} />
                </div>
                <div>
                  <span className="text-xs uppercase font-bold text-[#606c38] dark:text-[#a3b18a] tracking-wider block">Date</span>
                  <span className="font-extrabold text-[#283618] dark:text-[#fefae0] text-sm md:text-base">{project.date}</span>
                </div>
              </div>

              {/* Service Type */}
              <div className="flex items-start gap-3">
                <div className="p-3 rounded-2xl bg-[#606c38]/10 dark:bg-[#dda15e]/15 text-[#606c38] dark:text-[#dda15e]">
                  <Briefcase size={22} />
                </div>
                <div>
                  <span className="text-xs uppercase font-bold text-[#606c38] dark:text-[#a3b18a] tracking-wider block">Service Type</span>
                  <span className="font-extrabold text-[#283618] dark:text-[#fefae0] text-xs md:text-sm leading-snug">{project.serviceType}</span>
                </div>
              </div>

              {/* Website */}
              <div className="flex items-start gap-3">
                <div className="p-3 rounded-2xl bg-[#606c38]/10 dark:bg-[#dda15e]/15 text-[#606c38] dark:text-[#dda15e]">
                  <Globe size={22} />
                </div>
                <div>
                  <span className="text-xs uppercase font-bold text-[#606c38] dark:text-[#a3b18a] tracking-wider block">Website</span>
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-extrabold text-[#dda15e] hover:text-[#bc6c25] text-sm md:text-base inline-flex items-center gap-1.5 hover:underline"
                  >
                    Visit Live <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          {project.stats && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {project.stats.map((stat, i) => {
                const IconComponent = stat.icon;
                return (
                  <div key={i} className="bg-white dark:bg-[#1c2617] rounded-2xl p-5 border border-[#283618]/10 dark:border-[#dda15e]/15 shadow-sm flex flex-col items-center text-center">
                    <IconComponent className="text-[#dda15e] mb-2" size={26} />
                    <span className="text-xl md:text-2xl font-black text-[#283618] dark:text-[#fefae0]">{stat.value}</span>
                    <span className="text-xs font-semibold text-[#606c38] dark:text-[#a3b18a] uppercase tracking-wider mt-1">{stat.label}</span>
                  </div>
                );
              })}
            </div>
          )}

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2.5 mb-10">
            {project.tech.map((tech, i) => (
              <span key={i} className="px-4 py-2 bg-[#283618] dark:bg-[#25331f] text-[#fefae0] border border-transparent dark:border-[#dda15e]/25 font-bold rounded-xl text-sm shadow-sm">
                {tech}
              </span>
            ))}
          </div>

          {/* Academic PFE Notice (Algérie Télécom) */}
          {project.pfeNotice && (
            <div className="mb-10 bg-gradient-to-r from-[#283618] to-[#3a4d23] text-[#fefae0] p-6 md:p-8 rounded-3xl shadow-xl border border-[#dda15e]/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#dda15e] font-bold text-sm uppercase tracking-wider">
                  <GraduationCap size={20} />
                  {project.pfeNotice.title}
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-white leading-snug">{project.pfeNotice.institution}</h4>
                <p className="text-sm text-[#fefae0]/85">{project.pfeNotice.supervisors}</p>
                <p className="text-xs text-[#fefae0]/70 font-mono">{project.pfeNotice.authors}</p>
              </div>
              <a
                href={project.pfeNotice.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-4 bg-[#dda15e] text-[#283618] rounded-2xl hover:bg-[#bc6c25] hover:text-white transition-all font-black shadow-lg uppercase tracking-wider text-sm flex-shrink-0"
              >
                <FileText size={20} /> Read PFE Report (PDF)
              </a>
            </div>
          )}

          {/* Project Detailed Description Card */}
          <div className="bg-white dark:bg-[#1c2617] rounded-3xl p-8 md:p-12 shadow-xl border border-[#283618]/10 dark:border-[#dda15e]/20 mb-12 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-[#283618] dark:text-[#fefae0] mb-4">Project Overview</h3>
              {project.overview.map((para, i) => (
                <p key={i} className="text-lg text-gray-700 dark:text-[#ccd5ae] leading-relaxed mb-4">
                  {para}
                </p>
              ))}
            </div>

            {/* Payment Gateway Highlight (Bin Aqar) */}
            {project.paymentGateway && (
              <div className="bg-gradient-to-r from-[#283618] to-[#3a4d23] text-[#fefae0] p-6 md:p-8 rounded-2xl shadow-md border border-[#dda15e]/30">
                <div className="flex items-center gap-3 mb-3">
                  <CreditCard size={28} className="text-[#dda15e]" />
                  <h4 className="text-xl md:text-2xl font-bold text-[#fefae0]">{project.paymentGateway.title}</h4>
                </div>
                <p className="text-base text-[#fefae0]/90 leading-relaxed">
                  {project.paymentGateway.desc}
                </p>
              </div>
            )}

            {/* Architectural Breakdown */}
            {project.architectureSections && (
              <div className="space-y-6 pt-2">
                <h4 className="text-2xl font-bold text-[#283618] dark:text-[#fefae0] flex items-center gap-2">
                  <Layers className="text-[#dda15e]" size={24} />
                  Full-Stack Architecture & Features
                </h4>
                <div className="grid md:grid-cols-3 gap-6">
                  {project.architectureSections.map((sec, i) => (
                    <div key={i} className="bg-[#fefae0]/40 dark:bg-[#151c11] rounded-2xl p-6 border border-[#283618]/10 dark:border-[#dda15e]/15 flex flex-col">
                      <div className="mb-4">
                        <h5 className="font-black text-[#283618] dark:text-[#fefae0] text-lg mb-1">{sec.title}</h5>
                        <span className="text-xs font-bold text-[#bc6c25] dark:text-[#dda15e] uppercase tracking-wide block">{sec.subtitle}</span>
                      </div>
                      <ul className="space-y-2.5 text-sm text-gray-700 dark:text-[#a3b18a] flex-grow">
                        {sec.highlights.map((h, j) => (
                          <li key={j} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#dda15e] mt-1.5 flex-shrink-0" />
                            <span className="leading-snug">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Role-Based Access Cards (Wazayefksa) */}
            {project.roles && (
              <div>
                <h4 className="text-xl font-bold text-[#283618] dark:text-[#fefae0] mb-4 flex items-center gap-2">
                  <ShieldCheck className="text-[#dda15e]" size={22} />
                  Role-Based Access System
                </h4>
                <div className="grid md:grid-cols-3 gap-4">
                  {project.roles.map((role, i) => (
                    <div key={i} className="bg-[#fefae0]/50 dark:bg-[#151c11] rounded-2xl p-5 border border-[#283618]/10 dark:border-[#dda15e]/15">
                      <h5 className="font-bold text-[#283618] dark:text-[#fefae0] text-base mb-2">{role.title}</h5>
                      <p className="text-sm text-gray-600 dark:text-[#a3b18a] leading-relaxed">{role.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Features list (Wazayefksa) */}
            {project.features && (
              <div className="grid md:grid-cols-3 gap-4 pt-2">
                {project.features.map((feat, i) => (
                  <div key={i} className="border-l-4 border-[#dda15e] pl-4 py-1">
                    <h5 className="font-bold text-[#283618] dark:text-[#fefae0] text-base mb-1">{feat.title}</h5>
                    <p className="text-sm text-gray-600 dark:text-[#a3b18a] leading-relaxed">{feat.desc}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Traction Highlight Callout */}
            {project.metricsHighlight && (
              <div className="bg-[#283618] dark:bg-[#11170d] text-[#fefae0] p-6 rounded-2xl flex items-center gap-4 shadow-md border border-white/5">
                <TrendingUp size={36} className="text-[#dda15e] flex-shrink-0" />
                <p className="text-base md:text-lg font-medium leading-relaxed">
                  {project.metricsHighlight}
                </p>
              </div>
            )}

            {project.link && project.link !== '#' && (
              <div className="pt-4 border-t border-gray-100 dark:border-white/10 flex flex-wrap gap-4">
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#dda15e] text-[#283618] rounded-xl hover:bg-[#bc6c25] hover:text-white transition-colors font-black shadow-lg uppercase tracking-wider"
                >
                  Visit Live Site <ExternalLink size={20} />
                </a>
              </div>
            )}
          </div>

          {/* Screenshot Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <div>
              <div className="mb-6">
                <h3 className="text-4xl font-bold text-[#283618] dark:text-[#fefae0]" style={{ fontFamily: "'Caveat', cursive" }}>
                  Project Gallery & Screenshots
                </h3>
                <p className="text-sm text-[#606c38] dark:text-[#a3b18a] mt-1">Click on any image to view in full resolution</p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.gallery.map((item, index) => (
                  <div 
                    key={index}
                    onClick={() => setActiveImage(item.src)}
                    className="group bg-white dark:bg-[#1c2617] rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-[#283618]/10 dark:border-[#dda15e]/15 cursor-pointer transition-all duration-300 hover:-translate-y-1 flex flex-col"
                  >
                    <div className="relative w-full h-52 overflow-hidden bg-gray-100 dark:bg-black/30">
                      <img 
                        src={item.src} 
                        alt={item.title} 
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors flex items-center justify-center">
                        <span className="opacity-0 group-hover:opacity-100 px-3 py-1.5 bg-black/75 text-white text-xs font-bold rounded-lg transition-opacity">
                          Click to Enlarge
                        </span>
                      </div>
                    </div>
                    <div className="p-4 flex flex-col flex-grow">
                      <h4 className="font-bold text-[#283618] dark:text-[#fefae0] text-sm mb-1 group-hover:text-[#dda15e] transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-[#8d9f78] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm p-4 sm:p-8 flex items-center justify-center cursor-zoom-out"
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors"
              aria-label="Close image"
            >
              <X size={28} />
            </button>
            <motion.img
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              src={activeImage}
              alt="Enlarged screenshot"
              className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
