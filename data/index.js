// File Penggabung Seluruh Katalog Produk RADEN PREM
// Jika menambah folder produk baru di ./produk/, daftarkan import-nya di sini.

import aiGeminiPro from "./produk/ai-gemini-pro/ai-gemini-pro.js";
import canvaPro from "./produk/canva-pro/canva-pro.js";
import capcutPro from "./produk/capcut-pro/capcut-pro.js";
import netflixPremium from "./produk/netflix-premium/netflix-premium.js";
import spotifyPremium from "./produk/spotify-premium/spotify-premium.js";
import vidioPlatinum from "./produk/vidio-platinum/vidio-platinum.js";
import youtubePremium from "./produk/youtube-premium/youtube-premium.js";

export const STORE_SETTINGS = {
  "storeName": "RADEN PREM",
  "whatsapp": "6282232050095",
  "year": "2026"
};

export const DEFAULT_CATALOG = [
  aiGeminiPro,
  canvaPro,
  capcutPro,
  netflixPremium,
  spotifyPremium,
  vidioPlatinum,
  youtubePremium
];
