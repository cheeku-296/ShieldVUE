"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Share2 } from "lucide-react";
import { allBlogs } from "../BlogData";
import { notFound } from "next/navigation";

interface BlogArticleProps {
  id: string;
}

export default function BlogArticle({ id }: BlogArticleProps) {
  const [showShare, setShowShare] = useState(false);
  const blog = allBlogs.find((b) => b.id.toString() === id);

  const handleShare = (platform: 'twitter' | 'linkedin') => {
    const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
    const text = encodeURIComponent(`Check out this article: ${blog?.title}`);
    const url = encodeURIComponent(currentUrl);
    
    if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
    } else if (platform === 'linkedin') {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
    }
    setShowShare(false);
  };

  if (!blog) {
    notFound();
  }

  return (
    <article className="bg-white min-h-screen pb-12 md:pb-24">
      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-12 md:pb-24 flex items-center min-h-[65vh] overflow-hidden border-b border-slate-100 bg-gradient-to-r from-primary/10 via-primary/5 to-white">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-contain object-right mix-blend-multiply opacity-50"
            priority
          />
          {/* Subtle fade to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F8F8FA]/60 via-[#F8F8FA]/20 to-transparent w-[100%]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 lg:px-8">
          <Link
            href="/resources/blogs"
            className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-primary transition-colors mb-10 font-['Inter']"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to all articles
          </Link>

          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider mb-6 font-['Manrope'] text-slate-500">
            <span className="text-primary">BLOG POST</span>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span>{blog.readTime}</span>
          </div>

          <h1 className="text-2xl md:text-4xl lg:text-5xl font-medium font-['Clash_Grotesk'] leading-[1.2] tracking-[-0.01em] mb-6 md:mb-12 w-full md:max-w-[80%] lg:max-w-[75%] text-slate-900">
            {blog.title.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="text-primary">{blog.title.split(' ').pop()}</span>
          </h1>

          <div className="pt-8 border-t border-slate-200 flex items-center gap-4 font-['Inter'] max-w-4xl">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-lg text-primary">
              {blog.author.charAt(0)}
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-900">{blog.author}</span>
              <span className="text-sm text-slate-500">{blog.date}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 pt-20">

        {/* Intro / Description with Left Border */}
        <div className="pl-6 border-l-[3px] border-[#8B5CF6] mb-8 md:mb-16">
          <p className="text-base text-slate-700 font-['Inter'] leading-[1.8] font-normal">
            {blog.description}
          </p>
        </div>

        {/* Body Content */}
        <div className="max-w-none text-slate-700 font-['Inter'] leading-loose space-y-6 text-sm">
          {blog.content ? (
            blog.content.split("\n\n").map((rawParagraph, idx) => {
              const paragraph = rawParagraph.trim();
              if (!paragraph) return null;

              if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={idx} className="text-2xl md:text-3xl font-medium font-['Manrope'] text-slate-900 mt-12 mb-6 leading-snug">
                    {paragraph.replace("## ", "")}
                  </h2>
                );
              }
              if (paragraph.startsWith("> ")) {
                return (
                  <blockquote key={idx} className="border-l-4 border-primary pl-6 py-1 my-8 text-base leading-relaxed text-slate-700 font-normal">
                    {paragraph.replace("> ", "")}
                  </blockquote>
                );
              }
              if (paragraph.startsWith("- ")) {
                return (
                  <ul key={idx} className="list-disc pl-6 my-4 space-y-3 font-normal">
                    {paragraph.split('\n').map((item, i) => {
                      const cleanItem = item.trim();
                      if (!cleanItem) return null;
                      return <li key={i} className="text-slate-700 leading-relaxed text-base">{cleanItem.replace("- ", "")}</li>;
                    })}
                  </ul>
                );
              }
              return (
                <p key={idx} className="text-base leading-[1.8] text-slate-700 mb-6 font-normal">
                  {paragraph}
                </p>
              );
            })
          ) : (
            <p>Content coming soon.</p>
          )}
        </div>

        {/* Tags / Footer */}
        <footer className="mt-12 md:mt-24 pt-8 border-t border-slate-100">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex gap-2 font-['Manrope']">
              <span className="px-4 py-2 bg-slate-50 rounded-lg text-xs font-bold text-slate-600 tracking-wide uppercase">#{blog.category.replace(/\s+/g, '')}</span>
              <span className="px-4 py-2 bg-slate-50 rounded-lg text-xs font-bold text-slate-600 tracking-wide uppercase">#QualityEngineering</span>
            </div>

            <div className="relative">
              <button 
                onClick={() => setShowShare(!showShare)}
                className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-bold text-primary bg-primary/5 hover:bg-primary/10 transition-colors font-['Inter']"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share Article
              </button>

              {showShare && (
                <div className="absolute right-0 bottom-full mb-2 w-48 bg-white border border-slate-200 shadow-xl rounded-xl overflow-hidden z-10 animate-in fade-in slide-in-from-bottom-2">
                  <button 
                    onClick={() => handleShare('twitter')}
                    className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors border-b border-slate-100"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#1DA1F2]" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                    Share on Twitter
                  </button>
                  <button 
                    onClick={() => handleShare('linkedin')}
                    className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#0A66C2]" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    Share on LinkedIn
                  </button>
                </div>
              )}
            </div>
          </div>
        </footer>

      </div>
    </article>
  );
}
