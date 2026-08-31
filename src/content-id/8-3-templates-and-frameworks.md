## **Kenapa Bab Ini Bakal Jadi "Sontekan" Favorit Lo**

Kalo bab-bab sebelumnya fokus ngebangun fondasi cara mikir dan konsep strategis, bab ini hadir murni buat urusan **taktis lapangan**. Di sini lo bakal dapet sekumpulan template siap comot yang bisa langsung lo *copy-paste*, adaptasi, dan pake di kerjaan harian lo saat ini juga. Anggap aja bab ini lembar *cheat sheet* andalan yang bakal sering lo buka ulang tiap kali dapet mandat bikin dokumen produk baru.

Tapi sebelum lo langsung copas sana-sini, tolong camkan satu prinsip fundamental ini: **template itu cuma titik awal (scaffolding), bukan jimat ajaib yang kaku.** Pola pikir dan ketelitian logika di balik tiap isian jauh lebih penting daripada sekadar kerapihan format dokumen. Dokumen PRD yang tabelnya rapi jali pake format kekinian tapi isinya cuma asumsi halu dan logika dangkal, tetep aja bakal jadi PRD sampah.

---

## **Template 1: PRD (Product Requirements Document) Siap Tempur**

```markdown
# PRD: [Nama Fitur / Inisiatif Produk]
**Author:** [Nama Lo] | **Tanggal:** [DD/MM/YYYY] | **Status:** [Draft / In Review / Approved]
**Target Rilis:** [Sprint X / Kuartal Y] | **Tech Lead:** [Nama] | **Product Designer:** [Nama]

---

### 1. PERNYATAAN MASALAH (PROBLEM STATEMENT)
*Masalah riil apa yang mau kita selesaikan, dan siapa korbannya (user persona)?*
> [Tulis 2-3 kalimat tajam. Fokus murni pada 'pain point' user, DILARANG KERAS nyelipin bahasa teknis atau solusi di sini!]

---

### 2. METRIK KESUKSESAN (SUCCESS METRICS)
*Gimana cara kita dan tim tahu kalo fitur ini beneran sukses dan bukan cuma buang-buang resource?*
- **Primary Metric (North Star Inisiatif):** [Misal: Naikkan conversion rate checkout dari 12% ke 18% dalam 30 hari pasca rilis]
- **Secondary Metrics:** [Misal: Menurunkan drop-off rate di payment page, ningkatin CSAT skor checkout]
- **Guardrail Metrics (Metrik Pengaman):** [Apa yang GAK BOLEH jeblok? Misal: Latensi loading page tetap < 1.2 detik, error rate gateway < 0.05%]

---

### 3. USER STORIES
- **Sebagai** [tipe user / buyer persona],
  **Saya ingin** [melakukan aksi / tindakan tertentu],
  **Sehingga** [mendapatkan hasil / value spesifik tanpa ribet].
*(Ulangi pola ini buat tiap skenario utama user journey)*

---

### 4. SPESIFIKASI KEBUTUHAN (REQUIREMENTS)
#### 🔴 Wajib Ada (Must-Have / P0 - Core Value):
- [ ] Requirement 1: [Deskripsi jelas alur fungsional + acceptance criteria]
- [ ] Requirement 2: [Deskripsi penanganan error / edge case utama]

#### 🟡 Bagus Kalo Ada (Nice-to-Have / P1 - Kalo Sprint Sempat):
- [ ] Requirement 3: [Mikro-interaksi pemanis / automasi tambahan]

---

### 5. SECARA EKSPLISIT DI LUAR CAKUPAN (OUT OF SCOPE)
*Apa yang SENGAJA GAK KITA BIKIN di rilis versi ini, dan apa alasan logisnya?*
- [Item A: Gak dibikin sekarang karena butuh integrasi 3rd party yang mahal, masuk fase 2]
- [Item B: Fitur export PDF ditunda demi ngejar release date sebelum campaign gajian]

---

### 6. PERTANYAAN TERBUKA (OPEN QUESTIONS & RISKS)
| Pertanyaan / Isu Menggantung | PIC / Owner | Target Selesai | Status |
|---|---|---|---|
| [Apakah API Payment X support multi-currency?] | [Nama Tech Lead] | [Tanggal] | [Open] |

---

### 7. REFERENSI DESAIN & TEKNIS
- **Figma Design Link:** [URL Prototipe & Design Specs]
- **Technical Architecture / RFC Doc:** [URL Dokumentasi Tech Spec Eng]

---

### 8. RENCANA PELUNCURAN (ROLLOUT PLAN)
- **Strategi Rilis:** [Internal Dogfooding -> Canary Release 5% -> Full Rollout 100%]
- **Feature Flag:** `is_new_checkout_enabled`
- **Kriteria Rollback:** [Kalo payment failure rate melonjak di atas 2%, toggle flag langsung di-off-kan seketika]
```

