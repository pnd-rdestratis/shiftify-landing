"use client";

export function DashboardPreview() {
  return (
    <div className="w-full h-full bg-[#F8FAFC] p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 pb-4 border-b border-[#E2E8F0]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#3B82F6] rounded-lg flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
              <path d="M8 16L12 12L16 16L20 12L24 16" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 20L12 16L16 20L20 16L24 20" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-[#0F172A] font-bold text-xl">Shiftify</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <div className="text-sm text-[#64748B]">Mittwoch, 05. Februar 2026</div>
            <div className="text-lg font-semibold text-[#0F172A]">14:32</div>
          </div>
          <div className="w-10 h-10 rounded-full bg-[#E2E8F0] border-2 border-white shadow-sm flex items-center justify-center text-[#0F172A] text-sm font-semibold">
            MS
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-12 gap-4">
        {/* OEE Gauge */}
        <div className="col-span-3 bg-white rounded-xl p-4 border border-[#E2E8F0] shadow-sm">
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs text-[#64748B] uppercase tracking-wider font-medium">OEE</span>
            <span className="text-xs px-2 py-0.5 bg-[#10B981]/10 text-[#10B981] rounded-full font-medium">Live</span>
          </div>
          <div className="flex items-center justify-center py-4">
            <div className="relative w-32 h-32">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="40" fill="none" stroke="#E2E8F0" strokeWidth="10" />
                <circle
                  cx="50" cy="50" r="40"
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeDasharray="196"
                  strokeDashoffset="43"
                  transform="rotate(-90 50 50)"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-[#0F172A]">78%</span>
                <span className="text-xs text-[#64748B]">OEE</span>
              </div>
            </div>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="col-span-5 space-y-3">
          <div className="bg-white rounded-xl p-4 border border-[#E2E8F0] shadow-sm flex justify-between items-center">
            <div>
              <div className="text-2xl font-bold text-[#10B981]">847</div>
              <div className="text-xs text-[#64748B]">Teile / Stunde</div>
            </div>
            <div className="text-sm text-[#10B981] flex items-center gap-1 bg-[#10B981]/10 px-2 py-1 rounded-full">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 14l5-5 5 5H7z"/>
              </svg>
              +12%
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-[#E2E8F0] shadow-sm flex justify-between items-center">
            <div>
              <div className="text-2xl font-bold text-[#F59E0B]">23 Min</div>
              <div className="text-xs text-[#64748B]">Stillstand heute</div>
            </div>
            <div className="text-sm text-[#64748B] flex items-center gap-1 bg-[#F8FAFC] px-2 py-1 rounded-full">-5 Min</div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-[#E2E8F0] shadow-sm flex justify-between items-center">
            <div>
              <div className="text-2xl font-bold text-[#10B981]">98.2%</div>
              <div className="text-xs text-[#64748B]">Qualitätsrate</div>
            </div>
            <div className="text-sm text-[#10B981] flex items-center gap-1 bg-[#10B981]/10 px-2 py-1 rounded-full">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 14l5-5 5 5H7z"/>
              </svg>
              +0.3%
            </div>
          </div>
        </div>

        {/* Machine Grid */}
        <div className="col-span-4 bg-white rounded-xl p-4 border border-[#E2E8F0] shadow-sm">
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs text-[#64748B] uppercase tracking-wider font-medium">Maschinenstatus</span>
            <span className="text-xs text-[#94A3B8]">6 Maschinen</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[
              { name: "Ofen 1", status: "running", eff: "92%" },
              { name: "Ofen 2", status: "running", eff: "87%" },
              { name: "Presse 1", status: "warning", eff: "68%" },
              { name: "Presse 2", status: "running", eff: "81%" },
              { name: "CNC 1", status: "stopped", eff: "0%" },
              { name: "CNC 2", status: "running", eff: "76%" },
            ].map((machine, i) => (
              <div key={i} className="bg-[#F8FAFC] rounded-lg p-2 border border-[#E2E8F0]">
                <div className="text-xs font-medium text-[#0F172A] mb-1">{machine.name}</div>
                <div className="flex items-center gap-1 mb-1">
                  <div className={`w-1.5 h-1.5 rounded-full ${
                    machine.status === 'running' ? 'bg-[#10B981]' :
                    machine.status === 'warning' ? 'bg-[#F59E0B]' : 'bg-[#EF4444]'
                  }`} />
                  <span className="text-[10px] text-[#94A3B8]">
                    {machine.status === 'running' ? 'Läuft' :
                     machine.status === 'warning' ? 'Warnung' : 'Stop'}
                  </span>
                </div>
                <div className={`text-lg font-bold ${
                  machine.status === 'running' ? 'text-[#10B981]' :
                  machine.status === 'warning' ? 'text-[#F59E0B]' : 'text-[#EF4444]'
                }`}>{machine.eff}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Sparklines */}
      <div className="mt-4 grid grid-cols-3 gap-3">
        {["Durchsatz", "OEE", "Stillstand"].map((label, i) => (
          <div key={i} className="bg-white rounded-lg p-3 border border-[#E2E8F0] shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs text-[#64748B]">{label}</span>
              <span className="text-sm font-semibold text-[#0F172A]">
                {i === 0 ? "847/h" : i === 1 ? "78%" : "23 Min"}
              </span>
            </div>
            <div className="h-8 relative">
              <svg viewBox="0 0 100 30" className="w-full h-full" preserveAspectRatio="none">
                <defs>
                  <linearGradient id={`grad-light-${i}`} x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor={i === 0 ? "#10B981" : i === 1 ? "#3B82F6" : "#F59E0B"} stopOpacity="0.2" />
                    <stop offset="100%" stopColor={i === 0 ? "#10B981" : i === 1 ? "#3B82F6" : "#F59E0B"} stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d={i === 2
                    ? "M0,15 L20,18 L40,16 L60,20 L80,18 L100,22 L100,30 L0,30 Z"
                    : "M0,22 L20,20 L40,18 L60,15 L80,12 L100,8 L100,30 L0,30 Z"
                  }
                  fill={`url(#grad-light-${i})`}
                />
                <path
                  d={i === 2
                    ? "M0,15 L20,18 L40,16 L60,20 L80,18 L100,22"
                    : "M0,22 L20,20 L40,18 L60,15 L80,12 L100,8"
                  }
                  fill="none"
                  stroke={i === 0 ? "#10B981" : i === 1 ? "#3B82F6" : "#F59E0B"}
                  strokeWidth="1.5"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
