## **Hari Pas Gue Belajar "Kamus Rahasia" Anak Engineering**

Waktu masih jadi PM bau kencur, gue pernah dengan entengnya minta seorang *engineer* buat nambahin satu tombol filter "sederhana" di halaman pencarian. Dia ngeliatin gue beberapa detik, ngehela napas panjang banget, terus nyeletuk dingin: *"Gak bisa, Mas. Arsitektur kita sekarang gak memungkinkan buat bikin itu."*

Waktu itu yang nangkep di otak gue adalah: *"Oh, fiturnya mustahil dibuat secara teknis."* Akhirnya gue balik ke ruang meeting *stakeholder* sambil pasang muka melas dan bilang kalo fitur itu gak *feasible*. Ide itu pun resmi dikubur dan dilupain selama dua tahun penuh.

Dua tahun kemudian, ada seorang *senior engineer* lain—yang untungnya sabar banget ngadepin PM kayak gue—ngejelasin apa arti sebenernya dari kalimat "gak memungkinkan" yang dulu pernah gue denger. Maksud aslinya tuh bukan mustahil dibuat kayak bikin mesin penjelajah waktu! Maksud dia sebenernya:  
*"Bisa aja dibikin, tapi kita harus refactoring cara indexing database pencarian dulu. Dan itu makan waktu tiga minggu penuh, bukan dua hari kayak yang lo bayangin. Masalahnya, belum ada yang bisa ngejelasin ke tim kita kenapa fitur filter ini sebegitu pentingnya buat bisnis sampe kita harus invest waktu selama itu."*

Gue langsung melongo. Maknanya beda 180 derajat!  
Yang pertama kedengeran kayak tembok beton buntu. Tapi yang kedua sebenernya adalah **ajakan buat diskusi analisis untung-rugi (*Cost-Benefit Analysis*) yang lagi nunggu buat dibedah bareng-bareng!**

Gue ngerasa bego banget karena udah nyia-nyiakan peluang fitur berharga selama dua tahun cuma gara-gara gak paham cara nerjemahin bahasa anak *engineering*, dan gak tau gimana cara ngelempar pertanyaan lanjutan yang pas. 

Bab ini hadir buat ngejembatani jurang pemisah antara PM dan Tim Engineering. Lo gak perlu banting setir jadi *programmer* jago ngoding kok. Yang lo butuhin adalah **literasi teknis yang cukup dan modal kepercayaan yang tulus**, biar obrolan kalian nyambung, sat-set, dan gak saling lempar salah.

---

## **Paham Batasan Teknis (Tanpa Harus Jago Ngoding Sendiri)**

Biar gak gampang dibego-begoin atau sebaliknya gak dicap sebagai PM halu yang permintaannya di luar nalar, lo wajib ngerti konsep-konsep fondasi teknis ini:

```
+-----------------------------------------------------------------------+
|                 LITERASI TEKNIS WAJIB BUAT PRODUCT MANAGER            |
+-----------------------------------------------------------------------+
| 1. API & Integrasi       | Paham batas limit pihak ketiga (rate limit)|
| 2. Utang Teknis (Debt)   | Jalan pintas hari ini = beban sprint esok  |
| 3. Skalabilitas          | 1K user lancar != 100K user kuat           |
| 4. Model Data            | "Cuma mindah kolom" bisa rombak database   |
| 5. Latensi & Performa    | Kenapa query berat bikin sistem lemot      |
+-----------------------------------------------------------------------+
```

### **1. API dan Integrasi Pihak Ketiga (*APIs & Integrations*)**
Pahami gimana produk lo tukeran data sama sistem luar (misal: *payment gateway*, sistem logistik, atau layanan OTP). Pahami istilah kayak *rate limits* (kuota maksimal panggilan data) dan *downtime*. Kalo API rekanan lo lambat atau sering *down*, fitur sekeren apa pun yang lo rancang di atasnya bakal ikutan jebol.

### **2. Utang Teknis (*Technical Debt*)**
Ini bukan sekadar kode yang berantakan. Ini tentang kenyataan bahwa jalan pintas (*hacky solution*) yang lo paksain hari ini bakal bikin kecepatan pengembangan (*development velocity*) tim lo merayap kayak siput di masa depan. Kalo engineer lo bilang *"kalo kita bikin ngebut sekarang, nanti pas mau nambahin fitur X bakal super susah,"* dengerin baik-baik! Mereka bukan lagi nyari alasan buat males-malesan.

### **3. Skalabilitas (*Scalability*)**
Sesuatu yang jalan mulus pas dites di laptop lokal atau dipake 1.000 user bisa langsung meledak *crash* pas diserbu 100.000 user bersamaan. Dan inget, solusinya gak segampang nyeletuk *"yaudah tinggal tambah server aja!"* Kalo struktur arsitektur dasarnya dari awal emang gak siap nahan beban, nambah server cuma buang-buang duit *cloud*.

