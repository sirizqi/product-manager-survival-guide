## **Spreadsheet yang Nggak Nyelesaiin Apa-apa**

Dulu gue pernah ngerasa udah nyiptain sebuah *masterpiece*: sebuah dokumen *spreadsheet* super canggih berisi skor RICE buat 47 permintaan fitur yang numpuk di meja. *Reach, Impact, Confidence, Effort*—semuanya gue kasih skor, gue bobot, terus gue urutin peringkatnya pake rumus matematika yang rapi banget. Ada *conditional formatting* warna-warni gradasi hijau-merah. Ada tab *executive summary*. Pokoknya dokumen itu bener-bener memancarkan aura objektivitas data yang bikin bangga!

Gue melangkah ke ruang rapat perencanaan kuartalan dengan senyum percaya diri, ngerasa kayak ilmuwan yang bawa bukti mutlak yang nggak bisa dibantah soal apa yang wajib dibangun tim *engineering* selanjutnya.

Pas presentasi baru mulai, VP Sales kita ngelirik santai ke baris peringkat #1 di layar, terus noleh ke gue dan bilang dengan nada datar: *"Keren banget sih analisis lo. Tapi kuartal ini kita bakal ngebangun integrasi kustom buat [Klien Enterprise X] dulu ya. Soalnya mereka ngancem mau churn, dan nilai kontrak tahunan mereka itu $2 juta."*

Jder! *Spreadsheet* kebanggaan gue bahkan nggak sempet masuk ke sesi debat teknis. Kerja keras berminggu-minggu ngitung skor langsung lenyap tak berdaya cuma gara-gara satu kalimat tentang tim sales yang ketar-ketir dan klien paus yang lagi ngamuk.

Inilah rahasia gelap yang jarang di-*spill* sama *influencer* LinkedIn di postingan tips prioritisasi mereka: **framework prioritisasi itu nggak pernah jadi bagian yang paling susah. Dinamika politik kantor, relasi kekuasaan, dan nyali buat ngecewain orang lain—itulah medan tempur yang sesungguhnya!** 

RICE, MoSCoW, Kano, ICE—semua itu cuma alat bantu buat nata isi kepala lo biar nggak halu. Alat-alat itu nggak punya kekuatan magis buat bikin orang patuh sama keputusan lo. Cuma komunikasi yang solid, bukti data lapangan yang nyata, dan ketegasan mental yang bisa bikin prioritas lo beneran tereksekusi.

Yuk, kita bedah dua sisi mata uang ini: logika *framework* yang rapi, dan realitas politik organisasi yang sering kali bikin pusing!

---

## **Tur Praktis Berbagai Framework Prioritisasi**

Biar lo punya senjata lengkap pas adu argumen, kenali kelebihan dan titik rapuh dari masing-masing metode ini:

### **1. RICE (Reach, Impact, Confidence, Effort)**

$$\text{Skor RICE} = \frac{\text{Reach} \times \text{Impact} \times \text{Confidence}}{\text{Effort}}$$

- **Reach (Jangkauan):** Berapa banyak user yang bakal kena dampak fitur ini dalam periode tertentu (misal: jumlah transaksi/bulan).
- **Impact (Dampak):** Seberapa gede efeknya ke user (skala 3 = massive, 2 = high, 1 = medium, 0.5 = low, 0.25 = minimal).
- **Confidence (Keyakinan):** Seberapa yakin lo sama data lo (100% = high confidence data tervalidasi, 80% = medium, 50% = low/moonshot).
- **Effort (Beban Kerja):** Berapa lama waktu yang dibutuhin tim (misal: person-months).

**Kapan paling cocok dipake:** Buat nyortir *backlog* raksasa yang isinya ide-ide fitur yang selevel, terutama kalau lo punya data analitik yang kuat buat ngestimasi *Reach* dan *Impact*.

**Di mana titik lemahnya:** Angka "Confidence" sering kali cuma *feeling* subjektif yang dipaksain jadi persentase biar keliatan keren. Selain itu, RICE memperlakukan semua hal seolah bisa dibandingin langsung pake satu timbangan—padahal ngebandingin perbaikan *bug* kecil sama perombakan total arsitektur database itu kayak ngebandingin apel sama traktor, nggak nyambung!

