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
import { Search } from "lucide-react";

export default function ComponentsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [checkbox1, setCheckbox1] = useState(true);
  const [checkbox2, setCheckbox2] = useState(false);
  const [toggle1, setToggle1] = useState(true);
  const [toggle2, setToggle2] = useState(false);
  const [page, setPage] = useState(2);

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
        </div>
      </div>
      <Footer />
    </>
  );
}
