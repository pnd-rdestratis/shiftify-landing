"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const tabs = ["worker", "supervisor", "management"] as const;

function TabletFormPreview() {
  return (
    <div className="w-full h-full bg-[#F8FAFC] flex flex-col">
      {/* Header */}
      <div className="bg-white px-6 py-4 flex items-center justify-between border-b border-[#E2E8F0]">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-[#3B82F6] rounded-lg flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 32 32" fill="none">
              <path d="M8 16L12 12L16 16L20 12L24 16" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 20L12 16L16 20L20 16L24 20" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-[#0F172A] font-bold text-lg">Linetrace</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[#64748B] text-sm">Max Schmidt</span>
          <div className="w-9 h-9 rounded-full bg-[#E2E8F0] flex items-center justify-center text-[#0F172A] text-xs font-semibold">MS</div>
        </div>
      </div>
      {/* Form Header */}
      <div className="bg-white px-6 py-5 border-b border-[#E2E8F0]">
        <div className="text-xl font-bold text-[#0F172A]">Schichtprotokoll</div>
        <div className="text-sm text-[#64748B]">Frühschicht - 05. Februar 2026</div>
      </div>
      {/* Form Content */}
      <div className="flex-1 p-6 space-y-5 bg-[#F8FAFC]">
        <div>
          <div className="text-sm font-medium text-[#0F172A] mb-2">Auftragsnummer</div>
          <div className="h-12 bg-white rounded-xl border border-[#E2E8F0] px-4 flex items-center text-[#0F172A] shadow-sm">
            AUF-2026-0847
          </div>
        </div>
        <div>
          <div className="text-sm font-medium text-[#0F172A] mb-2">Status</div>
          <div className="flex gap-3">
            <div className="flex-1 p-4 bg-[#10B981]/5 border-2 border-[#10B981] rounded-xl text-center">
              <div className="w-10 h-10 rounded-full bg-[#10B981]/10 mx-auto mb-2 flex items-center justify-center">
                <svg className="w-5 h-5 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <span className="font-semibold text-[#0F172A]">Läuft</span>
            </div>
            <div className="flex-1 p-4 bg-white border-2 border-[#E2E8F0] rounded-xl text-center">
              <div className="w-10 h-10 rounded-full bg-[#F59E0B]/10 mx-auto mb-2 flex items-center justify-center">
                <svg className="w-5 h-5 text-[#F59E0B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <span className="font-medium text-[#64748B]">Störung</span>
            </div>
            <div className="flex-1 p-4 bg-white border-2 border-[#E2E8F0] rounded-xl text-center">
              <div className="w-10 h-10 rounded-full bg-[#64748B]/10 mx-auto mb-2 flex items-center justify-center">
                <svg className="w-5 h-5 text-[#64748B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <span className="font-medium text-[#64748B]">Wartung</span>
            </div>
          </div>
        </div>
        <div className="pt-2">
          <button className="w-full py-4 bg-[#3B82F6] text-white font-semibold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[#3B82F6]/20">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Speichern
          </button>
        </div>
      </div>
    </div>
  );
}

function DowntimePreview() {
  return (
    <div className="w-full h-full bg-[#F8FAFC] p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-5 pb-4 border-b border-[#E2E8F0]">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-[#3B82F6] rounded-lg flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 32 32" fill="none">
              <path d="M8 16L12 12L16 16L20 12L24 16" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 20L12 16L16 20L20 16L24 20" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-[#0F172A] font-bold text-lg">Linetrace</span>
        </div>
        <div className="text-right text-sm text-[#64748B]">14:32</div>
      </div>

      <div className="text-lg font-semibold text-[#0F172A] mb-4">Stillstandsanalyse</div>

      <div className="grid grid-cols-5 gap-4">
        {/* Table */}
        <div className="col-span-2 bg-white rounded-xl border border-[#E2E8F0] shadow-sm overflow-hidden">
          <div className="px-4 py-3 border-b border-[#E2E8F0] bg-[#F8FAFC]">
            <span className="text-xs text-[#64748B] uppercase tracking-wider font-medium">Maschinenstatus</span>
          </div>
          <div className="divide-y divide-[#E2E8F0]">
            {[
              { name: "Ofen 1", status: "running", eff: "92%" },
              { name: "Presse 1", status: "warning", eff: "68%" },
              { name: "CNC 1", status: "stopped", eff: "0%" },
              { name: "CNC 2", status: "running", eff: "76%" },
            ].map((m, i) => (
              <div key={i} className="px-4 py-3 flex items-center justify-between">
                <span className="text-sm text-[#0F172A] font-medium">{m.name}</span>
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${
                    m.status === 'running' ? 'bg-[#10B981]' :
                    m.status === 'warning' ? 'bg-[#F59E0B]' : 'bg-[#EF4444]'
                  }`} />
                  <span className={`text-sm font-semibold ${
                    m.status === 'running' ? 'text-[#10B981]' :
                    m.status === 'warning' ? 'text-[#F59E0B]' : 'text-[#EF4444]'
                  }`}>{m.eff}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Charts */}
        <div className="col-span-3 space-y-4">
          <div className="bg-white rounded-xl border border-[#E2E8F0] shadow-sm p-4">
            <div className="text-xs text-[#64748B] uppercase tracking-wider font-medium mb-3">Top 5 Stillstandsgründe</div>
            <div className="flex items-end justify-around h-24">
              {[180, 140, 100, 70, 50].map((h, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div
                    className="w-8 rounded-t"
                    style={{
                      height: `${h * 0.5}px`,
                      backgroundColor: i < 2 ? '#EF4444' : i < 4 ? '#F59E0B' : '#3B82F6'
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-xl border border-[#E2E8F0] shadow-sm p-4">
            <div className="text-xs text-[#64748B] uppercase tracking-wider font-medium mb-3">Stillstand nach Schicht</div>
            <div className="flex items-end justify-around h-20">
              {["Mo", "Di", "Mi", "Do", "Fr"].map((day, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-6 flex flex-col-reverse">
                    <div className="h-8 bg-[#10B981] rounded-t" />
                    <div className="h-4 bg-[#F59E0B]" />
                    <div className="h-2 bg-[#EF4444]" />
                  </div>
                  <span className="text-[10px] text-[#94A3B8] mt-2">{day}</span>
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
  return (
    <div className="w-full h-full bg-[#F8FAFC] p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-5 pb-4 border-b border-[#E2E8F0]">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-[#3B82F6] rounded-lg flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 32 32" fill="none">
              <path d="M8 16L12 12L16 16L20 12L24 16" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 20L12 16L16 20L20 16L24 20" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-[#0F172A] font-bold text-lg">Linetrace</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="px-3 py-1.5 bg-white border border-[#E2E8F0] rounded-lg text-xs text-[#64748B] shadow-sm">
            06. Jan - 05. Feb 2026
          </div>
          <div className="px-3 py-1.5 bg-[#3B82F6] rounded-lg text-xs text-white font-medium shadow-sm">
            Export PDF
          </div>
        </div>
      </div>

      <div className="text-lg font-semibold text-[#0F172A] mb-4">Produktionsbericht</div>

      {/* KPI Grid */}
      <div className="grid grid-cols-4 gap-3 mb-4">
        {[
          { label: "OEE", value: "76.4%", color: "#10B981", trend: "+3.2%" },
          { label: "Teile", value: "124.847", color: "#0F172A", trend: "+8.4%" },
          { label: "Stillstand", value: "47.2 Std", color: "#F59E0B", trend: "-12%" },
          { label: "Qualität", value: "98.7%", color: "#10B981", trend: "+0.4%" },
        ].map((kpi, i) => (
          <div key={i} className="bg-white rounded-xl border border-[#E2E8F0] shadow-sm p-4">
            <div className="text-xs text-[#64748B] mb-1">{kpi.label}</div>
            <div className="text-xl font-bold" style={{ color: kpi.color }}>{kpi.value}</div>
            <div className="text-xs text-[#10B981] mt-1">{kpi.trend}</div>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="bg-white rounded-xl border border-[#E2E8F0] shadow-sm p-4">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs text-[#64748B] uppercase tracking-wider font-medium">OEE-Trend (30 Tage)</span>
          <span className="text-xs px-2 py-0.5 bg-[#3B82F6]/10 text-[#3B82F6] rounded-full font-medium">Ziel: 80%</span>
        </div>
        <div className="h-24 relative">
          <svg viewBox="0 0 300 80" className="w-full h-full" preserveAspectRatio="none">
            <line x1="0" y1="16" x2="300" y2="16" stroke="#3B82F6" strokeWidth="1" strokeDasharray="4,4" opacity="0.3" />
            <defs>
              <linearGradient id="chartGradLight" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#10B981" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0,50 L30,45 L60,48 L90,40 L120,35 L150,38 L180,30 L210,28 L240,25 L270,22 L300,18 L300,80 L0,80 Z" fill="url(#chartGradLight)" />
            <path d="M0,50 L30,45 L60,48 L90,40 L120,35 L150,38 L180,30 L210,28 L240,25 L270,22 L300,18" fill="none" stroke="#10B981" strokeWidth="2" />
          </svg>
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