---

### **2. MoSCoW (Must have, Should have, Could have, Won't have)**

- **Must have:** Fitur harga mati. Tanpa ini produk nggak bisa rilis, melanggar hukum, atau sistem bakal lumpuh total.
- **Should have:** Fitur penting yang punya nilai tinggi, tapi masih ada cara darurat (*workaround*) kalau terpaksa ditunda.
- **Could have:** Fitur pelengkap (*nice-to-have*) yang bikin pengalaman makin manis kalau kapasitas tim masih sisa.
- **Won't have (this time):** Hal-hal yang secara sadar disepakati buat TIDAK disentuh pada siklus rilis saat ini.

**Kapan paling cocok dipake:** Buat ngunci cakupan (*scope*) rilis versi baru atau komitmen *sprint* pas tim butuh garis batas tegas mana yang esensial dan mana yang hiasan.

**Di mana titik lemahnya:** Semua orang di kantor bakal ngeklaim kalau fitur usulan mereka adalah "Must Have." Kalau lo nggak punya definisi operasional yang saklek (misal: *"Must have = kalau fitur ini gak ada, aplikasi bakal crash atau bisnis kena denda regulasi"*), metode ini bakal berubah jadi kontes popularitas adu urat leher.

---

### **3. Model Kano (Kano Model)**

Membagi fitur berdasarkan respon emosional pengguna:
1. **Basic Expectations (Fitur Kebersihan/Dasar):** Fitur yang wajib ada. Kalau ada, user ngerasa biasa aja (karena emang udah semestinya); tapi kalau nggak ada, user bakal ngamuk sejadi-jadinya (contoh: tombol login, fitur reset password).
2. **Performance Features (Fitur Linier):** Makin bagus fiturnya, makin seneng user (contoh: kecepatan loading, kapasitas storage).
3. **Delighters (Fitur Pemikat/Wow Factor):** Fitur kejutan yang gak disangka-sangka sama user. Kalau ada bikin mereka jatuh cinta, kalau nggak ada pun mereka gak bakal komplain karena gak pernah ngarepin (contoh: animasi perayaan lucu pas nyelesaiin pembayaran).

```
         Kepuasan Tinggi (+)
                ▲
                │        / Delighters (Wow Factor)
                │       /
                │      /  / Performance (Linier)
                │     /  /
                │    /  /
  Kurang ───────┼───────────────► Lengkap
  Eksekusi      │  /  /
                │ /  /  Basic (Wajib Ada)
                │/  /
                ▼
         Kepuasan Rendah (-)
```

**Kapan paling cocok dipake:** Buat nyeimbangin alokasi kerjaan: biar tim nggak cuma ngerjain tugas operasional yang ngebosenin (*keep the lights on*), tapi juga nyelipin inovasi yang beneran bikin produk lo punya pembeda unik (*differentiator*).

**Di mana titik lemahnya:** Fitur *Delighter* bakal terdegradasi jadi fitur *Basic* seiring berjalannya waktu! Inget gak waktu pertama kali ada gratis ongkir atau pesan makanan instan 15 menit? Awalnya bikin kita takjub (*delighter*), sekarang kalau promo itu ilang malah bikin kita kesel (*basic*). Model Kano nuntut riset survei berkala, yang kenyataannya males dilakuin sama tim produk.

---

### **4. ICE (Impact, Confidence, Ease)**

$$\text{Skor ICE} = \text{Impact} \times \text{Confidence} \times \text{Ease}$$

Versi lite dari RICE yang ngebuang variabel *Reach* dan ngeganti *Effort* jadi *Ease* (seberapa gampang/cepet dieksekusi, skala 1–10).

**Kapan paling cocok dipake:** Sangat disukai tim *Growth* buat eksperimen cepat (*growth hacking*) di mana tujuannya adalah ngetes puluhan ide kecil tiap minggu.

**Di mana titik lemahnya:** Tanpa ngitung *Reach*, lo berisiko ngeprioritasin fitur yang dampaknya gede tapi cuma dinikmati sama 10 orang user, sementara masalah yang dialami 500.000 user malah terabaikan.

---

### **5. Matriks Nilai vs Upaya (Value vs Effort 2x2 Matrix)**

