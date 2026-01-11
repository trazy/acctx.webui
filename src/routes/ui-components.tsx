import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/ui-components')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="bg-acctx-background-light dark:bg-acctx-background-dark font-display text-[#111418] dark:text-white antialiased min-h-screen">
      <div className="flex flex-col min-h-screen">
        <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-[#e2e8f0] bg-white px-6 md:px-10 py-3 dark:bg-acctx-background-dark dark:border-[#2d3748]">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3 text-[#111418] dark:text-white">
              <div className="size-8 text-acctx-primary">
                <svg
                  fill="none"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_6_535)">
                    <path
                      clip-rule="evenodd"
                      d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_6_535">
                      <rect fill="white" height="48" width="48"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h2 className="text-[#111418] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">
                AcctX AI
              </h2>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a
                className="text-[#111418] dark:text-gray-300 text-sm font-medium hover:text-acctx-primary transition-colors"
                href="#"
              >
                Components
              </a>
              <a
                className="text-[#617589] dark:text-gray-400 text-sm font-medium hover:text-acctx-primary transition-colors"
                href="#"
              >
                Documentation
              </a>
              <a
                className="text-[#617589] dark:text-gray-400 text-sm font-medium hover:text-acctx-primary transition-colors"
                href="#"
              >
                Templates
              </a>
              <a
                className="text-[#617589] dark:text-gray-400 text-sm font-medium hover:text-acctx-primary transition-colors"
                href="#"
              >
                API
              </a>
            </nav>
          </div>
          <div className="flex flex-1 justify-end gap-4 items-center">
            <label className="hidden sm:flex flex-col min-w-40 h-10 max-w-64">
              <div className="flex w-full flex-1 items-stretch rounded-lg h-full bg-[#f0f2f4] dark:bg-[#1c2632]">
                <div className="text-[#617589] flex items-center justify-center pl-3">
                  <span className="material-symbols-outlined text-xl">
                    search
                  </span>
                </div>
                <input
                  className="form-input flex w-full min-w-0 flex-1 border-none bg-transparent focus:outline-0 focus:ring-0 text-[#111418] dark:text-white placeholder:text-[#617589] text-sm font-normal"
                  placeholder="Search components..."
                  value=""
                />
              </div>
            </label>
            <button className="flex min-w-[120px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-acctx-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-acctx-primary/90 transition-colors">
              <span className="truncate">Download Library</span>
            </button>
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border border-[#e2e8f0] dark:border-gray-700"
              data-alt="User avatar profile picture"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBvHoYR_aPUPiIr_0wUR4_d5Xa54E7NnxNA7WzZ2L2Yc4LQmHPilJyw88-yhPExxBTUEobCsAWA0OGJCE1lOIMLOSojlEiuLOE1iFi7IWgFsrc3U6bxLkv_6CO-wFsoiXC-ywm8P06dIL4eBtfymoJkhu8ZzIKK-vTsX64M8s7KyL_PePFhUkmPOieLOj3T1IXOyw3poIWzu45wFMOIiC2JVZ9BUlvJR11CgjMshQmijvqIz63Xig0lBZGhL8LtvvsGimERoOIGbQ")`,
              }}
            ></div>
          </div>
        </header>
        <div className="flex flex-1 overflow-hidden">
          <aside className="hidden lg:flex w-64 flex-col border-r border-[#e2e8f0] dark:border-[#2d3748] bg-white dark:bg-acctx-background-dark p-4 shrink-0">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col px-3">
                <h1 className="text-[#111418] dark:text-white text-sm font-bold uppercase tracking-wider">
                  Component Library
                </h1>
                <p className="text-[#617589] text-xs font-normal leading-normal">
                  v1.0.4-light
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-acctx-primary/10 text-acctx-primary cursor-pointer">
                  <span className="material-symbols-outlined text-xl">
                    ads_click
                  </span>
                  <p className="text-sm font-semibold">Actions</p>
                </div>
                <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-[#617589] dark:text-gray-400 hover:bg-[#f0f2f4] dark:hover:bg-[#1c2632] cursor-pointer transition-colors">
                  <span className="material-symbols-outlined text-xl">
                    edit_square
                  </span>
                  <p className="text-sm font-medium">Data Entry</p>
                </div>
                <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-[#617589] dark:text-gray-400 hover:bg-[#f0f2f4] dark:hover:bg-[#1c2632] cursor-pointer transition-colors">
                  <span className="material-symbols-outlined text-xl">
                    table_chart
                  </span>
                  <p className="text-sm font-medium">Data Display</p>
                </div>
                <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-[#617589] dark:text-gray-400 hover:bg-[#f0f2f4] dark:hover:bg-[#1c2632] cursor-pointer transition-colors">
                  <span className="material-symbols-outlined text-xl">
                    forum
                  </span>
                  <p className="text-sm font-medium">Feedback</p>
                </div>
                <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-[#617589] dark:text-gray-400 hover:bg-[#f0f2f4] dark:hover:bg-[#1c2632] cursor-pointer transition-colors">
                  <span className="material-symbols-outlined text-xl">
                    layers
                  </span>
                  <p className="text-sm font-medium">Layout</p>
                </div>
                <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-[#617589] dark:text-gray-400 hover:bg-[#f0f2f4] dark:hover:bg-[#1c2632] cursor-pointer transition-colors">
                  <span className="material-symbols-outlined text-xl">
                    smart_toy
                  </span>
                  <p className="text-sm font-medium">AI Components</p>
                </div>
              </div>
            </div>
          </aside>
          <main className="flex-1 overflow-y-auto bg-white dark:bg-acctx-background-dark p-6 md:p-10">
            <div className="max-w-[1024px] mx-auto space-y-10">
              <div className="flex flex-wrap justify-between items-end gap-3 border-b border-[#e2e8f0] dark:border-[#2d3748] pb-6">
                <div className="flex flex-col gap-2">
                  <p className="text-[#111418] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
                    UI Component Library
                  </p>
                  <p className="text-[#617589] dark:text-gray-400 text-lg font-normal leading-normal max-w-2xl">
                    A comprehensive set of professional Shadcn-inspired
                    components for accounting and tax applications. Optimized
                    for high-density data and AI workflows.
                  </p>
                </div>
              </div>
              <div className="pb-3 border-b border-[#e2e8f0] dark:border-[#2d3748]">
                <div className="flex gap-8">
                  <a
                    className="flex flex-col items-center justify-center border-b-2 border-acctx-primary text-acctx-primary pb-3"
                    href="#"
                  >
                    <p className="text-sm font-bold leading-normal tracking-[0.015em]">
                      Preview
                    </p>
                  </a>
                  <a
                    className="flex flex-col items-center justify-center border-b-2 border-transparent text-[#617589] dark:text-gray-400 pb-3 hover:text-[#111418] dark:hover:text-white transition-colors"
                    href="#"
                  >
                    <p className="text-sm font-bold leading-normal tracking-[0.015em]">
                      Code
                    </p>
                  </a>
                  <a
                    className="flex flex-col items-center justify-center border-b-2 border-transparent text-[#617589] dark:text-gray-400 pb-3 hover:text-[#111418] dark:hover:text-white transition-colors"
                    href="#"
                  >
                    <p className="text-sm font-bold leading-normal tracking-[0.015em]">
                      Usage
                    </p>
                  </a>
                </div>
              </div>
              <section>
                <h2 className="text-[#111418] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-6">
                  Actions
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6 border border-[#e2e8f0] dark:border-[#2d3748] rounded-xl bg-[#fcfcfd] dark:bg-[#161f2a]">
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold text-[#617589] uppercase">
                      Primary
                    </span>
                    <button className="bg-acctx-primary hover:bg-acctx-primary/90 text-white font-bold py-2 px-4 rounded-lg text-sm transition-all shadow-sm">
                      Process Tax Return
                    </button>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold text-[#617589] uppercase">
                      Secondary
                    </span>
                    <button className="bg-white dark:bg-[#2d3748] border border-[#e2e8f0] dark:border-[#3a4a5b] text-[#111418] dark:text-white hover:bg-gray-50 dark:hover:bg-[#344455] font-bold py-2 px-4 rounded-lg text-sm transition-all shadow-sm">
                      Save Draft
                    </button>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold text-[#617589] uppercase">
                      Destructive
                    </span>
                    <button className="bg-[#ef4444] hover:bg-[#dc2626] text-white font-bold py-2 px-4 rounded-lg text-sm transition-all shadow-sm">
                      Discard Changes
                    </button>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold text-[#617589] uppercase">
                      Ghost
                    </span>
                    <button className="bg-transparent hover:bg-gray-100 dark:hover:bg-[#1c2632] text-[#617589] font-bold py-2 px-4 rounded-lg text-sm transition-all">
                      Cancel
                    </button>
                  </div>
                </div>
              </section>
              <section>
                <h2 className="text-[#111418] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-6">
                  Data Entry
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 border border-[#e2e8f0] dark:border-[#2d3748] rounded-xl">
                  <div className="space-y-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-semibold text-[#111418] dark:text-white">
                        Tax ID / SSN
                      </label>
                      <input
                        className="flex h-10 w-full rounded-lg border border-[#e2e8f0] dark:border-[#2d3748] bg-white dark:bg-[#1c2632] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-acctx-primary/20 focus:border-acctx-primary"
                        placeholder="000-00-0000"
                        type="text"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-semibold text-[#111418] dark:text-white">
                        Filing Status
                      </label>
                      <select className="flex h-10 w-full rounded-lg border border-[#e2e8f0] dark:border-[#2d3748] bg-white dark:bg-[#1c2632] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-acctx-primary/20">
                        <option>Single</option>
                        <option>Married Filing Jointly</option>
                        <option>Head of Household</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-semibold text-[#111418] dark:text-white">
                        AI Analysis Instructions
                      </label>
                      <textarea
                        className="flex min-h-[100px] w-full rounded-lg border border-[#e2e8f0] dark:border-[#2d3748] bg-white dark:bg-[#1c2632] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-acctx-primary/20"
                        placeholder="e.g. Please look for deductible business expenses in the attached PDF..."
                      ></textarea>
                    </div>
                  </div>
                </div>
              </section>
              <section>
                <h2 className="text-[#111418] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-6">
                  Data Display (Recent Filings)
                </h2>
                <div className="overflow-hidden border border-[#e2e8f0] dark:border-[#2d3748] rounded-xl shadow-sm">
                  <table className="w-full text-left text-sm border-collapse">
                    <thead className="bg-[#f8fafc] dark:bg-[#1c2632] text-[#617589] dark:text-gray-400 font-semibold uppercase tracking-wider text-xs">
                      <tr>
                        <th className="px-6 py-4">Client Name</th>
                        <th className="px-6 py-4">Tax Year</th>
                        <th className="px-6 py-4">Status</th>
                        <th className="px-6 py-4">Est. Refund</th>
                        <th className="px-6 py-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#e2e8f0] dark:divide-[#2d3748]">
                      <tr className="hover:bg-gray-50 dark:hover:bg-[#161f2a] transition-colors">
                        <td className="px-6 py-4 font-medium text-[#111418] dark:text-white">
                          Acme Corp Ltd.
                        </td>
                        <td className="px-6 py-4">2023</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                            Completed
                          </span>
                        </td>
                        <td className="px-6 py-4 font-mono">$12,450.00</td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-acctx-primary hover:text-acctx-primary/70 font-bold">
                            View
                          </button>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 dark:hover:bg-[#161f2a] transition-colors">
                        <td className="px-6 py-4 font-medium text-[#111418] dark:text-white">
                          Sarah Jenkins
                        </td>
                        <td className="px-6 py-4">2023</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400">
                            Reviewing
                          </span>
                        </td>
                        <td className="px-6 py-4 font-mono">$1,200.00</td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-acctx-primary hover:text-acctx-primary/70 font-bold">
                            Review
                          </button>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 dark:hover:bg-[#161f2a] transition-colors">
                        <td className="px-6 py-4 font-medium text-[#111418] dark:text-white">
                          Global Tech Inc.
                        </td>
                        <td className="px-6 py-4">2022-Q4</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                            Analyzing (AI)
                          </span>
                        </td>
                        <td className="px-6 py-4 font-mono">--</td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-acctx-primary hover:text-acctx-primary/70 font-bold">
                            Details
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
              <section>
                <h2 className="text-[#111418] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-6">
                  AI Feedback &amp; Chat
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-2 flex flex-col border border-[#e2e8f0] dark:border-[#2d3748] rounded-xl overflow-hidden h-[300px]">
                    <div className="bg-gray-50 dark:bg-[#1c2632] border-b border-[#e2e8f0] dark:border-[#2d3748] px-4 py-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="size-2 rounded-full bg-green-500"></div>
                        <span className="text-xs font-bold uppercase tracking-tight text-[#111418] dark:text-white">
                          TaxFlow AI Assistant
                        </span>
                      </div>
                      <span className="material-symbols-outlined text-gray-400 text-lg">
                        close
                      </span>
                    </div>
                    <div className="flex-1 p-4 space-y-4 overflow-y-auto bg-white dark:bg-[#161f2a]">
                      <div className="flex gap-3">
                        <div className="size-8 rounded-lg bg-acctx-primary/20 text-acctx-primary flex items-center justify-center shrink-0">
                          <span className="material-symbols-outlined text-sm">
                            smart_toy
                          </span>
                        </div>
                        <div className="bg-[#f0f2f4] dark:bg-[#1c2632] p-3 rounded-lg rounded-tl-none text-sm max-w-[80%]">
                          I've analyzed your W-2 and found 3 possible deductions
                          you might have missed. Would you like to review them?
                        </div>
                      </div>
                      <div className="flex gap-3 justify-end">
                        <div className="bg-acctx-primary text-white p-3 rounded-lg rounded-tr-none text-sm max-w-[80%]">
                          Yes, please show me the details.
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-white dark:bg-[#161f2a] border-t border-[#e2e8f0] dark:border-[#2d3748]">
                      <div className="flex gap-2">
                        <input
                          className="flex-1 text-sm border-none bg-gray-100 dark:bg-[#1c2632] rounded-lg px-4 py-2 focus:ring-1 focus:ring-acctx-primary"
                          placeholder="Ask TaxFlow AI..."
                          type="text"
                        />
                        <button className="size-9 bg-acctx-primary text-white rounded-lg flex items-center justify-center">
                          <span className="material-symbols-outlined">
                            send
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-6">
                    <div className="border border-[#e2e8f0] dark:border-[#2d3748] rounded-xl p-5 bg-white dark:bg-[#161f2a]">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-sm font-bold">Document Analysis</h3>
                        <span className="text-xs font-medium text-acctx-primary">
                          65%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-4">
                        <div
                          className="bg-acctx-primary h-2 rounded-full"
                          style={{ width: '65%' }}
                        ></div>
                      </div>
                      <p className="text-xs text-[#617589]">
                        Scanning "IRS_1040_Draft.pdf" for inconsistencies...
                      </p>
                    </div>
                    <div className="border border-[#e2e8f0] dark:border-[#2d3748] rounded-xl p-5 bg-acctx-primary/5 border-acctx-primary/20">
                      <div className="flex gap-3 items-start">
                        <span className="material-symbols-outlined text-acctx-primary">
                          info
                        </span>
                        <div>
                          <h3 className="text-sm font-bold text-acctx-primary mb-1">
                            AI Suggestion
                          </h3>
                          <p className="text-xs text-[#111418] dark:text-gray-200 leading-relaxed">
                            Based on current filings, you may be eligible for
                            the Earned Income Tax Credit (EITC). Verify
                            eligibility in the next step.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <footer className="mt-20 py-10 border-t border-[#e2e8f0] dark:border-[#2d3748] text-center">
              <p className="text-sm text-[#617589]">
                © 2024 TaxFlow AI Systems. Built for high-efficiency financial
                workflows.
              </p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
