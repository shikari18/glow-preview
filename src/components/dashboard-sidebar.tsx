import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  BookOpen,
  CalendarDays,
  ChevronDown,
  CircleHelp,
  ClipboardCheck,
  FileText,
  Folder,
  Gamepad2,
  Headphones,
  Home,
  LayoutGrid,
  Menu,
  MessageCircle,
  Mic,
  NotebookTabs,
  PanelLeftClose,
  PanelLeftOpen,
  PenLine,
  Search,
  Sparkles,
  Upload,
  UsersRound,
  X,
} from "lucide-react";

import logoMark from "@/assets/logo-mark.png";

const primaryItems = [
  { label: "Home", to: "/home", Icon: Home },
  { label: "My Sets", to: "/syllabus", Icon: Folder },
  { label: "Calendar", to: "/assignments", Icon: CalendarDays },
  { label: "Mini Apps", to: "/arcade", Icon: LayoutGrid },
] as const;

const studyItems = [
  { label: "Study Plan", to: "/home", Icon: BookOpen },
  { label: "Chat", to: "/home", Icon: MessageCircle },
  { label: "Tutor Me", to: "/tutors", Icon: UsersRound },
  { label: "Record Lecture", to: "/assignments", Icon: Mic },
] as const;

const practiceItems = [
  { label: "QuizFetch", to: "/quizzes", Icon: ClipboardCheck },
  { label: "Test", to: "/past-questions", Icon: CircleHelp },
  { label: "Flashcards", to: "/flashcards", Icon: NotebookTabs },
  { label: "Arcade", to: "/arcade", Icon: Gamepad2 },
  { label: "Essay Grader", to: "/assignments", Icon: PenLine },
  { label: "Explainers", to: "/syllabus", Icon: FileText },
  { label: "Audio Recap", to: "/syllabus", Icon: Headphones },
] as const;

const courseItems = [
  { label: "Syllabus", to: "/syllabus", Icon: BookOpen },
  { label: "Assignments", to: "/assignments", Icon: ClipboardCheck },
] as const;

type NavItem = (typeof primaryItems)[number] | (typeof studyItems)[number] | (typeof practiceItems)[number] | (typeof courseItems)[number];