- **Kuadran 1 (High Value, Low Effort):** *Quick Wins* → Gaspol langsung tanpa banyak mikir!
- **Kuadran 2 (High Value, High Effort):** *Major Projects / Big Bets* → Rencanain matang-matang, pecah jadi milestone kecil.
- **Kuadran 3 (Low Value, Low Effort):** *Fill-ins* → Kerjain pas ada waktu luang atau buat selingan santai.
- **Kuadran 4 (Low Value, High Effort):** *Time Sinks / Money Pit* → Red flag mutlak, coret dari muka bumi!

**Di mana titik lemahnya:** Kata "Value" itu jebakan batman. Value buat siapa? Buat user? Buat nambah *revenue* instan bulan ini? Buat portofolio karier lo sendiri? Tanpa parameter metrik yang jelas, matriks ini cuma jadi ajang cocoklogi subjektif di atas kertas karton.

---

## **Kebenaran yang Pahit: Semua Framework Itu Gampang Dimanipulasi!**

Ini realitas yang bakal lo sadari setelah bertahun-tahun di industri tech: **framework penilaian apa pun bisa direkayasa balik (*gamed*) sama orang yang udah punya agenda pribadi.**

Pengen fitur kesayangan lo dapet ranking #1 di RICE? Gampang banget: tinggal naikin dikit asumsi *Reach*-nya. Terus skor *Confidence*-nya lo tembak ke 80% dengan alibi *"Gue yakin banget kok sama insting gue."* Nggak bakal ada yang ngecek ulang perhitungan matematika lo sampai ke akar-akarnya.

Gue pernah ngeliat orang pinter bergelar MBA dengan muka lempeng ngubah skor *Confidence* dari 50% jadi 90% murni cuma biar idenya lolos ke sprint berikutnya, terus dia presentasiin itu seolah-olah itu wahyu ilmiah yang objektif.

Ini manusiawi banget—namanya juga *motivated reasoning*. Kalau lo ngisi formulir penilaian sendirian, secara alamiah lo bakal nyari angka yang ngebenerin apa yang dari awal emang pengen lo bikin.

**Solusinya Bukan Cari Framework yang Lebih Rumit, tapi Perbaiki Prosesnya:**

1. **Minta Orang Netral Buat Ngasih Skor Input:** Jangan biarkan si pemilik ide ngisi skor *Confidence* dan *Effort* sendirian tanpa ditantang tim lain.
2. **Wajibkan Bukti Nyata Buat Tiap Angka:** Skor *Impact* tinggi? Mana datanya? Ada berapa tiket komplain di Zendesk atau berapa persen drop-off di funnel analitik?
3. **Gelar Sesi Pre-Mortem:** Sebelum mulai ngerjain item nomor satu, tanya ke tim: *"Misalkan 3 bulan lagi fitur ini rilis dan gagal total di pasar, kira-kira skenario apa yang bikin kita rungkad?"* Pertanyaan ini ampuh banget ngebongkar asumsi halu yang gagal ditangkap spreadsheet.
4. **Audit Akurasi Pasca-Rilis:** Pas fitur udah rilis, cocokin hasil aslinya sama estimasi RICE lo dulu. Apakah dampaknya beneran sesuai tebakan? Ini bakal ngelatih tim biar nggak sembarangan nge-klaim angka di masa depan.

---

## **Trilema: Prioritas Stakeholder vs Pengguna vs Bisnis**

Ini nih ketegangan abadi yang gak bakal bisa diselesaikan secara sempurna oleh rumus matematika mana pun:

```
                  Prioritas Bisnis
                 (Revenue, Cuan, Run-rate)
                          ▲
                         / \
                        /   \
                       /     \
                      /   ★   \
                     /  (Sweet \
                    /    Spot)  \
                   /             \
                  ▼               ▼
        Prioritas Pengguna     Prioritas Stakeholder
        (Solusi Real, UX)      (Politik Kantor, HiPPO)
```

