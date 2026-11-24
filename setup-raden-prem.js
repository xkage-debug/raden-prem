/**
 * ============================================================================
 * GENERATOR PROJECT RADEN PREM (SETUP DARI 0 UNTUK VISUAL STUDIO CODE)
 * ============================================================================
 * Cara menjalankan:
 * 1. Buat folder kosong bernama "raden-prem" dan buka di VS Code.
 * 2. Simpan file ini sebagai "setup-raden-prem.js" di dalam folder tersebut.
 * 3. Buka Terminal VS Code (Ctrl + ~) lalu ketik: node setup-raden-prem.js
 * 4. Semua folder produk (28 folder terpisah) & index.html akan otomatis dibuat!
 * ============================================================================
 */

const fs = require("fs");
const path = require("path");

// 1. Konfigurasi Utama Toko
const STORE_CONFIG = {
  storeName: "RADEN PREM",
  whatsapp: "6282226840200",
  year: "2026"
};

// 2. Daftar 6 Produk Utama (Akan dipecah menjadi 6 folder & file terpisah)
const PRODUCTS = [
  {
    slug: "ai-gemini-pro",
    name: "AI Gemini Pro",
    subtitle: "Google AI • Family & Aktivasi",
    icon: "🤖",
    category: "editing",
    bestseller: true,
    packages: [
      { name: "12 Bulan Famhead", desc: "Bisa Invite 5 Orang", price: 75000 },
      { name: "12 Bulan Famplan", desc: "Member Famplan", price: 37000 },
      { name: "18 Bulan Famhead", desc: "Bisa Invite 5 Orang", price: 100000 },
      { name: "18 Bulan Famplan", desc: "Member Famplan", price: 75000 },
      { name: "Link Aktivasi 18 Bulan", desc: "Langsung Aktif di Akun", price: 70000 }
    ],
    detail: "Akses fitur cerdas Google AI, analisis data, tugas & coding, bergaransi resmi."
  },
  {
    slug: "canva-pro",
    name: "Canva Pro",
    subtitle: "Design & Pro Elements",
    icon: "🖌️",
    category: "editing",
    bestseller: true,
    packages: [
      { name: "Member 1 Bulan", desc: "Full Akses Pro", price: 5000 },
      { name: "Member 6 Bulan", desc: "Full Akses Pro", price: 15000 },
      { name: "Member 1 Tahun", desc: "Full Akses Pro", price: 30000 },
      { name: "Head Team 1 Bulan", desc: "Bisa Invite Member", price: 20000 },
      { name: "Head Team 3 Bulan", desc: "No Garansi", price: 30000 }
    ],
    detail: "Akses elemen/fitur pro lengkap, bergaransi (kecuali Head 3 Bln No Garansi)."
  },
  {
    slug: "capcut-pro",
    name: "CapCut Pro",
    subtitle: "Video Editor Pro",
    icon: "🎬",
    category: "editing",
    bestseller: true,
    packages: [
      { name: "7 Hari", desc: "Full Fitur & Filter Pro", price: 17000 },
      { name: "30 Hari (1 Bulan)", desc: "Full Fitur & Filter Pro", price: 55000 }
    ],
    detail: "Ekspor tanpa watermark, efek & filter pro lengkap, bergaransi resmi."
  },
  {
    slug: "spotify-premium",
    name: "Spotify Premium",
    subtitle: "Music & Podcast No Ads",
    icon: "🎧",
    category: "music",
    bestseller: true,
    packages: [
      { name: "Indplan 1 Bulan", desc: "Akun dari Penjual", price: 27000 },
      { name: "Indplan 2 Bulan", desc: "Akun dari Penjual", price: 45000 },
      { name: "Indplan 3 Bulan", desc: "No Garansi", price: 22000 },
      { name: "Famplan 1 Bulan", desc: "Akun dari Penjual", price: 29000 }
    ],
    detail: "Akun dari penjual, bebas iklan, skip unlimited, bergaransi (kecuali 3B No Garansi)."
  },
  {
    slug: "vidio-platinum",
    name: "Vidio Platinum",
    subtitle: "Live Sports & Originals",
    icon: "⚽",
    category: "streaming",
    bestseller: false,
    packages: [
      { name: "Khusus TV (Private) 9 Bln", desc: "Smart TV / Android TV", price: 40000 },
      { name: "Mobile (HP Only) 1 Bln", desc: "Smartphone", price: 29000 },
      { name: "All Device (Student) 1 Bln", desc: "HP / Laptop / TV", price: 45000 },
      { name: "All Device 1 Bulan", desc: "Semua Perangkat", price: 47000 }
    ],
    detail: "Nonton tayangan olahraga, sinetron & Vidio Original Series, bergaransi resmi."
  },
  {
    slug: "youtube-premium",
    name: "YouTube Premium",
    subtitle: "Include YT Music & No Ads",
    icon: "▶️",
    category: "music",
    bestseller: true,
    packages: [
      {
        name: "Famplan Invite (Akun Pembeli)",
        desc: "1Bln: 7k | 2Bln: 12k (+5k akun penjual)",
        price: 7000,
        selectedOption: 0,
        options: [
          { label: "1 Bln", price: 7000 },
          { label: "2 Bln", price: 12000 },
          { label: "1 Bln (Akun Penjual)", price: 12000 }
        ]
      },
      { name: "Famhead (Akun Pembeli) 1 Bln", desc: "Bisa invite 5 orang", price: 15000 },
      {
        name: "Jangka Panjang (Akun Penjual)",
        desc: "3Bln: 30k | 4Bln: 38k | 5Bln: 48k | 6Bln: 55k | 12Bln: 85k",
        price: 30000,
        selectedOption: 0,
        options: [
          { label: "3 Bln", price: 30000 },
          { label: "4 Bln", price: 38000 },
          { label: "5 Bln", price: 48000 },
          { label: "6 Bln", price: 55000 },
          { label: "12 Bln", price: 85000 }
        ]
      },
      {
        name: "Jangka Panjang (Akun Pembeli)",
        desc: "3Bln: 20k | 3Bln No Ganti: 25k | 4Bln: 28k | 6Bln: 45k | 12Bln: 75k",
        price: 20000,
        selectedOption: 0,
        options: [
          { label: "3 Bln", price: 20000 },
          { label: "3 Bln No Ganti Email", price: 25000 },
          { label: "4 Bln", price: 28000 },
          { label: "6 Bln", price: 45000 },
          { label: "12 Bln", price: 75000 }
        ]
      }
    ],
    detail: "Bebas iklan YT & Music, putar latar belakang, download offline, bergaransi resmi."
  }
];

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function toCamelCase(slug) {
  return slug.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase());
}

