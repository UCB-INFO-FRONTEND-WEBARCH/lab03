// ========================================
// Analytics Workshop - Array Methods Practice
// ========================================

// Dataset
const analyticsData = [
    { 
      name: "Alice", 
      totalSessions: 3, 
      avgSessionDuration: 180 
    },
    { 
      name: "Bob", 
      totalSessions: 5, 
      avgSessionDuration: 240 
    },
    { 
      name: "Charlie", 
      totalSessions: 2, 
      avgSessionDuration: 90 
    },
    { 
      name: "Diana", 
      totalSessions: 7, 
      avgSessionDuration: 300 
    }
  ];
  
  // 1. Conditionals
const getEngagementLevel = (user) => {
  return user.avgSessionDuration >= 200 ? "Good" : "Low";
};

// 2. For Loop
const findLongestSessionUser = (data) => {
  if (data.length === 0) return "";

  let maxDuration = -Infinity;
  let longestUserName = "";

  for (let i = 0; i < data.length; i++) {
    if (data[i].avgSessionDuration > maxDuration) {
      maxDuration = data[i].avgSessionDuration;
      longestUserName = data[i].name;
    }
  }

  return longestUserName;
};

// 3. Map
const formatSessions = (data) => {
  return data.map((user) => `${user.name}: ${user.totalSessions} sessions`);
};

// 4. Filter (+ map)
const getActiveUsers = (data) => {
  return data
    .filter((user) => user.totalSessions >= 5)
    .map((user) => user.name);
};

// 5. Reduce
const getTotalSessions = (data) => {
  return data.reduce((sum, user) => sum + user.totalSessions, 0);
};
  // ========================================
  // UI Functions (Already implemented)
  // ========================================
  
  const output = document.getElementById('output');
  
  const appendOutput = (text) => {
    output.textContent += text + '\n';
  };
  
  const clearOutput = () => {
    output.textContent = '';
  };
  
  // Display raw data
  document.getElementById('raw-data').textContent = JSON.stringify(analyticsData, null, 2);
  
  // Button handlers
  const runEngagementLevel = () => {
    clearOutput();
    appendOutput('=== Engagement Levels ===\n');
    analyticsData.forEach(user => {
      const level = getEngagementLevel(user);
      appendOutput(`${user.name} engagement: ${level}`);
    });
  };
  
  const runLongestSession = () => {
    const longest = findLongestSessionUser(analyticsData);
    appendOutput(`\n🏆 Longest session user: ${longest}`);
  };
  
  const runFormatSessions = () => {
    const formatted = formatSessions(analyticsData);
    appendOutput(`\n📝 Sessions formatted: ${JSON.stringify(formatted, null, 2)}`);
  };
  
  const runActiveUsers = () => {
    const active = getActiveUsers(analyticsData);
    appendOutput(`\n🔥 Active users (≥5): ${JSON.stringify(active)}`);
  };
  
  const runTotalSessions = () => {
    const total = getTotalSessions(analyticsData);
    appendOutput(`\n📊 Total sessions: ${total}`);
  };
  
  const reset = () => {
    clearOutput();
  };
  