---

## **Template 2: One-Pager (Proposal Strategis Anti-Bertele-tele)**

```markdown
# ONE-PAGER: [Judul Proposal Inisiatif]

### THE ASK / PERMINTAAN UTAMA (1-2 Kalimat)
[Keputusan apa, persetujuan apa, atau alokasi resource seberapa besar yang lo butuhin dari manajemen hari ini?]

### KONTEKS (2-3 Kalimat)
[Kenapa isu ini mendesak buat dibahas SEKARANG? Apa peluang bisnis yang bakal lewat atau risiko yang bakal meledak kalo kita diemin?]

### DIAGNOSIS MASALAH
[Apa akar masalah intinya secara spesifik dan terukur berdasarkan data/user feedback?]

### PENDEKATAN YANG DIUSULKAN (PROPOSED APPROACH)
[Rekomendasi solusi lo, jabarkan dengan lugas, terstruktur, dan gak berbelit-belit.]

### KENAPA OPSI INI (Bukan Alternatif Lain)?
- **Opsi A (Solusi Terpilih):** [Kelebihan utama, efisiensi resource, mitigasi risiko]
- **Opsi B (Ditolak):** [Alasan kenapa opsi ini dikesampingkan, misal: biaya terlalu mahal atau tech debt tinggi]

### ESTIMASI DAMPAK & CUAN
[Kalkulasi proyeksi dampak terhadap metrik bisnis, misal: potensi tambahan GMV $50K/bulan atau penghematan 120 jam operasional tim CS.]

### RISIKO & MITIGASI
[Akui secara jujur apa yang bisa gagal dan gimana rencana lo buat mengantisipasinya.]

### RESOURCE YANG DIBUTUHKAN
[Kebutuhan tim: misal 2 Backend Eng, 1 Frontend Eng, 1 Designer selama 3 Sprint, budget tools $500.]

### DEADLINE KEPUTUSAN
[Tanggal spesifik: DD/MM/YYYY. Kalo lewat dari tanggal ini, konsekuensinya rilis campaign Q3 bakal mundur.]
```

---

## **Template 3: Roadmap (Format Now-Next-Later)**

```markdown
# PRODUCT ROADMAP: [Area / Squad Produk]
**Terakhir Diupdate:** [DD/MM/YYYY] | **Siklus:** [H1 / Q1-Q2]

---

### 🟢 NOW (Sedang Dikerjakan - Confidence Level Tinggi 🔥)
*Fokus eksekusi sprint saat ini, komitmen jadwal dan spesifikasi sudah fix.*
- **Inisiatif 1: Redesign Checkout Page**
  - Goal: Naikin conversion rate transaksi mobile web
  - Target Selesai: Sprint 14 (15 April)
- **Inisiatif 2: Integrasi QRIS Dynamic**
  - Goal: Memangkas waktu pembayaran user
  - Target Selesai: Sprint 15 (30 April)

---

### 🟡 NEXT (Segera Datang - Confidence Level Sedang ⏳)
*Sedang riset & desain detail, masuk antrean berikutnya, estimasi kuartal.*
- **Inisiatif 3: Fitur Multi-Alamat Pengiriman**
  - Goal: Mengakomodasi kebutuhan power user & dropshipper
  - Estimasi: Awal Q3
- **Inisiatif 4: Sistem Notifikasi WhatsApp Otomatis**
  - Goal: Mengurangi churn order yang belum dibayar
  - Estimasi: Pertengahan Q3

---

### 🔵 LATER (Masa Depan - Arah Strategis Jangka Panjang 🧭)
*Ide bernilai tinggi secara visi, tapi belum ada komitmen jadwal dan detail spesifikasi.*
- **Inisiatif 5: Program Loyalitas & Gamifikasi Reward**
- **Inisiatif 6: Personalisasi Rekomendasi Berbasis AI**

---

### ⛔ SECARA EKSPLISIT TIDAK DIRENCANAKAN (DEPILLED / KILLED)
*Daftar inisiatif yang sengaja dicoret/ditolak biar gak jadi bahan perdebatan berulang tiap minggu.*
- *Fitur Dark Mode:* Effort tinggi tapi dampaknya minim ke metrik retensi inti saat ini.
- *Integrasi Crypto Wallet:* Regulasi belum jelas dan segmen user kita belum membutuhkan.
```