### **4. Model Data (*Data Models*)**
Pahami garis besar gimana data di aplikasi lo saling terhubung di database. Permintaan yang keliatannya sepele di mata orang awam—misal: *"Eh, tolong tampilin status pengiriman di halaman profile user dong"*—bisa jadi butuh perombakan relasi database yang njelimet kalo dari awal dua data itu gak pernah didesain buat saling kenal.

### **5. Latensi dan Performa (*Latency & Performance*)**
Pahami kenapa fitur tertentu loading-nya cepet sementara yang lain lemot (apakah gara-gara *query database* yang berat, kalkulasi rumit, atau nunggu respon server eksternal). Menginstruksikan *"bikin lebih cepet dong"* itu bukan mantra sihir. Lo harus bareng-bareng nyari titik macetnya (*bottleneck*) dan sepakat sama kompromi teknis yang dibutuhin.

---

## **Kenapa PM Wajib Peduli Sama Utang Teknis (Walaupun Gak Keliatan di Demo)**

Ini sumber ketegangan abadi: **Technical Debt itu gak kasat mata.**  
Beresin utang teknis itu gak bisa lo pamerin pas demo produk ke jajaran direksi. Utang teknis gak bikin user heboh tepuk tangan. Tapi utang teknis nentuin hidup-mati kecepatan tim lo buat ngerilis fitur apa pun di masa depan.

**Analogi Paling Gampang: Utang Kartu Kredit**  
Pake utang teknis secara strategis (misal: bikin solusi agak *hacky* buat validasi MVP kilat) itu langkah yang pinter. Tapi kalo utang lo tumpuk terus tiap sprint dan gak pernah lo bayar cicilannya, bunganya bakal numpuk gila-gilaan: sistem makin sering *down*, bug bermunculan di mana-mana, tim *burnout*, dan akhirnya lo gak bisa ngerilis fitur baru apa pun!

**Cara Konkret Ngebela Alokasi Utang Teknis:**

1. **Ajak tim engineering ngejelasin dampaknya secara spesifik.** Jangan cuma nerima curhatan umum kayak *"kodenya busuk nih."* Arahkan jadi argumen yang operasional: *"Alur checkout kita masih make library pembayaran lawas yang udah gak di-update, ini ada celah keamanan kritis dan ngeblok kita buat ngerilis fitur cicilan bulan depan."*
2. **Kunci alokasi kapasitas terproteksi (*Protected Capacity*).** Alokasikan misal 15–20% poin kapasitas di tiap sprint khusus buat urusan *refactoring* dan *tooling*. Jangan biarin tiket utang teknis diadu langsung satu lawan satu sama tiket fitur baru yang mengilap di arena voting—pasti kalah!
3. **Terjemahkan ke bahasa cuan/bisnis pas ngomong ke bos.** Kalimat: *"Kalo kita alokasiin 1 sprint buat beresin database ini sekarang, sprint berikutnya kita bisa rilis 3 fitur roadmap 40% lebih cepet,"* bakal bikin jajaran C-Level langsung manggut-manggut setuju.
4. **Tanamkan mindset: Ini ADALAH Pekerjaan Produk.** Ngerawat sistem bukan beban sampingan; ini investasi jangka panjang biar produk lo gak gampang tumbang di tengah jalan.

---

## **Estimasi & Planning Poker: Cari Tau Asumsi Tersembunyi, Bukan Cuma Debat Angka**

**Kenapa estimasi software selalu meleset?**  
Bukan karena engineer lo gak kompeten. Bikin software itu penuh sama ketidakpastian: ada *edge case* tak terduga, bug di library eksternal, atau integrasi yang dokumentasinya ngaco. Ngarepin estimasi waktu yang 100% presisi di dunia tech itu tanda lo belum paham realitas.

**Planning Poker (Pake Deret Fibonacci: 1, 2, 3, 5, 8, 13):**  
Tujuan utama sesi ini bukan maksa semua orang nyebut angka yang sama dalam tempo 5 detik. Nilai emas dari Planning Poker justru muncul pas ada **perbedaan angka yang jomplang** (misal: Engineer A ngasih poin 2, tapi Engineer B ngasih poin 13).

```
+-------------------------------------------------------------------+
|               DILEMA ESTIMASI: POIN 2 VS POIN 13                  |
+-------------------------------------------------------------------+
|  Engineer A (Poin 2):                                             |
|  "Gampang ini mah, tinggal copy logic dari modul user auth."      |
|                                                                   |
|  Engineer B (Poin 13):                                            |
|  "Bentar dulu, modul auth yang lama belum support multi-tenant,   |
|   kalo ada 3 edge case ini jalan barengan bisa kebocoran data!"   |
+-------------------------------------------------------------------+
```