export function DashboardSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  useEffect(() => {
    if (!mobileOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

  const navItem = ({ label, to, Icon }: NavItem, inset = false, mobile = false) => {
    const active = pathname === to && (label === "Home" || label === "Syllabus" || label === "Assignments" || label === "Flashcards" || label === "Arcade");
    const showLabels = mobile || !collapsed;
    return (
      <Link
        key={label}
        to={to}
        title={!showLabels ? label : undefined}
        onClick={() => setMobileOpen(false)}
        className={`group flex h-10 items-center gap-3 rounded-xl px-3 text-[15px] transition-colors ${
          inset && showLabels ? "pl-8" : ""
        } ${active ? "bg-sidebar-active text-sidebar-foreground" : "text-sidebar-muted hover:bg-sidebar-hover hover:text-sidebar-foreground"}`}
      >
        <Icon className="size-[17px] shrink-0" strokeWidth={1.65} aria-hidden />
        {showLabels && <span className="truncate">{label}</span>}
      </Link>
    );
  };

  const renderSidebar = (mobile = false) => {
    const showLabels = mobile || !collapsed;
    return (
    <aside
      className={`flex h-dvh shrink-0 flex-col overflow-hidden bg-sidebar text-sidebar-foreground ${
        mobile ? "w-full" : `border-r border-sidebar-border transition-[width] duration-300 ${collapsed ? "w-[72px]" : "w-[266px]"}`
      }`}
    >
      <div className="grid h-16 grid-cols-[minmax(0,1fr)_auto] items-center gap-2 px-3">
        <Link to="/home" className="flex min-w-0 items-center gap-2.5 px-1">
          <img src={logoMark} alt="ExamGlow logo" width={36} height={36} className="size-9 shrink-0 rounded-full bg-sidebar-accent p-0.5" />
          {showLabels && <span className="truncate text-xl font-semibold">ExamGlow</span>}
        </Link>
        {mobile ? (
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="flex size-10 items-center justify-center rounded-full bg-sidebar-hover text-sidebar-foreground transition-colors hover:bg-sidebar-active"
            aria-label="Close navigation"
          >
            <X className="size-5" />
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setCollapsed((value) => !value)}
            className="hidden size-9 items-center justify-center rounded-lg text-sidebar-muted transition-colors hover:bg-sidebar-hover hover:text-sidebar-foreground md:flex"
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? <PanelLeftOpen className="size-5" /> : <PanelLeftClose className="size-5" />}
          </button>
        )}
      </div>

      <div className="scrollbar-none min-h-0 flex-1 overflow-y-auto overscroll-contain px-3 pb-6">
        {showLabels && (
          <div className="mb-2 flex items-center gap-2 px-2 py-2 text-sidebar-muted">
            <Search className="size-[18px]" aria-hidden />
            <span className="text-sm">Search</span>
          </div>
        )}

        <nav className="space-y-0.5" aria-label="Main navigation">
          {primaryItems.map((item) => navItem(item, false, mobile))}
        </nav>

        <div className="my-3 h-px bg-sidebar-border" />

        <Link
          to="/syllabus"
          className="flex h-12 items-center gap-3 rounded-xl bg-sidebar-hover px-3 text-sidebar-foreground"
          title={!showLabels ? "My First Study Set" : undefined}
        >
          <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-sidebar-accent text-sidebar-accent-foreground">
            <NotebookTabs className="size-4.5" aria-hidden />
          </span>
          {showLabels && (
            <>
              <span className="min-w-0 flex-1 truncate text-sm">My First Study Set</span>
              <Sparkles className="size-4 shrink-0" aria-hidden />
            </>
          )}
        </Link>

        <nav className="mt-3 space-y-0.5" aria-label="Study navigation">
          {studyItems.map((item) => navItem(item, false, mobile))}
        </nav>

        <div className="mt-2">
          <div className="flex h-10 items-center gap-3 px-3 text-[15px] text-sidebar-muted">
            <ClipboardCheck className="size-[17px] shrink-0" strokeWidth={1.65} aria-hidden />
            {showLabels && (
              <>
                <span className="flex-1">Practice &amp; Activities</span>
                <ChevronDown className="size-4" aria-hidden />
              </>
            )}
          </div>
          <nav className="space-y-0.5" aria-label="Practice and activities">
            {practiceItems.map((item) => navItem(item, true, mobile))}
          </nav>
        </div>

        <div className="my-3 h-px bg-sidebar-border" />
        <nav className="space-y-0.5" aria-label="Course navigation">
          {courseItems.map((item) => navItem(item, false, mobile))}
        </nav>
      </div>

      <div className="border-t border-sidebar-border p-2">
        <Link
          to="/syllabus"
          className="flex h-10 items-center justify-center gap-2 rounded-xl bg-sidebar-hover font-medium text-sidebar-foreground transition-colors hover:bg-sidebar-active"
          title={!showLabels ? "Upload" : undefined}
        >
          <Upload className="size-4.5" aria-hidden />
          {showLabels && <span>Upload</span>}
        </Link>
        {showLabels && (
          <div className="mt-2 flex items-center justify-between px-2 py-1 text-sm text-sidebar-muted">
            <span>Your Notes</span>
            <Link to="/syllabus" className="hover:text-sidebar-foreground">View All</Link>
          </div>
        )}
      </div>
    </aside>
  );
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setMobileOpen(true)}
        className="fixed left-4 top-4 z-40 flex size-11 items-center justify-center rounded-xl bg-sidebar text-sidebar-foreground shadow-lg md:hidden"
        aria-label="Open navigation"
      >
        <Menu className="size-5" />
      </button>
      <div className="hidden md:block">{renderSidebar()}</div>
      <div
        className={`fixed inset-0 z-50 md:hidden ${mobileOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!mobileOpen}
      >
        <div
          className={`absolute inset-0 bg-overlay transition-opacity duration-300 motion-reduce:transition-none ${mobileOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setMobileOpen(false)}
          aria-hidden
        />
        <div
          className={`absolute inset-0 transition-transform duration-300 ease-out motion-reduce:transition-none ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          {renderSidebar(true)}
        </div>
      </div>
    </>
  );
}