---

## **Template 4: Panduan Wawancara Pengguna (User Interview Guide)**

```markdown
# PANDUAN WAWANCARA: [Topik Riset & Problem Space]
**Target Partisipan:** [Kriteria Persona User] | **Durasi:** 30-45 Menit
**Asumsi Paling Berisiko (Riskiest Assumption) yang Diuji:** [Tulis secara gamblang di sini]

---

### 1. WARM-UP & ICE BREAKING (5 Menit)
- "Boleh ceritain kesibukan atau peran Kakak sehari-hari di [konteks pekerjaan/aktivitas]?"
- "Biar dapet gambaran, biasanya alur rutinitas Kakak pas lagi ngurusin [area riset] itu kayak gimana sih?"

---

### 2. EKSPLORASI PERILAKU MASA LALU (15-20 Menit)
*(Fokus pada apa yang BENAR-BENAR MEREKA LAKUKAN di masa lalu, bukan opini masa depan yang halu)*
- "Boleh ceritain gak, kapan terakhir kali Kakak ngalamin [masalah/kegiatan tertentu]?"
- "Waktu itu apa pemicunya? Terus langkah pertama yang Kakak lakuin apa?"
- "Bagian mana dari proses itu yang paling bikin gregetan, ribet, atau makan waktu?"
- "Udah pernah coba pake cara atau aplikasi apa buat ngatasin hal itu? Kenapa cara itu belum memuaskan?"

---

### 3. TESTING SOLUSI & FEEDBACK KONSEP (10 Menit - HANYA setelah part perilaku tuntas!)
- *[Tunjukkan prototipe / sketsa solusi]*
- "Coba bayangin Kakak lagi mau nyelesaiin tugas tadi, boleh tolong peragain gimana cara Kakak pake layar ini?"
- "Kira-kira apa yang bikin Kakak mikir dua kali atau ragu buat beralih dari cara lama Kakak ke solusi ini?"

---

### 4. PENUTUP (5 Menit)
- "Ada hal penting lain soal [topik] yang belum sempet gue tanyain tapi menurut Kakak krusial buat kita tahu?"
- "Menurut Kakak, siapa lagi temen atau rekan kerja yang punya masalah serupa yang seru buat kita ajak ngobrol?"

---

### 🧠 PROMPT SINTESIS KILAT (Langsung Diisi PM Pasca Wawancara)
1. **Apa hal paling mengejutkan yang gue pelajari tadi?**
2. **Asumsi apa yang terkonfirmasi bener?**
3. **Asumsi apa yang terbukti salah total / terpatahkan?**
```

---

## **Template 5: Kartu Skor Prioritisasi (Berbasis RICE)**

```markdown
# MATRIX PRIORITISASI: [Kuartal / Siklus Sprint]

| Inisiatif Produk | Reach (Jangkauan) | Impact (Dampak) | Confidence (Keyakinan) | Effort (Upaya) | Skor RICE | Keputusan / Catatan |
|---|---|---|---|---|---|---|
| **One-Click Checkout** | 50.000 user/bln | 3 (Masif) | 80% (Sedang-Tinggi) | 4 person-weeks | **30.000** | **Gaspol Sprint 1** |
| **Integrasi E-Wallet X** | 10.000 user/bln | 2 (Tinggi) | 100% (Pasti) | 2 person-weeks | **10.000** | **Masuk Sprint 2** |
| **Fitur Share ke Medsos** | 5.000 user/bln | 0.5 (Rendah) | 50% (Halu) | 3 person-weeks | **416** | **Drop / Later** |

---

### 📏 PANDUAN KALKULASI SKOR RICE:
`Skor RICE = (Reach × Impact × Confidence) / Effort`

- **Reach:** Estimasi jumlah user riil yang bakal berinteraksi sama fitur per bulan/kuartal.
- **Impact:** `3` = Masif, `2` = Tinggi, `1` = Sedang, `0.5` = Rendah, `0.25` = Minimal.
- **Confidence:** `100%` = Ada data kuat & riset user, `80%` = Ada sinyal data awal, `50%` = Masih tebakan / intuisi.
- **Effort:** Total minggu kerja tim eng (*person-weeks*). Jujur, jangan pakai estimasi halu!

---

### ⚠️ LOG PENYESUAIAN / OVERRIDE KHUSUS
*(Catat di sini kalo ada inisiatif yang diprioritaskan padahal skor RICE-nya kecil)*
- *Contoh Override:* Inisiatif Compliance Regulasi Pajak diprioritaskan duluan meskipun skor RICE-nya kecil, karena menyangkut kepatuhan legal pemerintah yang punya tenggat mutlak akhir bulan ini.
```

