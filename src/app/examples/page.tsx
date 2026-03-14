"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Toggle from "@/components/ui/Toggle";
import Table from "@/components/ui/Table";
import Tabs from "@/components/ui/Tabs";
import Avatar from "@/components/ui/Avatar";
import Checkbox from "@/components/ui/Checkbox";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Dropdown from "@/components/ui/Dropdown";
import Pagination from "@/components/ui/Pagination";
import EmptyState from "@/components/ui/EmptyState";
import Divider from "@/components/ui/Divider";
import ProgressBar from "@/components/ui/ProgressBar";
import DescriptionList from "@/components/ui/DescriptionList";
import RadioGroup from "@/components/ui/RadioGroup";
import Stepper from "@/components/ui/Stepper";
import Textarea from "@/components/ui/Textarea";
import Hero from "@/components/ui/Hero";
import FeatureGrid from "@/components/ui/FeatureGrid";
import CTASection from "@/components/ui/CTASection";
import PricingTier from "@/components/ui/PricingTier";
import TestimonialCard from "@/components/ui/TestimonialCard";
import LogoCloud from "@/components/ui/LogoCloud";
import Newsletter from "@/components/ui/Newsletter";
import FAQ from "@/components/ui/FAQ";
import BlogCard from "@/components/ui/BlogCard";
import ProductCard from "@/components/ui/ProductCard";
import Rating from "@/components/ui/Rating";
import CartItem from "@/components/ui/CartItem";
import OrderSummary from "@/components/ui/OrderSummary";
import CategoryFilter from "@/components/ui/CategoryFilter";
import PromoSection from "@/components/ui/PromoSection";
import StatCard from "@/components/ui/StatCard";
import { DollarSign, Users, TrendingUp, BarChart3, ArrowRight, Check, Star, Zap, Shield, Search, Lock, Mail, ChevronDown, MoreHorizontal, Eye, CreditCard, Bell, User, Settings, Key, AlertTriangle, Home, Layers, Rocket, Globe, Image as ImageIcon, Package, Truck, RotateCcw } from "lucide-react";

function DashboardExample() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold">Dashboard</h3>
        <Button size="sm" variant="secondary">Export</Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Revenue", value: "$48.2K", change: "+12%", icon: DollarSign, color: "success" as const },
          { label: "Users", value: "2,847", change: "+5.3%", icon: Users, color: "info" as const },
          { label: "Growth", value: "18.2%", change: "+2.1%", icon: TrendingUp, color: "accent" as const },
          { label: "Sessions", value: "12.4K", change: "-0.8%", icon: BarChart3, color: "warning" as const },
        ].map((stat) => (
          <Card key={stat.label}>
            <div className="flex items-start justify-between mb-2">
              <p className="text-xs text-[var(--color-text-muted)]">{stat.label}</p>
              <stat.icon size={16} className="text-[var(--color-text-muted)]" />
            </div>
            <p className="text-2xl font-bold mb-1">{stat.value}</p>
            <Badge color={stat.color} size="sm">{stat.change}</Badge>
          </Card>
        ))}
      </div>

      <Tabs
        tabs={[
          {
            label: "Recent Orders",
            content: (
              <Table
                columns={[
                  { key: "id", header: "Order ID" },
                  { key: "customer", header: "Customer" },
                  { key: "amount", header: "Amount" },
                  { key: "status", header: "Status" },
                ]}
                data={[
                  { id: "#4281", customer: "Alice Chen", amount: "$249.00", status: "Completed" },
                  { id: "#4282", customer: "Bob Park", amount: "$129.00", status: "Processing" },
                  { id: "#4283", customer: "Carol Wu", amount: "$89.00", status: "Shipped" },
                  { id: "#4284", customer: "Dan Lee", amount: "$349.00", status: "Completed" },
                ]}
              />
            ),
          },
          {
            label: "Top Products",
            content: (
              <div className="space-y-3">
                {["Analytics Pro", "Dashboard Kit", "API Gateway"].map((p, i) => (
                  <div key={p} className="flex items-center justify-between p-3 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)]">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium text-[var(--color-text-muted)] w-6">{i + 1}</span>
                      <span className="text-sm">{p}</span>
                    </div>
                    <Badge color="accent" size="sm">{(100 - i * 20)}+ sales</Badge>
                  </div>
                ))}
              </div>
            ),
          },
        ]}
      />
    </div>
  );
}

