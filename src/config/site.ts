/**
 * Site Configuration
 * ==================
 */

export const CONTACT_EMAIL = "rajeev@signalsforgeai.com";

export const LINKEDIN_URL = "";
// Leave empty to hide the LinkedIn link, or paste your company LinkedIn URL.

export const SITE_URL = "https://signalsforge.ai";

export const SITE_CONFIG = {
  name: "SignalsForge AI",
  tagline: "AI Agent Reliability",
  title: "SignalsForge AI | AI Agent Reliability",
  description:
    "SignalsForge AI helps engineering teams diagnose production AI agent failures faster — connecting evidence across traces, logs, and tool calls to pinpoint root causes and prevent recurring incidents.",
  url: SITE_URL,
  contactEmail: CONTACT_EMAIL,
  linkedinUrl: LINKEDIN_URL,
} as const;
