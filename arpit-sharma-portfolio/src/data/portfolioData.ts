export interface Project {
  title: string;
  description: string;
  tech: string[];
  type: string;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  responsibilities: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export const portfolioData = {
  name: "Arpit Sharma",
  role: "Network Engineer | Aspiring DevOps | Cyber Security Enthusiast",
  location: "Sector 52, Noida, Uttar Pradesh, India",
  email: "er.arpit79@gmail.com",
  phone: "+91 88648 45618",
  linkedin: "https://www.linkedin.com/in/er-arpitsharma",
  summary: "Network Engineer with 3+ years of experience in enterprise Network Operations, Monitoring 1000+ devices, and Troubleshooting. Hands-on expertise in Cisco switching, WAN/MPLS, SolarWinds Orion, Meraki devices, wireless networks, and Palo Alto firewall upgrades.",
  
  experience: [
    {
      company: "Stefanini Group",
      role: "Network Engineer",
      duration: "2023 - Present",
      location: "Noida, India",
      project: "LEAR Corporation",
      responsibilities: [
        "Infrastructure monitoring for 1000+ devices including switches, routers, WAN links, SD-WAN, and Palo Alto firewalls.",
        "Expert troubleshooting and incident management for Palo Alto firewall logs, NAT, and security policies.",
        "Execution of Palo Alto firewall upgrades in HA (Active/Passive) environments for global sites.",
        "Management of Cisco Meraki SD-WAN and enterprise wireless networks.",
        "Coordinating with ISPs for WAN/MPLS resolution using SolarWinds Orion for latency monitoring.",
        "Aruba ClearPass management for guest access profiles and authentication security."
      ]
    }
  ],
  
  education: [
    {
      degree: "Master of Computer Applications",
      school: "Amity University, Noida"
    },
    {
      degree: "Bachelor of Computer Applications",
      school: "Teerthanker Mahaveer University, Moradabad"
    }
  ],
  
  certifications: [
    "Palo Alto Fundamentals",
    "CCNA Network Fundamentals",
    "AWS Educate: Generative AI & Cloud 101"
  ],
  
  skills: [
    {
      category: "Networking",
      skills: ["Cisco Switching & Routing", "VLAN/Trunking", "WAN/MPLS", "SD-WAN", "Meraki", "Wireless Networks"]
    },
    {
      category: "Security",
      skills: ["Palo Alto Firewall (HA)", "NAT/Policies", "Aruba ClearPass", "Firewall Monitoring"]
    },
    {
      category: "Operations",
      skills: ["SolarWinds Orion", "ServiceNow", "Ivanti", "Incident Management", "Change Management", "ISP Coordination"]
    },
    {
      category: "DevOps Learning",
      skills: ["Linux", "Docker", "Git", "Jenkins", "AWS Basics", "Terraform", "Python"]
    }
  ],

  projects: [
    {
      title: "Palo Alto HA Upgrade & Troubleshooting",
      description: "Enterprise firewall management, executing HA upgrades, and advanced troubleshooting of security policies and NAT logs.",
      tech: ["Palo Alto", "HA Config", "Troubleshooting"],
      type: "Security"
    },
    {
      title: "SD-WAN Monitoring Dashboard",
      description: "Enterprise-level monitoring of WAN circuits and SD-WAN health metrics.",
      tech: ["Cisco Meraki", "SD-WAN", "ServiceNow"],
      type: "Networking"
    },
    {
      title: "Enterprise Monitoring with Orion",
      description: "Implementation of SolarWinds Orion for global network visibility, latency tracking, and ISP circuit monitoring.",
      tech: ["SolarWinds", "Orion", "SNMP"],
      type: "Operations"
    },
    {
      title: "Cisco Enterprise Switching",
      description: "Configuration of VLANs, Trunking, and Port Channels for global office networks.",
      tech: ["Cisco Catalyst", "VLAN", "STP"],
      type: "Networking"
    }
  ]
};
