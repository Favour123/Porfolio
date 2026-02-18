"use client";

import { useState } from "react";
import { Github, Linkedin, Mail, Copy, Check } from "lucide-react";
import { copyToClipboard } from "@/lib/utils";
import type { SocialLink as SocialLinkType } from "@/types";

const iconMap = {
  Github,
  Linkedin,
  Mail,
};

export default function SocialLink({ platform, label, url }: SocialLinkType) {
  const [copied, setCopied] = useState(false);
  const Icon = iconMap[url.startsWith("mailto:") ? "Mail" : platform === "github" ? "Github" : "Linkedin"];
  const isEmail = platform === "email";
  const displayUrl = isEmail ? url.replace("mailto:", "") : url.replace(/^https?:\/\//, "");

  const handleClick = async (e: React.MouseEvent) => {
    if (isEmail) {
      e.preventDefault();
      const email = url.replace("mailto:", "");
      const success = await copyToClipboard(email);
      if (success) {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    }
  };

  return (
    <a
      href={url}
      target={isEmail ? undefined : "_blank"}
      rel={isEmail ? undefined : "noopener noreferrer"}
      onClick={handleClick}
      className="flex items-center gap-4 p-3 rounded-lg hover:bg-(--color-bg-card-hover) transition-colors duration-200 group"
    >
      <div className="w-12 h-12 rounded-lg bg-(--color-bg-secondary) flex items-center justify-center group-hover:bg-(--color-accent-primary)/10 transition-colors">
        <Icon className="w-6 h-6 text-(--color-accent-primary)" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs text-(--color-text-muted) uppercase tracking-wider mb-1">
          {label}
        </p>
        <p className="text-sm text-(--color-text-secondary) truncate">
          {displayUrl}
        </p>
      </div>
      {isEmail && (
        <div className="w-8 h-8 rounded-lg bg-(--color-bg-secondary) flex items-center justify-center">
          {copied ? (
            <Check className="w-4 h-4 text-green-500" />
          ) : (
            <Copy className="w-4 h-4 text-(--color-text-muted) group-hover:text-(--color-accent-primary)" />
          )}
        </div>
      )}
    </a>
  );
}