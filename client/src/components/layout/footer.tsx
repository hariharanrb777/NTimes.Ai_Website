import { Button } from "@/components/ui/button";
import { Twitter, Linkedin, Github, Youtube } from "lucide-react";
import { Link } from "wouter";
import logoPath from "@assets/logo.png";

export default function Footer() {
  const quickLinks = [
    { path: "/", label: "Home" },
    { path: "/products", label: "Products" },
    { path: "/solutions", label: "Solutions" },
    { path: "/about", label: "About Us" },
    { path: "/contact", label: "Contact Us" }
  ];

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-neutral-800 text-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <Link href="/">
              <img 
                src={logoPath} 
                alt="NTimes.AI Logo" 
                className="h-8 w-auto mb-4 filter brightness-0 invert cursor-pointer" 
              />
            </Link>
            <p className="text-neutral-400 mb-6 max-w-md">
              Empowering global businesses with cutting-edge AI solutions. Transform your operations with our innovative automation, AI features, and seamless integrations.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="text-neutral-400 hover:text-blue-400 transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-neutral-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-neutral-400">
              <div className="flex items-center">
                <span className="mr-3">✉️</span>
                <span>hello@ntimes.ai</span>
              </div>
              <div className="flex items-center">
                <span className="mr-3">📞</span>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start">
                <span className="mr-3 mt-1">📍</span>
                <span>123 Innovation Drive<br />San Francisco, CA 94102</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-700 mt-12 pt-8 text-center">
          <p className="text-neutral-400">
            © 2024 NTimes.AI. All rights reserved. |{" "}
            <a href="#" className="hover:text-primary transition-colors duration-200">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="#" className="hover:text-primary transition-colors duration-200">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