1. **Prioritas Stakeholder:** Apa yang dimau sama orang yang jabatannya paling tinggi, suaranya paling kenceng, atau klien kakap yang baru ngamuk. (Fokusnya sering kali ke target jangka pendek atau manuver politik).
2. **Prioritas Pengguna:** Apa yang bener-bener dibutuhin sama user sungguhan berdasarkan riset dan rekaman perilaku. (Sayangnya, user biasa nggak punya kursi di ruang rapat penentuan roadmap).
3. **Prioritas Bisnis:** Apa hal yang secara nyata ngedatengin cuan, ngejaga arus kas, dan ngangkat valuasi perusahaan. (Kadang sejalan sama kebutuhan user, tapi kadang bertentangan—misal: pasang biaya admin tambahan atau nampilin iklan pop-up).

Di dunia utopia, ketiganya bakal akur. Tapi di dunia nyata, ketiganya sering tubrukan! Tugas lo sebagai PM bukan ngilangin tubrukan itu, tapi **menavigasi dan ngebikin kompromi (*trade-off*) tersebut transparan bagi semua pihak.**

Jangan diem-diem milih satu pihak terus berharap pihak lain nggak sadar. Ngomong secara gamblang: 
> *"Tim Sales minta fitur kustom X buat satu klien, tapi data kita nunjukin kalau kapasitas engineering kita bakal kepake 40% buat hal yang cuma dinikmati 1% user, sementara inisiatif retensi buat 80% user bakal molor 2 bulan. Ini trade-off yang ada di meja. Apakah kita siap nanggung konsekuensinya?"*

Transparansi kayak gini bikin lo terlihat profesional, punya integritas, dan nggak gampang disetir sama drama politik ruangan.

---

## **Politik Prioritisasi yang Gak Pernah Masuk Buku Teks**

### **1. Masalah HiPPO (Highest Paid Person's Opinion)**
CEO atau bos lo tiba-tiba nyeletuk: *"Kemarin kompetitor rilis fitur X, kita harus bikin yang serupa minggu depan!"* Seketika itu juga, tiket itu berubah jadi prioritas tertinggi (P0), ngerusak semua rencana yang udah disusun rapi berbulan-bulan.

**Cara ngadepinnya (tanpa bikin lo dipecat):**
Jangan langsung nolak dengan nada emosi: *"Itu ide ngawur!"* (itu cari perkara namanya). Tanggapi dengan elegan, terus bawa data ke meja:
> *"Menarik banget langkah yang diambil kompetitor itu. Biar kita gak boncos, kasih saya waktu 3 hari buat riset apakah user kita beneran ngerasain urgensi yang sama, dan seberapa besar estimasi dampaknya ke metrik utama kita."*

Sering kali eksekutif punya insting bisnis yang tajam, tapi dengan lo bawa data nyata, percakapan bakal bergeser dari adu ego menjadi diskusi berbasis fakta.

### **2. Jebakan "Semuanya Adalah Prioritas P0"**
Di kantor yang manajemennya masih berantakan, semua tiket Jira dikasih label *Urgent / P0*. Kalau semua hal berstatus prioritas tertinggi, secara matematis artinya **nggak ada satu pun yang beneran diprioritaskan!**

**Solusinya:** Paksakan kompromi secara terbuka:
> *"Kita punya 5 inisiatif yang sama-sama berstatus P0, tapi kapasitas sprint kita cuma sanggup ngeksekusi 2 inisiatif secara tuntas. Boleh tolong kita sepakati bersama di ruangan ini: mana 2 inisiatif yang mau kita selesaikan duluan, dan mana 3 inisiatif yang kita relakan buat digeser ke sprint berikutnya?"*

Biarin para *stakeholder* berdiskusi dan milih di depan satu sama lain. Jangan lo telan beban itu sendirian!

### **3. Sabotase Biaya Hangus (*Sunk Cost Fallacy*)**
*"Kita kan udah ngabisin waktu 6 bulan buat ngebangun proyek ini, masa sekarang mau dibatalkan begitu aja?!"*

Ini kalimat paling boncos dalam sejarah produk tech. Waktu dan uang 6 bulan itu udah ludes, gak bakal bisa balik terlepas dari apa pun keputusan lo hari ini!

**Solusinya:** Frame ulang pertanyaannya ke masa depan:
> *"Kita semua tau tim udah curahin banyak tenaga buat proyek ini. Tapi kalau kita mulai hari ini dari nol dengan modal yang tersisa, apakah melanjutkan proyek ini adalah keputusan investasi terbaik buat 3 bulan ke depan?"*

---