function SettingsExample() {
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [analytics, setAnalytics] = useState(false);

  return (
    <div className="space-y-8 max-w-2xl">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold">Settings</h3>
        <Button size="sm">Save Changes</Button>
      </div>

      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-4">Profile</h4>
          <Card>
            <div className="flex items-center gap-4 mb-6">
              <Avatar name="Kushan Patel" size="lg" />
              <div>
                <p className="font-semibold">Kushan Patel</p>
                <p className="text-sm text-[var(--color-text-muted)]">kushan@nyxworks.ai</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Input label="First Name" defaultValue="Kushan" />
              <Input label="Last Name" defaultValue="Patel" />
              <Input label="Email" type="email" defaultValue="kushan@nyxworks.ai" />
              <Select label="Timezone" options={[
                { value: "pst", label: "Pacific Time (PT)" },
                { value: "est", label: "Eastern Time (ET)" },
                { value: "utc", label: "UTC" },
              ]} />
            </div>
          </Card>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-4">Preferences</h4>
          <Card>
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Dark Mode</p>
                  <p className="text-xs text-[var(--color-text-muted)]">Use dark theme across the application</p>
                </div>
                <Toggle label="" checked={darkMode} onChange={setDarkMode} />
              </div>
              <div className="border-t border-[var(--color-border)]" />
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Email Notifications</p>
                  <p className="text-xs text-[var(--color-text-muted)]">Receive updates via email</p>
                </div>
                <Toggle label="" checked={notifications} onChange={setNotifications} />
              </div>
              <div className="border-t border-[var(--color-border)]" />
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Usage Analytics</p>
                  <p className="text-xs text-[var(--color-text-muted)]">Help improve the product with anonymous data</p>
                </div>
                <Toggle label="" checked={analytics} onChange={setAnalytics} />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

function LandingExample() {
  return (
    <div className="space-y-16">
      {/* Hero */}
      <div className="text-center py-12">
        <Badge color="accent" size="md">Now in Beta</Badge>
        <h2 className="text-4xl font-bold mt-4 mb-4">Build faster with NyxWorks</h2>
        <p className="text-[var(--color-text-secondary)] max-w-lg mx-auto mb-8">
          The modern toolkit for building beautiful, consistent applications.
        </p>
        <div className="flex gap-3 justify-center">
          <Button size="lg">Get Started <ArrowRight size={16} /></Button>
          <Button size="lg" variant="secondary">View Docs</Button>
        </div>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { icon: Zap, title: "Lightning Fast", desc: "Optimized for performance with zero runtime overhead." },
          { icon: Shield, title: "Secure by Default", desc: "Built-in security best practices and regular audits." },
          { icon: Star, title: "Developer First", desc: "Intuitive APIs designed for developer productivity." },
        ].map((f) => (
          <Card key={f.title} variant="interactive">
            <f.icon size={24} className="text-[var(--color-accent-light)] mb-3" />
            <h3 className="font-semibold mb-2">{f.title}</h3>
            <p className="text-sm text-[var(--color-text-muted)]">{f.desc}</p>
          </Card>
        ))}
      </div>

      {/* Pricing */}
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { name: "Starter", price: "$0", features: ["5 projects", "Basic analytics", "Community support"] },
          { name: "Pro", price: "$29", features: ["Unlimited projects", "Advanced analytics", "Priority support", "Custom domains"], featured: true },
          { name: "Enterprise", price: "Custom", features: ["Everything in Pro", "SSO & SAML", "Dedicated support", "SLA guarantee"] },
        ].map((plan) => (
          <Card key={plan.name} variant={plan.featured ? "featured" : "default"}>
            <h3 className="font-semibold mb-1">{plan.name}</h3>
            <p className="text-3xl font-bold mb-4">{plan.price}<span className="text-sm font-normal text-[var(--color-text-muted)]">/mo</span></p>
            <ul className="space-y-2 mb-6">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                  <Check size={14} className="text-[var(--color-success)]" /> {f}
                </li>
              ))}
            </ul>
            <Button variant={plan.featured ? "primary" : "secondary"} className="w-full">
              Choose {plan.name}
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}

