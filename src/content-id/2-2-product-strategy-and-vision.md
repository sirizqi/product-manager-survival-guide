## **Deck Strategi yang Sebenarnya Cuma To-Do List yang Menyamar**

Gue pernah duduk di satu ruangan rapat yang dingin, nyimak presentasi "Strategi Produk" setebal 47 *slide*. Tampilannya gila sih: cakep banget, mencakup semua fitur yang rencananya bakal dibangun setahun ke depan, dibagi rapi per kuartal, ada kode warna per squad, lengkap sama rentang keyakinan (*confidence intervals*) dan panah dependensi yang saling silang kayak jaring laba-laba.

Keliatannya super meyakinkan dan *sophisticated*. Tapi pas presentasi masuk ke menit ke-20, gue tersentak dan nyadar satu hal fatal: **ini sama sekali bukan strategi!** Ini cuma daftar tugas alias *to-do list* raksasa yang dibungkus rapi biar keliatan ada bobot strategisnya.

Gimana cara gue taunya? Simpel, gue cuma nyeletuk satu pertanyaan polos: *"Kenapa kita milih ngerjain fitur-fitur ini dibanding ribuan ide lain? Apa hal yang secara sadar kita putuskan buat TIDAK kita kerjain tahun ini, dan apa alasannya?"*

Seketika ruangan langsung hening. Terus si presenter ngejawab santai: *"Yah, kita ngerjain semua ini karena semuanya penting dan punya nilai buat bisnis."*

Nah, itu bukan strategi, bro! Itu namanya daftar keinginan (*wishlist*) alias surat minta kado ke Sinterklas. Strategi itu pada hakikatnya adalah tentang **membuat pilihan tegas di tengah keterbatasan (*choice under constraint*)**—dan kalau lo belum punya nyali buat bilang "nggak" ke inisiatif yang kelihatannya bagus, lo sebenernya belum bikin keputusan strategis apa pun. Lo cuma lagi maruk pengen ngerjain semuanya, yang ujung-ujungnya bikin tim lo *burnout* dan produk lo medioker di semua lini.

Mari kita luruskan pemahaman soal strategi produk dari akarnya!

---

## **The Strategy Stack: Visi, Strategi, Roadmap, Backlog**

Di banyak kantor tech, empat kata ini sering banget dipake campur aduk seenak jidat. Nggak heran kalau seisi organisasi sering kebingungan massal. Yuk, kita bedah satu per satu posisinya di piramida:

```
        ┌─────────────┐
        │   VISION    │  (3-10 Tahun: Mau ke mana kita?)
        ├─────────────┤
        │  STRATEGY   │  (1-2 Tahun: Gimana cara kita menang?)
        ├─────────────┤
        │   ROADMAP   │  (3-12 Bulan: Rangkaian taruhan & hasil)
        ├─────────────┤
        │   BACKLOG   │  (Harian/Sprint: Tiket Jira & eksekusi)
        └─────────────┘
```

### **1. Vision (Visi)**
Kondisi masa depan jangka panjang (3–10 tahun) yang sifatnya aspiratif, inspiratif, dan jadi kompas utama. Visi ini adalah jangkar yang relatif stabil dan jarang banget berubah kecuali perusahaan ganti haluan total.
- *Contoh:* "Menciptakan dunia di mana setiap bisnis UMKM punya akses ke infrastruktur finansial secanggih korporasi multinasional."

### **2. Strategy (Strategi)**
Pilihan spesifik dan terencana soal *gimana caranya* kita bakal ngejar visi tersebut, dengan nimbang kondisi modal saat ini, posisi pasar, dan lanskap kompetitor. Strategi biasanya dievaluasi per tahun atau per semester kalau peta persaingan bergeser kenceng.
- *Contoh:* "Kita bakal ngunci pasar UMKM dengan fokus 100% ke vertikal bisnis restoran terlebih dahulu, ngebangun integrasi alur kerja POS yang dalam banget yang males dibikin sama kompetitor generalis."

