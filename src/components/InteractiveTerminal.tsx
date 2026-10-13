import { useState, useRef, useEffect, type FC, type ReactNode, type FormEvent } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft, Copy, Check, RotateCcw } from 'lucide-react';

interface CommandOutput {
  command: string;
  output: ReactNode;
}

export const InteractiveTerminal: FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  const initialHistory: CommandOutput[] = [
    {
      command: 'whoami',
      output: (
        <div className="space-y-1 text-zinc-300">
          <p className="text-brand-400 font-semibold font-mono">➜ Adi Kurniawan (dieartco206)</p>
          <p className="text-zinc-400">Role: Senior Full-Stack & Systems Engineer</p>
          <p className="text-zinc-400">Core: Golang (Clean Architecture/DDD), Vue 3, React, TypeScript, Linux VPS</p>
          <p className="text-zinc-400">Location: Indonesia • Ready for high-impact production engineering</p>
        </div>
      ),
    },
    {
      command: 'curl -s https://api.adie206.dev/health',
      output: (
        <div className="font-mono text-xs text-zinc-300 bg-black/40 p-3 rounded-lg border border-white/[0.05]">
          <span className="text-brand-400">&#123;</span><br />
          &nbsp;&nbsp;<span className="text-cyan-400">"status"</span>: <span className="text-emerald-400">"HEALTHY"</span>,<br />
          &nbsp;&nbsp;<span className="text-cyan-400">"uptime"</span>: <span className="text-yellow-300">"99.98%"</span>,<br />
          &nbsp;&nbsp;<span className="text-cyan-400">"architecture"</span>: <span className="text-emerald-300">"Clean Architecture / DDD"</span>,<br />
          &nbsp;&nbsp;<span className="text-cyan-400">"avg_response_ms"</span>: <span className="text-purple-300">18.4</span>,<br />
          &nbsp;&nbsp;<span className="text-cyan-400">"goroutines_active"</span>: <span className="text-purple-300">42</span>,<br />
          &nbsp;&nbsp;<span className="text-cyan-400">"services"</span>: [<span className="text-amber-300">"Face-AI"</span>, <span className="text-amber-300">"E-Learning"</span>, <span className="text-amber-300">"WebSocket-Hub"</span>]<br />
          <span className="text-brand-400">&#125;</span>
        </div>
      ),
    },
  ];

  const [history, setHistory] = useState<CommandOutput[]>(initialHistory);

  const executeCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    let output: React.ReactNode = null;

    if (trimmed === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    } else if (trimmed === 'whoami') {
      output = (
        <div className="space-y-1 text-zinc-300 font-mono text-xs sm:text-sm">
          <p className="text-brand-400 font-semibold">➜ Adi Kurniawan (dieartco206)</p>
          <p className="text-zinc-400">Role: Senior Full-Stack & Systems Engineer</p>
          <p className="text-zinc-400">Stack: Golang, Vue 3, React, TypeScript, Docker, Nginx</p>
        </div>
      );
    } else if (trimmed === 'skills' || trimmed === 'stack') {
      output = (
        <div className="font-mono text-xs sm:text-sm space-y-1 text-zinc-300">
          <p><span className="text-brand-400 font-bold">[Backend]</span> Golang (Clean Arch), REST APIs, WebSockets, Goroutines, Concurrency</p>
          <p><span className="text-cyan-400 font-bold">[Frontend]</span> React, TypeScript, Vue 3, Vite, Tailwind CSS, Pinia</p>
          <p><span className="text-amber-400 font-bold">[Storage]</span> MySQL (Indexed), MinIO S3 Object Storage, Redis, PostgreSQL</p>
          <p><span className="text-purple-400 font-bold">[Infra]</span> Linux VPS, Docker Compose, Nginx Reverse Proxy, SSL, Git CI/CD</p>
        </div>
      );
    } else if (trimmed === 'projects' || trimmed === 'ls') {
      output = (
        <div className="font-mono text-xs sm:text-sm space-y-1 text-zinc-300">
          <p className="text-emerald-400">1. absensi-bsp: Enterprise Biometric Attendance & GPS Geofencing (Go/Face-AI/WSS)</p>
          <p className="text-emerald-400">2. elearning-suite: Multi-Portal School Ecosystem (Admin, Teacher, Student in Go/React)</p>
          <p className="text-emerald-400">3. digizakat: Zakat & Social FinTech Platform with Double-entry Ledger</p>
          <p className="text-emerald-400">4. prestige-gold: Real-time Precious Metals Trading with Scheduled Sync</p>
          <p className="text-emerald-400">5. kiddo-growth: Pediatric WHO Growth Charts & Milestone Tracker</p>
          <p className="text-emerald-400">6. fypotret: Editorial Luxury Photography & WhatsApp Funnel</p>
        </div>
      );
    } else if (trimmed.includes('health') || trimmed.includes('curl')) {
      output = (
        <div className="font-mono text-xs text-zinc-300 bg-black/40 p-3 rounded-lg border border-white/[0.05]">
          <span className="text-brand-400">&#123;</span><br />
          &nbsp;&nbsp;<span className="text-cyan-400">"status"</span>: <span className="text-emerald-400">"HEALTHY"</span>,<br />
          &nbsp;&nbsp;<span className="text-cyan-400">"uptime"</span>: <span className="text-yellow-300">"99.98%"</span>,<br />
          &nbsp;&nbsp;<span className="text-cyan-400">"memory_alloc"</span>: <span className="text-purple-300">"24.6 MB"</span>,<br />
          &nbsp;&nbsp;<span className="text-cyan-400">"zero_downtime"</span>: <span className="text-emerald-400">true</span><br />
          <span className="text-brand-400">&#125;</span>
        </div>
      );
    } else if (trimmed === 'contact') {
      output = (
        <div className="font-mono text-xs sm:text-sm space-y-1 text-zinc-300">
          <p>Email: <a href="mailto:dieartco206@gmail.com" className="text-brand-400 underline">dieartco206@gmail.com</a></p>
          <p>GitHub: <a href="https://github.com/dieartco206" target="_blank" rel="noreferrer" className="text-cyan-400 underline">https://github.com/dieartco206</a></p>
          <p>WhatsApp: <span className="text-emerald-400">Available on request / direct message</span></p>
        </div>
      );
    } else if (trimmed === 'help') {
      output = (
        <div className="font-mono text-xs text-zinc-400 space-y-1">
          <p>Perintah yang tersedia:</p>
          <p className="text-zinc-200">whoami, stack, projects, curl -s /health, contact, clear</p>
        </div>
      );
    } else {
      output = (
        <p className="font-mono text-xs text-rose-400">
          zsh: command not found: {cmd}. Ketik <span className="text-zinc-200 underline">help</span> untuk daftar perintah.
        </p>
      );
    }

    setHistory((prev) => [...prev, { command: cmd, output }]);
    setInputVal('');
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    executeCommand(inputVal);
  };

  const handlePresetClick = (cmd: string) => {
    executeCommand(cmd);
    inputRef.current?.focus();
  };

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCopyHistory = () => {
    const text = history.map(h => `$ ${h.command}`).join('\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="terminal" className="py-20 relative bg-[#090b0e]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-400 border border-brand-500/20 text-xs font-mono mb-3">
            <TerminalIcon className="w-3.5 h-3.5" />
            <span>Interactive Dev Environment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Terminal Interaktif Developer
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-xl mx-auto">
            Jalankan perintah langsung di terminal simulator untuk mengecek spek teknis, status sistem, atau profil saya.
          </p>

          {/* Quick Command Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-5">
            {['whoami', 'stack', 'projects', 'curl -s /health', 'contact', 'clear'].map((cmd) => (
              <button
                key={cmd}
                onClick={() => handlePresetClick(cmd)}
                className="px-2.5 py-1 rounded-md bg-[#141820] hover:bg-brand-500/20 text-zinc-300 hover:text-brand-300 text-xs font-mono border border-white/[0.08] hover:border-brand-500/40 transition-all active:scale-95"
              >
                $ {cmd}
              </button>
            ))}
          </div>
        </div>

        {/* Terminal Window Frame */}
        <div className="rounded-2xl border border-white/[0.12] bg-[#0c0e12] shadow-2xl shadow-black/80 overflow-hidden font-mono text-xs sm:text-sm">
          {/* Window Title Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#11141a] border-b border-white/[0.08]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="text-xs text-zinc-400 ml-2 font-mono">adie206@workstation: ~/portfolio (zsh)</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyHistory}
                className="p-1.5 text-zinc-400 hover:text-white rounded hover:bg-white/[0.06] transition-colors"
                title="Salin log terminal"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-brand-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
              <button
                onClick={() => setHistory([])}
                className="p-1.5 text-zinc-400 hover:text-white rounded hover:bg-white/[0.06] transition-colors"
                title="Reset terminal"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Terminal Body Screen */}
          <div className="p-4 sm:p-6 min-h-[340px] max-h-[460px] overflow-y-auto space-y-4">
            <div className="text-zinc-500 text-xs pb-2 border-b border-white/[0.04]">
              Last login: {new Date().toLocaleDateString('id-ID', { weekday: 'short', month: 'short', day: 'numeric' })} on pts/0 from 127.0.0.1. Type <span className="text-brand-400">help</span> for assistance.
            </div>

            {history.map((item, index) => (
              <div key={index} className="space-y-1.5">
                <div className="flex items-center gap-2 text-zinc-300">
                  <span className="text-brand-400 font-semibold font-mono">adie206@vps:~$</span>
                  <span className="font-semibold text-white">{item.command}</span>
                </div>
                <div className="pl-4 border-l border-white/[0.08] mt-1">
                  {item.output}
                </div>
              </div>
            ))}

            {/* Active Prompt Input */}
            <form onSubmit={handleFormSubmit} className="flex items-center gap-2 pt-2">
              <span className="text-brand-400 font-semibold font-mono">adie206@vps:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Ketik 'whoami', 'stack', 'projects', 'help'..."
                className="flex-1 bg-transparent border-none outline-none text-white font-mono placeholder:text-zinc-600 focus:ring-0 p-0 text-xs sm:text-sm"
              />
              <button
                type="submit"
                aria-label="Kirim perintah terminal"
                className="p-1 text-zinc-500 hover:text-brand-400"
              >
                <CornerDownLeft className="w-3.5 h-3.5" />
              </button>
            </form>
            <div ref={terminalEndRef} />
          </div>
        </div>
      </div>
    </section>
  );
};
