"use client";

export function DashboardPreview() {
  return (
    <div className="w-full h-full bg-[#F8FAFC] p-2 sm:p-4 md:p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-2 sm:mb-4 md:mb-6 pb-2 md:pb-4 border-b border-[#E2E8F0]">
        <div className="flex items-center gap-1.5 sm:gap-3">
          <div className="w-6 h-6 sm:w-10 sm:h-10 bg-[#3B82F6] rounded-md sm:rounded-lg flex items-center justify-center">
            <svg width="12" height="12" viewBox="0 0 32 32" fill="none" className="sm:w-5 sm:h-5">
              <path d="M8 16L12 12L16 16L20 12L24 16" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 20L12 16L16 20L20 16L24 20" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-[#0F172A] font-bold text-xs sm:text-lg md:text-xl">Linetrace</span>
        </div>
        <div className="flex items-center gap-1.5 sm:gap-4">
          <div className="text-right hidden sm:block">
            <div className="text-xs sm:text-sm text-[#64748B]">Mittwoch, 05. Februar 2026</div>
            <div className="text-sm sm:text-lg font-semibold text-[#0F172A]">14:32</div>
          </div>
          <span className="text-[8px] sm:hidden text-[#64748B]">14:32</span>
          <div className="w-6 h-6 sm:w-10 sm:h-10 rounded-full bg-[#E2E8F0] border-2 border-white shadow-sm flex items-center justify-center text-[#0F172A] text-[8px] sm:text-sm font-semibold">
            MS
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-12 gap-1.5 sm:gap-4">
        {/* OEE Gauge */}
        <div className="col-span-4 sm:col-span-4 lg:col-span-3 bg-white rounded-lg sm:rounded-xl p-1.5 sm:p-4 border border-[#E2E8F0] shadow-sm">
          <div className="flex justify-between items-center mb-1 sm:mb-3">
            <span className="text-[7px] sm:text-xs text-[#64748B] uppercase tracking-wider font-medium">OEE</span>
            <span className="text-[6px] sm:text-xs px-1 sm:px-2 py-0.5 bg-[#10B981]/10 text-[#10B981] rounded-full font-medium">Live</span>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-12 h-12 sm:w-28 sm:h-28 lg:w-32 lg:h-32">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="40" fill="none" stroke="#E2E8F0" strokeWidth="8" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="#10B981" strokeWidth="8" strokeLinecap="round" strokeDasharray="196" strokeDashoffset="43" transform="rotate(-90 50 50)" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-xs sm:text-3xl font-bold text-[#0F172A]">78%</span>
              </div>
            </div>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="col-span-4 sm:col-span-4 lg:col-span-5 grid grid-cols-1 gap-1 sm:gap-3">
          <div className="bg-white rounded-md sm:rounded-xl p-1 sm:p-4 border border-[#E2E8F0] shadow-sm flex justify-between items-center">
            <div>
              <div className="text-xs sm:text-2xl font-bold text-[#10B981]">847</div>
              <div className="text-[6px] sm:text-xs text-[#64748B]">Teile/Std</div>
            </div>
            <div className="text-[6px] sm:text-sm text-[#10B981] bg-[#10B981]/10 px-1 sm:px-2 py-0.5 rounded-full">+12%</div>
          </div>
          <div className="bg-white rounded-md sm:rounded-xl p-1 sm:p-4 border border-[#E2E8F0] shadow-sm flex justify-between items-center">
            <div>
              <div className="text-xs sm:text-2xl font-bold text-[#F59E0B]">23m</div>
              <div className="text-[6px] sm:text-xs text-[#64748B]">Stillstand</div>
            </div>
            <div className="text-[6px] sm:text-sm text-[#10B981] bg-[#10B981]/10 px-1 sm:px-2 py-0.5 rounded-full">-5m</div>
          </div>
          <div className="bg-white rounded-md sm:rounded-xl p-1 sm:p-4 border border-[#E2E8F0] shadow-sm flex justify-between items-center">
            <div>
              <div className="text-xs sm:text-2xl font-bold text-[#10B981]">98%</div>
              <div className="text-[6px] sm:text-xs text-[#64748B]">Qualität</div>
            </div>
            <div className="text-[6px] sm:text-sm text-[#10B981] bg-[#10B981]/10 px-1 sm:px-2 py-0.5 rounded-full">+0.3%</div>
          </div>
        </div>

        {/* Machine Grid */}
        <div className="col-span-4 sm:col-span-4 lg:col-span-4 bg-white rounded-lg sm:rounded-xl p-1.5 sm:p-4 border border-[#E2E8F0] shadow-sm">
          <div className="flex justify-between items-center mb-1 sm:mb-3">
            <span className="text-[7px] sm:text-xs text-[#64748B] uppercase tracking-wider font-medium">Maschinen</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 sm:gap-2">
            {[
              { name: "Ofen 1", status: "running", eff: "92%" },
              { name: "Ofen 2", status: "running", eff: "87%" },
              { name: "Presse", status: "warning", eff: "68%" },
              { name: "CNC 1", status: "stopped", eff: "0%" },
              { name: "CNC 2", status: "running", eff: "76%", hide: true },
              { name: "Fräse", status: "running", eff: "91%", hide: true },
            ].map((machine, i) => (
              <div key={i} className={`bg-[#F8FAFC] rounded p-1 sm:p-2 border border-[#E2E8F0] ${machine.hide ? 'hidden sm:block' : ''}`}>
                <div className="flex items-center gap-0.5 mb-0.5">
                  <div className={`w-1.5 h-1.5 rounded-full ${
                    machine.status === 'running' ? 'bg-[#10B981]' :
                    machine.status === 'warning' ? 'bg-[#F59E0B]' : 'bg-[#EF4444]'
                  }`} />
                  <span className="text-[6px] sm:text-[10px] text-[#64748B] truncate">{machine.name}</span>
                </div>
                <div className={`text-[10px] sm:text-base font-bold ${
                  machine.status === 'running' ? 'text-[#10B981]' :
                  machine.status === 'warning' ? 'text-[#F59E0B]' : 'text-[#EF4444]'
                }`}>{machine.eff}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Sparklines */}
      <div className="grid mt-1.5 sm:mt-4 grid-cols-3 gap-1 sm:gap-3">
        {["Durchsatz", "OEE", "Stillstand"].map((label, i) => (
          <div key={i} className="bg-white rounded-md sm:rounded-lg p-1 sm:p-3 border border-[#E2E8F0] shadow-sm">
            <div className="flex justify-between items-center mb-0.5 sm:mb-2">
              <span className="text-[6px] sm:text-xs text-[#64748B]">{label}</span>
              <span className="text-[7px] sm:text-sm font-semibold text-[#0F172A]">
                {i === 0 ? "847/h" : i === 1 ? "78%" : "23m"}
              </span>
            </div>
            <div className="h-3 sm:h-8 relative">
              <svg viewBox="0 0 100 30" className="w-full h-full" preserveAspectRatio="none">
                <defs>
                  <linearGradient id={`grad-light-${i}`} x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor={i === 0 ? "#10B981" : i === 1 ? "#3B82F6" : "#F59E0B"} stopOpacity="0.2" />
                    <stop offset="100%" stopColor={i === 0 ? "#10B981" : i === 1 ? "#3B82F6" : "#F59E0B"} stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d={i === 2 ? "M0,15 L20,18 L40,16 L60,20 L80,18 L100,22 L100,30 L0,30 Z" : "M0,22 L20,20 L40,18 L60,15 L80,12 L100,8 L100,30 L0,30 Z"} fill={`url(#grad-light-${i})`} />
                <path d={i === 2 ? "M0,15 L20,18 L40,16 L60,20 L80,18 L100,22" : "M0,22 L20,20 L40,18 L60,15 L80,12 L100,8"} fill="none" stroke={i === 0 ? "#10B981" : i === 1 ? "#3B82F6" : "#F59E0B"} strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
