## **Fitur yang Cuma Dipake 5% User, Tapi Nentuin Hidup Mati Perusahaan**

Gue pernah ngeliat seorang PM yang baru aja banting setir dari aplikasi B2C viral ke ranah software B2B Enterprise. Pas sesi *quarterly prioritization* pertamanya, dia kena syok budaya dan overthinking parah.

Dengan percaya diri dia ngejelasin slide-nya: *"Gue udah ngitung kalkulasi datanya. Fitur modul pelaporan audit ini cuma bakal dipake sama maksimal 5% dari Daily Active Users (DAU) kita. Sesuai semua kitab suci product management yang gue pelajari, fitur dengan utilisasi serendah ini jelas harus kita coret dan nggak boleh kita bangun!"*

Ruangan meeting langsung hening. Si Head of Sales narik nafas panjang, natap dia dengan tatapan iba, lalu nyeletuk santai tapi nusuk: *"Bro, 5% user yang lo maksud itu adalah Kepala Divisi IT dan Tim Procurement dari 3 klien korporat terbesar kita. Tiga akun itu nyumbang 60% dari total revenue perusahaan kita tahun ini. Kalo modul audit itu nggak rilis bulan depan, mereka nggak bakal tanda tangan perpanjangan kontrak (renewal), dan kita semua bakal terancam nggak dapet bonus akhir tahun!"*

Ternyata, 95% user harian lainnya itu cuma staf operasional biasa yang make software tersebut semata-mata karena disuruh kantor, bukan karena mereka yang milih atau bayar sendiri. Kalo mereka kesel sama UI-nya, mereka nggak bisa serta-merta mutus langganan (*churn*). Tapi kalo si 5% pengambil keputusan itu nggak dapet fitur kepatuhan yang mereka butuhin, tamatlah riwayat bisnis kantor lo!

Insting tajam yang diasah di dunia B2C—di mana lo selalu memprioritaskan apa yang dimaui oleh mayoritas suara user—bisa jadi blunder fatal pas dibawa ke ranah B2B. Di sini, **segelintir minoritas pengambil keputusan justru megang kendali penuh atas cuan dan masa depan perusahaan.** 

Di bab ini, kita bakal bedah habis perbedaan logika mendasar antara **B2B vs B2C vs B2B2C**, biar lo nggak salah pasang strategi dan tau persis siapa "tuan" yang beneran harus lo layani!

---

## **Perbedaan Paling Mendasar: Siapa User vs Customer vs Buyer?**

Ini adalah fondasi konseptual nomor satu yang wajib lo pahami luar kepala:

```
┌─────────────────────────────────────────────────────────────┐
│                       B2C MURNI                             │
│   [ Orang yang Sama: User = Customer = Buyer ]              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                       B2B ENTERPRISE                        │
│   [ End User ]          ≠      [ Buyer / Admin ]   ≠   [ Economic Buyer ]
│   (Staf yang Make)             (IT/Procurement)         (C-Level/Pegang Budget)
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                       B2B2C                                 │
│   [ Platform Lo ] ───► [ Klien Bisnis ] ───► [ Konsumen Akhir ]
└─────────────────────────────────────────────────────────────┘
```

1. **Di Ranah B2C Murni:**
   Semuanya menyatu dalam satu orang: **User = Customer = Buyer**. Orang yang scroll aplikasinya tiap malem adalah orang yang mutusin buat download, dan dia juga yang gesek kartu kreditnya sendiri buat langganan. Kalo dia bosen, dia tinggal uninstall detik itu juga.

2. **Di Ranah B2B:**
   Peran-peran ini terpecah secara dramatis:
   - **End User:** Karyawan operasional yang make software lo tiap hari buat ngerjain tugasnya.
   - **Buyer / IT Admin:** Tim pengadaan (*procurement*), legal, atau admin IT yang ngecek kelayakan vendor, integrasi SSO, dan audit keamanan.
   - **Economic Buyer / Decision Maker:** Direktur, VP, atau C-Level yang megang kuasa anggaran belanja dan nentuin apakah kontrak bernilai miliaran rupiah bakal diteken. (Orang ini bahkan mungkin nggak pernah login ke aplikasi lo sama sekali!).

3. **Di Ranah B2B2C:**
   Muncul rantai tiga lapis: Klien langsung lo adalah sebuah entitas bisnis (misal: restoran atau platform logistik), tapi produk lo pada akhirnya dipake atau dirasain dampaknya sama konsumen akhir mereka (misal: pembeli makanan atau penerima paket). Lo wajib bikin senang si mitra bisnis SEKALIGUS konsumen akhirnya!