// 3. Bersihkan folder lama & buat folder data/produk/<slug>/<slug>.js untuk 6 produk
const rootDir = process.cwd();
const produkBaseDir = path.join(rootDir, "data", "produk");
if (fs.existsSync(produkBaseDir)) {
  fs.rmSync(produkBaseDir, { recursive: true, force: true });
}
ensureDir(produkBaseDir);

const importLines = [];
const exportVars = [];

PRODUCTS.forEach((product) => {
  const { slug, ...productPayload } = product;
  const productFolder = path.join(produkBaseDir, slug);
  ensureDir(productFolder);

  const productFile = path.join(productFolder, `${slug}.js`);
  const fileContent =
`// Data Produk: ${product.name}
// Silakan ubah harga, paket, atau detail langsung di file ini.

export default ${JSON.stringify(productPayload, null, 2)};
`;
  fs.writeFileSync(productFile, fileContent, "utf8");

  const varName = toCamelCase(slug);
  importLines.push(`import ${varName} from "./produk/${slug}/${slug}.js";`);
  exportVars.push(`  ${varName}`);
});

// 4. Membuat file penggabung data/index.js
const dataIndexContent =
`// File Penggabung Seluruh Katalog Produk RADEN PREM
// Jika menambah folder produk baru di ./produk/, daftarkan import-nya di sini.

${importLines.join("\n")}

export const STORE_SETTINGS = ${JSON.stringify(STORE_CONFIG, null, 2)};

export const DEFAULT_CATALOG = [
${exportVars.join(",\n")}
];
`;
fs.writeFileSync(path.join(rootDir, "data", "index.js"), dataIndexContent, "utf8");

// 5. Membuat package.json & README.md
const packageJsonContent = `{
  "name": "raden-prem-store",
  "version": "1.0.0",
  "description": "Etalase Digital Layanan Aplikasi Premium - Raden Prem",
  "scripts": {
    "start": "npx serve ."
  }
}
`;
fs.writeFileSync(path.join(rootDir, "package.json"), packageJsonContent, "utf8");

const readmeContent = `# RADEN PREM — Project Website Store Modular

## Struktur Folder
- \`index.html\` : Halaman utama website (tampilan Deep Midnight Navy & Electric Cyan).
- \`data/index.js\` : File penggabung semua produk & pengaturan nomor WhatsApp.
- \`data/produk/<nama-produk>/<nama-produk>.js\` : Folder & file terpisah untuk masing-masing dari 28 aplikasi.

## Cara Menjalankan di VS Code
1. Pasang ekstensi **Live Server** (oleh Ritwick Dey) di VS Code.
2. Klik kanan pada file \`index.html\` lalu pilih **Open with Live Server**.
3. Untuk mengubah harga salah satu aplikasi, cukup buka file produknya di folder \`data/produk/\` lalu tekan **Ctrl + S**.
`;
fs.writeFileSync(path.join(rootDir, "README.md"), readmeContent, "utf8");

