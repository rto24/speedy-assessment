export const dataCardMatrics = {
  totalUsers: {
    title: "Total Users",
    description: "The total number of registered users on Streamify",
    value: "2,123,903",
  },
  activeUsers: {
    title: "Active Users",
    description: "The number of users who have streamed at least one songs in the last 30 days",
    value: "1,809,202",
  },
  totalStreams: {
    title: "Total Streams",
    description: "The total number of streams on the platform",
    value: "563,780,204",
  },
  totalRevenue: {
    title: "Total Revenue",
    description: "The total revenue generated from subscriptions and advertisements",
    value: "$20,083,826"
  },
  topArtist: {
    title: "Taylor Swift",
    description: "The artist with the most streams this month",
    value: "1,029,590,291"
  }
}

export const lineChartData = [
  { month: "January", users: 1012345, activeUsers: 512345 },
  { month: "February", users: 1149675, activeUsers: 609876 },
  { month: "March", users: 1256789, activeUsers: 689543 },
  { month: "April", users: 1389045, activeUsers: 725678 },
  { month: "May", users: 1456783, activeUsers: 789012 },
  { month: "June", users: 1523456, activeUsers: 834567 },
  { month: "July", users: 1601234, activeUsers: 890123 },
  { month: "August", users: 1678901, activeUsers: 934567 },
  { month: "September", users: 1756782, activeUsers: 978901 },
  { month: "October", users: 1834567, activeUsers: 1023456 },
  { month: "November", users: 1912345, activeUsers: 1078901 },
  { month: "December", users: 2003456, activeUsers: 1123456 },
];

export const revenueData = [
  { source: "Subscriptions", percentage: 63, fill: "#4CAF50" }, 
  { source: "Ads", percentage: 26, fill: "#2196F3" },           
  { source: "Partnerships", percentage: 5, fill: "#FFC107" },  
  { source: "Content Monetization", percentage: 3, fill: "#FF5722" }, 
  { source: "Merch and Events", percentage: 3, fill: "#9C27B0" },     
];

export const topSongsData = [
  { song: "Blinding Lights", streams: 2500000000, fill: "#FF4500" }, 
  { song: "Shape of You", streams: 3200000000, fill: "#FF6347" }, 
  { song: "Someone You Loved", streams: 2100000000, fill: "#FFA500" }, 
  { song: "Levitating", streams: 1800000000, fill: "#32CD32" }, 
  { song: "Bad Guy", streams: 2400000000, fill: "#4682B4" }
];