Nah, perdebatan itulah yang berharga! Perbedaan poin ngebongkar asumsi *scope* yang belum seragam di antara anggota tim.

**Peran PM Pas Estimasi:**  
Kasih kejelasan konteks dan *acceptance criteria* yang detail. Kalo dokumen lo ambigu, estimasi yang keluar juga bakal sampah (*garbage in, garbage out*). Dan yang paling penting: **JANGAN PERNAH NAWAR ESTIMASI KAYAK DI PASAR KAGET!** Nyeletuk *"Bisa gak diitung poin 3 aja biar muat di sprint ini?"* itu perbuatan dosa besar. Lo gak bikin kerjaannya jadi lebih enteng; lo cuma maksain komitmen palsu yang ujung-ujungnya bikin *sprint* jebol dan hubungan jadi retak.

---

## **Perlukah PM Ikutan Sesi *Code Review*?**

- **Sisi Positif:** Bagus buat ningkatin literasi teknis lo, nunjukin rasa respek kalo lo peduli sama dapur mereka, dan kadang bisa nangkep *edge case* UX yang kelupaan di desain.
- **Sisi Negatif:** *Code review* itu ranah teknis murni. Kehadiran PM yang gak paham bisa bikin risih, memperlambat proses, dan parahnya, bisa disalahartikan sebagai aksi *micromanagement* atau mata-mata.
- **Solusi Tengah yang Asyik:** Gak usah nongkrongin setiap sesi *code review* kayak satpam. Cukup minta sesi santai sesekali pas ada modul arsitektur yang rumit: *"Eh Bro, bagian logic ini menarik banget, boleh luangin 10 menit buat ceritain garis besarnya ke gue gak? Gue pengen belajar."* Hormati batasan mereka.

---

## **Cara Ngebangun *Chemistry* Maut Sama Tim Engineering**

### **Kelakuan PM yang Bikin Anak Engineering Eneg & *Burnout*:**
- **Nganggap engineer cuma "kuli pelaksana tiket".** Lempar PRD kaku tanpa ngasih ruang diskusi solusi teknis sama aja kayak ngeremehkan kapasitas otak mereka.
- **Hobi gonta-ganti *requirements* di tengah jalan (*mid-sprint changes*).** Nyeletuk *"eh sekalian tambahin field ini dong, dikit doang kok"* tanpa rasa bersalah itu bikin geregetan. Sedikit di mata lo, bisa jadi bikin pusing migrasi datanya di mata mereka.
- **Cari muka pas sukses, lempar batu pas gagal.** Pas fitur viral bilang *"Fitur buatan gue sukses besar,"* tapi pas sistem *down* bilang *"Anak backend lambat beresin bug."* Ini *red flag* paling cepet bikin lo dimusuhi seumur hidup.
- **Ngeyel gak mau denger batasan teknis.**

### **Kelakuan PM yang Bikin Anak Engineering Respek & Loyal:**
- **Libatkan dari fase *Discovery* paling awal.** Ajak mereka ngobrolin masalah user sebelum solusinya dipatok mati. Sering kali engineer punya ide solusi teknis yang jauh lebih cerdas, simpel, dan hemat waktu dibanding rancangan awal lo.
- **Pasang badan ngebela kepentingan mereka.** Berani nolak interupsi bos demi ngelindungin jatah perbaikan sistem dan *refactoring*.
- **Jujur soal *trade-offs* bisnis.** Kalo lo terpaksa minta mereka bikin solusi kilat demi ngejar momentum pasar, akuin secara ksatria: *"Gue tau ini bikin utang teknis baru, tapi ini urgen demi kelangsungan bisnis. Gue komit kita jadwalkan pelunasannya di sprint depan."*
- **Jadi tameng pelindung (*Shield*) dari gangguan luar.** Jaga *focus time* mereka dari serbuan chat gak penting tim sales atau *stakeholder* lain yang suka nodong *request* seenak jidat.

---

## **Pas Engineering dan Product Beda Pendapat: Cara Damai Nyelesaiin *Ego Clash***

Ada kalanya sudut pandang bisnis dan teknis bener-bener tabrakan keras. Misal: Tim *engineering* ngotot harus *refactor* sistem payment selama sebulan penuh karena udah rawan error. Sementara lo sebagai PM diteken target harus rilis fitur *promo diskon* minggu depan buat ngejar event Harbolnas.

**Langkah Penyelesaian Kepala Dingin:**

