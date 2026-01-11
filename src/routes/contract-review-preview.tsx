import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/contract-review-preview')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <body className="bg-acctx-background-light dark:bg-acctx-background-dark min-h-screen flex flex-col font-display">
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-6 py-3 z-30">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3 text-gray-900 dark:text-white">
            <div className="size-6 bg-acctx-primary rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-gray-900 text-sm">
                account_balance
              </span>
            </div>
            <h2 className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-tight">
              TaxAcc AI
            </h2>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a
              className="text-gray-600 dark:text-gray-400 text-sm font-medium hover:text-acctx-primary transition-colors"
              href="#"
            >
              Dashboard
            </a>
            <a
              className="text-gray-900 dark:text-white text-sm font-bold border-b-2 border-acctx-primary"
              href="#"
            >
              Clients
            </a>
            <a
              className="text-gray-600 dark:text-gray-400 text-sm font-medium hover:text-acctx-primary transition-colors"
              href="#"
            >
              Documents
            </a>
            <a
              className="text-gray-600 dark:text-gray-400 text-sm font-medium hover:text-acctx-primary transition-colors"
              href="#"
            >
              Reports
            </a>
          </nav>
        </div>
        <div className="flex flex-1 justify-end gap-4 items-center">
          <label className="flex flex-col min-w-40 h-10 max-w-64">
            <div className="flex w-full flex-1 items-stretch rounded-lg h-full bg-gray-100 dark:bg-gray-800">
              <div className="text-gray-500 flex items-center justify-center pl-3">
                <span className="material-symbols-outlined text-xl">
                  search
                </span>
              </div>
              <input
                className="form-input flex w-full min-w-0 flex-1 border-none bg-transparent focus:ring-0 text-sm"
                placeholder="Search files, clients..."
                value=""
              />
            </div>
          </label>
          <div className="flex gap-2">
            <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200">
              <span className="material-symbols-outlined">settings</span>
            </button>
            <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200">
              <span className="material-symbols-outlined">notifications</span>
            </button>
          </div>
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border border-gray-200"
            data-alt="User profile avatar"
            style={{
              backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBRaQdfByhxk404z8rPubBUS31Yk6VUcCK5fmkQul84DYzV37sznJRdMIKB25lsT1en6AHTApsVPVqmK9mBA85O_QeiTCdylUMgv42UYZF7WVBJpBrBpdrfa6ndHKfKw5dkEgPfikPa5d2yx2igE3fnd940wwBxDaUVDGCWqt9UHCwx9jaP1z4ERObZqXMWKuLrxdu2eerFKsIWqaJwob4lulUC-8QPXwn24fRponAWX4CPZ96GZfx8a78axHRy8VcgFInj0XK95w")`,
            }}
          ></div>
        </div>
      </header>
      <main className="flex-1 flex flex-col max-w-[1600px] mx-auto w-full px-4 sm:px-6 lg:px-8 py-4 overflow-hidden">
        <div className="flex flex-col mb-4">
          <nav className="flex items-center gap-2 mb-2">
            <a
              className="text-gray-500 text-sm font-medium hover:text-acctx-primary"
              href="#"
            >
              Clients
            </a>
            <span className="text-gray-400 text-sm material-symbols-outlined text-xs">
              chevron_right
            </span>
            <a
              className="text-gray-500 text-sm font-medium hover:text-acctx-primary"
              href="#"
            >
              Audit 2024
            </a>
            <span className="text-gray-400 text-sm material-symbols-outlined text-xs">
              chevron_right
            </span>
            <span className="text-gray-900 dark:text-white text-sm font-bold">
              Contract Analysis
            </span>
          </nav>
          <div className="flex flex-wrap justify-between items-end gap-3">
            <div className="flex flex-col gap-1">
              <h1 className="text-gray-900 dark:text-white text-3xl font-extrabold tracking-tight">
                Vendor Agreement: Global Logistics Q4
              </h1>
              <div className="flex items-center gap-3">
                <p className="text-gray-500 text-sm font-normal">
                  Last analyzed: Oct 24, 2023
                </p>
                <span className="bg-acctx-primary/20 text-gray-900 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                  In Review
                </span>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center justify-center rounded-lg h-10 px-4 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white text-sm font-bold hover:bg-gray-300">
                <span className="material-symbols-outlined mr-2 text-xl">
                  share
                </span>
                Share
              </button>
              <button className="flex items-center justify-center rounded-lg h-10 px-6 bg-acctx-primary text-gray-900 text-sm font-bold hover:opacity-90 transition-opacity">
                Finalize Review
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 flex gap-6 overflow-hidden min-h-[700px]">
          <div className="flex-[1.5] flex flex-col bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden">
            <div className="flex justify-between items-center px-4 py-2 border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50">
              <div className="flex items-center gap-1">
                <button className="p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 rounded">
                  <span className="material-symbols-outlined">zoom_in</span>
                </button>
                <button className="p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 rounded">
                  <span className="material-symbols-outlined">zoom_out</span>
                </button>
                <div className="h-4 w-px bg-gray-300 dark:bg-gray-700 mx-1"></div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400 px-2">
                  Page 1 of 12
                </span>
                <div className="h-4 w-px bg-gray-300 dark:bg-gray-700 mx-1"></div>
                <button className="p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 rounded">
                  <span className="material-symbols-outlined">print</span>
                </button>
                <button className="p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 rounded">
                  <span className="material-symbols-outlined">download</span>
                </button>
              </div>
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-1 px-3 py-1.5 bg-acctx-primary/10 text-gray-900 text-xs font-bold rounded-lg border border-acctx-primary/20">
                  <span className="material-symbols-outlined text-sm">
                    edit
                  </span>
                  Suggest Edits
                </button>
              </div>
            </div>
            <div className="document-viewer flex-1 overflow-y-auto p-12 bg-gray-100 dark:bg-gray-950 flex justify-center">
              <div className="max-w-[800px] w-full bg-white dark:bg-white p-16 shadow-2xl rounded-sm min-h-[1100px] relative text-gray-800 leading-relaxed font-serif">
                <h2 className="text-2xl font-bold mb-8 text-center uppercase tracking-widest border-b pb-4">
                  Services Agreement
                </h2>
                <p className="mb-4">
                  <strong>THIS SERVICES AGREEMENT</strong> (the "Agreement") is
                  entered into this 15th day of October, 2023, by and between{' '}
                  <strong>Global Logistics Solutions Inc.</strong> ("Client")
                  and <strong>TaxAcc Consulting Group</strong> ("Service
                  Provider").
                </p>
                <h3 className="text-lg font-bold mt-8 mb-4 border-l-4 border-acctx-primary pl-3 bg-acctx-primary/5 py-1">
                  1. Scope of Services
                </h3>
                <p className="mb-4">
                  Service Provider shall provide strategic tax analysis,
                  auditing of quarterly financial statements, and ongoing
                  regulatory compliance support for Client's regional operations
                  in North America and EMEA.
                </p>
                <h3 className="text-lg font-bold mt-8 mb-4">
                  2. Compensation and Payment
                </h3>
                <p className="mb-4 bg-amber-50 dark:bg-amber-50 p-2 border border-amber-200 rounded">
                  The total value of this agreement shall not exceed $120,000
                  USD per annum. Payments shall be made in four equal quarterly
                  installments of $30,000, payable within thirty (30) days of
                  receipt of invoice.
                </p>
                <p className="text-[10px] text-amber-700 font-bold uppercase mt-1 flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs">
                    warning
                  </span>
                  AI Flag: Payment terms differ from standard policy (45 days)
                </p>
                <h3 className="text-lg font-bold mt-8 mb-4">
                  3. Tax Indemnification
                </h3>
                <p className="mb-4 bg-acctx-primary/5 p-2 border border-acctx-primary/20 rounded">
                  Service Provider shall indemnify and hold harmless Client from
                  and against any and all claims, damages, and expenses
                  (including reasonable attorney's fees) arising out of any tax
                  liabilities assessed against Client resulting from Service
                  Provider's gross negligence or willful misconduct in the
                  performance of services under this Agreement.
                </p>
                <p className="text-[10px] text-green-700 font-bold uppercase mt-1 flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs">
                    check_circle
                  </span>
                  Compliance Verified
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 min-w-[380px] max-w-[450px] flex flex-col gap-4 overflow-y-auto pr-2">
            <div className="grid grid-cols-3 gap-3">
              <div className="flex flex-col gap-1 rounded-xl p-4 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm">
                <p className="text-gray-500 text-[10px] font-bold uppercase tracking-wider">
                  Risk Score
                </p>
                <p className="text-gray-900 dark:text-white text-xl font-bold">
                  72/100
                </p>
                <p className="text-red-600 text-[11px] font-bold">-5.2%</p>
              </div>
              <div className="flex flex-col gap-1 rounded-xl p-4 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm">
                <p className="text-gray-500 text-[10px] font-bold uppercase tracking-wider">
                  Clauses
                </p>
                <p className="text-gray-900 dark:text-white text-xl font-bold">
                  24
                </p>
                <p className="text-acctx-primary text-[11px] font-bold">
                  +2 New
                </p>
              </div>
              <div className="flex flex-col gap-1 rounded-xl p-4 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm">
                <p className="text-gray-500 text-[10px] font-bold uppercase tracking-wider">
                  Compliance
                </p>
                <p className="text-gray-900 dark:text-white text-xl font-bold">
                  88%
                </p>
                <p className="text-acctx-primary text-[11px] font-bold">
                  Optimal
                </p>
              </div>
            </div>
            <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm overflow-hidden">
              <div className="p-4 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center">
                <h3 className="text-gray-900 dark:text-white font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-red-500">
                    report_problem
                  </span>
                  Risk Exceptions
                </h3>
                <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-bold">
                  2 Issues
                </span>
              </div>
              <div className="p-4 space-y-3">
                <div className="p-3 bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 rounded-lg">
                  <div className="flex justify-between mb-1">
                    <span className="text-xs font-bold text-red-800 dark:text-red-400 uppercase">
                      High Priority
                    </span>
                    <span className="text-[10px] text-red-600 font-bold">
                      Clause 5.2
                    </span>
                  </div>
                  <p className="text-sm text-red-900 dark:text-red-200 font-medium">
                    Missing Governing Law provision for EMEA jurisdiction.
                  </p>
                </div>
                <div className="p-3 bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-900/30 rounded-lg">
                  <div className="flex justify-between mb-1">
                    <span className="text-xs font-bold text-amber-800 dark:text-amber-400 uppercase">
                      Medium Risk
                    </span>
                    <span className="text-[10px] text-amber-600 font-bold">
                      Section 2
                    </span>
                  </div>
                  <p className="text-sm text-amber-900 dark:text-amber-200 font-medium">
                    Payment terms (30 days) exceed standard policy of 45 days.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm overflow-hidden flex-1 min-h-0 flex flex-col">
              <div className="p-4 border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50">
                <h3 className="text-gray-900 dark:text-white font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-acctx-primary">
                    fact_check
                  </span>
                  Audit Checklist
                </h3>
              </div>
              <div className="flex-1 overflow-y-auto p-4 space-y-2">
                <div className="flex items-center gap-3 p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded transition-colors group">
                  <div className="size-5 rounded-full bg-acctx-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-[14px] font-bold">
                      check
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                      Tax Indemnification Clause
                    </p>
                    <p className="text-[10px] text-gray-500">
                      Verified against Clause 3
                    </p>
                  </div>
                  <span className="material-symbols-outlined text-gray-300 group-hover:text-acctx-primary cursor-pointer text-lg">
                    info
                  </span>
                </div>
                <div className="flex items-center gap-3 p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded transition-colors group">
                  <div className="size-5 rounded-full bg-acctx-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-[14px] font-bold">
                      check
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                      Termination for Convenience
                    </p>
                    <p className="text-[10px] text-gray-500">
                      Verified against Clause 8
                    </p>
                  </div>
                  <span className="material-symbols-outlined text-gray-300 group-hover:text-acctx-primary cursor-pointer text-lg">
                    info
                  </span>
                </div>
                <div className="flex items-center gap-3 p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded transition-colors group">
                  <div className="size-5 rounded-full border-2 border-gray-300 dark:border-gray-700 flex items-center justify-center"></div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                      Liability Cap Disclosure
                    </p>
                    <p className="text-[10px] text-gray-500">
                      Not found in document
                    </p>
                  </div>
                  <span className="material-symbols-outlined text-gray-300 group-hover:text-acctx-primary cursor-pointer text-lg">
                    info
                  </span>
                </div>
                <div className="flex items-center gap-3 p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded transition-colors group">
                  <div className="size-5 rounded-full border-2 border-gray-300 dark:border-gray-700 flex items-center justify-center"></div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                      Governing Law &amp; Jurisdiction
                    </p>
                    <p className="text-[10px] text-red-500 font-bold italic">
                      Missing for EMEA
                    </p>
                  </div>
                  <span className="material-symbols-outlined text-gray-300 group-hover:text-acctx-primary cursor-pointer text-lg">
                    info
                  </span>
                </div>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800">
                <div className="relative">
                  <input
                    className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg pl-4 pr-12 py-3 text-sm focus:ring-acctx-primary focus:border-acctx-primary transition-all"
                    placeholder="Ask TaxAcc AI about this contract..."
                    type="text"
                  />
                  <button className="absolute right-2 top-2 p-1.5 bg-acctx-primary text-gray-900 rounded-md hover:opacity-90 transition-opacity">
                    <span className="material-symbols-outlined text-lg">
                      send
                    </span>
                  </button>
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <span className="text-[10px] text-gray-400 font-bold uppercase">
                    Try:
                  </span>
                  <button className="text-[10px] font-bold bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-2 py-1 rounded text-gray-600 dark:text-gray-400 hover:border-acctx-primary hover:text-acctx-primary">
                    Summary?
                  </button>
                  <button className="text-[10px] font-bold bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-2 py-1 rounded text-gray-600 dark:text-gray-400 hover:border-acctx-primary hover:text-acctx-primary">
                    Net Value?
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 px-4 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl flex justify-between items-center shadow-lg">
          <div className="flex gap-4 items-center">
            <span className="text-sm font-bold text-gray-400 flex items-center gap-2">
              <span className="material-symbols-outlined text-acctx-primary">
                auto_awesome
              </span>
              AI Engine v2.4 Active
            </span>
            <div className="h-4 w-px bg-gray-300 dark:bg-gray-700"></div>
            <div className="flex gap-2">
              <button
                className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                title="Compare Versions"
              >
                <span className="material-symbols-outlined">difference</span>
              </button>
              <button
                className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                title="Document History"
              >
                <span className="material-symbols-outlined">history</span>
              </button>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-bold text-sm rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
              <span className="material-symbols-outlined">file_download</span>
              Export PDF
            </button>
            <button className="flex items-center gap-2 px-6 py-2 bg-acctx-primary text-gray-900 font-bold text-sm rounded-lg hover:opacity-90 shadow-sm shadow-acctx-primary/30">
              <span className="material-symbols-outlined">verified</span>
              Approve All Clauses
            </button>
          </div>
        </div>
      </main>
    </body>
  );
}