### **3. Roadmap**
Rangkaian inisiatif terurut yang mengeksekusi strategi tadi buat rentang 3–12 bulan ke depan. Setiap tema di *roadmap* wajib punya benang merah yang jelas ke pilihan strategis yang udah dibuat.
- *Contoh:* "Q1: Bangun integrasi POS. Q2: Rilis peramalan inventaris bahan baku (*inventory forecasting*). Q3: Otomatisasi pembayaran ke supplier."

### **4. Backlog**
Daftar taktis dan mikro berisi fitur, perbaikan *bug*, dan utang teknis yang membentuk tiap inisiatif di *roadmap*.
- *Contoh:* "Bikin endpoint API buat koneksi mesin POS, desain pop-up notifikasi stok menipis, benerin bug sinkronisasi faktur."

**Uji Diagnostik Sederhana:** Kalau ada *engineer* atau desainer nanya ke lo, *"Kenapa sih kita harus capek-capek bikin fitur spesifik ini?"* dan lo nggak bisa narik garis lurus dari backlog → roadmap → strategi → visi, berarti tim lo lagi kerja cuma modal *vibes* dan perasaan doang. Ini bahaya banget, karena bakal bikin tim ngerasa prioritas kerjaan itu acak-acakan dan tergantung siapa yang lagi bersuara paling kenceng di Slack.

---

## **Good Strategy, Bad Strategy: Belajar dari Richard Rumelt**

Buku karya Richard Rumelt yang berjudul *Good Strategy/Bad Strategy* adalah salah satu buku paling mencerahkan di dunia bisnis. Kalau lo ngaku PM, lo wajib ngunyah konsep intinya.

### **Ciri-Ciri Strategi Busuk (*Bad Strategy*):**
- **Cuma daftar target yang disamarkan jadi strategi:** *"Strategi kita tahun ini adalah naikin revenue 30%, ningkatin kepuasan user, dan ekspansi ke 3 negara baru."* (Hello, itu mah target/KPI, bukan strategi! Strategi itu ngejelasin *gimana caranya*).
- **Bahasa jargon yang mengawang-awang dan penuh basa-basi:** *"Kita bakal memukau pelanggan lewat inovasi disruptif yang terdepan."* (Nggak ada maknanya sama sekali!).
- **Pura-pura buta sama rintangan nyata:** Gak mau ngakuin kalau kompetitor punya modal 10x lipat atau sistem arsitektur sendiri lagi rapuh.
- **Maruk dan gak mau rugi:** Berusaha nyenengin semua orang sampai semua usulan pemangku kepentingan dimasukin ke rencana kerja.

### **Kernel dari Strategi Bagus (*Good Strategy*):**
Strategi yang beneran daging selalu punya tiga elemen inti (Rumelt nyebutnya sebagai **The Kernel**):

1. **Diagnosis:** Apa tantangan atau rintangan utama yang sebenarnya lagi menghadang kita? (Bongkar akar masalahnya, bukan cuma gejalanya).
2. **Guiding Policy (Kebijakan Pemandu):** Pendekatan menyeluruh dan terarah buat nembus rintangan itu. Di sinilah lo ngambil keputusan tegas dan nolak hal-hal yang nggak sejalan.
3. **Coherent Actions (Tindakan Terpadu):** Rangkaian langkah terkoordinasi yang secara nyata ngeksekusi kebijakan pemandu tadi, di mana tiap langkah saling ngunci dan memperkuat satu sama lain.

**Contoh Penerapan Nyata di Produk:**

❌ **Strategi Busuk:**
> *"Strategi produk kita adalah meningkatkan pendapatan kuartalan dan menekan angka churn."* (Ini angan-angan kosong, nggak ada panduan tindakannya sama sekali).

