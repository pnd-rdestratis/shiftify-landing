"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const tabs = ["worker", "supervisor", "management"] as const;

function TabletFormPreview() {
  return (
    <div className="w-full h-full bg-[#F8FAFC] flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-white px-2 sm:px-6 py-1.5 sm:py-4 flex items-center justify-between border-b border-[#E2E8F0]">
        <div className="flex items-center gap-1.5 sm:gap-3">
          <div className="w-5 h-5 sm:w-9 sm:h-9 bg-[#3B82F6] rounded-md sm:rounded-lg flex items-center justify-center">
            <svg width="10" height="10" viewBox="0 0 32 32" fill="none" className="sm:w-[18px] sm:h-[18px]">
              <path d="M8 16L12 12L16 16L20 12L24 16" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 20L12 16L16 20L20 16L24 20" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-[#0F172A] font-bold text-[10px] sm:text-lg">Linetrace</span>
        </div>
        <div className="w-5 h-5 sm:w-9 sm:h-9 rounded-full bg-[#E2E8F0] flex items-center justify-center text-[#0F172A] text-[8px] sm:text-xs font-semibold">MS</div>
      </div>
      {/* Form Header */}
      <div className="bg-white px-2 sm:px-6 py-1.5 sm:py-5 border-b border-[#E2E8F0]">
        <div className="text-xs sm:text-xl font-bold text-[#0F172A]">Schichtprotokoll</div>
        <div className="text-[10px] sm:text-sm text-[#64748B]">Frühschicht - 05.02.2026</div>
      </div>
      {/* Form Content */}
      <div className="flex-1 p-2 sm:p-6 space-y-1.5 sm:space-y-5 bg-[#F8FAFC]">
        <div>
          <div className="text-[10px] sm:text-sm font-medium text-[#0F172A] mb-1 sm:mb-2">Auftragsnummer</div>
          <div className="h-6 sm:h-12 bg-white rounded-lg sm:rounded-xl border border-[#E2E8F0] px-2 sm:px-4 flex items-center text-[#0F172A] text-[10px] sm:text-base shadow-sm">
            AUF-2026-0847
          </div>
        </div>
        <div>
          <div className="text-[10px] sm:text-sm font-medium text-[#0F172A] mb-1 sm:mb-2">Status</div>
          <div className="flex gap-1 sm:gap-3">
            <div className="flex-1 p-1 sm:p-4 bg-[#10B981]/5 border-2 border-[#10B981] rounded-lg sm:rounded-xl text-center">
              <div className="w-5 h-5 sm:w-10 sm:h-10 rounded-full bg-[#10B981]/10 mx-auto mb-0.5 sm:mb-2 flex items-center justify-center">
                <svg className="w-3 h-3 sm:w-5 sm:h-5 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <span className="font-semibold text-[#0F172A] text-[9px] sm:text-base">Läuft</span>
            </div>
            <div className="flex-1 p-1 sm:p-4 bg-white border-2 border-[#E2E8F0] rounded-lg sm:rounded-xl text-center">
              <div className="w-5 h-5 sm:w-10 sm:h-10 rounded-full bg-[#F59E0B]/10 mx-auto mb-0.5 sm:mb-2 flex items-center justify-center">
                <svg className="w-3 h-3 sm:w-5 sm:h-5 text-[#F59E0B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <span className="font-medium text-[#64748B] text-[9px] sm:text-base">Störung</span>
            </div>
            <div className="flex-1 p-1 sm:p-4 bg-white border-2 border-[#E2E8F0] rounded-lg sm:rounded-xl text-center">
              <div className="w-5 h-5 sm:w-10 sm:h-10 rounded-full bg-[#64748B]/10 mx-auto mb-0.5 sm:mb-2 flex items-center justify-center">
                <svg className="w-3 h-3 sm:w-5 sm:h-5 text-[#64748B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <span className="font-medium text-[#64748B] text-[9px] sm:text-base">Wartung</span>
            </div>
          </div>
        </div>
        <button className="w-full py-1.5 sm:py-4 bg-[#3B82F6] text-white font-semibold rounded-lg sm:rounded-xl flex items-center justify-center gap-1 shadow-lg shadow-[#3B82F6]/20 text-[10px] sm:text-base">
          <svg className="w-3 h-3 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <polyline points="20 6 9 17 4 12" />
          </svg>
          Speichern
        </button>
      </div>
    </div>
  );
}

function DowntimePreview() {
  const downtimeReasons = [
    { name: "Werkzeug", mins: 45, color: "#EF4444" },
    { name: "Material", mins: 32, color: "#EF4444" },
    { name: "Wartung", mins: 28, color: "#F59E0B" },
    { name: "Rüsten", mins: 18, color: "#F59E0B" },
    { name: "Sonstiges", mins: 12, color: "#3B82F6" },
  ];
  return (
    <div className="w-full h-full bg-[#F8FAFC] p-2 sm:p-6 overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center mb-1.5 sm:mb-4 pb-1.5 sm:pb-3 border-b border-[#E2E8F0]">
        <div className="flex items-center gap-1.5 sm:gap-3">
          <div className="w-5 h-5 sm:w-9 sm:h-9 bg-[#3B82F6] rounded-md sm:rounded-lg flex items-center justify-center">
            <svg width="10" height="10" viewBox="0 0 32 32" fill="none" className="sm:w-[18px] sm:h-[18px]">
              <path d="M8 16L12 12L16 16L20 12L24 16" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 20L12 16L16 20L20 16L24 20" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-[#0F172A] font-bold text-[10px] sm:text-lg">Linetrace</span>
        </div>
        <div className="text-[9px] sm:text-sm text-[#64748B]">Heute 14:32</div>
      </div>

      <div className="text-[10px] sm:text-lg font-semibold text-[#0F172A] mb-1.5 sm:mb-4">Stillstandsanalyse</div>

      <div className="grid grid-cols-2 gap-1.5 sm:gap-4">
        {/* Downtime Reasons Chart */}
        <div className="bg-white rounded-lg sm:rounded-xl border border-[#E2E8F0] shadow-sm p-1.5 sm:p-4">
          <div className="text-[8px] sm:text-xs text-[#64748B] uppercase tracking-wider font-medium mb-1.5 sm:mb-3">Störungsgründe</div>
          <div className="space-y-1 sm:space-y-2">
            {downtimeReasons.map((reason, i) => (
              <div key={i} className="flex items-center gap-1 sm:gap-2">
                <span className="text-[7px] sm:text-xs text-[#64748B] w-10 sm:w-16 truncate">{reason.name}</span>
                <div className="flex-1 h-2 sm:h-4 bg-[#F1F5F9] rounded overflow-hidden">
                  <div className="h-full rounded" style={{ width: `${(reason.mins / 45) * 100}%`, backgroundColor: reason.color }} />
                </div>
                <span className="text-[7px] sm:text-xs font-medium text-[#64748B] w-6 sm:w-10 text-right">{reason.mins}m</span>
              </div>
            ))}
          </div>
        </div>

        {/* Machine Status + Timeline */}
        <div className="space-y-1.5 sm:space-y-4">
          <div className="bg-white rounded-lg sm:rounded-xl border border-[#E2E8F0] shadow-sm p-1.5 sm:p-4">
            <div className="text-[8px] sm:text-xs text-[#64748B] uppercase tracking-wider font-medium mb-1 sm:mb-2">Maschinenstatus</div>
            <div className="space-y-1 sm:space-y-2">
              {[
                { name: "Ofen 1", status: "running", time: "5h 23m" },
                { name: "Presse 1", status: "warning", time: "2h 45m" },
                { name: "CNC 1", status: "stopped", time: "0m" },
              ].map((m, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${
                      m.status === 'running' ? 'bg-[#10B981]' :
                      m.status === 'warning' ? 'bg-[#F59E0B]' : 'bg-[#EF4444]'
                    }`} />
                    <span className="text-[8px] sm:text-sm text-[#0F172A]">{m.name}</span>
                  </div>
                  <span className="text-[8px] sm:text-sm text-[#64748B]">{m.time}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-lg sm:rounded-xl border border-[#E2E8F0] shadow-sm p-1.5 sm:p-4">
            <div className="text-[8px] sm:text-xs text-[#64748B] uppercase tracking-wider font-medium mb-1 sm:mb-2">Woche</div>
            <div className="flex items-end justify-around h-6 sm:h-16">
              {["Mo", "Di", "Mi", "Do", "Fr"].map((day, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-3 sm:w-6 flex flex-col-reverse">
                    <div style={{ height: `${12 + i * 2}px` }} className="bg-[#10B981] rounded-t sm:h-auto" />
                    <div style={{ height: `${4 + i}px` }} className="bg-[#F59E0B] sm:h-auto" />
                  </div>
                  <span className="text-[6px] sm:text-[10px] text-[#94A3B8] mt-0.5">{day}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ReportPreview() {
  const stoerungsTypen = [
    { name: "Werkzeug", count: 12, mins: 145, color: "#EF4444" },
    { name: "Material", count: 8, mins: 92, color: "#F59E0B" },
    { name: "Rüsten", count: 15, mins: 78, color: "#3B82F6" },
    { name: "Wartung", count: 4, mins: 67, color: "#8B5CF6" },
  ];
  return (
    <div className="w-full h-full bg-[#F8FAFC] p-2 sm:p-6 overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center mb-1.5 sm:mb-4 pb-1.5 sm:pb-3 border-b border-[#E2E8F0]">
        <div className="flex items-center gap-1.5 sm:gap-3">
          <div className="w-5 h-5 sm:w-9 sm:h-9 bg-[#3B82F6] rounded-md sm:rounded-lg flex items-center justify-center">
            <svg width="10" height="10" viewBox="0 0 32 32" fill="none" className="sm:w-[18px] sm:h-[18px]">
              <path d="M8 16L12 12L16 16L20 12L24 16" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 20L12 16L16 20L20 16L24 20" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-[#0F172A] font-bold text-[10px] sm:text-lg">Linetrace</span>
        </div>
        <div className="flex items-center gap-1 sm:gap-2">
          <span className="text-[8px] sm:text-sm text-[#64748B]">Januar 2026</span>
          <div className="px-1.5 sm:px-3 py-0.5 sm:py-1.5 bg-[#3B82F6] rounded-md sm:rounded-lg text-[8px] sm:text-xs text-white font-medium shadow-sm">
            PDF
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-1.5 sm:gap-4">
        {/* Left Column: KPIs + Chart */}
        <div className="col-span-7 space-y-1.5 sm:space-y-4">
          {/* KPI Grid */}
          <div className="grid grid-cols-2 gap-1 sm:gap-2">
            {[
              { label: "OEE", value: "76%", color: "#10B981", trend: "+3%", trendUp: true },
              { label: "Produktion", value: "124k", color: "#0F172A", trend: "+8%", trendUp: true },
              { label: "Stillstand", value: "47h", color: "#F59E0B", trend: "-12%", trendUp: true },
              { label: "Qualität", value: "99%", color: "#10B981", trend: "+0.4%", trendUp: true },
            ].map((kpi, i) => (
              <div key={i} className="bg-white rounded-lg sm:rounded-xl border border-[#E2E8F0] shadow-sm p-1 sm:p-3">
                <div className="text-[7px] sm:text-xs text-[#64748B]">{kpi.label}</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-[10px] sm:text-lg font-bold" style={{ color: kpi.color }}>{kpi.value}</span>
                  <span className={`text-[6px] sm:text-xs ${kpi.trendUp ? 'text-[#10B981]' : 'text-[#EF4444]'}`}>{kpi.trend}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div className="bg-white rounded-lg sm:rounded-xl border border-[#E2E8F0] shadow-sm p-1.5 sm:p-3">
            <div className="flex justify-between items-center mb-1 sm:mb-2">
              <span className="text-[7px] sm:text-xs text-[#64748B] uppercase tracking-wider font-medium">OEE-Trend</span>
              <span className="text-[7px] sm:text-xs px-1 sm:px-2 py-0.5 bg-[#10B981]/10 text-[#10B981] rounded-full font-medium">Ziel: 80%</span>
            </div>
            <div className="h-6 sm:h-16 relative">
              <svg viewBox="0 0 300 60" className="w-full h-full" preserveAspectRatio="none">
                <line x1="0" y1="12" x2="300" y2="12" stroke="#3B82F6" strokeWidth="1" strokeDasharray="4,4" opacity="0.3" />
                <defs>
                  <linearGradient id="chartGradLight" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#10B981" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0,40 L30,36 L60,38 L90,32 L120,28 L150,30 L180,24 L210,22 L240,20 L270,18 L300,14 L300,60 L0,60 Z" fill="url(#chartGradLight)" />
                <path d="M0,40 L30,36 L60,38 L90,32 L120,28 L150,30 L180,24 L210,22 L240,20 L270,18 L300,14" fill="none" stroke="#10B981" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>

        {/* Right Column: Störungs-Typen */}
        <div className="col-span-5">
          <div className="bg-white rounded-lg sm:rounded-xl border border-[#E2E8F0] shadow-sm p-1.5 sm:p-3 h-full">
            <div className="text-[7px] sm:text-xs text-[#64748B] uppercase tracking-wider font-medium mb-1.5 sm:mb-3">Störungs-Typen</div>
            <div className="space-y-1 sm:space-y-2">
              {stoerungsTypen.map((typ, i) => (
                <div key={i} className="flex items-center gap-1 sm:gap-2">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full" style={{ backgroundColor: typ.color }} />
                  <span className="text-[7px] sm:text-xs text-[#0F172A] flex-1 truncate">{typ.name}</span>
                  <span className="text-[7px] sm:text-xs text-[#64748B]">{typ.count}x</span>
                  <span className="text-[7px] sm:text-xs font-medium text-[#0F172A]">{typ.mins}m</span>
                </div>
              ))}
            </div>
            <div className="mt-1.5 sm:mt-3 pt-1.5 sm:pt-3 border-t border-[#E2E8F0]">
              <div className="flex justify-between text-[7px] sm:text-xs">
                <span className="text-[#64748B]">Gesamt</span>
                <span className="font-semibold text-[#0F172A]">39 Störungen / 382 Min</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function DashboardTour() {
  const t = useTranslations("dashboardTour");
  const [activeTab, setActiveTab] = useState<typeof tabs[number]>("worker");

  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <ScrollReveal>
          <h2 className="text-display-sm md:text-display font-bold text-center text-primary mb-12">
            {t("headline")}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-surface rounded-lg p-1 gap-1">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    "px-6 py-3 rounded-md text-sm font-medium transition-all duration-200",
                    activeTab === tab
                      ? "bg-white text-primary shadow-sm"
                      : "text-text-muted hover:text-primary"
                  )}
                >
                  {t(`tabs.${tab}`)}
                </button>
              ))}
            </div>
          </div>

          {/* Description */}
          <p className="text-center text-text-muted mb-8">
            {t(`descriptions.${activeTab}`)}
          </p>

          {/* Screenshot */}
          <div className="max-w-5xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="screenshot-frame"
              >
                <div className="aspect-[16/10] rounded-xl overflow-hidden border border-[#E2E8F0]">
                  {activeTab === "worker" && <TabletFormPreview />}
                  {activeTab === "supervisor" && <DowntimePreview />}
                  {activeTab === "management" && <ReportPreview />}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
