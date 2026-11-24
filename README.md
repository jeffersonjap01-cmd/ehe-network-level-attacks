# EHE Network Level Attacks — Website Pembelajaran Interaktif & Simulator

Tiga website pembelajaran interaktif sekaligus simulator untuk topik **Modul 7: Network Level Attacks** dari Ethical Hacking Essentials (EHE).

- **Mata kuliah:** Cyber Security (IMT01307502), Program Studi Informatika, Universitas Ciputra
- **Semester:** Ganjil 2026/2027

## Kelompok

| Nama | NIM |
|---|---|
| Jefferson Jap | 0706012410072 |
| Vincent | 0706012410032 |
| Rifki Indra Nugroho | 0706012410033 |
| Precious Nathan | 0706012410027 |

## Situs

| Situs | Folder | Ringkasan |
|---|---|---|
| Hub proyek | [`/`](index.html) | Pengantar proyek, kelompok, dan tautan ke tiga situs |
| 1. UDP Flood & Port Exhaustion | [`udp-flood/`](udp-flood/index.html) | Simulator banjir UDP: 6 skenario (hari normal, botnet langsung, alamat palsu, amplifikasi DNS/NTP/Memcached), parameter trafik dan kapasitas, tahap demi tahap, analisis hambatan (bandwidth vs CPU), pilihan penanggulangan dengan umpan balik, evaluasi sebelum/sesudah, uji pemahaman |
| 2. Strategi Mitigasi DDoS Berlapis | [`mitigasi-ddos-berlapis/`](mitigasi-ddos-berlapis/index.html) | Simulator pembela dengan anggaran: 4 jenis serangan (volumetrik, protokol, aplikasi, multi-vektor), 7 lapisan yang bisa diatur, trafik per lapisan, ketersediaan, false positive, biaya, evaluasi, latihan mencocokkan, uji pemahaman |
| 3. Anatomi Serangan SSL Stripping | [`ssl-stripping/`](ssl-stripping/index.html) | Simulator diagram urutan korban–penyerang–server: 6 skenario, data login palsu, 5 pertahanan, tampilan browser korban, hasil dan evaluasi, latihan "temukan perbedaannya", penyusun header HSTS, uji pemahaman |

## Komponen Tugas

Setiap situs memakai enam komponen wajib sebagai menu navigasi, dengan urutan yang sama. Alamat bagian bisa dibuka langsung dengan menambahkan `#nama-bagian` di URL.

### Situs 1 — UDP Flood & Port Exhaustion

| Komponen | Letak |
|---|---|
| 1. Pengantar Topik | `#pengantar`: nama topik, definisi, tujuan, relevansi (CIA Triad, dampak bisnis, tabir asap), etika |
| 2. Penjelasan Konsep | `#konsep`: TCP vs UDP, komponen & teknologi, refleksi & amplifikasi, contoh kasus Mirai, ancaman terkait |
| 3. Proses Bertahap | `#proses`: diagram alur, tujuh tahap serangan, deteksi oleh SOC (`netstat`) |
| 4. Simulasi Interaktif | `#simulasi`: skenario, parameter, Sebelumnya/Berikutnya + putar/jeda, visualisasi, analisis, penanggulangan, evaluasi, Reset, uji pemahaman |
| 5. Penanggulangan Keamanan | `#pertahanan`: mencegah, memperbaiki kerentanan, praktik yang disarankan, mengapa blokir IP lokal gagal |
| 6. Referensi | `#referensi`: daftar pustaka APA 7, sitasi `[n]` di dalam teks |

### Situs 2 — Strategi Mitigasi DDoS Berlapis

| Komponen | Letak |
|---|---|
| 1. Pengantar Topik | `#pengantar`: definisi tiga lapisan, tujuan, relevansi, etika |
| 2. Penjelasan Konsep | `#konsep`: kategori DDoS (Gbps/PPS/RPS), tiga lapisan, teknologi pendukung, contoh kasus GitHub 2018, risiko & efek samping |
| 3. Proses Bertahap | `#proses`: jalur trafik, siklus mitigasi enam tahap |
| 4. Simulasi Interaktif | `#simulasi`: skenario, lapisan + anggaran + pengaturan, tahap per lapisan + putar/jeda, visualisasi, evaluasi, Reset, latihan mencocokkan, uji pemahaman |
| 5. Penanggulangan Keamanan | `#pertahanan`: mencegah, konfigurasi (Nginx `limit_req`, `sysctl` SYN Cookies, `netstat`), praktik, jawaban pertanyaan diskusi |
| 6. Referensi | `#referensi`: daftar pustaka APA 7, sitasi `[n]` di dalam teks |

### Situs 3 — Anatomi Serangan SSL Stripping

| Komponen | Letak |
|---|---|
| 1. Pengantar Topik | `#pengantar`: definisi empat bagian serangan, tujuan, relevansi, etika |
| 2. Penjelasan Konsep | `#konsep`: TLS, celah permintaan pertama, cara masuk ke tengah, contoh kasus Wi-Fi publik, risiko terkait |
| 3. Proses Bertahap | `#proses`: enam tahap serangan, titik potong HSTS, deteksi |
| 4. Simulasi Interaktif | `#simulasi`: skenario, data login palsu, pertahanan, diagram urutan + putar/jeda, tampilan browser, hasil, evaluasi, Reset, temukan perbedaannya, penyusun header HSTS, uji pemahaman |
| 5. Penanggulangan Keamanan | `#pertahanan`: HSTS (header + preload), atribut cookie (`Set-Cookie`), praktik pengguna, batasan HSTS |
| 6. Referensi | `#referensi`: daftar pustaka APA 7, sitasi `[n]` di dalam teks |

## Cara membuka

**Lokal:** buka `index.html` di folder ini dengan klik ganda. Tidak perlu instalasi, build, atau koneksi internet. Setiap situs juga bisa dibuka langsung dari `nama-folder/index.html`.

**Online (GitHub Pages):**

- Hub: https://jeffersonjap01-cmd.github.io/ehe-network-level-attacks/
- UDP Flood: https://jeffersonjap01-cmd.github.io/ehe-network-level-attacks/udp-flood/
- Mitigasi DDoS Berlapis: https://jeffersonjap01-cmd.github.io/ehe-network-level-attacks/mitigasi-ddos-berlapis/
- SSL Stripping: https://jeffersonjap01-cmd.github.io/ehe-network-level-attacks/ssl-stripping/

## Teknologi

HTML, CSS, dan JavaScript murni tanpa build step dan tanpa CDN. Gaya dan skrip bersama ada di `assets/`. Ilustrasi dibuat sebagai SVG di dalam kode. Responsif, mendukung mode gelap, navigasi keyboard, dan `prefers-reduced-motion`.

## Etika

Semua simulator hanya model visual dengan angka buatan, domain fiktif (`bank.contoh`), dan kredensial palsu. Tidak ada trafik jaringan sungguhan, tidak ada alat serangan, dan tidak ada instruksi untuk menyerang sistem nyata. Teknik yang dibahas hanya boleh dipelajari dan diuji di lab yang diizinkan. Mengakses atau mengganggu sistem elektronik orang lain tanpa hak adalah tindak pidana menurut UU ITE (UU No. 11 Tahun 2008 beserta perubahannya).

Slide kuliah dikutip di bagian Referensi masing-masing situs dan tidak disertakan dalam repositori ini.