// 6. Membuat file index.html lengkap yang membaca modul dari ./data/index.js
const indexHtmlLines = [
  '<!DOCTYPE html>',
  '<html lang="id" data-design="6" class="scroll-smooth">',
  '<head>',
  '  <meta charset="UTF-8" />',
  '  <meta name="viewport" content="width=device-width, initial-scale=1.0" />',
  '  <title>RADEN PREM — Pusat Layanan Aplikasi Premium Murah & Terpercaya</title>',
  '  <script src="https://cdn.tailwindcss.com"></script>',
  '  <link rel="preconnect" href="https://fonts.googleapis.com">',
  '  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>',
  '  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;600;700&display=swap" rel="stylesheet">',
  '  <style>',
  '    :root {',
  '      --bg-primary: #030A14;',
  '      --bg-secondary: #081728;',
  '      --bg-elevated: #0C2138;',
  '      --text-primary: #F8FAFC;',
  '      --text-secondary: #94A3B8;',
  '      --border-hairline: rgba(25, 211, 243, 0.22);',
  '      --border-strong: rgba(25, 211, 243, 0.72);',
  '      --accent-cyan: #19D3F3;',
  '      --accent-cyan-hover: #38E2FF;',
  '      --accent-cyan-fg: #030A14;',
  '      --accent-soft-bg: rgba(25, 211, 243, 0.12);',
  '      --card-shadow: 0 8px 28px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(25, 211, 243, 0.14);',
  '      --card-shadow-hover: 0 14px 36px rgba(25, 211, 243, 0.18), inset 0 1px 0 rgba(25, 211, 243, 0.35);',
  '    }',
  '    body {',
  '      background-color: var(--bg-primary);',
  '      background-image:',
  '        radial-gradient(ellipse 65% 42% at 72% 14%, rgba(14, 165, 233, 0.24), transparent 62%),',
  '        radial-gradient(ellipse 55% 40% at 15% 8%, rgba(25, 211, 243, 0.14), transparent 58%),',
  '        radial-gradient(ellipse 60% 45% at 85% 65%, rgba(2, 132, 199, 0.14), transparent 64%),',
  '        linear-gradient(180deg, #030A14 0%, #051122 50%, #030A14 100%);',
  '      background-attachment: fixed;',
  '      color: var(--text-primary);',
  '      font-family: "Inter", sans-serif;',
  '    }',
  '    .editorial-card {',
  '      background-color: var(--bg-secondary);',
  '      border: 1px solid var(--border-hairline);',
  '      border-radius: 18px;',
  '      box-shadow: var(--card-shadow);',
  '      transition: all 0.2s ease;',
  '    }',
  '    .editorial-card:hover {',
  '      border-color: var(--border-strong);',
  '      box-shadow: var(--card-shadow-hover);',
  '      transform: translateY(-2px);',
  '    }',
  '    .editorial-surface {',
  '      background-color: var(--bg-elevated);',
  '      border: 1px solid var(--border-hairline);',
  '    }',
  '    .hairline-b { border-bottom: 1px solid var(--border-hairline); }',
  '    .hairline-t { border-top: 1px solid var(--border-hairline); }',
  '    .text-muted { color: var(--text-secondary); }',
  '    .cyan-text { color: var(--accent-cyan); }',
  '    .cyan-btn {',
  '      background-color: var(--accent-cyan);',
  '      color: var(--accent-cyan-fg);',
  '      border-radius: 9999px;',
  '      box-shadow: 0 0 18px rgba(25, 211, 243, 0.28);',
  '    }',
  '    .cyan-btn:hover {',
  '      background-color: var(--accent-cyan-hover);',
  '      box-shadow: 0 0 24px rgba(25, 211, 243, 0.45);',
  '    }',
  '    .cyan-pill-soft {',
  '      background-color: var(--accent-soft-bg);',
  '      color: var(--accent-cyan);',
  '    }',
  '    .no-scrollbar::-webkit-scrollbar { display: none; }',
  '    .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }',
  '  </style>',
  '</head>',
  '<body class="antialiased">',
  '  <div class="hairline-b py-2 px-4 text-[11px] sm:text-xs font-medium" style="background-color: var(--bg-secondary);">',
  '    <div class="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">',
  '      <div class="flex items-center gap-2">',
  '        <span class="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>',
  '        <span><strong id="topStoreName">RADEN PREM</strong> <span class="text-muted">•</span> Layanan Buka 24 Jam Nonstop • Proses Kilat 1–15 Menit • 100% Bergaransi Resmi</span>',
  '      </div>',
  '      <div class="hidden md:flex items-center gap-3 text-muted font-mono text-[11px]">',
  '        <span>OFFICIAL STORE 2026</span>',
  '        <span>•</span>',
  '        <span class="cyan-text font-semibold" id="topWaDisplay">WA: 0822-2684-0200</span>',
  '      </div>',
  '    </div>',
  '  </div>',
  '',
  '  <header class="hairline-b backdrop-blur-xl" style="background-color: rgba(8, 23, 40, 0.85);">',
  '    <div class="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">',
  '      <a href="#" class="flex items-center gap-3">',
  '        <div class="w-10 h-10 rounded-2xl cyan-btn flex items-center justify-center font-extrabold text-sm">RP</div>',
  '        <div>',
  '          <div class="flex items-center gap-2">',
  '            <span id="headerStoreName" class="font-bold text-base sm:text-lg">RADEN PREM</span>',
  '            <span class="hidden sm:inline-flex px-2.5 py-0.5 text-[10px] font-semibold rounded-full cyan-pill-soft">Official Store</span>',
  '          </div>',
  '          <p class="text-[11px] text-muted">Digital Subscription Store • 2026</p>',
  '        </div>',
  '      </a>',
  '      <nav class="hidden md:flex items-center gap-6 text-xs font-medium text-muted">',
  '        <a href="#katalog" class="hover:text-[#19D3F3] transition">Katalog</a>',
  '        <a href="#keunggulan" class="hover:text-[#19D3F3] transition">Keunggulan</a>',
  '        <a href="#faq" class="hover:text-[#19D3F3] transition">FAQ</a>',
  '      </nav>',
  '    </div>',
  '  </header>',
  '',
  '  <section class="pt-8 pb-8">',
  '    <div class="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-5">',
  '      <div class="lg:col-span-8 editorial-card p-6 sm:p-9 flex flex-col justify-between">',
  '        <div>',
  '          <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full cyan-pill-soft text-xs font-semibold mb-4">✨ Store Aplikasi Premium Terlengkap</span>',
  '          <h1 class="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">',
  '            <span id="heroTitleName">RADEN PREM</span>',
  '            <span class="block text-muted font-bold mt-1 text-2xl sm:text-4xl">Semua akun premium favoritmu, dalam satu tempat.</span>',
  '          </h1>',
  '          <p class="mt-4 text-sm text-muted max-w-2xl leading-relaxed">',
  '            Pusat Layanan Aplikasi Premium Murah & Terpercaya. Layanan Buka 24 Jam Nonstop dengan proses aktivasi 1–15 menit dan 100% bergaransi resmi.',
  '          </p>',
  '        </div>',
  '        <div class="mt-7 pt-5 hairline-t flex flex-wrap items-center gap-3">',
  '          <a href="#katalog" class="cyan-btn px-5 py-2.5 text-xs sm:text-sm font-semibold">Jelajahi 6 Aplikasi</a>',
  '          <span class="px-3 py-1.5 rounded-full editorial-surface text-xs text-muted">⚡ 1–15 Menit Aktif</span>',
  '          <span class="px-3 py-1.5 rounded-full editorial-surface text-xs text-muted">🛡️ 100% Bergaransi</span>',
  '        </div>',
  '      </div>',
  '',
  '      <div class="lg:col-span-4 flex flex-col gap-5">',
  '        <div class="editorial-card p-6 flex-1 flex flex-col justify-between">',
  '          <div class="flex items-center justify-between text-[11px] text-muted">',
  '            <span class="uppercase tracking-wider">Admin Resmi</span>',
  '            <span class="text-emerald-400 font-semibold">● Online 24 Jam</span>',
  '          </div>',
  '          <div class="my-4">',
  '            <p class="text-xs text-muted">WhatsApp Order & Bantuan</p>',
  '            <p id="heroWaDisplay" class="font-mono font-bold text-2xl mt-0.5">0822-2684-0200</p>',
  '          </div>',
  '          <button onclick="chatAdminDirect()" class="w-full cyan-btn py-2.5 px-4 text-xs font-semibold cursor-pointer">💬 Chat Admin Sekarang</button>',
  '        </div>',
  '        <div class="grid grid-cols-2 gap-4">',
  '          <div class="editorial-card p-5">',
  '            <div id="metricTotalApps" class="text-2xl font-extrabold cyan-text">6</div>',
  '            <div class="text-xs font-semibold mt-0.5">Aplikasi Ready</div>',
  '          </div>',
  '          <div class="editorial-card p-5">',
  '            <div class="text-2xl font-extrabold text-emerald-400">5k</div>',
  '            <div class="text-xs font-semibold mt-0.5">Mulai dari Rp5rb</div>',
  '          </div>',
  '        </div>',
  '      </div>',
  '    </div>',
  '  </section>',
  '',
  '  <div id="katalog" class="sticky top-0 z-30 hairline-b hairline-t backdrop-blur-xl" style="background-color: rgba(3, 10, 20, 0.88);">',
  '    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-3.5">',
  '      <div class="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">',
  '        <div class="relative flex-1 max-w-xl">',
  '          <span class="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm opacity-70">🔍</span>',
  '          <input type="text" id="searchInput" placeholder="Cari aplikasi (contoh: CapCut, Netflix, Spotify)..." class="w-full rounded-full pl-10 pr-16 py-2.5 text-sm editorial-card outline-none" />',
  '          <button id="clearSearchBtn" class="hidden absolute right-2.5 top-1/2 -translate-y-1/2 text-[11px] font-medium px-2.5 py-1 rounded-full editorial-surface cursor-pointer">Reset</button>',
  '        </div>',
  '        <div class="text-xs text-muted">Menampilkan <strong id="visibleCount" class="text-white">0</strong> dari <span id="totalCount">0</span> aplikasi</div>',
  '      </div>',
  '      <div id="categoryBar" class="flex items-center gap-2 overflow-x-auto no-scrollbar mt-3 pb-0.5"></div>',
  '      <div id="attributeBar" class="flex items-center gap-1.5 overflow-x-auto no-scrollbar mt-2.5 pt-2.5 hairline-t"></div>',
  '    </div>',
  '  </div>',
  '',
  '  <main class="max-w-7xl mx-auto px-4 sm:px-6 py-8">',
  '    <div id="productGrid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"></div>',
  '    <div id="emptyState" class="hidden text-center py-16 px-4 editorial-card">',
  '      <h3 class="text-lg font-bold">Aplikasi yang kamu cari tidak ditemukan.</h3>',
  '      <p class="text-xs text-muted mt-1">Coba gunakan kata kunci lain atau tanyakan langsung ke Admin via WhatsApp.</p>',
  '    </div>',
  '  </main>',
  '',
  '  <section id="keunggulan" class="py-12 hairline-t">',
  '    <div class="max-w-7xl mx-auto px-4 sm:px-6">',
  '      <h2 class="text-2xl font-extrabold mb-6">Mengapa Memilih <span id="whyStoreName">Raden Prem</span>?</h2>',
  '      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">',
  '        <div class="editorial-card p-6"><div class="text-xl mb-2">⚡</div><h3 class="font-bold text-base">Proses Kilat</h3><p class="text-xs text-muted mt-1">1–15 menit langsung siap pakai setelah pembayaran terkonfirmasi.</p></div>',
  '        <div class="editorial-card p-6"><div class="text-xl mb-2">🛡️</div><h3 class="font-bold text-base">100% Bergaransi</h3><p class="text-xs text-muted mt-1">Ada kendala langsung diganti tuntas sesuai masa durasi paket.</p></div>',
  '        <div class="editorial-card p-6"><div class="text-xl mb-2">⭐</div><h3 class="font-bold text-base">Terpercaya & Amanah</h3><p class="text-xs text-muted mt-1">Pelayanan ramah, responsif, dan transparan untuk setiap pelanggan.</p></div>',
  '        <div class="editorial-card p-6"><div class="text-xl mb-2">💰</div><h3 class="font-bold text-base">Harga Pelajar</h3><p class="text-xs text-muted mt-1">Harga hemat dan bersahabat dengan kualitas layanan terjamin.</p></div>',
  '      </div>',
  '    </div>',
  '  </section>',
  '',
  '  <section id="faq" class="py-12 hairline-t" style="background-color: rgba(8, 23, 40, 0.65);">',
  '    <div class="max-w-3xl mx-auto px-4 sm:px-6 space-y-3">',
  '      <h2 class="text-2xl font-extrabold text-center mb-6">Pertanyaan Sering Diajukan (FAQ)</h2>',
  '      <div class="rounded-2xl editorial-surface p-4">',
  '        <div class="font-semibold text-sm">Bagaimana cara order di <span class="faq-store-name">Raden Prem</span>?</div>',
  '        <p class="text-xs text-muted mt-2">Pilih aplikasi & paket yang diinginkan lalu klik tombol Order (atau + untuk keranjang multi-order). Kamu akan langsung diarahkan ke WhatsApp Admin dengan format pesan otomatis.</p>',
  '      </div>',
  '      <div class="rounded-2xl editorial-surface p-4">',
  '        <div class="font-semibold text-sm">Berapa lama proses pengerjaan pesanan?</div>',
  '        <p class="text-xs text-muted mt-2">Proses pengerjaan cepat sekitar 1 hingga 15 menit setelah pembayaran terkonfirmasi.</p>',
  '      </div>',
  '    </div>',
  '  </section>',
  '',
  '  <footer class="hairline-t py-8 px-4 text-center" style="background-color: rgba(4, 13, 26, 0.85);">',
  '    <div class="font-bold text-base" id="footerStoreName">RADEN PREM</div>',
  '    <p class="text-xs text-muted mt-1">Digital Subscription Store • WhatsApp: <span id="footerWaText" class="cyan-text font-mono font-semibold">0822-2684-0200</span></p>',
  '    <p class="text-[11px] text-muted mt-3">&copy; 2026 <span id="copyrightStoreName">Raden Prem</span>. All Rights Reserved.</p>',
  '  </footer>',
  '',
  '  <div class="fixed bottom-4 right-5 z-40 flex items-center gap-2.5">',
  '    <button id="floatingCartBtn" type="button" class="hidden editorial-card px-4 py-2.5 rounded-full flex items-center gap-3 text-xs font-semibold cursor-pointer">',
  '      <span class="w-6 h-6 rounded-full cyan-btn flex items-center justify-center font-mono text-[11px] font-bold" id="cartBadgeCount">0</span>',
  '      <span id="cartFloatingTotal" class="font-mono font-bold cyan-text">Rp0</span>',
  '    </button>',
  '    <a id="floatingWaLink" href="https://wa.me/6282226840200" target="_blank" class="cyan-btn px-5 py-3 text-xs font-semibold">💬 Chat Admin</a>',
  '  </div>',
  '',
  '  <!-- MODAL ORDER & KERANJANG -->',
  '  <div id="orderModal" class="hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4">',
  '    <div class="w-full max-w-md editorial-card p-6">',
  '      <div class="flex items-center justify-between pb-3 hairline-b">',
  '        <h3 id="modalTitle" class="text-base font-bold">Konfirmasi Pesanan</h3>',
  '        <button id="closeModalBtn" class="w-8 h-8 rounded-full editorial-surface font-bold cursor-pointer">&times;</button>',
  '      </div>',
  '      <div id="cartListArea" class="mt-3 space-y-2 max-h-48 overflow-y-auto"></div>',
  '      <textarea id="orderMessageBox" rows="6" readonly class="w-full mt-3 rounded-2xl p-3 text-xs font-mono editorial-surface outline-none resize-none"></textarea>',
  '      <div class="mt-4 grid grid-cols-2 gap-2.5">',
  '        <button id="copyFormatBtn" type="button" class="py-2.5 px-4 rounded-full editorial-surface text-xs font-semibold cursor-pointer">📋 Salin Format</button>',
  '        <a id="sendWaBtn" href="#" target="_blank" class="py-2.5 px-4 rounded-full cyan-btn text-xs font-semibold text-center">💬 Lanjut ke WA</a>',
  '      </div>',
  '    </div>',
  '  </div>',
  '',
  '  <!-- IMPORT DATA MODULAR DARI FOLDER data/index.js -->',
  '  <script type="module">',
  '    import { DEFAULT_CATALOG, STORE_SETTINGS } from "./data/index.js";',
  '',
  '    const catalogData = JSON.parse(JSON.stringify(DEFAULT_CATALOG));',
  '    let activeCategory = "all";',
  '    let activeAttribute = "all";',
  '    let cartItems = [];',
  '',
  '    const CATEGORY_DEFS = [',
  '      { id: "all", label: "Semua Produk", icon: "✨" },',
  '      { id: "streaming", label: "Streaming / Nonton", icon: "🎬" },',
  '      { id: "music", label: "Musik", icon: "🎵" },',
  '      { id: "editing", label: "Editing & AI", icon: "🎨" }',
  '    ];',
  '',
  '    const ATTRIBUTE_DEFS = [',
  '      { id: "all", label: "Semua Tipe" },',
  '      { id: "bestseller", label: "★ Terlaris" },',
  '      { id: "private", label: "🔒 Akun Private" },',
  '      { id: "longterm", label: "📅 Jangka Panjang / 1 Tahun" }',
  '    ];',
  '',
  '    function formatRupiah(n) {',
  '      return "Rp" + Number(n || 0).toLocaleString("id-ID");',
  '    }',
  '',
  '    function formatWaDisplay(wa) {',
  '      const clean = String(wa || "").replace(/\\D/g, "");',
  '      if (clean.startsWith("62")) {',
  '        return ("0" + clean.slice(2)).replace(/(\\d{4})(\\d{4})(\\d+)/, "$1-$2-$3");',
  '      }',
  '      return clean;',
  '    }',
  '',
  '    function initStoreUI() {',
  '      const name = STORE_SETTINGS.storeName || "RADEN PREM";',
  '      const wa = STORE_SETTINGS.whatsapp || "6282226840200";',
  '      const waPretty = formatWaDisplay(wa);',
  '',
  '      document.title = name + " — Pusat Layanan Aplikasi Premium";',
  '      document.getElementById("topStoreName").textContent = name;',
  '      document.getElementById("headerStoreName").textContent = name;',
  '      document.getElementById("heroTitleName").textContent = name;',
  '      document.getElementById("whyStoreName").textContent = name;',
  '      document.getElementById("footerStoreName").textContent = name;',
  '      document.getElementById("copyrightStoreName").textContent = name;',
  '      document.getElementById("topWaDisplay").textContent = "WA: " + waPretty;',
  '      document.getElementById("heroWaDisplay").textContent = waPretty;',
  '      document.getElementById("footerWaText").textContent = waPretty;',
  '      document.getElementById("metricTotalApps").textContent = catalogData.length;',
  '      document.querySelectorAll(".faq-store-name").forEach(el => el.textContent = name);',
  '      const introMsg = encodeURIComponent("Halo Admin " + name + ", saya mau tanya seputar produk aplikasi premium");',
  '      document.getElementById("floatingWaLink").href = "https://wa.me/" + wa + "?text=" + introMsg;',
  '    }',
  '',
  '    window.chatAdminDirect = () => {',
  '      const name = STORE_SETTINGS.storeName || "RADEN PREM";',
  '      const wa = STORE_SETTINGS.whatsapp || "6282226840200";',
  '      const msg = encodeURIComponent("Halo Admin " + name + ", saya mau tanya seputar produk aplikasi premium");',
  '      window.open("https://wa.me/" + wa + "?text=" + msg, "_blank");',
  '    };',
  '',
  '    function renderFilterBars() {',
  '      document.getElementById("categoryBar").innerHTML = CATEGORY_DEFS.map(cat => {',
  '        const count = cat.id === "all" ? catalogData.length : catalogData.filter(p => p.category === cat.id).length;',
  '        const active = activeCategory === cat.id;',
  '        const cls = active ? "cyan-btn" : "editorial-surface";',
  '        return "<button type=\\"button\\" data-cat=\\"" + cat.id + "\\" class=\\"cat-btn shrink-0 px-4 py-2 rounded-full text-xs font-semibold cursor-pointer " + cls + "\\">" + cat.icon + " " + cat.label + " (" + count + ")</button>";',
  '      }).join("");',
  '',
  '      document.getElementById("attributeBar").innerHTML =',
  '        "<span class=\\"text-[11px] text-muted mr-1 shrink-0\\">Filter cepat:</span>" +',
  '        ATTRIBUTE_DEFS.map(attr => {',
  '          const active = activeAttribute === attr.id;',
  '          const cls = active ? "cyan-pill-soft border border-[#19D3F3]" : "editorial-surface text-muted";',
  '          return "<button type=\\"button\\" data-attr=\\"" + attr.id + "\\" class=\\"attr-btn shrink-0 px-3 py-1 rounded-full text-[11px] font-semibold cursor-pointer " + cls + "\\">" + attr.label + "</button>";',
  '        }).join("");',
  '',
  '      document.querySelectorAll(".cat-btn").forEach(btn => {',
  '        btn.onclick = () => { activeCategory = btn.dataset.cat; renderFilterBars(); renderCatalog(); };',
  '      });',
  '      document.querySelectorAll(".attr-btn").forEach(btn => {',
  '        btn.onclick = () => { activeAttribute = btn.dataset.attr; renderFilterBars(); renderCatalog(); };',
  '      });',
  '    }',
  '',
  '    function renderCatalog() {',
  '      const q = document.getElementById("searchInput").value.trim().toLowerCase();',
  '      document.getElementById("clearSearchBtn").classList.toggle("hidden", !q);',
  '',
  '      const filtered = catalogData.map((p, idx) => ({ p, idx })).filter(({ p }) => {',
  '        if (activeCategory !== "all" && p.category !== activeCategory) return false;',
  '        const blob = (p.name + " " + p.subtitle + " " + p.detail + " " + p.packages.map(x => x.name + " " + x.desc).join(" ")).toLowerCase();',
  '        if (activeAttribute === "bestseller" && !p.bestseller) return false;',
  '        if (activeAttribute === "private" && !blob.includes("private")) return false;',
  '        if (activeAttribute === "longterm" && !(blob.includes("1 tahun") || blob.includes("12 bulan") || blob.includes("18 bulan") || blob.includes("6 bulan"))) return false;',
  '        return !q || blob.includes(q);',
  '      });',
  '',
  '      document.getElementById("visibleCount").textContent = filtered.length;',
  '      document.getElementById("totalCount").textContent = catalogData.length;',
  '      const grid = document.getElementById("productGrid");',
  '      document.getElementById("emptyState").classList.toggle("hidden", filtered.length > 0);',
  '',
  '      grid.innerHTML = filtered.map(({ p, idx }) => {',
  '        const badgeHtml = p.bestseller ? "<span class=\\"px-2 py-0.5 rounded-full cyan-pill-soft text-[10px] font-bold shrink-0\\">★ TERLARIS</span>" : "";',
  '        const pkgsHtml = p.packages.map((pkg, kIdx) => {',
  '          const hasOpt = Array.isArray(pkg.options) && pkg.options.length > 0;',
  '          const selIdx = hasOpt ? (pkg.selectedOption || 0) : -1;',
  '          const price = hasOpt ? pkg.options[selIdx].price : pkg.price;',
  '          const optsHtml = hasOpt ? "<div class=\\"flex flex-wrap gap-1 mt-2\\">" + pkg.options.map((o, oIdx) => {',
  '            const oCls = oIdx === selIdx ? "cyan-btn" : "editorial-card text-muted";',
  '            return "<button type=\\"button\\" data-p=\\"" + idx + "\\" data-k=\\"" + kIdx + "\\" data-o=\\"" + oIdx + "\\" class=\\"opt-btn px-2 py-0.5 rounded-full text-[10px] font-semibold cursor-pointer " + oCls + "\\">" + o.label + "</button>";',
  '          }).join("") + "</div>" : "";',
  '',
  '          return "<div class=\\"p-3 rounded-xl editorial-surface\\">" +',
  '            "<div class=\\"flex items-start justify-between gap-2\\">" +',
  '              "<div><div class=\\"font-bold text-xs\\">" + pkg.name + "</div><div class=\\"text-[11px] text-muted\\">" + pkg.desc + "</div></div>" +',
  '              "<div class=\\"font-mono font-bold text-sm cyan-text shrink-0\\">" + formatRupiah(price) + "</div>" +',
  '            "</div>" +',
  '            optsHtml +',
  '            "<div class=\\"flex justify-end gap-1.5 mt-2\\">" +',
  '              "<button type=\\"button\\" data-p=\\"" + idx + "\\" data-k=\\"" + kIdx + "\\" class=\\"add-cart-btn w-7 h-7 rounded-full editorial-card text-xs font-bold cursor-pointer\\">+</button>" +',
  '              "<button type=\\"button\\" data-p=\\"" + idx + "\\" data-k=\\"" + kIdx + "\\" class=\\"order-now-btn px-3.5 py-1 rounded-full cyan-btn text-xs font-semibold cursor-pointer\\">Order</button>" +',
  '            "</div>" +',
  '          "</div>";',
  '        }).join("");',
  '',
  '        return "<article class=\\"editorial-card p-5 flex flex-col justify-between\\">" +',
  '          "<div>" +',
  '            "<div class=\\"flex items-start justify-between gap-2 pb-3 hairline-b\\">" +',
  '              "<div class=\\"flex items-center gap-3 min-w-0\\">" +',
  '                "<div class=\\"w-10 h-10 rounded-xl cyan-pill-soft flex items-center justify-center text-lg shrink-0\\">" + p.icon + "</div>" +',
  '                "<div class=\\"min-w-0\\"><h2 class=\\"font-bold text-base truncate\\">" + p.name + "</h2><p class=\\"text-xs text-muted truncate\\">" + p.subtitle + "</p></div>" +',
  '              "</div>" +',
  '              badgeHtml +',
  '            "</div>" +',
  '            "<div class=\\"mt-3 space-y-2\\">" + pkgsHtml + "</div>" +',
  '          "</div>" +',
  '          "<div class=\\"mt-3 pt-3 hairline-t text-[11px] text-muted\\"><strong class=\\"text-white\\">Detail:</strong> " + p.detail + "</div>" +',
  '        "</article>";',
  '      }).join("");',
  '',
  '      grid.querySelectorAll(".opt-btn").forEach(b => {',
  '        b.onclick = () => {',
  '          const pkg = catalogData[b.dataset.p].packages[b.dataset.k];',
  '          pkg.selectedOption = Number(b.dataset.o);',
  '          pkg.price = pkg.options[pkg.selectedOption].price;',
  '          renderCatalog();',
  '        };',
  '      });',
  '',
  '      grid.querySelectorAll(".order-now-btn").forEach(b => {',
  '        b.onclick = () => {',
  '          const prod = catalogData[b.dataset.p];',
  '          const pkg = prod.packages[b.dataset.k];',
  '          const hasOpt = Array.isArray(pkg.options) && pkg.options.length > 0;',
  '          const label = hasOpt ? pkg.name + " (" + pkg.options[pkg.selectedOption || 0].label + ")" : pkg.name;',
  '          const price = hasOpt ? pkg.options[pkg.selectedOption || 0].price : pkg.price;',
  '          openOrderModal([{ appName: prod.name, pkgName: label, price: price, qty: 1 }], false);',
  '        };',
  '      });',
  '',
  '      grid.querySelectorAll(".add-cart-btn").forEach(b => {',
  '        b.onclick = () => {',
  '          const prod = catalogData[b.dataset.p];',
  '          const pkg = prod.packages[b.dataset.k];',
  '          const hasOpt = Array.isArray(pkg.options) && pkg.options.length > 0;',
  '          const label = hasOpt ? pkg.name + " (" + pkg.options[pkg.selectedOption || 0].label + ")" : pkg.name;',
  '          const price = hasOpt ? pkg.options[pkg.selectedOption || 0].price : pkg.price;',
  '          const found = cartItems.find(x => x.appName === prod.name && x.pkgName === label);',
  '          if (found) found.qty += 1;',
  '          else cartItems.push({ appName: prod.name, pkgName: label, price: price, qty: 1 });',
  '          updateCartBadge();',
  '        };',
  '      });',
  '    }',
  '',
  '    function updateCartBadge() {',
  '      const qty = cartItems.reduce((s, x) => s + x.qty, 0);',
  '      const total = cartItems.reduce((s, x) => s + x.price * x.qty, 0);',
  '      document.getElementById("floatingCartBtn").classList.toggle("hidden", qty === 0);',
  '      document.getElementById("cartBadgeCount").textContent = qty;',
  '      document.getElementById("cartFloatingTotal").textContent = formatRupiah(total);',
  '    }',
  '',
  '    function openOrderModal(items, isCart) {',
  '      const name = STORE_SETTINGS.storeName || "RADEN PREM";',
  '      const wa = STORE_SETTINGS.whatsapp || "6282226840200";',
  '      const total = items.reduce((s, x) => s + x.price * x.qty, 0);',
  '      const lines = items.map((x, i) => (i + 1) + ". *" + x.appName + "* — " + x.pkgName + " (" + x.qty + "x) = *" + formatRupiah(x.price * x.qty) + "*").join("\\n");',
  '      const msg = "Halo Admin " + name + ", saya ingin order:\\n\\n" + lines + "\\n\\n*Total: " + formatRupiah(total) + "*\\n\\nMohon info pembayarannya ya min. Terima kasih!";',
  '',
  '      document.getElementById("modalTitle").textContent = isCart ? "Keranjang Pesanan" : "Konfirmasi Pesanan";',
  '      document.getElementById("cartListArea").innerHTML = isCart',
  '        ? items.map(x => "<div class=\\"p-2.5 rounded-xl editorial-surface flex justify-between text-xs\\"><span>" + x.appName + " (" + x.pkgName + ") x" + x.qty + "</span><span class=\\"font-mono cyan-text\\">" + formatRupiah(x.price * x.qty) + "</span></div>").join("")',
  '        : "";',
  '      document.getElementById("orderMessageBox").value = msg;',
  '      document.getElementById("sendWaBtn").href = "https://wa.me/" + wa + "?text=" + encodeURIComponent(msg);',
  '      document.getElementById("orderModal").classList.remove("hidden");',
  '    }',
  '',
  '    document.getElementById("searchInput").oninput = renderCatalog;',
  '    document.getElementById("clearSearchBtn").onclick = () => { document.getElementById("searchInput").value = ""; renderCatalog(); };',
  '    document.getElementById("floatingCartBtn").onclick = () => openOrderModal(cartItems, true);',
  '    document.getElementById("closeModalBtn").onclick = () => document.getElementById("orderModal").classList.add("hidden");',
  '    document.getElementById("copyFormatBtn").onclick = () => {',
  '      const box = document.getElementById("orderMessageBox");',
  '      box.select();',
  '      document.execCommand("copy");',
  '    };',
  '',
  '    initStoreUI();',
  '    renderFilterBars();',
  '    renderCatalog();',
  '  </script>',
  '</body>',
  '</html>'
];

fs.writeFileSync(path.join(rootDir, "index.html"), indexHtmlLines.join("\n"), "utf8");

console.log("\n✅ BERHASIL! Project RADEN PREM berhasil dibuat dari 0:");
console.log("   - index.html");
console.log("   - package.json & README.md");
console.log("   - data/index.js");
console.log("   - data/produk/ (" + PRODUCTS.length + " folder & file produk terpisah)\n");
console.log("👉 Buka index.html menggunakan ekstensi Live Server di VS Code!\n");