## **Utang Teknis (Technical Debt): Prioritas yang Dilupain Sampe Bikin Kebakaran**

Pola klasik yang selalu berulang: utang teknis (*tech debt*) selalu dikorbanin demi ngejar fitur-fitur baru yang keliatan kinclong—sampe suatu hari server meledak, aplikasi lemot parah, atau sistem arsitektur macet total sampe gak bisa nambah fitur baru lagi.

**Kenapa selalu kalah bersaing:** Karena *tech debt* itu gak kasat mata. Gak ada *board member* yang tepuk tangan denger *"hore, kita baru aja refactor service authentication!"*. Gak bisa dipamerin di postingan promosi LinkedIn.

**Solusinya:** Wajibkan **Protected Capacity (Kapasitas Terproteksi)** yang konsisten!
Tim produk berkinerja tinggi biasanya secara tegas ngunci 15–25% kapasitas *engineering* di setiap siklus khusus buat bayar utang teknis, ngerapihin kode, dan optimasi infrastruktur. Kapasitas ini gak boleh diganggu gugat oleh permintaan fitur baru apa pun. Ini bukan kompromi ad-hoc, tapi disiplin preventif biar sistem gak jebol di masa depan.

---

## **Studi Kasus: Cara Gue "Ngebunuh" Fitur Favorit CEO**

Gue mau cerita salah satu momen paling bikin deg-degan sepanjang karier gue sebagai PM.

Waktu itu CEO kantor gue punya satu ide fitur kesayangan. Di tiap *all-hands* dan rapat direksi selama 6 bulan terakhir, beliau selalu ngebanggain ide ini. Masalahnya, ide ini murni lahir dari pengalaman pribadi beliau pas nyobain aplikasi, bukan dari riset user yang valid. Pas tim produk narik data analitik, fitur tersebut ternyata cuma relevan buat sekitar 3% user, tapi estimasi pengerjaannya bakal nyedot 40% kapasitas seluruh tim *engineering* selama satu kuartal penuh!

Gue dihadapkan pada dua pilihan apes: nurut aja ngebangun fitur itu sambil ngebatin ngeliat sumber daya terbuang sia-sia, atau ngelawan frontal dan bikin suasana kantor jadi panas.

Gue milih opsi ketiga: **bawa data, bukan emosi.**

Gue bikin memo satu halaman yang super padat. Isinya:
1. Proyeksi dampak bisnis pake standar RICE yang sama kayak inisiatif lain.
2. Hasil temuan *user interview* yang nunjukin user target gak ngerasa butuh alur tersebut.
3. Yang paling nendang: **analisis opportunity cost**—gue jabarin secara gamblang inisiatif apa aja yang terpaksa DIBATALKAN kalau 40% kapasitas dialihkan ke fitur kesayangan beliau.

Gue nggak bilang *"Ide Bapak jelek."* Gue bilang:
> *"Ini data temuan lapangan terkait proyeksi dampak dan biayanya. Saya ingin memastikan kita mengambil keputusan ini dengan visibilitas penuh atas trade-off kapasitas yang ada. Apapun keputusan final Bapak, tim produk siap mendukung."*

Hasilnya gimana? Kita gak ngebatalin total (biar beliau gak kehilangan muka), tapi kita pangkas cakupannya jadi eksperimen mini (*smoke test*) yang hemat waktu buat ngetes minat pasar. Pas dirilis, hasilnya beneran sepi sesuai prediksi data. Sang CEO dengan lapang dada nerima fakta tersebut dan ngegeser fokus tim ke inisiatif lain yang lebih berdampak.

**Pelajaran Berharganya:** Lo gak bakal menang debat politik kantor cuma modal ngerasa "paling bener." Lo menang dengan cara menyajikan data *trade-off* yang mustahil diabaikan, sambil tetep ngasih jalan keluar yang elegan buat lawan bicara lo buat ganti haluan tanpa ngerasa dipermalukan.

---

## **Biaya Peluang (Opportunity Cost): Variabel Paling Gaib di Setiap Keputusan**

Tiap kali lo bilang "YA" ke satu permintaan fitur, secara otomatis lo lagi bilang "NGGAK" ke puluhan inisiatif lainnya.