✅ **Strategi Bagus (Berbasis Kernel):**
> - **Diagnosis:** *"Tingkat churn kita paling berdarah-darah ada di segmen user yang gagal nyelesaiin proses onboarding dalam 7 hari pertama. Onboarding kita saat ini generik banget dan nggak nyambung sama perbedaan kebutuhan use-case tiap segmen bisnis."*
> - **Guiding Policy:** *"Kita bakal bikin alur onboarding yang tersegmentasi secara dinamis sesuai tiga use-case utama hasil riset, dengan memprioritaskan waktu-mencapai-nilai-pertama (time-to-first-value) di atas kelengkapan konfigurasi fitur."*
> - **Coherent Actions:** *"Rombak alur onboarding dengan percabangan use-case di langkah awal; bikin dashboard pelacakan progres user buat tim Customer Success biar bisa sat-set intervensi lebih dini; pangkas 50% form isian yang gak esensial pas registrasi."*

Keliatan kan bedanya? Yang pertama cuma omong kosong, yang kedua langsung ngasih arahan kerja yang super presisi dan berpijak pada fakta!

---

## **Analisis Kompetitor yang Bener-Bener Berdaging (Bukan Sekadar Tabel Centang-Silang Fitur)**

Sebagian besar PM kalau disuruh bikin *competitor analysis* larinya pasti ke tabel komparasi fitur: baris isi daftar fitur, kolom isi nama kompetitor, terus dikasih centang ijo, silang merah, plus tulisan "Coming Soon" buat fitur yang belum kita punya.

Tabel kayak gitu sebenernya nggak ada gunanya, kawan. Kenapa? Karena **kesetaraan fitur (*feature parity*) itu bukan strategi, dan tabel perbandingan fitur bikin lo ngejar pertanyaan yang salah.**

❌ **Pertanyaan yang Salah:** *"Fitur apa yang dipunya kompetitor tapi kita belum punya?"* (Ini bikin lo reaktif dan cuma jadi tukang fotokopi).

✅ **Pertanyaan yang Benar & Berbobot:**
- *"Job mendasar apa yang diselesaikan dengan sangat luar biasa oleh kompetitor ini, dan apa rahasianya?"*
- *"Trade-off apa yang mereka ambil, dan segmen user mana yang secara sadar MEREKA TELANTARKAN gara-gara trade-off tersebut?"*
- *"Di bagian mana pasar ini masih ngerasa kurang terlayani (*underserved*) gara-gara semua pemain lama menganut asumsi yang sama?"*
- *"Kondisi kayak gimana yang bakal bikin user mereka rela repot-repot pindah (*switch*) ke produk kita (atau sebaliknya)?"*

### **4 Framework Analisis Kompetitif yang Jauh Lebih Berbobot:**

1. **Positioning Map (Peta Pemosisian):** Petakan kompetitor pada dua sumbu variabel yang beneran relevan buat pasar lo (jangan cuma klise "harga vs kualitas", tapi coba misalnya: "Self-serve mandiri vs High-touch pendampingan konsultan", atau "All-in-one generalis vs Niche spesialis").
2. **Jobs-based Comparison:** Bandingkan seberapa mulus masing-masing produk nyelesain *jobs-to-be-done* spesifik. Bisa jadi kompetitor menang jumlah fitur di atas kertas, tapi user mereka menderita karena alurnya ribet buat nyelesain satu tugas harian.
3. **Weakness-as-Opportunity Mapping:** Setiap kekuatan kompetitor pasti punya titik lemah alami di sisi lain. Misalnya, kompetitor enterprise punya fitur super lengkap tapi konfigurasinya makan waktu 3 bulan. Titik lemah itu adalah celah emas buat lo masuk pake strategi penetrasi kilat (*wedge strategy*): "Setup cuma butuh 5 menit!".
4. **Switching Cost Analysis:** Analisis kenapa user *ogah* pindah meskipun mereka ngedumel gak puas sama produk kompetitor. Apakah datanya terkunci? Apakah migrasinya ribet? Menemukan *switching barrier* ini bakal ngebuka kunci cara ngerebut pasar mereka.

---

## **Ukuran Pasar (Market Sizing): Angka Halu Favorit Pitch Deck (TAM, SAM, SOM)**

