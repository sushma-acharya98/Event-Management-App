# 🗓️ Event Management App

A modern and minimal **Event Management System** built with **Next.js**, **TypeScript**, **Material UI**, and **React Hook Form**. Easily manage events with features like create, update, list, and delete—all stored locally in your browser.

[![Next.js](https://img.shields.io/badge/Next.js-14+-000000?style=flat&logo=nextdotjs)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Material UI](https://img.shields.io/badge/MUI-6.x-007FFF?style=flat&logo=mui)](https://mui.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## 📦 Tech Stack

- ⚛️ **Next.js 14+** (App Router)
- 🔐 **TypeScript**
- 🎨 **Material UI** for styling
- 🧼 **React Hook Form** for form handling
- 📆 **Day.js** for date formatting
- 💾 **LocalStorage** for event persistence

---

## ⚙️ Getting Started

🛠️ Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install


🚀 Start Development Server

npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev

Then visit: http://localhost:3000


🗂️ Project Structure

src/
├── app/
│   ├── favicon.ico             # Site icon
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # App layout
│   ├── page.tsx                # Home page (event list + form)
│   ├── components/
│   │   ├── CalendarView.tsx    # (Optional) Calendar UI component
│   │   ├── EventForm.tsx       # Reusable form component
│   │   └── EventList.tsx       # Event listing UI
│   ├── pages/
│   │   ├── add.tsx             # Add new event page
│   │   └── update.tsx          # Update event page
├── types/
│   └── event.ts                # TypeScript interfaces and types
├── utils/
│   └── storage.ts              # LocalStorage utility functions


✨ Features

    ✅ Add Events: With title, description, venue, and date.

    🗒️ Event List: View all scheduled events in a list UI.

    ✏️ Edit Events: Modify details of any event.

    🗑️ Delete Events: Remove events from the system.

    📍 Persistent Storage: Uses localStorage to save events.

🎥 Demo (Optional)

    Coming soon: hosted live preview!

📚 Learn More

    📘 Next.js Docs

    📘 Material UI Docs

    📘 React Hook Form Docs

    📘 Day.js Docs

🚀 Deployment

The easiest way to deploy this app is via Vercel:

You can also follow Next.js Deployment Docs for other methods.

---

## 📸 Screenshots

| Home Page | Add Event | Event List |
|-----------|-----------|------------|
| ![Home](https://event-management-app-flame.vercel.app/image/home.png) | ![Add](https://event-management-app-flame.vercel.app/image/add-event.png) | ![Edit](https://event-management-app-flame.vercel.app/image/edit-event.png) |

---