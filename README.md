# Streamify Music Streaming Analytics Dashboard

Welcome to the **Streamify Music Streaming Analytics Dashboard**! This project is a frontend application designed to provide insights into user activity, revenue, and content performance for a fictional music streaming service called "Streamify."

---

## **Thought Process**

### **Objective**
The primary goal was to build a **functional, visually appealing, and user-friendly** dashboard that insights into the music streaming platform. The focus was to:
1. Create a **responsive single-page application (SPA)** using modern design principles.
2. Present **key metrics and visualizations** clearly to highlight trends and performance.
3. Implement features for **sorting, filtering**, and **chart interactivity** to improve usability.

---

## **Features**

### **1. Dashboard Overview**
The dashboard includes three main sections:

#### **Key Metrics**
A set of **data cards** displaying the following metrics:
- **Total Users**: Total registered users on the platform.
- **Active Users**: Users who streamed at least one song in the past 30 days.
- **Total Streams**: Total number of song streams.
- **Revenue**: Total revenue generated from subscriptions and ads.
- **Top Artist**: The artist with the most streams in the last 30 days.

#### **Data Visualizations**
Three interactive and optimized charts:
1. **User Growth Chart**:
   - A line chart showing the growth of total users and active users over the past 12 months.
   - Hover interactions to display precise values for each data point.

2. **Revenue Distribution**:
   - A pie chart illustrating revenue breakdown by source (e.g., Subscriptions, Ads, Partnerships).

3. **Top 5 Streamed Songs**:
   - A bar chart displaying the top 5 most-streamed songs in the past 30 days.

#### **Data Table**
A table with information about recent streams:
- Song Name
- Artist
- Date Streamed
- Stream Count
- User ID
- **Profile Images**: Displays the user's profile picture for a personalized touch.

---

### **2. User Interaction**

#### **Sorting and Filtering**
- **Sorting**: Users can sort the data table by `Date Streamed` or `Stream Count`.
- **Filtering**: Users can filter data by `Artist`, `Song Name`, and `User ID` for quick insights.

#### **Chart Interactivity**
- **Hover Interactions**: Charts display tooltips with exact values when hovered.

---

### **3. Design and User Experience**
- **Responsiveness**: Built a fully responsive layout using **Tailwind CSS**, ensuring the dashboard adapts seamlessly to various screen sizes.
- **Modern Design**: Followed a clean and modern design language to focus on usability and clarity.

---

## **Technical Implementation**

### **Tech Stack**
- **Frontend Framework**: React with Next.js.
- **TypeScript**: For static typing and better code maintainability.
- **Styling**: Tailwind CSS for rapid and responsive UI development.
- **Charts**: Recharts for robust and customizable data visualizations.

### **Data Handling**
- **Mock Data**: Generated realistic mock data for metrics, charts, and the data table.
- **State Management**: Used React's `useState` and `useMemo` for efficient state handling and performance.

---

## **Performance Optimizations**

### **Techniques Used**
1. **Lazy Loading and Code Splitting**:
   - Used `React.lazy` and `Suspense` to load charts only when needed.
2. **Memoization**:
   - Optimized calculations and components using `useMemo` to ensure filtering is only recalculated when dependencies change and not on every rerender.

---

## **How to Run the Application**

### **Local Setup**
1. Fork and clone the repository

2. Install dependencies:
    ```bash
    npm install

3. Start development server:
    ```bash
    npm run dev

4. Open on localhost in the browser:
    `http://localhost:3000`