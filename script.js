
// Simple loader simulation
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  setTimeout(()=> loader.style.display = 'none', 900);
});

// Box demo logic
function openBox(type){
  const modal = document.getElementById('resultModal');
  const body = document.getElementById('modalBody');
  modal.setAttribute('aria-hidden','false');
  // Simulate result
  const rareChance = type === 'premium' ? 0.08 : 0.02; // demo values
  const rand = Math.random();
  let resultText = '';
  if(rand < rareChance){
    // ultra rare
    resultText = 'ULTRA RARE: Donk Legendary Knife (€5000) — Congratulations!';
  } else if(rand < 0.2){
    resultText = 'Rare: Donk Skin (Gold)';
  } else {
    resultText = 'Common: Donk Sticker Pack';
  }
  body.innerText = resultText;
}

function closeModal(){
  const modal = document.getElementById('resultModal');
  modal.setAttribute('aria-hidden','true');
}


// DexScreener iframe example loader (replace src with real DexScreener chart URL)
document.addEventListener('DOMContentLoaded', ()=> {
  const dex = document.getElementById('dexIframe');
  // Placeholder src - replace with DexScreener widget URL for your token:
  // e.g. dex.src = 'https://dexscreener.com/xxx/your-token';
  dex.style.width = '100%';
  dex.style.height = '480px';
  dex.style.border = '1px solid rgba(255,255,255,0.04)';
});

// KYC form handlers (demo only)
function submitKYC(e){
  e.preventDefault();
  const form = document.getElementById('kycForm');
  const data = new FormData(form);
  const obj = Object.fromEntries(data.entries());
  // Demo: just show the data in modal. In production, POST to secure backend (HTTPS) and store safely.
  const modal = document.getElementById('resultModal');
  const body = document.getElementById('modalBody');
  const text = 'KYC Received (demo)\nName: ' + obj.fullname + '\nEmail: ' + obj.email + '\nWallet: ' + obj.wallet;
  body.innerText = text;
  modal.setAttribute('aria-hidden','false');
}

// Download KYC as PDF-like text file (client-side)
function downloadKYC(){
  const form = document.getElementById('kycForm');
  const data = new FormData(form);
  const obj = Object.fromEntries(data.entries());
  const content = [
    'Donk Token — KYC Lite (Demo)',
    'Full name: ' + (obj.fullname||''),
    'Email: ' + (obj.email||''),
    'Country: ' + (obj.country||''),
    'Wallet: ' + (obj.wallet||''),
    '',
    'This file is a local export of the KYC-lite form. For production, use a secure backend and proper data handling.'
  ].join('\n');
  const blob = new Blob([content], {type: 'text/plain'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'donk_kyc_lite.txt';
  a.click();
  URL.revokeObjectURL(url);
}
