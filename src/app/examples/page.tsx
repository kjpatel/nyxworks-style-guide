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
import { DollarSign, Users, TrendingUp, BarChart3, ArrowRight, Check, Star, Zap, Shield } from "lucide-react";

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
        </div>
      </div>
      <Footer />
    </>
  );
}