---

## **Template 6: Dokumen Post-Mortem (Belajar dari Insiden Tanpa Saling Salah-salahan)**

```markdown
# POST-MORTEM: [Nama Insiden / Kegagalan Rilis Fitur]
**Tanggal Insiden:** [DD/MM/YYYY] | **Fasilitator:** [Nama PM] | **Status:** [Action Items In Progress / Resolved]

---

### 1. APA TARGET & EKSPEKTASI AWALNYA?
[Apa tujuan rilis fitur ini dan hasil yang semula kita harapkan terjadi di sistem/user?]

### 2. APA YANG SEBENARNYA TERJADI DI LAPANGAN?
[Kronologi kejadian berbasis data dan fakta log sistem, TANPA menyudutkan atau menyalahkan individu mana pun.]

### 3. KENAPA ITU BISA TERJADI? (Analisis Akar Masalah / 5 Whys)
- **Kualitas Proses:** [Apakah alur testing di staging, review PRD, atau validasi desain udah bener berdasarkan info saat itu?]
- **Faktor Hasil & Lingkungan:** [Bagian mana yang murni dalam kendali kita vs anomali tak terduga dari pihak ketiga?]

---

### 4. ACTION ITEMS YANG BISA DITINDAKLANJUTI (NO OMDO)
| No | Pembelajaran / Perbaikan Konkret | PIC / Owner | Due Date | Tiket Jira |
|---|---|---|---|---|
| 1 | Bikin automated unit test buat skenario timeout gateway | [Nama Eng] | [Tanggal] | PROD-1024 |
| 2 | Tambah alerting threshold di Datadog kalo error > 1% | [Nama DevOps] | [Tanggal] | PROD-1025 |

---

### 5. EVALUASI POLA SISTEMIK
*Apakah insiden ini cuma apes sesaat, atau ada indikasi masalah budaya/proses yang lebih gede di tim kita?*
> [Refleksi terbuka: misal kebutuhan memperbaiki budaya testing atau penambahan kapasitas server sebelum promo gajian.]

### 6. JADWAL PENINJAUAN LANJUTAN (FOLLOW-UP REVIEW)
- **Review Date:** [Tanggal spesifik 2 minggu ke depan buat ngecek apakah semua action items beneran udah di-deploy ke production].
```

---

## **Template 7: Pembaruan Status Stakeholder (Format BLUF - Anti-Basa-Basi)**

```markdown
**Subject:** [Update Produk] [Nama Inisiatif] - Status: [🟢 On Track / 🟡 At Risk / 🔴 Blocked] - [Tanggal]

---

### 📌 INTISARI UTAMA (BOTTOM LINE UP FRONT / BLUF)
> **Status:** 🟡 **At Risk.** Progres development fitur checkout sudah 75%, tapi ada potensi mundur 3 hari karena menunggu izin akses API dari Bank Partner. Butuh bantuan VP Partnership buat eskalasi hari ini.

---

### 🚀 PROGRES PERIODE INI (WEEKS X):
- Frontend slice UI checkout mobile web selesai 100% sesuai Figma.
- Integrasi core database dan backend voucher loyalty tuntas.

### ⚠️ RISIKO & HAMBATAN (BLOCKERS):
- **Isu:** Sandbox API Bank Partner belum ngasih kredensial staging.
- **Mitigasi:** Tim eng bikin mock-server sementara biar proses testing flow lain gak mandek.

### 🎯 FOKUS MINGGU DEPAN:
- UAT (User Acceptance Testing) bareng tim QA dan Operations.
- Mulai susun artikel panduan CS buat antisipasi komplain rilis.

### 🆘 BANTUAN YANG DIBUTUHKAN:
- **Kepada @Nama VP Partnership:** Mohon bantuan *follow-up* kontak pimpinan Bank Partner paling lambat besok siang jam 12.00 WIB.
```

---