function AuthFlowExample() {
  const [authTab, setAuthTab] = useState<"signin" | "signup" | "forgot">("signin");
  const [agreeTerms, setAgreeTerms] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex gap-2">
        {(["signin", "signup", "forgot"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setAuthTab(tab)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              authTab === tab
                ? "bg-[var(--color-accent)]/10 text-[var(--color-accent-light)]"
                : "text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]"
            }`}
          >
            {tab === "signin" ? "Sign In" : tab === "signup" ? "Sign Up" : "Forgot Password"}
          </button>
        ))}
      </div>

      <div className="max-w-sm mx-auto py-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-2">
            {authTab === "signin" ? "Welcome back" : authTab === "signup" ? "Create account" : "Reset password"}
          </h3>
          <p className="text-sm text-[var(--color-text-muted)]">
            {authTab === "signin"
              ? "Sign in to your account to continue"
              : authTab === "signup"
                ? "Get started with a free account"
                : "We'll send you a reset link"}
          </p>
        </div>

        <div className="space-y-4">
          {authTab === "signup" && <Input label="Full Name" placeholder="John Doe" />}
          <Input label="Email" type="email" placeholder="you@example.com" />
          {authTab !== "forgot" && <Input label="Password" type="password" placeholder="••••••••" />}
          {authTab === "signup" && (
            <Checkbox label="I agree to the Terms of Service" checked={agreeTerms} onChange={setAgreeTerms} />
          )}
          {authTab === "signin" && (
            <div className="flex justify-end">
              <button onClick={() => setAuthTab("forgot")} className="text-xs text-[var(--color-accent-light)] hover:underline">
                Forgot password?
              </button>
            </div>
          )}
          <Button className="w-full">
            {authTab === "signin" ? "Sign In" : authTab === "signup" ? "Create Account" : "Send Reset Link"}
          </Button>

          {authTab !== "forgot" && (
            <>
              <Divider label="or" />
              <Button variant="secondary" className="w-full">
                <Mail size={16} /> Continue with Google
              </Button>
            </>
          )}

          <p className="text-xs text-center text-[var(--color-text-muted)]">
            {authTab === "signin" ? (
              <>Don&apos;t have an account?{" "}
                <button onClick={() => setAuthTab("signup")} className="text-[var(--color-accent-light)] hover:underline">Sign up</button>
              </>
            ) : authTab === "signup" ? (
              <>Already have an account?{" "}
                <button onClick={() => setAuthTab("signin")} className="text-[var(--color-accent-light)] hover:underline">Sign in</button>
              </>
            ) : (
              <button onClick={() => setAuthTab("signin")} className="text-[var(--color-accent-light)] hover:underline">Back to sign in</button>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

function CRUDExample() {
  const [crudPage, setCrudPage] = useState(1);
  const [crudView, setCrudView] = useState<"list" | "detail">("list");

  const projects = [
    { name: "Analytics Pro", status: "Active", owner: "Alice Chen", updated: "Mar 10, 2026" },
    { name: "Dashboard Kit", status: "Draft", owner: "Bob Park", updated: "Mar 8, 2026" },
    { name: "API Gateway", status: "Active", owner: "Carol Wu", updated: "Mar 5, 2026" },
    { name: "Auth Service", status: "Archived", owner: "Dan Lee", updated: "Feb 28, 2026" },
  ];

  if (crudView === "detail") {
    return (
      <div className="space-y-6">
        <Breadcrumb items={[
          { label: "Projects", href: "#" },
          { label: "Analytics Pro" },
        ]} />
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold">Analytics Pro</h3>
            <p className="text-sm text-[var(--color-text-muted)]">Real-time analytics dashboard</p>
          </div>
          <div className="flex gap-2">
            <Button variant="secondary" size="sm" onClick={() => setCrudView("list")}>Back</Button>
            <Button size="sm">Edit</Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <Tabs tabs={[
              {
                label: "Overview",
                content: (
                  <div className="space-y-4 py-2">
                    <p className="text-sm text-[var(--color-text-secondary)]">
                      A comprehensive analytics platform providing real-time insights into user behavior, conversion metrics, and system performance.
                    </p>
                    <DescriptionList items={[
                      { label: "Created", value: "Jan 15, 2026" },
                      { label: "Last Updated", value: "Mar 10, 2026" },
                      { label: "Version", value: "2.4.1" },
                      { label: "License", value: "MIT" },
                    ]} />
                  </div>
                ),
              },
              {
                label: "Activity",
                content: (
                  <div className="space-y-3 py-2">
                    {["Deployed v2.4.1", "Updated dashboard layout", "Fixed auth bug"].map((item, i) => (
                      <div key={item} className="flex items-center gap-3 text-sm">
                        <span className="text-xs text-[var(--color-text-muted)] w-20">
                          {i === 0 ? "2h ago" : i === 1 ? "1d ago" : "3d ago"}
                        </span>
                        <span className="text-[var(--color-text-secondary)]">{item}</span>
                      </div>
                    ))}
                  </div>
                ),
              },
            ]} />
          </div>
          <Card>
            <h4 className="text-sm font-medium mb-4">Details</h4>
            <DescriptionList
              layout="stacked"
              items={[
                { label: "Status", value: <Badge color="success" size="sm">Active</Badge> },
                { label: "Owner", value: "Alice Chen" },
                { label: "Team", value: "Platform" },
                { label: "Region", value: "US West" },
              ]}
            />
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold">Projects</h3>
        <Button size="sm">New Project</Button>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative flex-1 max-w-xs">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]" />
          <input
            placeholder="Search projects..."
            className="w-full pl-9 pr-4 py-2 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/30 transition-colors"
          />
        </div>
        <Dropdown
          trigger="Status"
          items={[
            { label: "All", onClick: () => {} },
            { label: "Active", onClick: () => {} },
            { label: "Archived", onClick: () => {} },
          ]}
        />
      </div>

      <div className="overflow-x-auto rounded-xl border border-[var(--color-border)]">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[var(--color-border)] bg-[var(--color-bg)]">
              <th className="text-left px-4 py-3 font-medium text-[var(--color-text-muted)]">Name</th>
              <th className="text-left px-4 py-3 font-medium text-[var(--color-text-muted)]">Status</th>
              <th className="text-left px-4 py-3 font-medium text-[var(--color-text-muted)]">Owner</th>
              <th className="text-left px-4 py-3 font-medium text-[var(--color-text-muted)]">Updated</th>
              <th className="px-4 py-3 w-10"></th>
            </tr>
          </thead>
          <tbody>
            {projects.map((p) => (
              <tr key={p.name} className="border-b border-[var(--color-border)] last:border-0 hover:bg-[var(--color-bg-card-hover)] transition-colors">
                <td className="px-4 py-3">
                  <button onClick={() => setCrudView("detail")} className="font-medium text-[var(--color-text-primary)] hover:text-[var(--color-accent-light)]">
                    {p.name}
                  </button>
                </td>
                <td className="px-4 py-3">
                  <Badge
                    size="sm"
                    color={p.status === "Active" ? "success" : p.status === "Draft" ? "warning" : "default"}
                  >
                    {p.status}
                  </Badge>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <Avatar name={p.owner} size="sm" />
                    <span className="text-[var(--color-text-secondary)]">{p.owner}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-[var(--color-text-muted)]">{p.updated}</td>
                <td className="px-4 py-3">
                  <Dropdown
                    trigger={<MoreHorizontal size={16} />}
                    items={[
                      { label: "View", onClick: () => setCrudView("detail") },
                      { label: "Edit", onClick: () => {} },
                      { label: "Archive", onClick: () => {} },
                      { label: "Delete", onClick: () => {} },
                    ]}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination page={crudPage} totalPages={3} onChange={setCrudPage} />
    </div>
  );
}

function AccountSettingsExample() {
  const [settingsTab, setSettingsTab] = useState("profile");
  const [twoFactor, setTwoFactor] = useState(false);
  const [emailNotif, setEmailNotif] = useState(true);
  const [pushNotif, setPushNotif] = useState(false);
  const [weeklyDigest, setWeeklyDigest] = useState(true);

  const navItems = [
    { id: "profile", label: "Profile", icon: User },
    { id: "security", label: "Security", icon: Key },
    { id: "billing", label: "Billing", icon: CreditCard },
    { id: "notifications", label: "Notifications", icon: Bell },
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold">Account Settings</h3>

      <div className="flex flex-col md:flex-row gap-6">
        <nav className="md:w-48 shrink-0">
          <div className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setSettingsTab(item.id)}
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                  settingsTab === item.id
                    ? "bg-[var(--color-accent)]/10 text-[var(--color-accent-light)]"
                    : "text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-card-hover)]"
                }`}
              >
                <item.icon size={16} />
                {item.label}
              </button>
            ))}
          </div>
        </nav>

        <div className="flex-1 min-w-0">
          {settingsTab === "profile" && (
            <Card>
              <h4 className="font-semibold mb-6">Profile Information</h4>
              <div className="flex items-center gap-4 mb-6">
                <Avatar name="Kushan Patel" size="lg" />
                <Button variant="secondary" size="sm">Change Photo</Button>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <Input label="First Name" defaultValue="Kushan" />
                <Input label="Last Name" defaultValue="Patel" />
                <Input label="Email" type="email" defaultValue="kushan@nyxworks.ai" className="sm:col-span-2" />
              </div>
              <Textarea label="Bio" placeholder="Tell us about yourself" />
              <div className="flex gap-3 mt-6 justify-end">
                <Button variant="ghost">Cancel</Button>
                <Button>Save Changes</Button>
              </div>
            </Card>
          )}

          {settingsTab === "security" && (
            <div className="space-y-6">
              <Card>
                <h4 className="font-semibold mb-4">Change Password</h4>
                <div className="space-y-4 max-w-md">
                  <Input label="Current Password" type="password" placeholder="••••••••" />
                  <Input label="New Password" type="password" placeholder="••••••••" />
                  <Input label="Confirm Password" type="password" placeholder="••••••••" />
                </div>
                <div className="mt-6">
                  <Button>Update Password</Button>
                </div>
              </Card>
              <Card>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold">Two-Factor Authentication</h4>
                    <p className="text-sm text-[var(--color-text-muted)] mt-1">Add an extra layer of security to your account</p>
                  </div>
                  <Toggle label="" checked={twoFactor} onChange={setTwoFactor} />
                </div>
              </Card>
            </div>
          )}

          {settingsTab === "billing" && (
            <div className="space-y-6">
              <Card>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h4 className="font-semibold">Current Plan</h4>
                    <p className="text-sm text-[var(--color-text-muted)] mt-1">You are on the <Badge color="accent" size="sm">Pro</Badge> plan</p>
                  </div>
                  <Button variant="secondary" size="sm">Upgrade</Button>
                </div>
                <DescriptionList items={[
                  { label: "Plan", value: "Pro — $29/mo" },
                  { label: "Billing Cycle", value: "Monthly" },
                  { label: "Next Payment", value: "Apr 1, 2026" },
                  { label: "Payment Method", value: "•••• 4242" },
                ]} />
              </Card>
              <Card>
                <h4 className="font-semibold mb-4">Usage</h4>
                <div className="space-y-4">
                  <ProgressBar value={72} label="API Requests" showValue color="accent" />
                  <ProgressBar value={45} label="Storage" showValue color="info" />
                  <ProgressBar value={91} label="Bandwidth" showValue color="warning" />
                </div>
              </Card>
            </div>
          )}

          {settingsTab === "notifications" && (
            <Card>
              <h4 className="font-semibold mb-6">Notification Preferences</h4>
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Email Notifications</p>
                    <p className="text-xs text-[var(--color-text-muted)]">Receive updates via email</p>
                  </div>
                  <Toggle label="" checked={emailNotif} onChange={setEmailNotif} />
                </div>
                <Divider spacing="sm" />
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Push Notifications</p>
                    <p className="text-xs text-[var(--color-text-muted)]">Get notified in your browser</p>
                  </div>
                  <Toggle label="" checked={pushNotif} onChange={setPushNotif} />
                </div>
                <Divider spacing="sm" />
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Weekly Digest</p>
                    <p className="text-xs text-[var(--color-text-muted)]">Summary of activity every Monday</p>
                  </div>
                  <Toggle label="" checked={weeklyDigest} onChange={setWeeklyDigest} />
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}

function OnboardingExample() {
  const [step, setStep] = useState(0);
  const [plan, setPlan] = useState("pro");

  return (
    <div className="max-w-2xl mx-auto space-y-8 py-4">
      <Stepper
        steps={[
          { label: "Account" },
          { label: "Workspace" },
          { label: "Invite" },
        ]}
        currentStep={step}
      />

      <Card>
        {step === 0 && (
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Create your account</h4>
            <p className="text-sm text-[var(--color-text-muted)]">Enter your details to get started.</p>
            <Input label="Full Name" placeholder="John Doe" />
            <Input label="Email" type="email" placeholder="you@example.com" />
            <Input label="Password" type="password" placeholder="••••••••" />
          </div>
        )}

        {step === 1 && (
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Set up your workspace</h4>
            <p className="text-sm text-[var(--color-text-muted)]">Configure your team workspace.</p>
            <Input label="Workspace Name" placeholder="My Team" />
            <RadioGroup
              label="Select a plan"
              options={[
                { value: "starter", label: "Starter", description: "Free — 5 projects, basic analytics" },
                { value: "pro", label: "Pro", description: "$29/mo — Unlimited projects, priority support" },
                { value: "enterprise", label: "Enterprise", description: "Custom — SSO, SLA, dedicated support" },
              ]}
              value={plan}
              onChange={setPlan}
            />
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Invite your team</h4>
            <p className="text-sm text-[var(--color-text-muted)]">Add teammates by email. You can always do this later.</p>
            <div className="flex gap-2">
              <Input placeholder="teammate@example.com" />
              <Button variant="secondary">Add</Button>
            </div>
            <div className="space-y-2">
              {["alice@example.com", "bob@example.com"].map((email) => (
                <div key={email} className="flex items-center justify-between p-3 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)]">
                  <div className="flex items-center gap-2">
                    <Avatar name={email.split("@")[0]} size="sm" />
                    <span className="text-sm">{email}</span>
                  </div>
                  <Badge color="info" size="sm">Pending</Badge>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex justify-between mt-8 pt-4 border-t border-[var(--color-border)]">
          <Button variant="ghost" onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0}>
            Back
          </Button>
          <Button onClick={() => setStep(Math.min(2, step + 1))}>
            {step === 2 ? "Complete Setup" : "Continue"}
          </Button>
        </div>
      </Card>
    </div>
  );
}

function PricingExample() {
  const [annual, setAnnual] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const plans = [
    {
      name: "Starter",
      monthly: 0,
      annual: 0,
      description: "For individuals and small side projects.",
      features: ["5 projects", "1 GB storage", "Basic analytics", "Community support"],
    },
    {
      name: "Pro",
      monthly: 29,
      annual: 290,
      description: "For growing teams who need more power.",
      features: ["Unlimited projects", "50 GB storage", "Advanced analytics", "Priority support", "Custom domains", "API access"],
      featured: true,
    },
    {
      name: "Enterprise",
      monthly: 99,
      annual: 990,
      description: "For organizations with advanced needs.",
      features: ["Everything in Pro", "Unlimited storage", "SSO & SAML", "Dedicated support", "SLA guarantee", "Custom integrations"],
    },
  ];

  const faqs = [
    { q: "Can I switch plans later?", a: "Yes, you can upgrade or downgrade at any time. Changes take effect at the start of your next billing cycle." },
    { q: "Is there a free trial?", a: "The Starter plan is free forever. Pro and Enterprise plans include a 14-day free trial." },
    { q: "What payment methods do you accept?", a: "We accept all major credit cards, PayPal, and bank transfers for Enterprise plans." },
  ];

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h3 className="text-3xl font-bold mb-3">Simple, transparent pricing</h3>
        <p className="text-[var(--color-text-secondary)] max-w-md mx-auto mb-6">
          Choose the plan that fits your needs. No hidden fees.
        </p>
        <div className="flex items-center justify-center gap-3">
          <span className={`text-sm ${!annual ? "text-[var(--color-text-primary)]" : "text-[var(--color-text-muted)]"}`}>Monthly</span>
          <Toggle label="" checked={annual} onChange={setAnnual} />
          <span className={`text-sm ${annual ? "text-[var(--color-text-primary)]" : "text-[var(--color-text-muted)]"}`}>
            Annual <Badge color="success" size="sm">Save 17%</Badge>
          </span>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan) => {
          const price = annual ? plan.annual : plan.monthly;
          return (
            <Card key={plan.name} variant={plan.featured ? "featured" : "default"}>
              {plan.featured && (
                <div className="mb-3"><Badge color="accent" size="sm">Most Popular</Badge></div>
              )}
              <h4 className="font-semibold text-lg">{plan.name}</h4>
              <p className="text-sm text-[var(--color-text-muted)] mt-1 mb-4">{plan.description}</p>
              <p className="text-4xl font-bold mb-1">
                ${price}
                <span className="text-sm font-normal text-[var(--color-text-muted)]">
                  /{annual ? "yr" : "mo"}
                </span>
              </p>
              <Divider spacing="sm" />
              <ul className="space-y-2 mb-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                    <Check size={14} className="text-[var(--color-success)] shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <Button variant={plan.featured ? "primary" : "secondary"} className="w-full">
                {price === 0 ? "Get Started Free" : `Choose ${plan.name}`}
              </Button>
            </Card>
          );
        })}
      </div>

      <div className="max-w-2xl mx-auto">
        <h4 className="text-xl font-semibold text-center mb-6">Frequently asked questions</h4>
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div key={faq.q} className="rounded-xl border border-[var(--color-border)] overflow-hidden">
              <button
                onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-[var(--color-text-primary)] hover:bg-[var(--color-bg-card-hover)] transition-colors"
              >
                {faq.q}
                <ChevronDown
                  size={16}
                  className={`text-[var(--color-text-muted)] transition-transform ${faqOpen === i ? "rotate-180" : ""}`}
                />
              </button>
              {faqOpen === i && (
                <div className="px-4 pb-3">
                  <p className="text-sm text-[var(--color-text-secondary)]">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ErrorPageExample() {
  return (
    <div className="text-center py-16 space-y-6">
      <div className="flex justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-error)]/10">
          <AlertTriangle size={32} className="text-[var(--color-error)]" />
        </div>
      </div>
      <div>
        <p className="text-6xl font-bold text-[var(--color-text-primary)]">404</p>
        <h3 className="text-xl font-semibold mt-2">Page not found</h3>
        <p className="text-sm text-[var(--color-text-muted)] mt-2 max-w-sm mx-auto">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It may have been moved or deleted.
        </p>
      </div>
      <div className="flex items-center justify-center gap-3">
        <Button variant="primary">
          <Home size={16} className="mr-2 inline-block" />
          Go Home
        </Button>
        <Button variant="secondary">Contact Support</Button>
      </div>
    </div>
  );
}

function SaaSLandingExample() {
  return (
    <div className="space-y-0 overflow-hidden rounded-2xl">
      <Hero
        eyebrow={<Badge color="accent">Now in Beta</Badge>}
        title="Ship products 10x faster"
        subtitle="The all-in-one platform for modern SaaS teams to build, deploy, and scale."
        actions={<><Button size="lg">Start Free Trial</Button><Button size="lg" variant="secondary">Watch Demo</Button></>}
        gradient
      />
      <LogoCloud
        title="Trusted by 1,000+ companies"
        logos={[
          { content: <span className="text-lg font-bold text-[var(--color-text-primary)]">Acme</span> },
          { content: <span className="text-lg font-bold text-[var(--color-text-primary)]">Globex</span> },
          { content: <span className="text-lg font-bold text-[var(--color-text-primary)]">Initech</span> },
          { content: <span className="text-lg font-bold text-[var(--color-text-primary)]">Hooli</span> },
          { content: <span className="text-lg font-bold text-[var(--color-text-primary)]">Pied Piper</span> },
        ]}
        className="pb-12"
      />
      <FeatureGrid
        title="Everything you need"
        subtitle="Powerful primitives that compose into any interface."
        features={[
          { icon: <Zap size={24} />, title: "Lightning Fast", description: "Sub-100ms response times with edge computing." },
          { icon: <Shield size={24} />, title: "Enterprise Security", description: "SOC2, HIPAA, and GDPR compliance built-in." },
          { icon: <BarChart3 size={24} />, title: "Real-time Analytics", description: "Track every metric that matters to your business." },
          { icon: <Layers size={24} />, title: "Composable", description: "Mix and match over 60 components freely." },
          { icon: <Rocket size={24} />, title: "One-click Deploy", description: "Ship to production in seconds, not hours." },
          { icon: <Globe size={24} />, title: "Global CDN", description: "Serve content from 200+ edge locations." },
        ]}
        columns={3}
      />
      <div className="px-6 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard label="Components" value="63" change="+18" icon={<Layers size={16} />} />
          <StatCard label="Companies" value="1,200+" change="+32%" icon={<Users size={16} />} />
          <StatCard label="Uptime" value="99.99%" icon={<Shield size={16} />} />
          <StatCard label="Deploy Speed" value="<2s" icon={<Rocket size={16} />} />
        </div>
      </div>
      <div className="px-6 py-12">
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] text-center mb-8">What people say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <TestimonialCard quote="Cut our development time in half." author="Sarah Chen" role="CTO, TechCo" avatar={<Avatar name="SC" size="sm" />} />
          <TestimonialCard quote="Best design system we&apos;ve ever used." author="Alex Rivera" role="Lead Designer" avatar={<Avatar name="AR" size="sm" />} variant="featured" />
          <TestimonialCard quote="The dark mode support is incredible." author="Maria Lopez" role="Frontend Engineer" avatar={<Avatar name="ML" size="sm" />} />
        </div>
      </div>
      <CTASection variant="banner" title="Ready to get started?" description="Start building for free — no credit card required." actions={<button className="px-4 py-2 rounded-lg bg-white text-[var(--color-accent)] font-medium text-sm hover:bg-white/90 transition-colors">Sign Up Free</button>} />
      <div className="py-12">
        <FAQ
          title="Frequently Asked Questions"
          items={[
            { question: "Is there a free plan?", answer: "Yes! Our Starter plan is free forever with up to 5 projects." },
            { question: "Can I cancel anytime?", answer: "Absolutely. Cancel your subscription at any time, no questions asked." },
            { question: "Do you offer enterprise pricing?", answer: "Yes, contact our sales team for custom enterprise plans with SLA guarantees." },
          ]}
        />
      </div>
    </div>
  );
}

function ProductLaunchExample() {
  return (
    <div className="space-y-0 overflow-hidden rounded-2xl">
      <Hero
        variant="withScreenshot"
        eyebrow={<Badge color="accent">Just Launched</Badge>}
        title="Meet NyxWorks 2.0"
        subtitle="63 components, 15 templates, dark mode, and full Tailwind UI coverage."
        actions={<><Button size="lg">Get Started</Button><Button size="lg" variant="ghost">View Components →</Button></>}
        media={<div className="aspect-video bg-[var(--color-bg-card-hover)] flex items-center justify-center"><ImageIcon size={48} className="text-[var(--color-text-muted)]" /></div>}
        gradient
      />
      <FeatureGrid
        layout="alternating"
        title="What&apos;s new"
        features={[
          { title: "Marketing Components", description: "Hero sections, pricing tiers, testimonials, FAQ accordions, and more — everything you need for landing pages.", media: <div className="aspect-video bg-[var(--color-bg-card-hover)] flex items-center justify-center"><Rocket size={32} className="text-[var(--color-text-muted)]" /></div> },
          { title: "Ecommerce Suite", description: "Product cards, cart items, order summaries, category filters, and ratings — build a complete storefront.", media: <div className="aspect-video bg-[var(--color-bg-card-hover)] flex items-center justify-center"><Package size={32} className="text-[var(--color-text-muted)]" /></div> },
        ]}
      />
      <div className="px-6 py-16">
        <h2 className="text-2xl font-bold text-center mb-8 text-[var(--color-text-primary)]">Simple, transparent pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <PricingTier name="Hobby" price="$0" priceSuffix="/mo" description="For side projects" features={[{text:"5 projects"},{text:"Community support"},{text:"Basic components"}]} cta={<Button variant="secondary" className="w-full">Get Started</Button>} />
          <PricingTier name="Pro" price="$29" priceSuffix="/mo" description="For teams" featured badge={<Badge color="accent" size="sm">Popular</Badge>} features={[{text:"Unlimited projects"},{text:"Priority support"},{text:"All components"},{text:"Templates"}]} cta={<Button className="w-full">Get Started</Button>} />
          <PricingTier name="Enterprise" price="$99" priceSuffix="/mo" description="Custom solutions" features={[{text:"Everything in Pro"},{text:"SSO & SAML"},{text:"Dedicated support"},{text:"SLA guarantee"}]} cta={<Button variant="secondary" className="w-full">Contact Sales</Button>} />
        </div>
      </div>
      <CTASection variant="card" title="Start building today" description="Join thousands of developers shipping faster." actions={<><Button size="lg">Sign Up Free</Button><Button size="lg" variant="ghost">Learn More</Button></>} />
      <div className="py-12 px-6">
        <Newsletter variant="centered" title="Get launch updates" description="Be the first to know about new features and releases." />
      </div>
    </div>
  );
}

function BlogListExample() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-bold text-[var(--color-text-primary)]">Blog</h3>
        <p className="text-sm text-[var(--color-text-muted)] mt-1">Latest articles and tutorials</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { title: "Getting Started with NyxWorks", category: "Tutorial", date: "Mar 10, 2026", author: "Jane Smith" },
          { title: "Dark Mode Best Practices", category: "Design", date: "Mar 8, 2026", author: "Alex Kim" },
          { title: "Building Accessible Components", category: "Engineering", date: "Mar 5, 2026", author: "Sam Lee" },
          { title: "Component Architecture Patterns", category: "Engineering", date: "Mar 3, 2026", author: "Jane Smith" },
          { title: "CSS Variables vs Tailwind Config", category: "Tutorial", date: "Feb 28, 2026", author: "Alex Kim" },
          { title: "Designing for Scale", category: "Design", date: "Feb 25, 2026", author: "Sam Lee" },
        ].map((post) => (
          <BlogCard
            key={post.title}
            title={post.title}
            excerpt="A brief introduction to the topic and what you&apos;ll learn in this article."
            image={<div className="w-full h-full bg-[var(--color-bg-card-hover)] flex items-center justify-center"><ImageIcon size={24} className="text-[var(--color-text-muted)]" /></div>}
            category={<Badge color="accent" size="sm">{post.category}</Badge>}
            author={post.author}
            date={post.date}
            href="#"
          />
        ))}
      </div>
      <div className="flex justify-center">
        <Pagination page={1} totalPages={5} onChange={() => {}} />
      </div>
    </div>
  );
}

