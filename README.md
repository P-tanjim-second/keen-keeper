# KeenKeeper

## 📋 Project Description

Friendship Tracker Platform is a modern React-based web application that helps users manage and analyze interactions with friends. It allows tracking of communication activities such as text, calls, and video interactions.

The system includes a dynamic timeline with filtering and search features, along with a visual analytics dashboard using charts to understand interaction patterns.

---

## 🛠️ Technologies Used

- React.js
- React Router
- Tailwind CSS
- DaisyUI
- Recharts
- React Context API
- React Hooks (useState, useContext, useLoaderData)
- React Toastify
- Vite
- npm

---

## ✨ Features

### 📅 Timeline System
- Track all friend interactions (Text, Call, Video)
- View complete activity history in a timeline format

### 🔍 Filtering System
- Filter by interaction type:
  - Text
  - Call
  - Video
- Sort timeline by:
  - New
  - Old
- Reset filters anytime

### 🔎 Search Functionality
- Search interactions by friend name
- Real-time filtering with instant results

---

### 📊 Analytics Dashboard
- Pie chart visualization of interactions
- Shows distribution of:
  - Text messages
  - Calls
  - Video calls
- Built using Recharts
- Includes tooltip and legend support
- Handles empty data state gracefully

---

### 👥 Friends System
- Load friends from JSON data
- View all friends on homepage
- Navigate to individual friend details page

---

### 🧭 Routing System
- `/` → Homepage (Friends list + Banner)
- `/timeline` → Interaction timeline
- `/status` → Analytics dashboard
- `/friend/:friendName` → Friend details page