Lo pasti udah kenyang ngeliat *slide pitch deck startup* yang isinya: *"Total Addressable Market Bernilai $500 Miliar! Kita cuma butuh ngerebut 1% doang kok buat jadi unicorn!"*

Ini namanya matematika halusinasi. Kalau lo pake angka model ginian buat nuntun keputusan produk harian, lo lagi ngegiring tim lo masuk ke jurang kebangkrutan.

```
┌──────────────────────────────────────────────────┐
│ TAM (Total Addressable Market)                   │
│ $500B - Batas langit teoretis                    │
│   ┌──────────────────────────────────────────┐   │
│   │ SAM (Serviceable Addressable Market)     │   │
│   │ $10B - Pasar yang relevan sama model lo │   │
│   │   ┌──────────────────────────────────┐   │   │
│   │   │ SOM (Serviceable Obtainable)     │   │   │
│   │   │ $50M - Target realistis 1-2 thn  │   │   │
│   │   └──────────────────────────────────┘   │   │
│   └──────────────────────────────────────────┘   │
└──────────────────────────────────────────────────┘
```

- **TAM (Total Addressable Market):** Batas maksimum teoretis kalau lo monopoli 100% dunia tanpa ada kompetitor sama sekali. Gunanya cuma buat tau *ceiling* langit-langit industri, bukan buat acuan eksekusi.
- **SAM (Serviceable Addressable Market):** Porsi dari TAM yang secara realistis nyambung sama model bisnis, batasan geografis, regulasi, dan kapasitas produk lo saat ini.
- **SOM (Serviceable Obtainable Market):** Porsi realistis yang sanggup lo rebut dalam 1–3 tahun ke depan dengan nimbang kapasitas tim *sales*, anggaran *marketing*, dan sengitnya kompetisi.

**Pertanyaan Strategis yang Sebenarnya:** Bukan seberapa gede angka TAM di atas awan, tapi **apakah ceruk pasar yang lo bidik saat ini cukup gurih dan bisa menopang pertumbuhan bisnis di fase sekarang, serta apakah pasarnya lagi tumbuh kenceng atau malah menyusut?** Pasar senilai $20 juta itu surga buat startup *early-stage*, tapi receh buat korporasi raksasa yang butuh tambahan *revenue* $100 juta buat ngegerakin jarum sahamnya.

---

## **Framework Strategi yang Layak Masuk Perhatian Lo**

Biar lo nggak asal nebak, ini 3 alat bantu mikir strategis yang sangat kepake:

### **1. Strategy Canvas (Blue Ocean Strategy)**
Petakan produk lo dan kompetitor berdasarkan faktor-faktor kompetisi utama. Terus terapin 4 aksi radikal:
- **Eliminasi:** Faktor apa yang dari dulu dianggap wajib sama industri tapi sebenernya cuma nambah beban? (Misal: hilangkan kantor cabang fisik).
- **Kurangi:** Faktor apa yang standarnya bisa kita turunkan jauh di bawah rata-rata tanpa bikin user kabur?
- **Tingkatkan:** Faktor apa yang standarnya wajib kita dongkrak jauh melampaui pemain lama? (Misal: kecepatan verifikasi dari 3 hari jadi 10 detik).
- **Ciptakan:** Faktor baru apa yang belum pernah ditawarkan siapa pun di pasar ini?