❌ **Daripada Nanya:** *"Bagus gak kalau kita bikin Fitur X?"* (Pertanyaan jebakan, karena semua fitur biasanya kedengeran bagus).

✅ **Tanyakanlah:** *"Kalau kuartal ini kita milih ngebangun Fitur X, inisiatif apa yang secara sadar bakal KITA BATALKAN, dan apakah kita siap nanggung konsekuensi bisnis dari pembatalan tersebut?"*

Pertanyaan ini seketika bakal nyadarin para *stakeholders* kalau kapasitas tim itu terbatas dan punya harga nyata, bukan kantong ajaib Doraemon yang bisa ngeluarin apa aja tanpa batas.

---

## **Alur Proses Prioritisasi Praktis yang Tahan Banting**

Biar lo gak oleng pas rapat perencanaan, terapin 6 langkah taktis ini:

1. **Kumpulkan Masukan dari Segala Lini:** Gabungin data riset user, analitik corong, permintaan sales, keluhan CS, dan kebutuhan utang teknis *engineering*.
2. **Skor Pake Framework Sederhana (RICE atau Matriks 2x2):** Gunakan ini sebagai acuan draf awal untuk memicu diskusi yang sehat, bukan sebagai dogma kaku yang gak boleh didebat.
3. **Buka Pertimbangan Politik Secara Transparan:** Kalau ada titipan strategis dari manajemen yang harus masuk antrean, umumkan alasannya secara terbuka: *"Inisiatif ini kita dahulukan demi mengamankan kesepakatan enterprise [alasan spesifik]."*
4. **Kunci Alokasi Utang Teknis (15–25%):** Pastikan stabilitas arsitektur tetep terjaga di tiap siklus rilis.
5. **Komunikasikan Trade-off ke Pihak yang Ditolak:** Jangan ghosting mereka yang permintaannya belum lolos. Kasih penjelasan jujur kenapa inisiatif mereka belum bisa masuk kuartal ini.
6. **Evaluasi & Kalibrasi Berkala:** Sadari bahwa prioritas bakal terus berevolusi seiring masuknya data baru dan manuver pasar.

---

## **Rangkuman Bab: TL;DR**

- Framework prioritisasi (RICE, MoSCoW, Kano, ICE) adalah alat bantu berpikir, bukan mantra ajaib pengambil keputusan. Medan tempur aslinya ada di komunikasi, relasi kekuasaan, dan manajemen *trade-off*.
- Waspadai manipulasi skor (*motivated reasoning*)—validasi angka input pake data riil dan lakukan *pre-mortem*.
- Navigasi trilema prioritas: seimbangkan kepentingan *stakeholder*, kebutuhan hakiki *pengguna*, dan target *bisnis* secara transparan.
- Alokasikan 15–25% kapasitas terproteksi buat utang teknis sebelum sistem lo jebol.
- Jangan nolak permintaan pimpinan secara frontal; sajikan data *opportunity cost* secara elegan biar mereka bisa mengubah haluan tanpa kehilangan muka.

---

**Pertanyaan Refleksi:**

1. Coba telaah keputusan prioritas terakhir di kantor lo: apakah itu beneran didorong sama data objektif, manuver politik kekuasaan, atau campuran keduanya? Jujur aja, faktor mana yang paling dominan?
2. Pernahkah organisasi lo ngasih label "Semua hal adalah prioritas utama (P0)"? Apa efek nyata yang terjadi ke kesehatan mental dan moral tim *engineering* setelahnya?
3. Berapa persen kapasitas tim *engineering* lo saat ini yang beneran aman terlindungi buat nanganin utang teknis dibanding yang harus berebut jatah sama fitur baru?

**Langkah Tindakan (Action Item):**

Pilih satu keputusan prioritas yang lagi bikin lo pusing minggu ini. Tuliskan rumus biaya peluangnya (*opportunity cost*) dalam satu kalimat tegas: *"Kalau kita ngerjain [Inisiatif A], kita secara sadar memilih untuk TIDAK ngerjain [Inisiatif B dan C], dengan risiko bisnis berupa [Konsekuensi]."* Bawa kalimat ini ke rapat koordinasi berikutnya dan liat gimana obrolan yang tadinya debat kusir langsung berubah jadi diskusi bisnis yang super fokus!

---
