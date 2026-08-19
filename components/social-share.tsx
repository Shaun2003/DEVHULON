'use client'

import React, { useState } from 'react'
import { Share2, Link as LinkIcon, Check } from 'lucide-react'
import { FaLinkedin, FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa'

interface SocialShareProps {
  url: string
  title: string
}

export function SocialShare({ url, title }: SocialShareProps) {
  const [copied, setCopied] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)

  const handleCopy = () => {
    navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          url: url,
        })
      } catch (err) {
        console.error('Error sharing:', err)
      }
    } else {
      setIsOpen(!isOpen)
    }
  }

  return (
    <div className="relative">
      <button
        onClick={handleNativeShare}
        className="flex items-center gap-2 ml-auto hover:text-white transition-colors focus:outline-none"
        aria-label="Share"
      >
        <Share2 className="h-4 w-4" />
        Share
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-48 rounded-xl border border-white/10 bg-navy p-2 shadow-xl z-50">
          <div className="flex flex-col gap-1">
            <a
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white transition-colors"
            >
              <FaLinkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white transition-colors"
            >
              <FaFacebook className="h-4 w-4" />
              Facebook
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white transition-colors"
            >
              <FaTwitter className="h-4 w-4" />
              X (Twitter)
            </a>
            <a
              href={`https://wa.me/?text=${encodedTitle} ${encodedUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white transition-colors"
            >
              <FaWhatsapp className="h-4 w-4" />
              WhatsApp
            </a>
            <button
              onClick={handleCopy}
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white transition-colors text-left"
            >
              {copied ? <Check className="h-4 w-4" /> : <LinkIcon className="h-4 w-4" />}
              {copied ? 'Copied!' : 'Copy Link'}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
