// --- Select DOM elements ---
const heartBtns = document.querySelectorAll('.heartBtn');
const callBtns = document.querySelectorAll('.callBtn');
const copyBtns = document.querySelectorAll('.copyBtn');
const heartCount = document.getElementById('heartCount');
const coinCount = document.getElementById('coinCount');
const copyCount = document.getElementById('copyCount');
const historyList = document.getElementById('historyList');
const clearHistory = document.getElementById('clearHistory');

// --- Initialize counters ---
let coins = 100;
let hearts = 0;
let copies = 0;

// --- ❤️ Heart Button ---
heartBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    hearts++;
    heartCount.textContent = hearts;
  });
});

// --- 📞 Call Button ---
callBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const name = btn.dataset.name;
    const number = btn.dataset.number;

    // Check coins
    if (coins < 20) {
      alert('⚠️ Not enough coins to make a call!');
      return;
    }

    // Deduct coins
    coins -= 20;
    coinCount.textContent = coins;

    // Show alert
    alert(`📞 Calling ${name} at ${number}...`);

    // Create call history item
    const li = document.createElement('li');
    li.className = "p-2 bg-gray-100 rounded-md mb-1 opacity-0 transition-opacity duration-500";

    const time = new Date().toLocaleTimeString('en-US', {
      hour12: true,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });

    li.innerHTML = `
      📞 <strong>${name}</strong><br>
      <div class="flex justify-between">
        <span class="pl-6 font-bold">${number}</span>
        <em class="text-gray-900 text-bold">(${time})</em>
      </div>
    `;

    historyList.appendChild(li);

    // Fade-in effect
    requestAnimationFrame(() => li.classList.remove('opacity-0'));
  });
});

// --- 📋 Copy Button ---
copyBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const number = btn.dataset.number;
    navigator.clipboard.writeText(number)
      .then(() => {
        copies++;
        copyCount.textContent = copies;
        alert(`✅ Copied number: ${number}`);
      })
      .catch(() => alert('❌ Failed to copy number.'));
  });
});

// --- 🗑️ Clear History ---
clearHistory.addEventListener('click', () => {
  if (historyList.children.length === 0) {
    alert('📭 Call history is already empty.');
    return;
  }
  historyList.innerHTML = '';
  alert('🗑️ Call history cleared!');
});
