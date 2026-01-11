import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/chat-preview')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display h-screen flex overflow-hidden">
      <aside className="w-[280px] bg-acctx-sidebar-dark border-r border-acctx-border-dark flex flex-col hidden md:flex shrink-0">
        <div className="p-4 flex items-center gap-3">
          <div className="bg-primary/20 p-2 rounded-lg">
            <span className="material-symbols-outlined text-primary">
              account_balance
            </span>
          </div>
          <h1 className="text-white text-lg font-bold tracking-tight">
            TaxAI Suite
          </h1>
        </div>
        <div className="px-4 pb-4">
          <button className="w-full flex items-center gap-2 justify-center bg-primary hover:bg-blue-600 text-white font-medium py-2.5 px-4 rounded-lg transition-colors shadow-lg shadow-blue-900/20">
            <span className="material-symbols-outlined text-[20px]">add</span>
            <span>New Chat</span>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-2 space-y-6">
          <div className="flex flex-col gap-1">
            <div className="px-3 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Today
            </div>
            <a
              className="flex items-center gap-3 px-3 py-2 rounded-lg bg-acctx-surface-dark border border-acctx-border-dark/50 group"
              href="#"
            >
              <span className="material-symbols-outlined text-primary text-[20px]">
                chat_bubble
              </span>
              <span className="text-sm font-medium text-white truncate">
                Depreciation Rules Query
              </span>
            </a>
          </div>
          <div className="flex flex-col gap-1">
            <div className="px-3 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Previous 7 Days
            </div>
            <a
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 text-slate-300 hover:text-white transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined text-slate-400 text-[20px]">
                folder
              </span>
              <span className="text-sm font-medium truncate">
                Tax Returns 2023
              </span>
            </a>
            <a
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 text-slate-300 hover:text-white transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined text-slate-400 text-[20px]">
                bar_chart
              </span>
              <span className="text-sm font-medium truncate">
                Q3 Expense Analysis
              </span>
            </a>
            <a
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 text-slate-300 hover:text-white transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined text-slate-400 text-[20px]">
                verified_user
              </span>
              <span className="text-sm font-medium truncate">Audit Prep</span>
            </a>
          </div>
          <div className="flex flex-col gap-1">
            <div className="px-3 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Tools
            </div>
            <a
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 text-slate-300 hover:text-white transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined text-slate-400 text-[20px]">
                calculate
              </span>
              <span className="text-sm font-medium truncate">
                Liability Estimator
              </span>
            </a>
          </div>
        </div>
        <div className="p-4 border-t border-acctx-border-dark mt-auto flex flex-col gap-2">
          <button className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 text-slate-300 hover:text-white transition-colors w-full text-left">
            <span className="material-symbols-outlined text-[20px]">
              settings
            </span>
            <span className="text-sm font-medium">Settings</span>
          </button>
          <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
            <div
              className="size-8 rounded-full bg-cover bg-center"
              data-alt="User profile picture showing a professional person"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBx-hhbc0eSxilD9zvL0MSYItrNcrM8g96UvJklfrCPKJX0BZUqtzeeSYvnmfaTYPUtKUUxun-x_xaQNDSMKe9o-IQ6aoAzjLq1zAkeQGc9m0SrkGkLarjHoasaBw0-PdMUnV-ilRR_wy-WC8Xp2H4s7Sju4hccVZCfPR7nkFUrhigpCzl5-nwqkJHaANFPfiXQ-i-FVZRdjHlSNqxZ883D4DN3OEurmS5neSDzmtVRHQOK32NIdrcu6HElMx8rS8S6v8i84lwiyA")`,
              }}
            ></div>
            <div className="flex flex-col overflow-hidden">
              <span className="text-sm font-medium text-white truncate">
                Alex Morgan
              </span>
              <span className="text-xs text-slate-400 truncate">Pro Plan</span>
            </div>
          </div>
        </div>
      </aside>
      <main className="flex-1 flex flex-col relative h-full min-w-0">
        <header className="h-16 flex items-center justify-between px-6 border-b border-acctx-border-dark bg-background-dark/80 backdrop-blur-md sticky top-0 z-20">
          <div className="flex items-center gap-4">
            <button className="md:hidden text-slate-400 hover:text-white">
              <span className="material-symbols-outlined">menu</span>
            </button>
            <div>
              <h2 className="text-white text-base font-bold leading-tight flex items-center gap-2">
                Depreciation Rules Query
                <span className="text-xs font-normal text-green-500 bg-green-500/10 px-2 py-0.5 rounded-full border border-green-500/20">
                  Active
                </span>
              </h2>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-acctx-surface-dark border border-acctx-border-dark rounded-full text-xs font-medium text-slate-300">
              <span className="material-symbols-outlined text-[14px] text-green-400">
                lock
              </span>
              Encrypted &amp; Secure
            </div>
            <div className="h-6 w-px bg-acctx-border-dark mx-1"></div>
            <button className="flex items-center gap-2 px-3 py-1.5 bg-acctx-surface-dark hover:bg-[#2c3642] border border-acctx-border-dark rounded-lg transition-colors text-white text-sm font-medium">
              <span className="material-symbols-outlined text-[18px] text-primary">
                smart_toy
              </span>
              <span>TaxGPT-4</span>
              <span className="material-symbols-outlined text-[16px] text-slate-400">
                expand_more
              </span>
            </button>
          </div>
        </header>
        <div
          className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth"
          id="chat-container"
        >
          <div className="max-w-3xl mx-auto flex flex-col gap-8 pb-4">
            <div className="flex justify-center">
              <span className="text-xs font-medium text-slate-500 bg-acctx-surface-dark px-3 py-1 rounded-full border border-acctx-border-dark">
                Today, 10:23 AM
              </span>
            </div>
            <div className="flex flex-col items-end gap-2 group">
              <div className="flex items-end gap-3 max-w-[85%] md:max-w-[75%]">
                <div className="flex flex-col gap-1 items-end">
                  <div className="bg-primary text-white px-5 py-3.5 rounded-2xl rounded-tr-sm shadow-md text-[15px] leading-relaxed">
                    <p>
                      Can you explain the depreciation rules for my new office
                      equipment? I bought a server for $12,000 and some
                      furniture for $5,000 this year.
                    </p>
                  </div>
                </div>
                <div
                  className="size-8 rounded-full bg-cover bg-center shrink-0 border border-acctx-border-dark/50"
                  data-alt="User profile picture"
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCUk35jGatgjFps-Y9KGftkQ0sJVH__O7XpMWtqzExGm8ZSxVTCCPXnOk_ALLqlft0Xk_rFCBUPvckeojndBAddOuAY7sVDLyQ9-E-ZVCMNNB0KDCYlOXD3JhVFNRFMrdPZSeBTGw1oEy8ot9CDMXb-cGyi8iG6JC9cyV3enSSYXNiXDLNb0HKlrXvSMPur6CnoShblTA7ZJkDz-CGg6UW4vBjoihb5fSx6YYhb2kcnWMga-07S_pf6fuEdilYzIKiIi78neLjG8Q")`,
                  }}
                ></div>
              </div>
              <span className="text-xs text-slate-500 mr-12 opacity-0 group-hover:opacity-100 transition-opacity">
                10:23 AM
              </span>
            </div>
            <div className="flex flex-col items-start gap-2 w-full group">
              <div className="flex items-start gap-4 max-w-[95%] md:max-w-[85%]">
                <div className="size-8 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center shrink-0 shadow-lg shadow-blue-900/20">
                  <span className="material-symbols-outlined text-white text-[18px]">
                    smart_toy
                  </span>
                </div>
                <div className="flex flex-col gap-3 flex-1">
                  <div className="bg-acctx-primary dark:bg-acctx-surface-dark border border-acctx-border-dark/50 text-white dark:text-slate-200 px-6 py-5 rounded-2xl rounded-tl-sm shadow-sm text-[15px] leading-relaxed">
                    <p className="mb-4">
                      Based on current IRS regulations for the 2023-2024 tax
                      years, here is how you can handle depreciation for your
                      new assets:
                    </p>
                    <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[18px]">
                        check_circle
                      </span>
                      Section 179 Expensing
                    </h3>
                    <p className="mb-4">
                      You can likely deduct the <strong>full cost</strong> of
                      both the server ($12,000) and furniture ($5,000) in the
                      current tax year using{' '}
                      <span className="text-primary hover:underline cursor-pointer">
                        Section 179
                      </span>
                      . The limit for 2023 is $1,160,000.
                    </p>
                    <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[18px]">
                        bolt
                      </span>
                      Bonus Depreciation
                    </h3>
                    <p className="mb-4">
                      If you exceed Section 179 limits, Bonus Depreciation is
                      currently at <strong>80%</strong> for 2023 (phasing down
                      to 60% in 2024).
                    </p>
                    <div className="bg-[#111418] rounded-lg border border-acctx-border-dark overflow-hidden mb-4">
                      <table className="w-full text-sm text-left">
                        <thead className="text-xs text-slate-400 uppercase bg-[#1a2026] border-b border-acctx-border-dark">
                          <tr>
                            <th className="px-4 py-3 font-medium">
                              Asset Class
                            </th>
                            <th className="px-4 py-3 font-medium">
                              Recovery Period
                            </th>
                            <th className="px-4 py-3 font-medium">Method</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-acctx-border-dark/50">
                            <td className="px-4 py-3 text-white">
                              Server (Computers)
                            </td>
                            <td className="px-4 py-3 text-slate-300">
                              5 Years
                            </td>
                            <td className="px-4 py-3 text-slate-300">
                              200% DB
                            </td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 text-white">
                              Office Furniture
                            </td>
                            <td className="px-4 py-3 text-slate-300">
                              7 Years
                            </td>
                            <td className="px-4 py-3 text-slate-300">
                              200% DB
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="text-sm text-slate-400 italic">
                      Would you like me to prepare a comparison table showing
                      the tax savings for each method?
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-acctx-border-dark bg-acctx-surface-dark hover:bg-[#2c3642] transition-colors text-xs font-medium text-slate-300">
                      <span className="material-symbols-outlined text-[16px]">
                        table_chart
                      </span>
                      Generate Comparison Table
                    </button>
                    <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-acctx-border-dark bg-acctx-surface-dark hover:bg-[#2c3642] transition-colors text-xs font-medium text-slate-300">
                      <span className="material-symbols-outlined text-[16px]">
                        description
                      </span>
                      Draft Form 4562
                    </button>
                  </div>
                </div>
              </div>
              <span className="text-xs text-slate-500 ml-16 opacity-0 group-hover:opacity-100 transition-opacity">
                10:24 AM • TaxGPT-4
              </span>
            </div>
          </div>
          <div className="h-24"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-background-dark/95 backdrop-blur-xl border-t border-acctx-border-dark p-4 z-30">
          <div className="max-w-3xl mx-auto flex flex-col gap-2">
            <div className="relative flex items-end gap-2 bg-acctx-surface-dark border border-acctx-border-dark rounded-xl p-2 shadow-lg focus-within:ring-2 focus-within:ring-primary/50 focus-within:border-primary transition-all">
              <button
                className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors shrink-0"
                title="Upload Document"
              >
                <span className="material-symbols-outlined">attach_file</span>
              </button>
              <textarea
                className="w-full bg-transparent border-none text-white placeholder-slate-500 focus:ring-0 resize-none py-2.5 max-h-32 text-[15px] leading-relaxed scrollbar-hide"
                placeholder="Ask follow-up questions or upload your Form 4562..."
                rows={1}
              ></textarea>
              <div className="flex items-center gap-1 shrink-0 pb-0.5">
                <button
                  className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                  title="Voice Input"
                >
                  <span className="material-symbols-outlined">mic</span>
                </button>
                <button
                  className="p-2 bg-primary hover:bg-blue-600 text-white rounded-lg transition-colors shadow-lg shadow-blue-500/20"
                  title="Send Message"
                >
                  <span className="material-symbols-outlined">send</span>
                </button>
              </div>
            </div>
            <div className="text-center">
              <p className="text-[11px] text-slate-500">
                TaxAI can make mistakes. Please verify important financial
                information with a certified CPA.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