**Kenapa pemisahan peran ini ngerombak logika prioritisasi?**
Di B2C, fitur yang disukai user biasanya langsung berkorelasi lurus sama pertumbuhan bisnis. Tapi di B2B, lo bisa aja bikin fitur yang dipuja-puji sama *end user*, tapi bisnis lo tetep boncos karena fitur itu nggak ngasih dampak finansial buat si *economic buyer*. Sebaliknya, lo bakal sering dipaksa bikin fitur yang agak merepotkan buat user (misal: kewajiban 2FA ribet, sistem log aktivitas ketat, atau laporan hierarki manajerial) demi menuhin syarat mutlak dari si pembeli korporat.

---

## **Siklus Penjualan (*Sales Cycle*): Gimana Dinamika Deal Nentuin Nasib Roadmap**

### **Siklus Penjualan B2C: Sat-set, Volume Masif, Validasi Kilat**
- User ngambil keputusan dalam hitungan detik atau menit (*self-serve*).
- Nilai transaksi per user relatif kecil (misal: Rp50.000 - Rp200.000/bulan).
- Lo bisa ngevalidasi fitur baru dengan super cepet lewat A/B testing ke ribuan sampel user. Data perilakunya langsung keliatan di dashboard hari itu juga.

### **Siklus Penjualan B2B: Maraton Berbulan-bulan, Penuh Lobi & Negosiasi**
- Penjualan B2B (terutama mid-market & enterprise) butuh waktu 3 sampai 12 bulan per kesepakatan.
- Nilai kontrak (*Annual Contract Value* / ACV) gede banget, dari ratusan juta sampe miliaran rupiah per klien.
- Ini memicu dinamika unik yang bakal sering bikin lo senam jantung:
  1. **Tekanan Fitur Pengunci Deal (*Deal-Breaker Features*):** Tim Sales bakal sering dateng ke meja lo sambil panik: *"Kalo kita nggak bikin integrasi SAP ini dalam sebulan, kita bakal kehilangan deal Rp2 Miliar dari Klien X!"* Lo harus punya pertahanan mental yang kuat buat nimbang apakah fitur custom ini beneran selaras sama visi produk atau cuma bikin utang teknis jangka panjang.
  2. **Roadmap Sebagai Alat Jualan (*Sales Enablement*):** Calon klien enterprise nggak bakal mau beli kucing dalam karung. Mereka nuntut kejelasan roadmap 1-2 tahun ke depan sebelum berkomitmen migrasi sistem. Lo bakal dituntut sering bikin presentasi roadmap eksternal buat meyakinkan prospek.
  3. **Rimba Dokumen RFP (*Request for Proposal*):** Klien korporat bakal ngasih dokumen setebal bantal berisi ratusan daftar checklist fitur kaku. Seringkali lo harus berdiplomasi antara *"fitur yang ideal menurut filosofi UX lo"* vs *"checklist formal yang diminta tim procurement klien"*.

---

## **Seni Menetapkan Harga (*Pricing & Packaging*) di Setiap Model**

- **Pricing B2C:** Cenderung simpel dan transparan. Biasanya harga flat, freemium, atau paket langganan bulanan/tahunan standar (Tier Basic, Pro, Family). User tinggal gesek e-wallet/kartu tanpa perlu nelpon siapa-siapa.
- **Pricing B2B:** Kompleksitas tingkat dewa. Ada skema *per-seat* (harga per jumlah user), *usage-based* (berdasarkan kuota API/data), diskon volume bertingkat, komitmen kontrak multi-tahun (*multi-year lock-in*), biaya implementasi/setup awal (*onboarding fee*), sampe add-on modul kustom. Sebagai PM B2B, lo harus paham gimana packaging fitur lo bisa ngasih amunisi buat tim Sales pas negosiasi harga.
- **Pricing B2B2C:** Lapisan ganda. Lo harus ngerancang skema harga yang masuk akal buat margin bisnis klien langsung lo, sambil mikirin gimana cara mereka me-monetisasi atau meneruskan biaya tersebut ke konsumen akhir tanpa bikin konsumennya kabur.

---

## **North Star Metrics: Beda Medan, Beda Ukuran Sukses**

Jangan sampe lo salah pasang indikator sukses! Nih contekan perbandingannya:

| Dimensi Metrik | B2C | B2B | B2B2C |
| :--- | :--- | :--- | :--- |
| **Fokus Utama** | Volume & Interaksi User Individu | Kesehatan Akun & Nilai Kontrak Organisasi | Efektivitas Mitra & Kepuasan Konsumen Akhir |
| **Metrik Aktivitas** | DAU, MAU, Frekuensi Sesi, Rasio DAU/MAU (*Stickiness*) | Jumlah Kursi Aktif (*Active Seats* per Akun), Utilisasi Lisensi | Volume Transaksi Mitra, Adopsi Pengguna Akhir Mitra |
| **Metrik Retensi** | User Retention Curve, Churn Rate Individu | **Net Revenue Retention (NRR)**, Account Renewal Rate, Gross Churn | Partner Churn Rate & Consumer Repeat Rate |
| **Metrik Kunci PM** | Konversi Funnel Onboarding, Virality Coefficient (K-factor) | **Account Health Score**, Adopsi Fitur Admin/Manager, Time-to-Value Klien | Throughput Transaksi Bersama, CSAT Konsumen Akhir |