1. **Bedah akar masalah, jangan adu urat.** Pastikan kedua belah pihak ngerti konsekuensi riilnya. Engineer harus bisa jelasin seberapa fatal risiko *crash*-nya pake angka. Lo juga harus bisa jelasin seberapa rugi bisnis kalo promo Harbolnas kelewat.
2. **Cari jalan tengah kreatif (*Middle Ground*).** Bisa gak kita pangkas *scope refactoring*-nya cuma di modul yang bersentuhan langsung sama promo? Atau bisa gak promonya jalan pake batasan kuota transaksi biar sistem gak jebol?
3. **Eskalasi secara ksatria dan transparan.** Kalo tetep mentok, ajak Engineering Manager (EM) lo buat bawa masalah ini bareng-bareng ke level pimpinan (Head of Product & VP of Eng). Beberin dua sudut pandang secara jujur tanpa saling jelek-jelekin. Ini bukan tanda lo kalah, tapi tanda kedewasaan profesional dalam ngambil keputusan korporat.
4. **No Dendam & No Baper (*No "I told you so!"*).** Apa pun keputusannya, jangan pernah nyimpen dendam. Kalo sistem beneran jebol atau sebaliknya fitur sukses besar, jadikan itu bahan refleksi (*post-mortem*) bersama, bukan amunisi buat saling nyindir.

---

## **Duet Maut PM dan Engineering Manager (EM): Kunci Sukses Tim Lo**

Di luar obrolan teknis harian sama *developer*, relasi lo sama Engineering Manager (EM) adalah pilar terpenting.

**Kenapa EM itu krusial banget?**  
EM megang data kesehatan tim yang sering kali gak keliatan di tiket Jira: siapa *engineer* yang lagi stres berat, siapa yang lagi *demotivated*, siapa yang ngerasa *underappreciated*, dan seberapa kapasitas tim sebenernya.

**Ritual Wajib:** Bikin sesi *1-on-1 coffee chat* santai dua mingguan sama EM lo. Jangan ngomongin status tiket sprint di sini! Pake sesi ini buat ngobrol dari hati ke hati: *"Gimana kondisi moral anak-anak sekarang? Ada yang lagi burnout gak? Menurut lo ada flow kerja kita yang perlu diperbaiki gak?"* Kemitraan yang solid sama EM bakal bikin lo berdua bisa sat-set nyelesaiin masalah sebelum apinya membesar.

---

## **Rangkuman Bab: TL;DR**

- Ungkapan *"itu gak bisa dibuat"* dari anak engineering sering kali artinya adalah ajakan buat diskusi *trade-offs* dan prioritas. Jangan langsung nyerah atau berasumsi buntu.
- Miliki literasi teknis dasar (API, technical debt, scaling, database model, performa) biar lo bisa nyambung dan berbobot pas diskusi arsitektur produk.
- Rawat utang teknis layaknya utang finansial: kunci kapasitas terproteksi (15-20%) di tiap sprint dan komunikasikan dampaknya ke bisnis secara transparan.
- Manfaatkan Planning Poker buat ngebongkar asumsi *scope* yang beda, bukan buat nawar estimasi kayak di pasar.
- Bangun loyalitas lewat tindakan nyata: libatkan engineer sejak tahap *discovery*, jadi tameng pelindung dari distraksi liar luar, dan jaga kemitraan erat sama Engineering Manager.

Di bab berikutnya, kita bakal ngebahas partner kreatif lo: **Cara Kolaborasi Super Asyik dengan Tim Desain (UI/UX)** tanpa bikin desainer lo ngerasa diperlakukan kayak tukang gambar!

---

### **Pertanyaan Refleksi Buat Lo:**

1. Inget-inget momen terakhir pas *engineer* lo bilang fitur lo "susah banget dibuat" atau "gak mungkin." Waktu itu lo langsung mundur teratur, atau lo sempet ngegali lebih dalem jenis batasan apa yang sebenernya mereka maksud?
2. Gimana tim lo sekarang ngelola alokasi utang teknis (*tech debt*)? Apakah udah punya jatah kapasitas rutin di tiap sprint, atau tiketnya selalu kalah bersaing sama fitur baru yang keliatan keren di mata bos?
3. Coba nilai hubungan lo sama tim engineering saat ini: apakah lo udah melibatkan mereka dari tahap *discovery* masalah, atau mereka baru dapet kabar pas PRD udah lo kunci mati?

### **Action Item Minggu Ini:**

Jadwalkan sesi ngopi santai (*1-on-1 informal*) sama Engineering Manager atau *Tech Lead* lo minggu ini. Jangan bahas *sprint* atau *deadline*! Buka obrolan dengan nanya: *"Bro/Sis, sejujurnya gimana kondisi tim sekarang? Ada hal-hal teknis atau masalah beban kerja yang bikin lo khawatir dan butuh bantuan gue buat di-handle?"* Pasang telinga lo baik-baik dan dengerin tanpa defensif!

---
