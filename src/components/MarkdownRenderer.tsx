import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import { Check, Copy, Hash, Link as LinkIcon } from 'lucide-react';

interface MarkdownRendererProps {
  content: string;
}

const CodeBlock: React.FC<{
  className?: string;
  children: React.ReactNode;
}> = ({ className, children }) => {
  const [copied, setCopied] = useState(false);
  const language = className ? className.replace('language-', '') : 'text';
  const rawCode = String(children).replace(/\n$/, '');

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(rawCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <div className="relative my-6 border-2 border-black bg-[#1E1F24] text-white shadow-neo overflow-hidden">
      {/* Code Header Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-black border-b-2 border-black text-xs font-mono">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-neo-red inline-block border border-black" />
            <span className="w-2.5 h-2.5 rounded-full bg-neo-yellow inline-block border border-black" />
            <span className="w-2.5 h-2.5 rounded-full bg-neo-green inline-block border border-black" />
          </div>
          <span className="text-white/60 font-bold uppercase tracking-wider text-[11px] ml-2">
            {language}
          </span>
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all active:scale-95"
          title="Copy code"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-neo-green" />
              <span className="text-neo-green">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Body */}
      <div className="p-4 overflow-x-auto font-mono text-sm leading-relaxed text-[#F3F4F6]">
        <pre>
          <code>{rawCode}</code>
        </pre>
      </div>
    </div>
  );
};

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  return (
    <div className="markdown-body">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeSlug]}
        components={{
          h2: ({ node, id, children, ...props }) => {
            const headingId = id || String(children).toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
            return (
              <h2 id={headingId} className="group flex items-center justify-between gap-2" {...props}>
                <span>{children}</span>
                <a
                  href={`#${headingId}`}
                  className="opacity-0 group-hover:opacity-100 p-1 text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-opacity"
                  aria-label="Link to section"
                >
                  <Hash className="w-5 h-5 inline" />
                </a>
              </h2>
            );
          },
          h3: ({ node, id, children, ...props }) => {
            const headingId = id || String(children).toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
            return (
              <h3 id={headingId} className="group flex items-center justify-between gap-2" {...props}>
                <span>{children}</span>
                <a
                  href={`#${headingId}`}
                  className="opacity-0 group-hover:opacity-100 p-1 text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-opacity"
                  aria-label="Link to section"
                >
                  <Hash className="w-4 h-4 inline" />
                </a>
              </h3>
            );
          },
          h4: ({ node, id, children, ...props }) => {
            const headingId = id || String(children).toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
            return (
              <h4 id={headingId} className="group flex items-center justify-between gap-2" {...props}>
                <span>{children}</span>
                <a
                  href={`#${headingId}`}
                  className="opacity-0 group-hover:opacity-100 p-1 text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-opacity"
                  aria-label="Link to section"
                >
                  <Hash className="w-3.5 h-3.5 inline" />
                </a>
              </h4>
            );
          },
          code: ({ node, inline, className, children, ...props }: any) => {
            if (inline) {
              return (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            }
            return <CodeBlock className={className}>{children}</CodeBlock>;
          },
          blockquote: ({ node, children, ...props }) => (
            <blockquote className="my-6" {...props}>
              {children}
            </blockquote>
          ),
          table: ({ node, children, ...props }) => (
            <div className="overflow-x-auto my-6">
              <table className="min-w-full" {...props}>
                {children}
              </table>
            </div>
          ),
          a: ({ node, href, children, ...props }) => {
            const isExternal = href && (href.startsWith('http://') || href.startsWith('https://'));
            return (
              <a
                href={href}
                className="font-bold underline decoration-2 decoration-neo-pink hover:bg-neo-yellow hover:text-black transition-colors"
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                {...props}
              >
                {children}
                {isExternal && <LinkIcon className="w-3 h-3 inline ml-1" />}
              </a>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};