### **2. Wardley Mapping**
Memetakan rantai nilai (*value chain*) produk lo dari apa yang dilihat user (atas) sampai ke infrastruktur paling dasar (bawah), disandingkan sama tingkat evolusinya (dari tahap eksperimen baru/*Genesis*, *Custom-built*, *Product/Rental*, sampai *Commodity/Utility*).
- **Dosa PM yang sering kena:** Bikin solusi kustom yang rumit buat hal-hal yang udah jadi komoditas (misal: maksain bikin sistem autentikasi atau billing engine sendiri dari nol), padahal kapasitas tim harusnya dicurahkan buat ngebangun keunikan kompetitif utama (*differentiator*) produk.

### **3. SWOT yang Dikerjain Beneran (Bukan Basa-Basi)**
Semua orang bisa bikin SWOT, tapi 90% hasilnya sampah generik (*"Kekuatan: Tim yang solid dan penuh semangat"*—please deh, semua kantor juga ngomong gitu).
- **Cara benernya:** Paksakan data komparatif dan spesifik.
- *Bukan:* "Kekuatan: Customer support kita ramah."
- *Tapi:* "Kekuatan: First Response Time tim CS kita rata-rata 2 menit vs rata-rata kompetitor 4 jam, tervalidasi jadi alasan utama 65% klien enterprise kita nggak mau pindah."

---

## **Jebakan Strategi: Masalah Goldilocks (Terlalu Halu vs Terlalu Taktis)**

Menyusun strategi itu kayak cerita *Goldilocks*: gak boleh terlalu dingin, gak boleh terlalu panas, harus pas di tengah-tengah.

❌ **Terlalu Samar / Halu (Gak Ada Gunanya):**
> *"Strategi kita adalah terobsesi pada kepuasan pelanggan dan ngasih nilai terbaik lewat inovasi berkelanjutan."*
> (Ini mah bisa dipake sama jualan bakso sampe jualan roket ke Mars. Nggak ada panduan filter prioritas sama sekali!).

❌ **Terlalu Taktis (Cuma Jadwal Kerja):**
> *"Strategi kita adalah ngerilis fitur A di Januari, fitur B di Februari, dan integrasi C di Maret."*
> (Ini jadwal gantt-chart, bukan strategi. Nggak ada alasan *kenapa* fitur itu dipilih atau masalah apa yang mau dipecahkan).

✅ **Ketinggian yang Pas (*The Right Altitude*):**
> *"Strategi kita adalah menjadi platform pilihan utama bagi jaringan restoran skala menengah (50–200 karyawan) dengan ngebangun alur kerja operasional dapur yang spesifik banget, bukan bersaing jadi software akuntansi serba bisa. Ini artinya kita secara tegas bakal menolak permintaan kustomisasi dari klien enterprise manufaktur, meskipun mereka bawa duit gede."*

Liat gimana pernyataan di atas jadi filter pengambilan keputusan yang sakti? Begitu ada klien korporat non-restoran minta fitur aneh-aneh, lo punya landasan kuat buat bilang: "Mohon maaf, itu di luar fokus strategis kita."

---

## **Ketika "Strategi" CEO Lo Sebenernya Cuma Reaksi Panik**

Ini momen awkward yang pasti bakal dihadapi setiap PM cepat atau lambat: bos lo tiba-tiba dateng dengan mata berbinar-binar bawa "strategi baru", yang sebenernya cuma respons latah gara-gara kompetitor kemarin rilis fitur baru, atau gara-gara bisikan investor pas makan malam.

**Tanda-Tanda Lo Lagi Ngadepin Strategi Semu yang Reaktif:**
- Haluan produk berubah haluan tiap kali ada kompetitor yang flexing fitur baru di media.
- Nggak bisa ngejawab pertanyaan: *"Kondisi apa yang bakal bikin kita sadar kalau arah ini salah dan harus dibatalkan?"*
- Cuma berlandaskan satu testimoni acak atau satu artikel berita, bukan pola data yang valid.
- Nggak ada yang bisa ngejelasin diagnosis masalahnya apa, yang ada cuma instruksi: *"Pokoknya kita harus bikin ini sekarang!"*

**Cara Navigasi Cantik (Biar Gak Dicap Pembangkang & Tetep Selamat):**
Jangan langsung didebat di depan umum dengan kata *"Itu ide buruk, Pak/Bu"* (itu resep instan bunuh diri karier). 
Pake teknik pertanyaan klarifikasi yang memandu:
> *"Bantu saya pahami konteksnya dong Pak/Bu, masalah user spesifik apa yang mau kita selesaikan lewat inisiatif ini, biar tim produk bisa ngerancang solusi yang paling tajam?"* 
> Atau: 
> *"Hipotesis utama kita apa ya Pak/Bu, kenapa pendekatan baru ini bakal jauh lebih efektif dibanding inisiatif yang lagi berjalan sekarang?"*

Pertanyaan elegan kayak gini ngebantu pimpinan buat mikir ulang secara terstruktur tanpa ngerasa otoritasnya ditantang langsung.

---

## **Template Dokumen Strategi yang Nendang (Maksimal 2 Halaman!)**

Kalau lo mau nulis dokumen strategi yang beneran dibaca dan dipake, nih kerangka ringkasnya:

1. **Konteks:** Apa yang lagi terjadi di pasar atau internal perusahaan yang bikin dokumen strategi ini penting sekarang?
2. **Diagnosis:** Apa akar masalah utama atau peluang emas yang mau kita sasar? (Wajib spesifik, dilarang generik!).
3. **Guiding Policy (Kebijakan Pemandu):** Gimana pendekatan menyeluruh kita buat ngatasin hal tersebut? Apa hal yang secara sadar KITA PILIH untuk dikerjain, dan apa yang KITA TOLAK untuk disentuh?
4. **Metrik Keberhasilan (Success Metrics):** Gimana cara kita tau kalau strategi ini berhasil? Apa indikator pemicu yang bikin kita harus putar arah (*pivot*)?
5. **Risiko & Asumsi Kunci:** Apa hal yang wajib terbukti bener biar strategi ini jalan? Apa skenario terburuk yang bisa nggagalin rencana ini?
6. **Coherent Actions (Tindakan Terpadu):** Inisiatif besar apa aja yang bakal langsung mengeksekusi strategi ini? (Ini yang bakal jadi bahan mentah buat *roadmap* lo).

**Catatan:** Tahan diri lo buat bikin dokumen ini maksimal 2 halaman! Kalau lo nggak sanggup ngeringkas strategi lo ke dalam 2 halaman, berarti isi kepala lo emang belum cukup fokus dan terarah.

---

## **Rangkuman Bab: TL;DR**

- Strategi adalah soal mengambil pilihan tegas di bawah keterbatasan—kalau lo belum berani nolak hal-hal yang kelihatannya bagus, lo gak punya strategi, lo cuma punya *wishlist*.
- Kuasai *Kernel Strategi* Rumelt: **Diagnosis** (akar masalah) → **Guiding Policy** (arah pilihan tegas) → **Coherent Actions** (tindakan nyata yang terpadu).
- Stop analisis kompetitor gaya tabel centang fitur; fokus ke *jobs*, *trade-offs*, dan *switching costs*.
- Jangan tertipu angka halu TAM; pastikan ceruk pasar lo realistis dan punya gravitasi yang cukup buat fase bisnis saat ini.
- Strategi yang matang berada di ketinggian yang pas: cukup spesifik buat jadi filter keputusan harian, tapi cukup luas buat bertahan melampaui satu kuartal.

---

**Pertanyaan Refleksi:**

1. Coba bedah *roadmap* produk lo saat ini. Bisakah lo narik garis lurus dari tiap inisiatif kembali ke pilihan strategis yang spesifik? Kalau nggak bisa, faktor apa yang sebenernya lagi nyetir prioritas tim lo?
2. Siapa kompetitor terdekat lo sekarang? *Job* mendasar apa yang mereka selesaikan dengan luar biasa, dan *trade-off* apa yang tanpa sadar mereka korbankan dari kekuatan itu?
3. Pernahkah "strategi" kantor lo berubah secara reaktif cuma gara-gara panik ngeliat manuver kompetitor tahun ini? Kalau lo pake pendekatan Kernel Rumelt, harusnya gimana cara ngeresponsnya?

**Langkah Tindakan (Action Item):**

Ambil rencana kuartalan tim lo sekarang, terus coba tuliskan dalam satu lembar formula **"Diagnosis → Guiding Policy → Coherent Actions"** yang menjustifikasi rencana itu. Kalau lo megap-megap pas nulisnya, itu sinyal keras kalau rencana kerja tim lo saat ini emang belum punya fondasi strategis yang kokoh!

---
