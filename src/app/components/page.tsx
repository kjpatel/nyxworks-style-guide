"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import Specimen from "@/components/styleguide/Specimen";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Select from "@/components/ui/Select";
import Checkbox from "@/components/ui/Checkbox";
import Toggle from "@/components/ui/Toggle";
import Modal from "@/components/ui/Modal";
import Alert from "@/components/ui/Alert";
import Table from "@/components/ui/Table";
import Tabs from "@/components/ui/Tabs";
import Tooltip from "@/components/ui/Tooltip";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Dropdown from "@/components/ui/Dropdown";
import Pagination from "@/components/ui/Pagination";
import Skeleton from "@/components/ui/Skeleton";
import Toast from "@/components/ui/Toast";
import EmptyState from "@/components/ui/EmptyState";
import Avatar from "@/components/ui/Avatar";
import Divider from "@/components/ui/Divider";
import ProgressBar from "@/components/ui/ProgressBar";
import DescriptionList from "@/components/ui/DescriptionList";
import RadioGroup from "@/components/ui/RadioGroup";
import Combobox from "@/components/ui/Combobox";
import Drawer from "@/components/ui/Drawer";
import Stepper from "@/components/ui/Stepper";
import CommandPalette from "@/components/ui/CommandPalette";
import Banner from "@/components/ui/Banner";
import ButtonGroup from "@/components/ui/ButtonGroup";
import StatCard from "@/components/ui/StatCard";
import StackedList from "@/components/ui/StackedList";
import SidebarNav from "@/components/ui/SidebarNav";
import PageHeading from "@/components/ui/PageHeading";
import Feed from "@/components/ui/Feed";
import MediaObject from "@/components/ui/MediaObject";
import CardHeading from "@/components/ui/CardHeading";
import SectionHeading from "@/components/ui/SectionHeading";
import ActionPanel from "@/components/ui/ActionPanel";
import FormLayout from "@/components/ui/FormLayout";
import InputGroup from "@/components/ui/InputGroup";
import Calendar from "@/components/ui/Calendar";
import GridList from "@/components/ui/GridList";
import Navbar from "@/components/ui/Navbar";
import ListContainer from "@/components/ui/ListContainer";
import Hero from "@/components/ui/Hero";
import FeatureGrid from "@/components/ui/FeatureGrid";
import CTASection from "@/components/ui/CTASection";
import PricingTier from "@/components/ui/PricingTier";
import TestimonialCard from "@/components/ui/TestimonialCard";
import LogoCloud from "@/components/ui/LogoCloud";
import Newsletter from "@/components/ui/Newsletter";
import FAQ from "@/components/ui/FAQ";
import TeamMember from "@/components/ui/TeamMember";
import BlogCard from "@/components/ui/BlogCard";
import FlyoutMenu from "@/components/ui/FlyoutMenu";
import ProductCard from "@/components/ui/ProductCard";
import Rating from "@/components/ui/Rating";
import PriceTag from "@/components/ui/PriceTag";
import CartItem from "@/components/ui/CartItem";
import OrderSummary from "@/components/ui/OrderSummary";
import CategoryFilter from "@/components/ui/CategoryFilter";
import PromoSection from "@/components/ui/PromoSection";
import { Search, Settings, User, FileText, Home, Megaphone, DollarSign, Users, GitCommit, MessageSquare, Check as CheckIcon, Mail, Globe, FolderOpen, Bell, Image as ImageIcon, Calendar as CalendarIcon, Zap, Shield, BarChart3, Layers, Rocket, Truck, RotateCcw, Lock, Twitter, Linkedin, Github, ChevronDown, Star, ShoppingCart, Package } from "lucide-react";