function ProductCatalogExample() {
  const [filters, setFilters] = useState<Record<string, string[]>>({ Category: ["shoes"] });
  return (
    <div className="flex gap-8">
      <div className="hidden md:block w-56 shrink-0">
        <h4 className="text-sm font-semibold text-[var(--color-text-primary)] mb-4">Filters</h4>
        <CategoryFilter
          groups={[
            { label: "Category", options: [{ value: "shoes", label: "Shoes", count: 42 }, { value: "clothing", label: "Clothing", count: 67 }, { value: "accessories", label: "Accessories", count: 23 }] },
            { label: "Color", options: [{ value: "black", label: "Black", count: 18 }, { value: "white", label: "White", count: 12 }, { value: "blue", label: "Blue", count: 8 }] },
            { label: "Size", options: [{ value: "s", label: "Small" }, { value: "m", label: "Medium" }, { value: "l", label: "Large" }] },
          ]}
          selected={filters}
          onChange={setFilters}
        />
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-[var(--color-text-muted)]">Showing 1–6 of 42 results</p>
          <Select options={[{ label: "Newest", value: "newest" }, { label: "Price: Low", value: "price-asc" }, { label: "Price: High", value: "price-desc" }]} />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: "Classic T-Shirt", price: "$35", rating: 4.5, reviews: 128 },
            { title: "Running Shoes", price: "$120", rating: 4.8, reviews: 256, badge: "New" },
            { title: "Leather Wallet", price: "$65", originalPrice: "$85", rating: 4.2, reviews: 89, badge: "Sale" },
            { title: "Denim Jacket", price: "$90", rating: 4.6, reviews: 167 },
            { title: "Canvas Backpack", price: "$55", rating: 4.4, reviews: 203 },
            { title: "Wool Scarf", price: "$28", originalPrice: "$40", rating: 4.1, reviews: 54, badge: "Sale" },
          ].map((p) => (
            <ProductCard
              key={p.title}
              title={p.title}
              price={p.price}
              originalPrice={p.originalPrice}
              rating={p.rating}
              reviewCount={p.reviews}
              image={<div className="w-full h-full bg-[var(--color-bg-card-hover)] flex items-center justify-center"><Package size={24} className="text-[var(--color-text-muted)]" /></div>}
              badge={p.badge ? <Badge color={p.badge === "Sale" ? "error" : "accent"} size="sm">{p.badge}</Badge> : undefined}
              action={<Button size="sm" className="w-full mt-2">Add to Cart</Button>}
            />
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <Pagination page={1} totalPages={7} onChange={() => {}} />
        </div>
      </div>
    </div>
  );
}