> **Catatan Emas B2B:** Di B2B, metrik paling suci adalah **NRR (Net Revenue Retention)**. Kalo NRR lo di atas 110-120%, artinya bisnis lo bisa tumbuh otomatis dari klien lama yang nambah kursi atau upgrade paket (*expansion revenue*), bahkan sebelum tim sales nyari klien baru!

---

## **Discovery & Riset User: Siapa yang Sebenarnya Kudu Lo Wawancarai?**

### **Riset di B2C:**
Gampang dan lurus. Lo tinggal rekrut sampel user representatif lewat survei, testing lab, atau wawancara langsung 1-on-1. User yang lo ajak ngobrol adalah orang yang sama yang bakal mencet tombol dan bayar aplikasinya.

### **Riset di B2B (Dua Jalur Terpisah):**
Lo wajib ngejalanin **Dua Jalur Riset Simultan**:
1. **Jalur End User:** Fokus ke *usability*, efisiensi alur kerja harian, dan fitur yang ngurangin beban kerja mereka.
2. **Jalur Buyer / Decision Maker:** Fokus ke justifikasi ROI, dasbor laporan buat bos, kepatuhan audit data, dan kemudahan kontrol hak akses karyawan (*role-based access control*).

> **Jebakan Batman Riset B2B:** Banyak PM pemula cuma hobi ngobrol sama *end user* karena mereka lebih ramah dan gampang ditemui, tapi sama sekali nggak pernah ngobrol sama *Economic Buyer*. Hasilnya? Lo bikin software yang asyik banget dipake staf, tapi pas akhir tahun kontraknya diputus sama Direktur Keuangan karena dianggap "nggak ada dampak bisnis yang nyata bagi pimpinan".

### **Riset di B2B2C:**
Lo harus pinter-pinter investigasi. Lo harus dengerin *pain point* mitra bisnis lo, tapi lo juga tetep harus punya antena buat mantau *feedback* dari konsumen akhir mereka—meskipun seringkali lo nggak punya akses kontak langsung ke konsumen akhir karena dijaga ketat sama si mitra bisnis.

---

## **Ringkasan Bab: TL;DR**

1. **Pahami Pemisahan Peran:** Di B2C, User = Buyer. Di B2B, orang yang make beda sama orang yang bayar. Di B2B2C, ada mitra bisnis yang berdiri di tengah-tengah.
2. **B2B Dipengaruhi Siklus Sales Panjang:** Deal enterprise butuh waktu bulanan dan bernilai miliaran. Permintaan fitur kustom buat nge-close deal gede adalah dinamika nyata yang harus lo kelola dengan bijak.
3. **Pembeda Metrik Sukses:** B2C ngejar DAU/MAU dan viralitas; B2B ngejar NRR, kesehatan akun (*account health*), dan adopsi kursi berbayar.
4. **Riset Dua Arah di B2B:** Jangan cuma riset ke staf operasional. Luangkan waktu buat dengerin kebutuhan strategis para *decision maker* yang megang buku cek.
5. **Jangan Tukar Naluri Sembarangan:** Pola pikir B2C yang mendewakan suara terbanyak bisa bikin produk B2B lo bangkrut kalo lo mengabaikan kebutuhan krusial segelintir akun kakap.

Di bab berikutnya, kita bakal ngulik dimensi baru yang nggak kalah seru: **PM untuk Platform vs SaaS vs Marketplace vs Hardware**!

---

**Pertanyaan Refleksi:**

1. Di produk lo saat ini, apakah peran User, Customer, dan Buyer menyatu atau terpisah? Sejauh mana roadmap dan PRD lo udah ngakomodasi kebutuhan masing-masing peran ini secara proporsional?
2. Pernah nggak lo ada di situasi di mana *end user* minta A, tapi *decision maker* yang megang budget nuntut B yang bertolak belakang? Gimana strategi lo nyari jalan tengahnya?
3. Kalo lo baru aja pindah (atau mau pindah) haluan antara B2B dan B2C, kebiasaan atau insting apa yang paling susah buat lo *unlearn*?

**Action Item:**

Bikin tabel mapping sederhana untuk produk lo sekarang:
1. Siapa **End User** lo dan apa metrik kebahagiaan mereka?
2. Siapa **Buyer / IT Admin** lo dan apa syarat mutlak mereka (keamanan, integrasi, kontrol)?
3. Siapa **Economic Buyer** lo dan metrik bisnis apa yang bikin mereka mau tanda tangan perpanjangan kontrak?
Cek apakah roadmap kuartal ini udah seimbang ngelayanin ketiganya atau baru berat sebelah!