## **Template 8: Dokumen Strategi Produk (Format Kernel Rumelt)**

```markdown
# STRATEGI PRODUK: [Area / Domain Produk] | [Horison Waktu: misal 2026-2027]

---

### 1. DIAGNOSIS (Akar Masalah & Realita Pasar)
*Apa tantangan paling fundamental atau peluang emas yang sedang kita hadapi? Tulis spesifik dan to-the-point!*
> [Pasar kita dibanjiri pemain baru yang banting harga, sementara user aktif kita loyal bukan karena diskon, melainkan karena kecepatan integrasi API logistik dan keandalan sistem.]

---

### 2. KEBIJAKAN PENGARAH (GUIDING POLICY)
*Pendekatan utama yang kita pilih buat memenangkan persaingan. Apa yang EKSPLISIT KITA PILIH untuk dikerjakan, dan apa yang HARAM kita kerjakan?*
> **Pilihan Kita:** Menggandakan fokus pada keandalan sistem kelas enterprise (99.99% uptime) dan ekosistem developer kelas dunia.
> **Yang Haram Dikerjakan:** Kita TIDAK AKAN ikut perang bakar duit diskon ongkir yang merusak margin profitabilitas.

---

### 3. METRIK KESUKSESAN
- **North Star Metric:** Net Revenue Retention (NRR) dari akun Enterprise > 125%.
- **Pivot Trigger:** Kalo dalam 6 bulan churn rate enterprise > 5% gara-gara faktor harga, kita evaluasi ulang model packaging tier kita.

---

### 4. RISIKO UTAMA & ASUMSI KRUSIAL
- *Asumsi:* Segmen enterprise bersedia bayar premi 30% lebih mahal demi SLA uptime dan support 24/7.
- *Risiko:* Kompetitor ikut membangun fitur integrasi instan serupa dalam kurun 6 bulan ke depan.

---

### 5. TINDAKAN KOHEREN (COHERENT ACTIONS)
*Rangkaian inisiatif terkoordinasi yang selaras buat mengeksekusi strategi ini (input langsung ke Roadmap):*
1. Refactoring sistem antrean pesanan untuk menjamin respon API < 150ms.
2. Peluncuran Developer Portal mandiri (Self-serve API Documentation & SDK).
3. Pembuatan dashboard monitoring analitik real-time khusus akun Enterprise tier.

*(Catatan: Maksimal 2 halaman! Kalo dokumen ini lebih panjang dari 2 halaman, berarti strategi lo belum fokus!)*
```

---

## **Aturan Main Pakai Template Biar Gak Cringe**

1. **Adaptasi, Jangan Didewakan.** Jangan ragu buat ngehapus atau nambahin bagian tertentu biar cocok sama kultur kantor lo. Kalo tim lo lebih suka PRD ringkas 1 halaman di Notion, jangan maksain bikin dokumen PDF 15 halaman cuma biar keliatan rajin.
2. **Mindset > Format.** Format yang rapi gak bakal bisa nyelametin logika produk yang cacat. Pikirkan dulu konten dan esensinya masak-masak, baru tuangkan ke dalam wadah template.
3. **Perlakukan Dokumen sebagai Makhluk Hidup.** Dokumen produk itu dinamis (*living document*). Selalu update status, metrik, dan keputusan baru seiring berjalannya proyek.

---

## **Ringkasan Bab: TL;DR**

- Bab ini ngasih lo **8 template praktis siap pakai**: PRD, One-Pager Proposal, Roadmap Now-Next-Later, User Interview Guide, RICE Prioritization Matrix, Post-Mortem, Status Update BLUF, dan Rumelt Strategy Kernel.
- Template berfungsi sebagai pemandu alur pikir (*scaffolding*) biar lo gak lupa mempertimbangkan hal-hal krusial kayak metrik pengaman, hal-hal *out-of-scope*, dan *honest trade-offs*.
- Gunakan dan modifikasi template sesuai kebutuhan tim lo—yang terpenting adalah kejernihan proses berpikir dan eksekusi yang menghasilkan *real impact*.

---

**Action Item:**

Pilih salah satu template di atas yang paling relevan sama *deadline* lo minggu ini. Coba buka dokumen PRD atau proposal terakhir yang pernah lo bikin, lalu bandingkan: bagian krusial mana (apakah *Guardrail Metrics*, *Out of Scope*, atau *Rollout Plan*) yang selama ini sering terlewat? Terapkan template tersebut di inisiatif berikutnya!