function ShoppingCartExample() {
  const [qty1, setQty1] = useState(2);
  const [qty2, setQty2] = useState(1);
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-[var(--color-text-primary)]">Shopping Cart</h3>
      <PromoSection
        bg="card"
        items={[
          { icon: <Truck size={18} />, title: "Free Shipping", description: "On orders over $50" },
          { icon: <RotateCcw size={18} />, title: "Easy Returns", description: "30-day return policy" },
          { icon: <Lock size={18} />, title: "Secure Checkout", description: "SSL encrypted" },
        ]}
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 divide-y divide-[var(--color-border)]">
          <CartItem title="Classic T-Shirt" variant="Black / Medium" price="$35.00" quantity={qty1} onQuantityChange={setQty1} onRemove={() => {}} image={<div className="w-full h-full bg-[var(--color-bg-card-hover)] flex items-center justify-center"><Package size={20} className="text-[var(--color-text-muted)]" /></div>} />
          <CartItem title="Running Shoes" variant="White / Size 10" price="$120.00" quantity={qty2} onQuantityChange={setQty2} onRemove={() => {}} image={<div className="w-full h-full bg-[var(--color-bg-card-hover)] flex items-center justify-center"><Package size={20} className="text-[var(--color-text-muted)]" /></div>} />
        </div>
        <div>
          <OrderSummary
            lines={[
              { label: "Subtotal", value: "$190.00" },
              { label: "Shipping", value: "Free" },
              { label: "Tax", value: "$15.20" },
              { label: "Total", value: "$205.20", isTotal: true },
            ]}
            action={<Button className="w-full">Proceed to Checkout</Button>}
          />
        </div>
      </div>
    </div>
  );
}

