// Konfigurasi Database Supabase CBT SMAN 1 Tebing Tinggi
const supabaseUrl = 'https://mbvovhkkkdzmteqnjwvw.supabase.co';
const supabaseKey = 'sb_publishable_JwRIjkGI47zyWi5ZtlJ1HQ_dAH2vtYx';

// Inisialisasi klien database menggunakan 'db'
const db = window.supabase.createClient(supabaseUrl, supabaseKey);

console.log("Koneksi ke Supabase berhasil disiapkan dengan Publishable Key!");