export default function ComponentsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [checkbox1, setCheckbox1] = useState(true);
  const [checkbox2, setCheckbox2] = useState(false);
  const [toggle1, setToggle1] = useState(true);
  const [toggle2, setToggle2] = useState(false);
  const [page, setPage] = useState(2);
  const [radioValue, setRadioValue] = useState("option1");
  const [comboValue, setComboValue] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [cmdOpen, setCmdOpen] = useState(false);
  const [bgView, setBgView] = useState("list");
  const [sidebarActive, setSidebarActive] = useState("dashboard");
  const [calendarSelected, setCalendarSelected] = useState<Date | undefined>(new Date(2026, 2, 13));
  const [sectionTab, setSectionTab] = useState("all");
  const [ratingValue, setRatingValue] = useState(0);
  const [cartQty, setCartQty] = useState(2);
  const [filters, setFilters] = useState<Record<string, string[]>>({ Category: ["shoes"] });

  return (
    <>
      <div className="py-16 px-6">
        <div className="mx-auto max-w-6xl space-y-10">
          <AnimateOnScroll>
            <h1 className="text-3xl font-bold mb-2">Components</h1>
            <div className="w-12 h-1 bg-[var(--color-accent)] rounded-full mb-4" />
            <p className="text-[var(--color-text-secondary)] mb-12">
              Live specimens with source code. Click the code icon to view implementation.
            </p>
          </AnimateOnScroll>

          {/* Button */}
          <Specimen
            title="Button"
            description="Primary, secondary, ghost, danger variants with sizes and loading state."
            code={`<Button variant="primary" size="md">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Danger</Button>
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
<Button loading>Loading</Button>
<Button disabled>Disabled</Button>`}
          >
            <div className="space-y-4">
              <div className="flex flex-wrap gap-3">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="danger">Danger</Button>
              </div>
              <div className="flex flex-wrap gap-3 items-center">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button loading>Loading</Button>
                <Button disabled>Disabled</Button>
              </div>
            </div>
          </Specimen>

          {/* Card */}
          <Specimen
            title="Card"
            description="Default, interactive (hover effects), and featured (accent border + glow)."
            code={`<Card>Default card content</Card>
<Card variant="interactive">Hover me</Card>
<Card variant="featured">Featured card</Card>`}
          >
            <div className="grid sm:grid-cols-3 gap-4">
              <Card>
                <p className="font-medium mb-1">Default</p>
                <p className="text-sm text-[var(--color-text-muted)]">Static card.</p>
              </Card>
              <Card variant="interactive">
                <p className="font-medium mb-1">Interactive</p>
                <p className="text-sm text-[var(--color-text-muted)]">Hover me.</p>
              </Card>
              <Card variant="featured">
                <p className="font-medium mb-1">Featured</p>
                <p className="text-sm text-[var(--color-text-muted)]">Accent glow.</p>
              </Card>
            </div>
          </Specimen>

          {/* Badge */}
          <Specimen
            title="Badge"
            description="Color-coded labels for status and categories."
            code={`<Badge>Default</Badge>
<Badge color="accent">Accent</Badge>
<Badge color="success">Success</Badge>
<Badge color="warning">Warning</Badge>
<Badge color="error">Error</Badge>
<Badge color="info">Info</Badge>
<Badge size="sm">Small</Badge>`}
          >
            <div className="flex flex-wrap gap-3">
              <Badge>Default</Badge>
              <Badge color="accent">Accent</Badge>
              <Badge color="success">Success</Badge>
              <Badge color="warning">Warning</Badge>
              <Badge color="error">Error</Badge>
              <Badge color="info">Info</Badge>
              <Badge size="sm" color="accent">Small</Badge>
            </div>
          </Specimen>

          {/* Input */}
          <Specimen
            title="Input"
            description="Text inputs with labels, placeholders, and error states."
            code={`<Input label="Name" placeholder="Enter your name" />
<Input label="Email" type="email" error="Invalid email address" />`}
          >
            <div className="grid sm:grid-cols-2 gap-4 max-w-xl">
              <Input label="Name" placeholder="Enter your name" />
              <Input label="Email" type="email" placeholder="you@example.com" error="Invalid email address" />
              <Input placeholder="No label" />
              <Input label="Disabled" placeholder="Can't type here" disabled />
            </div>
          </Specimen>

          {/* Textarea */}
          <Specimen
            title="Textarea"
            description="Multi-line text input with label and error support."
            code={`<Textarea label="Message" placeholder="Write something..." />
<Textarea label="Bio" error="Too long" />`}
          >
            <div className="max-w-xl space-y-4">
              <Textarea label="Message" placeholder="Write something..." />
              <Textarea label="Bio" placeholder="Tell us about yourself" error="Maximum 200 characters" />
            </div>
          </Specimen>

          {/* Select */}
          <Specimen
            title="Select"
            description="Dropdown select with custom chevron icon."
            code={`<Select
  label="Role"
  options={[
    { value: "dev", label: "Developer" },
    { value: "design", label: "Designer" },
    { value: "pm", label: "Product Manager" },
  ]}
/>`}
          >
            <div className="max-w-xs">
              <Select
                label="Role"
                options={[
                  { value: "", label: "Select a role..." },
                  { value: "dev", label: "Developer" },
                  { value: "design", label: "Designer" },
                  { value: "pm", label: "Product Manager" },
                ]}
              />
            </div>
          </Specimen>

          {/* Checkbox */}
          <Specimen
            title="Checkbox"
            description="Checkboxes with labels and disabled state."
            code={`<Checkbox label="Enable notifications" checked onChange={...} />
<Checkbox label="Disabled" disabled />`}
          >
            <div className="space-y-3">
              <Checkbox label="Enable notifications" checked={checkbox1} onChange={setCheckbox1} />
              <Checkbox label="Send weekly digest" checked={checkbox2} onChange={setCheckbox2} />
              <Checkbox label="Disabled option" disabled />
            </div>
          </Specimen>

          {/* Toggle */}
          <Specimen
            title="Toggle"
            description="On/off switch for boolean settings."
            code={`<Toggle label="Dark mode" checked onChange={...} />
<Toggle label="Disabled" disabled />`}
          >
            <div className="space-y-3">
              <Toggle label="Dark mode" checked={toggle1} onChange={setToggle1} />
              <Toggle label="Auto-save" checked={toggle2} onChange={setToggle2} />
              <Toggle label="Disabled" disabled />
            </div>
          </Specimen>

          {/* Modal */}
          <Specimen
            title="Modal"
            description="Dialog overlay with backdrop blur."
            code={`<Modal open={open} onClose={() => setOpen(false)} title="Confirm Action">
  <p>Are you sure?</p>
</Modal>`}
          >
            <div>
              <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
              <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="Confirm Action">
                <p className="text-[var(--color-text-secondary)] mb-4">Are you sure you want to proceed?</p>
                <div className="flex gap-3 justify-end">
                  <Button variant="ghost" onClick={() => setModalOpen(false)}>Cancel</Button>
                  <Button onClick={() => setModalOpen(false)}>Confirm</Button>
                </div>
              </Modal>
            </div>
          </Specimen>

          {/* Alert */}
          <Specimen
            title="Alert"
            description="Contextual messages for info, success, warning, and error."
            code={`<Alert variant="info" title="Note">Informational message.</Alert>
<Alert variant="success">Operation completed.</Alert>
<Alert variant="warning">Please review before proceeding.</Alert>
<Alert variant="error" title="Error">Something went wrong.</Alert>`}
          >
            <div className="space-y-3">
              <Alert variant="info" title="Note">This is an informational message.</Alert>
              <Alert variant="success">Operation completed successfully.</Alert>
              <Alert variant="warning">Please review before proceeding.</Alert>
              <Alert variant="error" title="Error">Something went wrong.</Alert>
            </div>
          </Specimen>

          {/* Table */}
          <Specimen
            title="Table"
            description="Data table with hover rows and typed columns."
            code={`<Table
  columns={[
    { key: "name", header: "Name" },
    { key: "role", header: "Role" },
    { key: "status", header: "Status" },
  ]}
  data={[
    { name: "Alice", role: "Engineer", status: "Active" },
    { name: "Bob", role: "Designer", status: "Away" },
  ]}
/>`}
          >
            <Table
              columns={[
                { key: "name", header: "Name" },
                { key: "role", header: "Role" },
                { key: "status", header: "Status" },
                { key: "joined", header: "Joined" },
              ]}
              data={[
                { name: "Alice Chen", role: "Engineer", status: "Active", joined: "2024-01" },
                { name: "Bob Park", role: "Designer", status: "Away", joined: "2024-03" },
                { name: "Carol Wu", role: "PM", status: "Active", joined: "2024-06" },
              ]}
            />
          </Specimen>

          {/* Tabs */}
          <Specimen
            title="Tabs"
            description="Tabbed content navigation."
            code={`<Tabs tabs={[
  { label: "Overview", content: <p>Overview content</p> },
  { label: "Settings", content: <p>Settings content</p> },
]} />`}
          >
            <Tabs
              tabs={[
                { label: "Overview", content: <p className="text-[var(--color-text-secondary)]">Overview content goes here.</p> },
                { label: "Activity", content: <p className="text-[var(--color-text-secondary)]">Recent activity feed.</p> },
                { label: "Settings", content: <p className="text-[var(--color-text-secondary)]">Configuration options.</p> },
              ]}
            />
          </Specimen>

          {/* Tooltip */}
          <Specimen
            title="Tooltip"
            description="Hover-triggered contextual text."
            code={`<Tooltip content="Helpful info">
  <Button variant="secondary">Hover me</Button>
</Tooltip>`}
          >
            <div className="flex gap-4">
              <Tooltip content="This is a tooltip">
                <Button variant="secondary">Hover me</Button>
              </Tooltip>
              <Tooltip content="Search the catalog">
                <Button variant="ghost"><Search size={16} /></Button>
              </Tooltip>
            </div>
          </Specimen>

          {/* Breadcrumb */}
          <Specimen
            title="Breadcrumb"
            description="Navigation path with linked segments."
            code={`<Breadcrumb items={[
  { label: "Home", href: "/" },
  { label: "Components", href: "/components" },
  { label: "Breadcrumb" },
]} />`}
          >
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Components", href: "/components" },
                { label: "Breadcrumb" },
              ]}
            />
          </Specimen>

          {/* Dropdown */}
          <Specimen
            title="Dropdown"
            description="Click-triggered menu with close-on-outside-click."
            code={`<Dropdown
  trigger="Options"
  items={[
    { label: "Edit", onClick: () => {} },
    { label: "Duplicate", onClick: () => {} },
    { label: "Delete", onClick: () => {} },
  ]}
/>`}
          >
            <Dropdown
              trigger="Options"
              items={[
                { label: "Edit", onClick: () => {} },
                { label: "Duplicate", onClick: () => {} },
                { label: "Archive", onClick: () => {} },
                { label: "Delete", onClick: () => {} },
              ]}
            />
          </Specimen>

          {/* Pagination */}
          <Specimen
            title="Pagination"
            description="Page navigation with active state."
            code={`<Pagination page={2} totalPages={5} onChange={setPage} />`}
          >
            <Pagination page={page} totalPages={5} onChange={setPage} />
          </Specimen>

          {/* Skeleton */}
          <Specimen
            title="Skeleton"
            description="Loading placeholders with pulse animation."
            code={`<Skeleton className="h-4 w-3/4" />
<Skeleton className="h-10 w-full" />
<Skeleton className="h-32 w-full" />`}
          >
            <div className="space-y-3 max-w-sm">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-32 w-full" />
            </div>
          </Specimen>

          {/* Toast */}
          <Specimen
            title="Toast"
            description="Notification banners for transient messages."
            code={`<Toast variant="success" message="Changes saved." onClose={() => {}} />
<Toast variant="error" message="Something went wrong." />`}
          >
            <div className="space-y-3 max-w-sm">
              <Toast variant="success" message="Changes saved successfully." onClose={() => {}} />
              <Toast variant="error" message="Failed to save changes." onClose={() => {}} />
              <Toast variant="warning" message="Your session will expire soon." />
              <Toast variant="info" message="New update available." />
            </div>
          </Specimen>

          {/* EmptyState */}
          <Specimen
            title="Empty State"
            description="Placeholder for empty data views."
            code={`<EmptyState
  title="No results"
  description="Try adjusting your search."
  action={<Button size="sm">Clear filters</Button>}
/>`}
          >
            <EmptyState
              title="No results found"
              description="Try adjusting your search or filters to find what you're looking for."
              action={<Button size="sm" variant="secondary">Clear filters</Button>}
            />
          </Specimen>

          {/* Avatar */}
          <Specimen
            title="Avatar"
            description="User avatars with initials fallback."
            code={`<Avatar name="Alice Chen" size="sm" />
<Avatar name="Bob Park" size="md" />
<Avatar name="Carol Wu" size="lg" />`}
          >
            <div className="flex items-center gap-4">
              <Avatar name="Alice Chen" size="sm" />
              <Avatar name="Bob Park" size="md" />
              <Avatar name="Carol Wu" size="lg" />
              <Avatar size="md" />
            </div>
          </Specimen>

          {/* Divider */}
          <Specimen
            title="Divider"
            description="Horizontal rule with optional centered label."
            code={`<Divider />
<Divider label="or" />
<Divider label="continue with" spacing="lg" />`}
          >
            <div className="max-w-sm">
              <p className="text-sm text-[var(--color-text-secondary)]">Content above</p>
              <Divider />
              <p className="text-sm text-[var(--color-text-secondary)]">Content below</p>
              <Divider label="or" />
              <p className="text-sm text-[var(--color-text-secondary)]">More content</p>
              <Divider label="continue with" spacing="sm" />
              <p className="text-sm text-[var(--color-text-secondary)]">Final content</p>
            </div>
          </Specimen>

          {/* ProgressBar */}
          <Specimen
            title="Progress Bar"
            description="Track + fill bar for usage meters, uploads, and quotas."
            code={`<ProgressBar value={65} label="Storage" showValue />
<ProgressBar value={90} color="warning" />
<ProgressBar value={30} color="success" size="lg" />`}
          >
            <div className="space-y-6 max-w-md">
              <ProgressBar value={65} label="Storage Used" showValue />
              <ProgressBar value={90} color="warning" label="API Quota" showValue />
              <ProgressBar value={100} color="error" label="Disk Full" showValue />
              <ProgressBar value={30} color="success" size="lg" label="Bandwidth" showValue />
              <ProgressBar value={50} color="info" size="sm" label="Memory" showValue />
            </div>
          </Specimen>

          {/* DescriptionList */}
          <Specimen
            title="Description List"
            description="Key-value pair display for detail pages and summaries."
            code={`<DescriptionList items={[
  { label: "Name", value: "Alice Chen" },
  { label: "Email", value: "alice@example.com" },
  { label: "Role", value: "Engineer" },
]} />`}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <p className="text-sm font-medium mb-3">Horizontal (default)</p>
                <DescriptionList
                  items={[
                    { label: "Name", value: "Alice Chen" },
                    { label: "Email", value: "alice@example.com" },
                    { label: "Role", value: "Engineer" },
                    { label: "Status", value: <Badge color="success" size="sm">Active</Badge> },
                  ]}
                />
              </Card>
              <Card>
                <p className="text-sm font-medium mb-3">Stacked</p>
                <DescriptionList
                  layout="stacked"
                  items={[
                    { label: "Plan", value: "Pro" },
                    { label: "Billing", value: "Monthly" },
                    { label: "Next Payment", value: "Mar 15, 2026" },
                    { label: "Amount", value: "$29/mo" },
                  ]}
                />
              </Card>
            </div>
          </Specimen>

          {/* RadioGroup */}
          <Specimen
            title="Radio Group"
            description="Mutually exclusive option selection for forms and settings."
            code={`<RadioGroup
  label="Notification preference"
  options={[
    { value: "all", label: "All notifications" },
    { value: "important", label: "Important only", description: "Critical alerts and mentions" },
    { value: "none", label: "None" },
  ]}
  value={value}
  onChange={setValue}
/>`}
          >
            <div className="max-w-sm">
              <RadioGroup
                label="Notification preference"
                options={[
                  { value: "option1", label: "All notifications", description: "Receive everything" },
                  { value: "option2", label: "Important only", description: "Critical alerts and mentions" },
                  { value: "option3", label: "None", description: "No notifications" },
                ]}
                value={radioValue}
                onChange={setRadioValue}
              />
            </div>
          </Specimen>

          {/* Combobox */}
          <Specimen
            title="Combobox"
            description="Searchable select dropdown for long option lists."
            code={`<Combobox
  label="Country"
  options={[
    { value: "us", label: "United States" },
    { value: "uk", label: "United Kingdom" },
    { value: "ca", label: "Canada" },
  ]}
  value={value}
  onChange={setValue}
/>`}
          >
            <div className="max-w-xs">
              <Combobox
                label="Country"
                placeholder="Search countries..."
                options={[
                  { value: "us", label: "United States" },
                  { value: "uk", label: "United Kingdom" },
                  { value: "ca", label: "Canada" },
                  { value: "au", label: "Australia" },
                  { value: "de", label: "Germany" },
                  { value: "fr", label: "France" },
                  { value: "jp", label: "Japan" },
                ]}
                value={comboValue}
                onChange={setComboValue}
              />
            </div>
          </Specimen>

          {/* Drawer */}
          <Specimen
            title="Drawer"
            description="Slide-in panel for detail views and supplementary content."
            code={`<Drawer open={open} onClose={() => setOpen(false)} title="Details">
  <p>Drawer content here.</p>
</Drawer>`}
          >
            <div>
              <Button onClick={() => setDrawerOpen(true)}>Open Drawer</Button>
              <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)} title="Project Details">
                <div className="space-y-4">
                  <p className="text-[var(--color-text-secondary)] text-sm">This is a slide-in panel for supplementary content.</p>
                  <DescriptionList
                    items={[
                      { label: "Project", value: "NyxWorks" },
                      { label: "Status", value: <Badge color="success" size="sm">Active</Badge> },
                      { label: "Owner", value: "Alice Chen" },
                    ]}
                  />
                  <div className="flex gap-3 pt-4">
                    <Button variant="ghost" onClick={() => setDrawerOpen(false)}>Cancel</Button>
                    <Button onClick={() => setDrawerOpen(false)}>Save</Button>
                  </div>
                </div>
              </Drawer>
            </div>
          </Specimen>

          {/* Stepper */}
          <Specimen
            title="Stepper"
            description="Multi-step progress indicator for wizards and checkout flows."
            code={`<Stepper
  steps={[
    { label: "Account" },
    { label: "Profile" },
    { label: "Review" },
  ]}
  currentStep={1}
/>`}
          >
            <div className="space-y-8">
              <div>
                <p className="text-sm text-[var(--color-text-muted)] mb-4">Horizontal</p>
                <Stepper
                  steps={[
                    { label: "Account" },
                    { label: "Profile" },
                    { label: "Review" },
                    { label: "Complete" },
                  ]}
                  currentStep={1}
                />
              </div>
              <div>
                <p className="text-sm text-[var(--color-text-muted)] mb-4">Vertical</p>
                <Stepper
                  orientation="vertical"
                  steps={[
                    { label: "Create account", description: "Enter your email and password" },
                    { label: "Set up workspace", description: "Configure your team settings" },
                    { label: "Invite members", description: "Add your team" },
                  ]}
                  currentStep={1}
                />
              </div>
            </div>
          </Specimen>

          {/* CommandPalette */}
          <Specimen
            title="Command Palette"
            description="Cmd+K searchable command overlay for quick navigation."
            code={`<CommandPalette
  open={open}
  onClose={() => setOpen(false)}
  items={[
    { id: "1", label: "Go to Home", icon: <Home size={16} />, group: "Navigation", onSelect: () => {} },
    { id: "2", label: "Settings", icon: <Settings size={16} />, shortcut: "⌘,", group: "Navigation", onSelect: () => {} },
  ]}
/>`}
          >
            <div>
              <Button onClick={() => setCmdOpen(true)}>Open Command Palette</Button>
              <CommandPalette
                open={cmdOpen}
                onClose={() => setCmdOpen(false)}
                items={[
                  { id: "1", label: "Go to Home", icon: <Home size={16} />, group: "Navigation", shortcut: "⌘H", onSelect: () => setCmdOpen(false) },
                  { id: "2", label: "Settings", icon: <Settings size={16} />, group: "Navigation", shortcut: "⌘,", onSelect: () => setCmdOpen(false) },
                  { id: "3", label: "Search Users", icon: <User size={16} />, group: "Actions", onSelect: () => setCmdOpen(false) },
                  { id: "4", label: "New Document", icon: <FileText size={16} />, group: "Actions", shortcut: "⌘N", onSelect: () => setCmdOpen(false) },
                ]}
              />
            </div>
          </Specimen>

          {/* Banner */}
          <Specimen
            title="Banner"
            description="Dismissible top banner for announcements and notices."
            code={`<Banner variant="info" icon={<Megaphone size={16} />}>
  New feature available! Check out our latest update.
</Banner>
<Banner variant="warning">Your trial expires in 3 days.</Banner>`}
          >
            <div className="space-y-3">
              <Banner variant="info" icon={<Megaphone size={16} />}>New feature available! Check out our latest update.</Banner>
              <Banner variant="success">Your account has been verified successfully.</Banner>
              <Banner variant="warning">Your trial expires in 3 days. Upgrade now.</Banner>
              <Banner variant="error">Payment failed. Please update your billing info.</Banner>
              <Banner variant="accent" dismissible={false}>Welcome to NyxWorks! Get started with the docs.</Banner>
            </div>
          </Specimen>

          {/* ButtonGroup */}
          <Specimen
            title="Button Group"
            description="Segmented control for toggling between views or filters."
            code={`<ButtonGroup
  items={[
    { value: "list", label: "List" },
    { value: "grid", label: "Grid" },
    { value: "board", label: "Board" },
  ]}
  value={value}
  onChange={setValue}
/>`}
          >
            <div className="space-y-6">
              <div>
                <p className="text-xs font-medium text-[var(--color-text-muted)] mb-2">Default</p>
                <ButtonGroup
                  items={[
                    { value: "list", label: "List" },
                    { value: "grid", label: "Grid" },
                    { value: "board", label: "Board" },
                  ]}
                  value={bgView}
                  onChange={setBgView}
                />
              </div>
              <div>
                <p className="text-xs font-medium text-[var(--color-text-muted)] mb-2">Small</p>
                <ButtonGroup
                  size="sm"
                  items={[
                    { value: "list", label: "Day" },
                    { value: "grid", label: "Week" },
                    { value: "board", label: "Month" },
                  ]}
                  value={bgView}
                  onChange={setBgView}
                />
              </div>
            </div>
          </Specimen>

          {/* StatCard */}
          <Specimen
            title="Stat Card"
            description="Standalone metric display for dashboards and overview screens."
            code={`<StatCard label="Revenue" value="$48.2K" change="+12%" trend="up" icon={<DollarSign size={16} />} />`}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <StatCard label="Revenue" value="$48.2K" change="+12%" trend="up" icon={<DollarSign size={16} />} />
              <StatCard label="Users" value="2,847" change="+5.3%" trend="up" icon={<Users size={16} />} />
              <StatCard label="Bounce Rate" value="24.3%" change="+2.1%" trend="down" icon={<Home size={16} />} />
              <StatCard label="Sessions" value="12.4K" icon={<Settings size={16} />} />
            </div>
          </Specimen>

          {/* StackedList */}
          <Specimen
            title="Stacked List"
            description="List items with optional avatar, text, and trailing action."
            code={`<StackedList items={[
  { id: "1", primary: "Alice Chen", secondary: "alice@example.com", left: <Avatar ... />, right: <Badge ... /> },
]} />`}
          >
            <div className="max-w-md">
              <StackedList
                items={[
                  { id: "1", primary: "Alice Chen", secondary: "Engineering · Online", left: <Avatar name="Alice Chen" size="sm" />, right: <Badge color="success" size="sm">Active</Badge> },
                  { id: "2", primary: "Bob Park", secondary: "Design · Away", left: <Avatar name="Bob Park" size="sm" />, right: <Badge color="warning" size="sm">Away</Badge>, onClick: () => {} },
                  { id: "3", primary: "Carol Wu", secondary: "Product · Offline", left: <Avatar name="Carol Wu" size="sm" />, right: <Badge size="sm">Offline</Badge>, onClick: () => {} },
                ]}
              />
            </div>
          </Specimen>

          {/* SidebarNav */}
          <Specimen
            title="Sidebar Nav"
            description="Vertical sidebar navigation with sections, icons, and active state."
            code={`<SidebarNav
  sections={[
    { heading: "Main", items: [
      { id: "dashboard", label: "Dashboard", icon: <Home size={16} /> },
      { id: "projects", label: "Projects", icon: <FileText size={16} /> },
    ] },
  ]}
  activeId={active}
  onSelect={setActive}
/>`}
          >
            <div className="max-w-xs">
              <SidebarNav
                sections={[
                  {
                    heading: "Main",
                    items: [
                      { id: "dashboard", label: "Dashboard", icon: <Home size={16} /> },
                      { id: "projects", label: "Projects", icon: <FileText size={16} />, badge: <Badge color="accent" size="sm">3</Badge> },
                      { id: "team", label: "Team", icon: <Users size={16} /> },
                    ],
                  },
                  {
                    heading: "Account",
                    items: [
                      { id: "settings", label: "Settings", icon: <Settings size={16} /> },
                      { id: "profile", label: "Profile", icon: <User size={16} /> },
                    ],
                  },
                ]}
                activeId={sidebarActive}
                onSelect={setSidebarActive}
              />
            </div>
          </Specimen>

          {/* PageHeading */}
          <Specimen
            title="Page Heading"
            description="Page-level heading bar with breadcrumb, description, and actions."
            code={`<PageHeading
  title="Projects"
  description="Manage your team's projects"
  breadcrumb={<Breadcrumb items={[...]} />}
  actions={<Button size="sm">New Project</Button>}
/>`}
          >
            <PageHeading
              title="Projects"
              description="Manage and organize your team's projects."
              breadcrumb={<Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Projects" }]} />}
              actions={<><Button variant="secondary" size="sm">Import</Button><Button size="sm">New Project</Button></>}
            />
          </Specimen>

          {/* Feed */}
          <Specimen
            title="Feed"
            description="Activity feed / timeline for chronological events."
            code={`<Feed items={[
  { id: "1", icon: <GitCommit size={14} />, content: "Deployed v2.4.1", timestamp: "2h ago" },
  { id: "2", icon: <MessageSquare size={14} />, content: "New comment on PR #42", timestamp: "4h ago" },
]} />`}
          >
            <div className="max-w-md">
              <Feed
                items={[
                  { id: "1", icon: <GitCommit size={14} className="text-[var(--color-accent-light)]" />, content: <><span className="font-medium">Alice</span> deployed <span className="font-medium">v2.4.1</span> to production</>, timestamp: "2 hours ago" },
                  { id: "2", icon: <MessageSquare size={14} className="text-[var(--color-info)]" />, content: <><span className="font-medium">Bob</span> commented on <span className="font-medium">PR #42</span></>, timestamp: "4 hours ago" },
                  { id: "3", icon: <CheckIcon size={14} className="text-[var(--color-success)]" />, content: <><span className="font-medium">Carol</span> completed <span className="font-medium">API migration</span></>, timestamp: "1 day ago" },
                  { id: "4", icon: <User size={14} className="text-[var(--color-text-muted)]" />, content: <><span className="font-medium">Dan</span> joined the team</>, timestamp: "2 days ago" },
                ]}
              />
            </div>
          </Specimen>

          {/* Media Object */}
          <Specimen
            title="Media Object"
            description="Horizontal media + text layout for comments, notifications, and list items."
            code={`<MediaObject
  media={<Avatar name="Alice Chen" size="md" />}
  title="Alice Chen"
  description="Left a comment on your pull request."
  actions={<span className="text-xs text-[var(--color-text-muted)]">2h ago</span>}
/>`}
          >
            <div className="max-w-lg space-y-4">
              <MediaObject
                media={<Avatar name="Alice Chen" size="md" />}
                title="Alice Chen"
                description="Left a comment on your pull request — looks great, let's ship it!"
                actions={<span className="text-xs text-[var(--color-text-muted)]">2h ago</span>}
              />
              <MediaObject
                media={<div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-info)]/10"><Bell size={18} className="text-[var(--color-info)]" /></div>}
                title="New notification"
                description="Your deployment completed successfully."
                actions={<Badge color="success" size="sm">Success</Badge>}
              />
              <MediaObject
                media={<div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent)]/10"><Globe size={18} className="text-[var(--color-accent-light)]" /></div>}
                title="DNS propagated"
                align="center"
              />
            </div>
          </Specimen>

          {/* Card Heading */}
          <Specimen
            title="Card Heading"
            description="Card header strip with title, badge, and trailing actions."
            code={`<Card>
  <CardHeading title="Team Members" badge={<Badge size="sm">12</Badge>} actions={<Button size="sm" variant="secondary">Invite</Button>} />
  <div className="p-6">Card body content</div>
</Card>`}
          >
            <div className="max-w-lg space-y-6">
              <Card>
                <CardHeading
                  title="Team Members"
                  badge={<Badge size="sm" color="accent">12</Badge>}
                  actions={<Button size="sm" variant="secondary">Invite</Button>}
                />
                <div className="p-6 text-sm text-[var(--color-text-secondary)]">List of team members goes here.</div>
              </Card>
              <Card>
                <CardHeading
                  title="Recent Activity"
                  description="Last 7 days"
                  border={false}
                />
                <div className="p-6 text-sm text-[var(--color-text-secondary)]">Activity feed goes here.</div>
              </Card>
            </div>
          </Specimen>

          {/* Section Heading */}
          <Specimen
            title="Section Heading"
            description="Standalone section heading with tabs, actions, and badge."
            code={`<SectionHeading
  title="Projects"
  badge={<Badge size="sm">12</Badge>}
  actions={<Button size="sm">New Project</Button>}
  tabs={[
    { label: "All", active: true },
    { label: "Active" },
    { label: "Archived" },
  ]}
/>`}
          >
            <div className="space-y-8">
              <SectionHeading
                title="Projects"
                badge={<Badge size="sm" color="accent">12</Badge>}
                actions={<Button size="sm">New Project</Button>}
                tabs={[
                  { label: "All", active: sectionTab === "all", onClick: () => setSectionTab("all") },
                  { label: "Active", active: sectionTab === "active", onClick: () => setSectionTab("active") },
                  { label: "Archived", active: sectionTab === "archived", onClick: () => setSectionTab("archived") },
                ]}
              />
              <SectionHeading
                title="Account"
                description="Manage your account preferences."
                border={false}
              />
            </div>
          </Specimen>

          {/* List Container */}
          <Specimen
            title="List Container"
            description="Card-wrapped list with header and optional footer."
            code={`<ListContainer
  title="Members"
  actions={<Button size="sm" variant="secondary">Add</Button>}
  footer="Showing 3 of 12"
>
  {/* List rows */}
</ListContainer>`}
          >
            <div className="max-w-lg">
              <ListContainer
                title="Team Members"
                actions={<Button size="sm" variant="secondary">Add</Button>}
                footer="Showing 3 of 12 members"
              >
                {[
                  { name: "Alice Chen", role: "Engineering" },
                  { name: "Bob Park", role: "Design" },
                  { name: "Carol Wu", role: "Product" },
                ].map((m, i, arr) => (
                  <div key={m.name} className={`flex items-center gap-3 px-6 py-3 ${i < arr.length - 1 ? "border-b border-[var(--color-border)]" : ""}`}>
                    <Avatar name={m.name} size="sm" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-[var(--color-text-primary)]">{m.name}</p>
                      <p className="text-xs text-[var(--color-text-muted)]">{m.role}</p>
                    </div>
                    <Badge size="sm" color="success">Active</Badge>
                  </div>
                ))}
              </ListContainer>
            </div>
          </Specimen>

          {/* Grid List */}
          <Specimen
            title="Grid List"
            description="Responsive grid of selectable/clickable cards with image, title, and badge."
            code={`<GridList
  columns={3}
  items={[
    { id: "1", title: "Project Alpha", description: "A description", onClick: () => {} },
    { id: "2", title: "Project Beta", badge: <Badge size="sm" color="success">Live</Badge> },
  ]}
/>`}
          >
            <GridList
              columns={3}
              items={[
                { id: "1", title: "Project Alpha", description: "Internal design system with tokens and components.", image: <div className="h-24 bg-[var(--color-accent)]/10 flex items-center justify-center"><FolderOpen size={24} className="text-[var(--color-accent-light)]" /></div>, badge: <Badge size="sm" color="success">Live</Badge>, onClick: () => {} },
                { id: "2", title: "Project Beta", description: "Customer-facing marketing site redesign.", image: <div className="h-24 bg-[var(--color-info)]/10 flex items-center justify-center"><Globe size={24} className="text-[var(--color-info)]" /></div>, onClick: () => {} },
                { id: "3", title: "Project Gamma", description: "Mobile app prototype and user testing.", image: <div className="h-24 bg-[var(--color-warning)]/10 flex items-center justify-center"><ImageIcon size={24} className="text-[var(--color-warning)]" /></div>, badge: <Badge size="sm" color="warning">Draft</Badge>, onClick: () => {} },
                { id: "4", title: "Project Delta", description: "Backend API and infrastructure updates.", image: <div className="h-24 bg-[var(--color-success)]/10 flex items-center justify-center"><Settings size={24} className="text-[var(--color-success)]" /></div>, onClick: () => {} },
              ]}
            />
          </Specimen>

          {/* Input Group */}
          <Specimen
            title="Input Group"
            description="Enhanced input with leading/trailing addons — icons, text, buttons."
            code={`<InputGroup
  label="Website"
  leadingAddon="https://"
  trailingAddon=".com"
  placeholder="example"
/>`}
          >
            <div className="max-w-md space-y-4">
              <InputGroup label="Search" leadingIcon={<Search size={16} />} placeholder="Search..." />
              <InputGroup label="Website" leadingAddon="https://" trailingAddon=".com" placeholder="example" />
              <InputGroup label="Email" leadingIcon={<Mail size={16} />} placeholder="you@example.com" error="Invalid email address" />
              <InputGroup label="URL" placeholder="Enter URL" trailingButton={<Button size="sm" variant="primary" className="rounded-none h-full">Go</Button>} />
            </div>
          </Specimen>

          {/* Form Layout */}
          <Specimen
            title="Form Layout"
            description="Two-column form section with title + description left, fields right."
            code={`<FormLayout title="Profile" description="Your public profile information.">
  <Input label="Name" placeholder="Jane Doe" />
  <Textarea label="Bio" placeholder="Write a short bio..." />
</FormLayout>`}
          >
            <div className="space-y-8">
              <FormLayout title="Profile" description="Your public profile information.">
                <Input label="Name" placeholder="Jane Doe" />
                <Input label="Email" placeholder="jane@example.com" />
              </FormLayout>
              <FormLayout title="Notifications" description="How you receive alerts." divider>
                <Toggle label="Email notifications" checked={toggle1} onChange={setToggle1} />
                <Toggle label="Push notifications" checked={toggle2} onChange={setToggle2} />
              </FormLayout>
            </div>
          </Specimen>

          {/* Action Panel */}
          <Specimen
            title="Action Panel"
            description="Form action bar for save/cancel, confirmations, and toggles."
            code={`<ActionPanel variant="card" align="right">
  <Button variant="ghost">Cancel</Button>
  <Button>Save Changes</Button>
</ActionPanel>`}
          >
            <div className="space-y-4">
              <ActionPanel align="right">
                <Button variant="ghost">Cancel</Button>
                <Button>Save Changes</Button>
              </ActionPanel>
              <ActionPanel variant="card" align="between">
                <span className="text-sm text-[var(--color-text-secondary)]">Enable notifications?</span>
                <Toggle label="" checked={toggle1} onChange={setToggle1} />
              </ActionPanel>
              <ActionPanel variant="well" align="right">
                <Button variant="ghost" size="sm">Discard</Button>
                <Button variant="secondary" size="sm">Save Draft</Button>
                <Button size="sm">Publish</Button>
              </ActionPanel>
            </div>
          </Specimen>

          {/* Calendar */}
          <Specimen
            title="Calendar"
            description="Month-view calendar with date selection and event dots."
            code={`<Calendar
  selected={selectedDate}
  onSelect={setSelectedDate}
  events={[
    { date: new Date(2026, 2, 10), color: "accent" },
    { date: new Date(2026, 2, 15), color: "success" },
  ]}
/>`}
          >
            <div className="flex flex-wrap gap-6">
              <Calendar
                month={3}
                year={2026}
                selected={calendarSelected}
                onSelect={setCalendarSelected}
              />
              <Calendar
                month={3}
                year={2026}
                selected={calendarSelected}
                onSelect={setCalendarSelected}
                events={[
                  { date: new Date(2026, 2, 5), color: "accent" },
                  { date: new Date(2026, 2, 5), color: "success" },
                  { date: new Date(2026, 2, 10), color: "warning" },
                  { date: new Date(2026, 2, 15), color: "error" },
                  { date: new Date(2026, 2, 15), color: "info" },
                  { date: new Date(2026, 2, 20), color: "success" },
                  { date: new Date(2026, 2, 25), color: "accent" },
                ]}
              />
            </div>
          </Specimen>

          {/* Navbar */}
          <Specimen
            title="Navbar"
            description="Reusable top navigation bar with brand, links, actions, and mobile menu."
            code={`<Navbar
  brand={<span className="font-bold">Acme Inc</span>}
  items={[
    { id: "dashboard", label: "Dashboard" },
    { id: "projects", label: "Projects" },
    { id: "team", label: "Team" },
  ]}
  activeId="dashboard"
  actions={<Button size="sm" variant="secondary">Sign In</Button>}
/>`}
          >
            <div className="rounded-xl border border-[var(--color-border)] overflow-hidden">
              <Navbar
                brand={<span className="font-bold text-[var(--color-text-primary)]">Acme Inc</span>}
                items={[
                  { id: "dashboard", label: "Dashboard" },
                  { id: "projects", label: "Projects" },
                  { id: "team", label: "Team" },
                  { id: "settings", label: "Settings" },
                ]}
                activeId="dashboard"
                actions={<Button size="sm" variant="secondary">Sign In</Button>}
              />
            </div>
          </Specimen>

          {/* ── Marketing Components ─────────────────────────── */}
          <div className="pt-8">
            <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-1">Marketing Components</h2>
            <p className="text-sm text-[var(--color-text-muted)] mb-6">Hero sections, features, pricing, testimonials, and more.</p>
          </div>

          {/* Hero */}
          <Specimen
            title="Hero Section"
            description="Marketing hero with eyebrow, gradient title, subtitle, and CTA actions."
            code={`<Hero
  eyebrow={<Badge color="accent">New Release</Badge>}
  title="Build faster with NyxWorks"
  subtitle="The modern design system for beautiful apps."
  actions={<><Button size="lg">Get Started</Button><Button size="lg" variant="secondary">Learn More</Button></>}
  gradient
/>`}
          >
            <div className="rounded-xl border border-[var(--color-border)] overflow-hidden bg-[var(--color-bg)]">
              <Hero
                eyebrow={<Badge color="accent">New Release</Badge>}
                title="Build faster with NyxWorks"
                subtitle="The modern design system for beautiful, consistent applications."
                actions={<><Button size="lg">Get Started</Button><Button size="lg" variant="secondary">Learn More</Button></>}
                gradient
              />
            </div>
          </Specimen>

          {/* Feature Grid */}
          <Specimen
            title="Feature Grid"
            description="Feature showcase with icon cards in grid, bento, or alternating layouts."
            code={`<FeatureGrid
  title="Everything you need"
  features={[
    { icon: <Zap size={24} />, title: "Fast", description: "..." },
    { icon: <Shield size={24} />, title: "Secure", description: "..." },
  ]}
  columns={3}
/>`}
          >
            <FeatureGrid
              title="Everything you need"
              subtitle="Build production-ready apps with these primitives."
              features={[
                { icon: <Zap size={24} />, title: "Lightning Fast", description: "Optimized for performance with zero runtime overhead." },
                { icon: <Shield size={24} />, title: "Secure by Default", description: "Built-in security best practices out of the box." },
                { icon: <BarChart3 size={24} />, title: "Analytics Ready", description: "Track everything with built-in analytics hooks." },
                { icon: <Layers size={24} />, title: "Composable", description: "Mix and match primitives to build any interface." },
                { icon: <Rocket size={24} />, title: "Ship Faster", description: "Go from prototype to production in hours, not weeks." },
                { icon: <Globe size={24} />, title: "Global CDN", description: "Delivered from edge locations worldwide." },
              ]}
              columns={3}
            />
          </Specimen>

          {/* CTA Section */}
          <Specimen
            title="CTA Section"
            description="Call-to-action in centered, banner, card, or split layouts."
            code={`<CTASection
  variant="banner"
  title="Ready to get started?"
  description="Start building for free today."
  actions={<Button className="bg-white text-[var(--color-accent)] hover:bg-white/90">Sign Up Free</Button>}
/>`}
          >
            <div className="space-y-6">
              <CTASection
                variant="banner"
                title="Ready to get started?"
                description="Start building for free today."
                actions={<Button className="bg-white text-[var(--color-accent)] hover:bg-white/90">Sign Up Free</Button>}
              />
              <CTASection
                variant="card"
                title="Upgrade to Pro"
                description="Unlock all components and templates."
                actions={<><Button>Upgrade Now</Button><Button variant="ghost">Compare Plans</Button></>}
              />
            </div>
          </Specimen>

          {/* Pricing Tier */}
          <Specimen
            title="Pricing Tier"
            description="Single pricing card — compose in a grid for pricing sections."
            code={`<PricingTier
  name="Pro"
  price="$29"
  priceSuffix="/mo"
  featured
  badge={<Badge color="accent" size="sm">Popular</Badge>}
  features={[{ text: "Unlimited projects" }, { text: "Priority support" }]}
  cta={<Button className="w-full">Get Started</Button>}
/>`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
              <PricingTier
                name="Starter"
                description="For individuals"
                price="$0"
                priceSuffix="/mo"
                features={[
                  { text: "5 projects" },
                  { text: "Basic analytics" },
                  { text: "Community support" },
                  { text: "Priority support", included: false },
                ]}
                cta={<Button variant="secondary" className="w-full">Get Started</Button>}
              />
              <PricingTier
                name="Pro"
                description="For teams"
                price="$29"
                priceSuffix="/mo"
                featured
                badge={<Badge color="accent" size="sm">Popular</Badge>}
                features={[
                  { text: "Unlimited projects" },
                  { text: "Advanced analytics" },
                  { text: "Priority support" },
                  { text: "Custom domains" },
                ]}
                cta={<Button className="w-full">Get Started</Button>}
              />
              <PricingTier
                name="Enterprise"
                description="Custom solutions"
                price="$99"
                priceSuffix="/mo"
                features={[
                  { text: "Everything in Pro" },
                  { text: "SSO & SAML" },
                  { text: "Dedicated support" },
                  { text: "SLA guarantee" },
                ]}
                cta={<Button variant="secondary" className="w-full">Contact Sales</Button>}
              />
            </div>
          </Specimen>

          {/* Testimonial Card */}
          <Specimen
            title="Testimonial Card"
            description="Customer quote card in default, featured, and minimal variants."
            code={`<TestimonialCard
  quote="NyxWorks saved us months of design work."
  author="Sarah Chen"
  role="CTO at TechCo"
  avatar={<Avatar name="SC" size="sm" />}
/>`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
              <TestimonialCard
                quote="NyxWorks saved us months of design work. The components are polished and production-ready."
                author="Sarah Chen"
                role="CTO at TechCo"
                avatar={<Avatar name="SC" size="sm" />}
              />
              <TestimonialCard
                variant="featured"
                quote="The best design system we've used. Dark mode support is flawless."
                author="Alex Rivera"
                role="Lead Designer"
                avatar={<Avatar name="AR" size="sm" />}
              />
            </div>
          </Specimen>

          {/* Logo Cloud */}
          <Specimen
            title="Logo Cloud"
            description="Row of partner/client logos with hover opacity and grayscale effects."
            code={`<LogoCloud
  title="Trusted by leading companies"
  logos={[
    { content: <span className="text-lg font-bold">Acme</span> },
    { content: <span className="text-lg font-bold">Globex</span> },
  ]}
/>`}
          >
            <LogoCloud
              title="Trusted by leading companies"
              logos={[
                { content: <span className="text-lg font-bold text-[var(--color-text-primary)]">Acme</span> },
                { content: <span className="text-lg font-bold text-[var(--color-text-primary)]">Globex</span> },
                { content: <span className="text-lg font-bold text-[var(--color-text-primary)]">Initech</span> },
                { content: <span className="text-lg font-bold text-[var(--color-text-primary)]">Hooli</span> },
                { content: <span className="text-lg font-bold text-[var(--color-text-primary)]">Pied Piper</span> },
              ]}
            />
          </Specimen>

          {/* Newsletter */}
          <Specimen
            title="Newsletter"
            description="Email capture section in centered, inline, or card variants."
            code={`<Newsletter
  title="Stay in the loop"
  description="Get the latest updates delivered to your inbox."
  onSubmit={(email) => console.log(email)}
/>`}
          >
            <div className="max-w-lg mx-auto">
              <Newsletter
                variant="card"
                title="Stay in the loop"
                description="Get the latest updates delivered to your inbox."
              />
            </div>
          </Specimen>

          {/* FAQ */}
          <Specimen
            title="FAQ / Accordion"
            description="Collapsible Q&A list with single or multi-open mode."
            code={`<FAQ
  title="Frequently Asked Questions"
  items={[
    { question: "How does billing work?", answer: "We bill monthly..." },
    { question: "Can I cancel anytime?", answer: "Yes, you can..." },
  ]}
/>`}
          >
            <FAQ
              title="Frequently Asked Questions"
              items={[
                { question: "How does billing work?", answer: "We bill monthly based on your selected plan. You can upgrade or downgrade at any time." },
                { question: "Can I cancel anytime?", answer: "Yes, you can cancel your subscription at any time. No questions asked." },
                { question: "Do you offer a free trial?", answer: "Yes, all plans come with a 14-day free trial. No credit card required." },
              ]}
            />
          </Specimen>

          {/* Team Member */}
          <Specimen
            title="Team Member"
            description="Team member card with avatar, bio, and social links."
            code={`<TeamMember
  name="Jane Smith"
  role="Lead Designer"
  avatar={<Avatar name="JS" size="lg" />}
  bio="Passionate about creating beautiful user experiences."
  socials={[{ icon: <Twitter size={16} />, href: "#" }]}
/>`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
              <TeamMember
                name="Jane Smith"
                role="Lead Designer"
                avatar={<Avatar name="JS" size="lg" />}
                socials={[
                  { icon: <Twitter size={16} />, href: "#" },
                  { icon: <Linkedin size={16} />, href: "#" },
                ]}
              />
              <TeamMember
                name="Alex Kim"
                role="Engineer"
                avatar={<Avatar name="AK" size="lg" />}
                socials={[
                  { icon: <Github size={16} />, href: "#" },
                ]}
              />
              <TeamMember
                name="Sam Lee"
                role="Product Lead"
                avatar={<Avatar name="SL" size="lg" />}
                socials={[
                  { icon: <Twitter size={16} />, href: "#" },
                  { icon: <Linkedin size={16} />, href: "#" },
                ]}
              />
            </div>
          </Specimen>

          {/* Blog Card */}
          <Specimen
            title="Blog Card"
            description="Article preview card in vertical, horizontal, or featured layouts."
            code={`<BlogCard
  title="Getting Started with NyxWorks"
  excerpt="Learn how to set up the design system."
  category={<Badge color="accent" size="sm">Tutorial</Badge>}
  author="Jane Smith"
  date="Mar 10, 2026"
/>`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
              <BlogCard
                title="Getting Started with NyxWorks"
                excerpt="Learn how to set up the design system in your project."
                image={<div className="w-full h-full bg-[var(--color-bg-card-hover)] flex items-center justify-center"><ImageIcon size={32} className="text-[var(--color-text-muted)]" /></div>}
                category={<Badge color="accent" size="sm">Tutorial</Badge>}
                author="Jane Smith"
                date="Mar 10, 2026"
                href="#"
              />
              <BlogCard
                title="Dark Mode Best Practices"
                excerpt="Tips for building great dark mode experiences with CSS variables."
                image={<div className="w-full h-full bg-[var(--color-bg-card-hover)] flex items-center justify-center"><ImageIcon size={32} className="text-[var(--color-text-muted)]" /></div>}
                category={<Badge color="info" size="sm">Design</Badge>}
                author="Alex Kim"
                date="Mar 8, 2026"
                href="#"
              />
            </div>
          </Specimen>

          {/* Flyout Menu */}
          <Specimen
            title="Flyout Menu"
            description="Rich dropdown with icon + description items."
            code={`<FlyoutMenu
  trigger={<Button variant="secondary" size="sm">Products <ChevronDown size={14} /></Button>}
  items={[
    { id: "analytics", label: "Analytics", description: "Get insights", icon: <BarChart3 size={18} /> },
    { id: "security", label: "Security", description: "Lock it down", icon: <Shield size={18} /> },
  ]}
/>`}
          >
            <FlyoutMenu
              trigger={<Button variant="secondary" size="sm">Products <ChevronDown size={14} className="ml-1" /></Button>}
              items={[
                { id: "analytics", label: "Analytics", description: "Get real-time insights into your data", icon: <BarChart3 size={18} /> },
                { id: "security", label: "Security", description: "Advanced protection for your apps", icon: <Shield size={18} /> },
                { id: "integrations", label: "Integrations", description: "Connect with your favorite tools", icon: <Layers size={18} /> },
              ]}
              footer={<a href="#" className="text-sm text-[var(--color-accent-light)] hover:underline">View all products →</a>}
            />
          </Specimen>

          {/* ── Ecommerce Components ─────────────────────────── */}
          <div className="pt-8">
            <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-1">Ecommerce Components</h2>
            <p className="text-sm text-[var(--color-text-muted)] mb-6">Product cards, cart, checkout, ratings, and more.</p>
          </div>

          {/* Product Card */}
          <Specimen
            title="Product Card"
            description="Product display card with image, price, rating, and action."
            code={`<ProductCard
  title="Classic T-Shirt"
  price="$35"
  originalPrice="$50"
  rating={4.5}
  reviewCount={128}
  badge={<Badge color="error" size="sm">Sale</Badge>}
  action={<Button size="sm" className="w-full">Add to Cart</Button>}
/>`}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl">
              <ProductCard
                title="Classic T-Shirt"
                price="$35"
                originalPrice="$50"
                rating={4.5}
                reviewCount={128}
                image={<div className="w-full h-full bg-[var(--color-bg-card-hover)] flex items-center justify-center"><Package size={32} className="text-[var(--color-text-muted)]" /></div>}
                badge={<Badge color="error" size="sm">Sale</Badge>}
                action={<Button size="sm" className="w-full mt-2">Add to Cart</Button>}
              />
              <ProductCard
                title="Running Shoes"
                price="$120"
                rating={4.8}
                reviewCount={256}
                image={<div className="w-full h-full bg-[var(--color-bg-card-hover)] flex items-center justify-center"><Package size={32} className="text-[var(--color-text-muted)]" /></div>}
                action={<Button size="sm" className="w-full mt-2">Add to Cart</Button>}
              />
              <ProductCard
                title="Leather Wallet"
                price="$65"
                rating={4.2}
                image={<div className="w-full h-full bg-[var(--color-bg-card-hover)] flex items-center justify-center"><Package size={32} className="text-[var(--color-text-muted)]" /></div>}
                badge={<Badge color="accent" size="sm">New</Badge>}
                action={<Button size="sm" className="w-full mt-2">Add to Cart</Button>}
              />
            </div>
          </Specimen>

          {/* Rating */}
          <Specimen
            title="Rating"
            description="Star rating display (readonly) and interactive input."
            code={`<Rating value={4.5} showValue reviewCount="128 reviews" />
<Rating value={ratingValue} readonly={false} onChange={setRatingValue} />`}
          >
            <div className="space-y-4">
              <div>
                <p className="text-xs font-medium text-[var(--color-text-muted)] mb-2">Readonly</p>
                <Rating value={4.5} showValue reviewCount="128 reviews" />
              </div>
              <div>
                <p className="text-xs font-medium text-[var(--color-text-muted)] mb-2">Interactive</p>
                <Rating value={ratingValue} readonly={false} onChange={setRatingValue} size="lg" />
              </div>
            </div>
          </Specimen>

          {/* Price Tag */}
          <Specimen
            title="Price Tag"
            description="Formatted price with optional original price and sale badge."
            code={`<PriceTag price="$29" />
<PriceTag price="$29" originalPrice="$49" saleBadge />
<PriceTag price="$199" size="lg" />`}
          >
            <div className="space-y-3">
              <PriceTag price="$29" size="sm" />
              <PriceTag price="$29" originalPrice="$49" saleBadge />
              <PriceTag price="$199" size="lg" />
            </div>
          </Specimen>

          {/* Cart Item */}
          <Specimen
            title="Cart Item"
            description="Shopping cart line item with quantity controls."
            code={`<CartItem
  title="Classic T-Shirt"
  variant="Black / Medium"
  price="$35.00"
  quantity={2}
  onQuantityChange={setCartQty}
  onRemove={() => {}}
/>`}
          >
            <div className="max-w-md divide-y divide-[var(--color-border)]">
              <CartItem
                title="Classic T-Shirt"
                variant="Black / Medium"
                price="$35.00"
                quantity={cartQty}
                onQuantityChange={setCartQty}
                onRemove={() => {}}
                image={<div className="w-full h-full bg-[var(--color-bg-card-hover)] flex items-center justify-center"><Package size={20} className="text-[var(--color-text-muted)]" /></div>}
              />
              <CartItem
                title="Running Shoes"
                variant="White / Size 10"
                price="$120.00"
                quantity={1}
                image={<div className="w-full h-full bg-[var(--color-bg-card-hover)] flex items-center justify-center"><Package size={20} className="text-[var(--color-text-muted)]" /></div>}
              />
            </div>
          </Specimen>

          {/* Order Summary */}
          <Specimen
            title="Order Summary"
            description="Checkout summary card with line items and CTA."
            code={`<OrderSummary
  lines={[
    { label: "Subtotal", value: "$155.00" },
    { label: "Shipping", value: "$5.00" },
    { label: "Tax", value: "$12.40" },
    { label: "Total", value: "$172.40", isTotal: true },
  ]}
  action={<Button className="w-full">Checkout</Button>}
/>`}
          >
            <div className="max-w-sm">
              <OrderSummary
                lines={[
                  { label: "Subtotal", value: "$155.00" },
                  { label: "Shipping", value: "$5.00" },
                  { label: "Tax", value: "$12.40" },
                  { label: "Total", value: "$172.40", isTotal: true },
                ]}
                action={<Button className="w-full">Checkout</Button>}
              />
            </div>
          </Specimen>

          {/* Category Filter */}
          <Specimen
            title="Category Filter"
            description="Faceted filter sidebar with collapsible groups."
            code={`<CategoryFilter
  groups={[
    { label: "Category", options: [{ value: "shoes", label: "Shoes", count: 42 }] },
    { label: "Color", options: [{ value: "black", label: "Black", count: 18 }] },
  ]}
  selected={filters}
  onChange={setFilters}
/>`}
          >
            <div className="max-w-xs">
              <CategoryFilter
                groups={[
                  { label: "Category", options: [
                    { value: "shoes", label: "Shoes", count: 42 },
                    { value: "clothing", label: "Clothing", count: 67 },
                    { value: "accessories", label: "Accessories", count: 23 },
                  ]},
                  { label: "Color", options: [
                    { value: "black", label: "Black", count: 18 },
                    { value: "white", label: "White", count: 12 },
                    { value: "blue", label: "Blue", count: 8 },
                  ]},
                  { label: "Size", options: [
                    { value: "s", label: "Small", count: 15 },
                    { value: "m", label: "Medium", count: 22 },
                    { value: "l", label: "Large", count: 19 },
                  ]},
                ]}
                selected={filters}
                onChange={setFilters}
              />
            </div>
          </Specimen>

          {/* Promo Section */}
          <Specimen
            title="Promo Section"
            description="Incentive/benefit strip for shipping, returns, warranty."
            code={`<PromoSection
  bg="card"
  items={[
    { icon: <Truck size={20} />, title: "Free Shipping", description: "On orders over $50" },
    { icon: <RotateCcw size={20} />, title: "Easy Returns", description: "30-day return policy" },
    { icon: <Lock size={20} />, title: "Secure Checkout", description: "SSL encrypted" },
  ]}
/>`}
          >
            <PromoSection
              bg="card"
              items={[
                { icon: <Truck size={20} />, title: "Free Shipping", description: "On orders over $50" },
                { icon: <RotateCcw size={20} />, title: "Easy Returns", description: "30-day return policy" },
                { icon: <Lock size={20} />, title: "Secure Checkout", description: "SSL encrypted" },
              ]}
            />
          </Specimen>
        </div>
      </div>
      <Footer />
    </>
  );
}