function ProductDetailExample() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="aspect-square rounded-2xl bg-[var(--color-bg-card-hover)] border border-[var(--color-border)] flex items-center justify-center">
          <Package size={64} className="text-[var(--color-text-muted)]" />
        </div>
        <div className="space-y-4">
          <Badge color="accent" size="sm">New Arrival</Badge>
          <h3 className="text-2xl font-bold text-[var(--color-text-primary)]">Premium Leather Jacket</h3>
          <Rating value={4.7} showValue reviewCount="203 reviews" />
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-[var(--color-text-primary)]">$249</span>
            <span className="text-lg text-[var(--color-text-muted)] line-through">$329</span>
            <Badge color="error" size="sm">24% off</Badge>
          </div>
          <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
            Crafted from premium full-grain leather with a buttery-soft interior lining. Features a classic motorcycle silhouette with modern tailoring.
          </p>
          <Divider />
          <div className="space-y-3">
            <Select label="Size" options={[{ label: "Small", value: "s" }, { label: "Medium", value: "m" }, { label: "Large", value: "l" }, { label: "X-Large", value: "xl" }]} />
            <div className="flex gap-3">
              <Button className="flex-1">Add to Cart</Button>
              <Button variant="secondary">♡</Button>
            </div>
          </div>
        </div>
      </div>
      <FeatureGrid
        title="Product Features"
        features={[
          { icon: <Shield size={20} />, title: "Full-Grain Leather", description: "Premium quality that ages beautifully over time." },
          { icon: <Zap size={20} />, title: "YKK Zippers", description: "Smooth, durable zippers built to last." },
          { icon: <Layers size={20} />, title: "Silk Lining", description: "Luxurious interior for all-day comfort." },
        ]}
        columns={3}
      />
      <div>
        <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4">Customer Reviews</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TestimonialCard variant="minimal" quote="Best jacket I&apos;ve ever owned. The leather quality is incredible." author="Mike Johnson" role="Verified Buyer" avatar={<Avatar name="MJ" size="sm" />} />
          <TestimonialCard variant="minimal" quote="Fits perfectly and looks even better in person." author="Emily Davis" role="Verified Buyer" avatar={<Avatar name="ED" size="sm" />} />
        </div>
      </div>
    </div>
  );
}

