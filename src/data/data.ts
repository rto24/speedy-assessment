//Data for metric cards
export const dataCardMatrics = {
  totalUsers: {
    title: "Total Users",
    description: "The total number of registered users on Streamify",
    changePercentage: 23.4,
    changeType: 'increase',
    value: "2,123,903",
  },
  activeUsers: {
    title: "Active Users",
    description: "The number of users who have streamed at least one songs in the last 30 days",
    changePercentage: 23.4,
    changeType: 'increase',
    value: "1,809,202",
  },
  totalStreams: {
    title: "Total Streams",
    description: "The total number of streams on the platform",
    changePercentage: 23.4,
    changeType: 'increase',
    value: "10,563,780,204",
  },
  totalRevenue: {
    title: "Total Revenue",
    description: "The total revenue generated from subscriptions and advertisements",
    changePercentage: 23.4,
    changeType: 'increase',
    value: "$20,083,826"
  },
  topArtist: {
    title: "Taylor Swift",
    description: "The artist with the most streams this month",
    changePercentage: 23.4,
    changeType: 'increase',
    value: "1,029,590,291"
  }
}

//Data for line chart
export const lineChartData = [
  { month: "January", users: 1012345, activeUsers: 512345 },
  { month: "February", users: 1149675, activeUsers: 609876 },
  { month: "March", users: 1256789, activeUsers: 689543 },
  { month: "April", users: 1389045, activeUsers: 725678 },
  { month: "May", users: 1256783, activeUsers: 689012 },
  { month: "June", users: 1523456, activeUsers: 834567 },
  { month: "July", users: 1601234, activeUsers: 890123 },
  { month: "August", users: 1678901, activeUsers: 934567 },
  { month: "September", users: 1756782, activeUsers: 978901 },
  { month: "October", users: 1624567, activeUsers: 823456 },
  { month: "November", users: 1912345, activeUsers: 1078901 },
  { month: "December", users: 2003456, activeUsers: 1123456 },
];

//Data for revenue pie chart
export const revenueData = [
  { source: "Subscriptions", percentage: 63, fill: "hsl(var(--chart-1))" }, 
  { source: "Ads", percentage: 26, fill: "hsl(var(--chart-2))" },           
  { source: "Partnerships", percentage: 5, fill: "hsl(var(--chart-3))" },  
  { source: "Content Monetization", percentage: 3, fill: "hsl(var(--chart-4))" }, 
  { source: "Merch and Events", percentage: 3, fill: "hsl(var(--chart-5))" },     
];

//Data for top songs chart
export const topSongsData = [
  { song: "Blinding Lights", streams: 2500000000, fill: "hsl(var(--chart-1))" }, 
  { song: "Shape of You", streams: 3200000000, fill: "hsl(var(--chart-2))" }, 
  { song: "Someone You Loved", streams: 2100000000, fill: "hsl(var(--chart-3))" }, 
  { song: "Levitating", streams: 1800000000, fill: "hsl(var(--chart-4))" }, 
  { song: "Bad Guy", streams: 2400000000, fill: "hsl(var(--chart-5))" }
];

//Data for user activity data table
export const recentStreams = [
  {
    userId: "user01",
    userProfileImg: "/pfp-1.png",
    songName: "Not Like Us",
    artist: "Kendrick Lamar",
    streamCount: 901203107,
    streamDate: new Date("2025-01-12T10:30:00-05:00"),
  },
  {
    userId: "user02",
    userProfileImg: "/pfp-2.png",
    songName: "Shape of You",
    artist: "Ed Sheeran",
    streamCount: 502903442,
    streamDate: new Date("2025-01-11T10:30:00-05:00"),
  },
  {
    userId: "user03",
    userProfileImg: "/pfp-3.png",
    songName: "Blinding Lights",
    artist: "The Weeknd",
    streamCount: 652309822,
    streamDate: new Date("2025-01-12T10:30:00-05:00"),
  },
  {
    userId: "user04",
    userProfileImg: "/pfp-4.png",
    songName: "HUMBLE.",
    artist: "Kendrick Lamar",
    streamCount: 893204231,
    streamDate: new Date("2025-01-10T10:30:00-05:00"),
  },
  {
    userId: "user05",
    userProfileImg: "/pfp-5.png",
    songName: "Perfect",
    artist: "Ed Sheeran",
    streamCount: 732910834,
    streamDate: new Date("2025-01-07T11:00:00-05:00"),
  },
  {
    userId: "user06",
    userProfileImg: "/pfp-6.png",
    songName: "Can't Feel My Face",
    artist: "The Weeknd",
    streamCount: 820304914,
    streamDate: new Date("2025-01-08T12:00:00-05:00"),
  },
  {
    userId: "user07",
    userProfileImg: "/pfp-7.png",
    songName: "Photograph",
    artist: "Ed Sheeran",
    streamCount: 580204230,
    streamDate: new Date("2025-01-12T13:00:00-05:00"),
  },
  {
    userId: "user01",
    userProfileImg: "/pfp-1.png",
    songName: "Money Trees",
    artist: "Kendrick Lamar",
    streamCount: 759204230,
    streamDate: new Date("2025-01-09T14:00:00-05:00"),
  },
  {
    userId: "user02",
    userProfileImg: "/pfp-2.png",
    songName: "Starboy",
    artist: "The Weeknd",
    streamCount: 910203842,
    streamDate: new Date("2025-01-12T15:00:00-05:00"),
  },
  {
    userId: "user03",
    userProfileImg: "/pfp-3.png",
    songName: "Thinking Out Loud",
    artist: "Ed Sheeran",
    streamCount: 692203124,
    streamDate: new Date("2025-01-03T16:00:00-05:00"),
  },
  {
    userId: "user04",
    userProfileImg: "/pfp-4.png",
    songName: "Swimming Pools",
    artist: "Kendrick Lamar",
    streamCount: 803204831,
    streamDate: new Date("2025-01-11T17:00:00-05:00"),
  },
  {
    userId: "user05",
    userProfileImg: "/pfp-5.png",
    songName: "Die For You",
    artist: "The Weeknd",
    streamCount: 702304923,
    streamDate: new Date("2025-01-12T18:00:00-05:00"),
  },
  {
    userId: "user06",
    userProfileImg: "/pfp-6.png",
    songName: "Castle on the Hill",
    artist: "Ed Sheeran",
    streamCount: 892203923,
    streamDate: new Date("2025-01-12T19:00:00-05:00"),
  },
  {
    userId: "user07",
    userProfileImg: "/pfp-7.png",
    songName: "DNA.",
    artist: "Kendrick Lamar",
    streamCount: 822304911,
    streamDate: new Date("2025-01-12T20:00:00-05:00"),
  },
  {
    userId: "user01",
    userProfileImg: "/pfp-1.png",
    songName: "Save Your Tears",
    artist: "The Weeknd",
    streamCount: 852104220,
    streamDate: new Date("2025-01-12T21:00:00-05:00"),
  },
  {
    userId: "user02",
    userProfileImg: "/pfp-2.png",
    songName: "Save Your Tears",
    artist: "The Weeknd",
    streamCount: 852104223,
    streamDate: new Date("2025-01-12T21:00:00-05:00"),
  },
];

//Data for yearly goals
export const goals = [
  { label: "Revenue", value: 20083826, max: 25000000 },
  { label: "Total Users", value: 2123903, max: 2500000 },
  { label: "Active Users", value: 1809202, max: 2000000 },
  { label: "Streams", value: 10563780204, max: 12000000000}
];