'use client';

import React, { useState } from 'react';
import AppLogo from '@/components/ui/AppLogo';
import { Copy, Check, Send, ArrowUpRight } from 'lucide-react';

// LinkedIn-ის SVG იკონის კომპონენტი
function LinkedinIcon({ size = 15, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

// GitHub-ის SVG იკონის კომპონენტი
function GithubIcon({ size = 15, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
  );
}

export default function Footer() {
  // State 1: ინახავს ინდიკატორს, დაკოპირდა თუ არა ელფოსტა
  const [copied, setCopied] = useState(false);
  // State 2: საკონტაქტო ფორმის ველების მონაცემები
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  // State 3: ინახავს ინდიკატორს, წარმატებით გაიგზავნა თუ არა ფორმა
  const [submitted, setSubmitted] = useState(false);
  // State 4: ინახავს ინდიკატორს, მიმდინარეობს თუ არა გაგზავნის პროცესი (loading)
  const [sending, setSending] = useState(false);
  // State 5: შეტყობინების ტექსტი Toast შეტყობინებისთვის
  const [toast, setToast] = useState('');

  // ელფოსტის მისამართი
  const EMAIL = 'rartmeladze@gmail.com';

  // ელფოსტის გაცვლის/დაკოპირების ფუნქცია Clipboard API-ის გამოყენებით
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setToast('Email copied to clipboard!');
      // 2.5 წამის შემდეგ Toast შეტყობინების გაქრობა
      setTimeout(() => { setCopied(false); setToast(''); }, 2500);
    } catch {
      setToast('Copy failed — please copy manually.');
      setTimeout(() => setToast(''), 2500);
    }
  };

  // საკონტაქტო ფორმის გაგზავნის სიმულაცია
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // 1.5 წამში გაგზავნის იმიტაცია და ველების გასუფთავება
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <footer id="contact" className="relative z-10 border-t border-border bg-card/30 backdrop-blur-sm">
      
      {/* ==========================================
          1. TOAST შეტყობინება (ჩნდება ქვედა მარჯვენა კუთხეში)
         ========================================== */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-[9998] bg-primary text-primary-foreground px-4 py-3 rounded-lg text-sm font-medium shadow-lg flex items-center gap-2 animate-fade-in">
          <Check size={14} />
          {toast}
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          
          {/* ==========================================
              2. მარცხენა მხარე: საკონტაქტო ინფორმაცია და სოციალური ქსელები
             ========================================== */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-xs font-mono text-primary tracking-widest uppercase mb-4">
                // get in touch
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Let&apos;s Build
                <br />
                <span className="text-gradient-primary">Something Great</span>
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-md">
                Currently open for hybrid and remote frontend/full-stack roles. If you have an interesting project or opportunity, I&apos;d love to hear from you.
              </p>
            </div>

            {/* ელფოსტის დაკოპირების ღილაკი და სოციალური ბმულები */}
            <div className="space-y-4">
              {/* ელფოსტის დაკოპირების ღილაკი */}
              <button
                onClick={handleCopy}
                className="group flex items-center gap-3 glass-card px-5 py-4 rounded-lg hover:border-primary/40 transition-all duration-300 w-full max-w-sm"
                aria-label="Copy email address"
              >
                <span className="font-mono text-sm text-foreground">{EMAIL}</span>
                <span className="ml-auto text-muted-foreground group-hover:text-primary transition-colors">
                  {copied ? <Check size={15} /> : <Copy size={15} />}
                </span>
              </button>

              {/* სოციალური ბმულები (LinkedIn, GitHub) */}
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/roland-artmeladze"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 glass-card px-4 py-3 rounded-lg hover:border-primary/40 hover:text-primary text-muted-foreground transition-all duration-300 text-sm font-medium"
                >
                  <LinkedinIcon size={15} />
                  LinkedIn
                  <ArrowUpRight size={12} />
                </a>
                <a
                  href="https://github.com/rolandiartmeladze"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 glass-card px-4 py-3 rounded-lg hover:border-primary/40 hover:text-primary text-muted-foreground transition-all duration-300 text-sm font-medium"
                >
                  <GithubIcon size={15} />
                  GitHub
                  <ArrowUpRight size={12} />
                </a>
              </div>
            </div>
          </div>

          {/* ==========================================
              3. მარჯვენა მხარე: საკონტაქტო ფორმა
             ========================================== */}
          <div className="glass-card rounded-xl p-6 md:p-8">
            {submitted ? (
              /* წარმატებით გაგზავნის შემდეგ გამოჩენილი ბლოკი */
              <div className="flex flex-col items-center justify-center h-full min-h-[320px] text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <Check size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Message Sent!</h3>
                <p className="text-muted-foreground text-sm">
                  Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-primary underline underline-offset-4 mt-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              /* საკონტაქტო ფორმა (სახელი, ელფოსტა, შეტყობინება) */
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-mono text-muted-foreground mb-2 tracking-widest uppercase">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full bg-background/60 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-muted-foreground mb-2 tracking-widest uppercase">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full bg-background/60 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-muted-foreground mb-2 tracking-widest uppercase">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell me about your project..."
                    className="w-full bg-background/60 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  />
                </div>
                {/* გაგზავნის ღილაკი loading/sending მდგომარეობით */}
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-primary text-primary-foreground py-3 rounded-lg text-sm font-semibold tracking-wide flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-60"
                >
                  {sending ? (
                    <span className="animate-pulse">Sending...</span>
                  ) : (
                    <>
                      <Send size={14} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* ==========================================
            4. ქვედა ზოლი (Copyright და სწრაფი ბმულები)
           ========================================== */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* ლოგო და საავტორო უფლებები */}
          <div className="flex items-center gap-2">
            <AppLogo size={24} />
            <span className="text-xs font-mono text-muted-foreground">
              Created by Rolandi Artmeladze © 2026. Made with Passion and Engineering.
            </span>
          </div>
          {/* სწრაფი ნავიგაციის ბმულები */}
          <div className="flex items-center gap-6 text-xs font-mono text-muted-foreground">
            <a href="/" className="hover:text-foreground transition-colors">Home</a>
            <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}