export default function ExamplesPage() {
  return (
    <>
      <div className="py-16 px-6">
        <div className="mx-auto max-w-6xl space-y-16">
          <AnimateOnScroll>
            <h1 className="text-3xl font-bold mb-2">Examples</h1>
            <div className="w-12 h-1 bg-[var(--color-accent)] rounded-full mb-4" />
            <p className="text-[var(--color-text-secondary)] mb-12">
              Full page layouts composed from the component library.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <section>
              <h2 className="text-2xl font-semibold mb-6">Dashboard</h2>
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
                <DashboardExample />
              </div>
            </section>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <section>
              <h2 className="text-2xl font-semibold mb-6">Settings Page</h2>
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
                <SettingsExample />
              </div>
            </section>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <section>
              <h2 className="text-2xl font-semibold mb-6">Landing Page</h2>
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
                <LandingExample />
              </div>
            </section>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <section>
              <h2 className="text-2xl font-semibold mb-6">Auth Flow</h2>
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
                <AuthFlowExample />
              </div>
            </section>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <section>
              <h2 className="text-2xl font-semibold mb-6">CRUD — Projects</h2>
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
                <CRUDExample />
              </div>
            </section>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <section>
              <h2 className="text-2xl font-semibold mb-6">Account Settings</h2>
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
                <AccountSettingsExample />
              </div>
            </section>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <section>
              <h2 className="text-2xl font-semibold mb-6">Onboarding Wizard</h2>
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
                <OnboardingExample />
              </div>
            </section>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <section>
              <h2 className="text-2xl font-semibold mb-6">Pricing Page</h2>
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
                <PricingExample />
              </div>
            </section>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <section>
              <h2 className="text-2xl font-semibold mb-6">404 Error Page</h2>
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
                <ErrorPageExample />
              </div>
            </section>
          </AnimateOnScroll>

          {/* Marketing Templates */}
          <AnimateOnScroll>
            <div className="pt-4">
              <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-1">Marketing Templates</h2>
              <p className="text-sm text-[var(--color-text-muted)]">Landing pages, product launches, and blog layouts.</p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <section>
              <h2 className="text-2xl font-semibold mb-6">SaaS Landing Page</h2>
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] overflow-hidden">
                <SaaSLandingExample />
              </div>
            </section>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <section>
              <h2 className="text-2xl font-semibold mb-6">Product Launch Page</h2>
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] overflow-hidden">
                <ProductLaunchExample />
              </div>
            </section>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <section>
              <h2 className="text-2xl font-semibold mb-6">Blog List</h2>
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
                <BlogListExample />
              </div>
            </section>
          </AnimateOnScroll>

          {/* Ecommerce Templates */}
          <AnimateOnScroll>
            <div className="pt-4">
              <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-1">Ecommerce Templates</h2>
              <p className="text-sm text-[var(--color-text-muted)]">Product catalog, shopping cart, and product detail pages.</p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <section>
              <h2 className="text-2xl font-semibold mb-6">Product Catalog</h2>
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
                <ProductCatalogExample />
              </div>
            </section>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <section>
              <h2 className="text-2xl font-semibold mb-6">Shopping Cart</h2>
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
                <ShoppingCartExample />
              </div>
            </section>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <section>
              <h2 className="text-2xl font-semibold mb-6">Product Detail</h2>
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
                <ProductDetailExample />
              </div>
            </section>
          </AnimateOnScroll>
        </div>
      </div>
      <Footer />
    </>
  );
}
