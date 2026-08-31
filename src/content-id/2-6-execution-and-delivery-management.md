## **Standup yang Nggak Memperjuangkan Apa-apa**

Tiap hari kerja jam 09.15 pagi, tim kita kumpul di Google Meet (sebagian besar kamera mati) buat ritual wajib "daily standup". Rencana awal 15 menit sering banget melorot jadi 30 sampai 45 menit. Isinya cuma orang-orang yang gantian ngebaca hafalan mekanis: kemarin ngerjain apa, hari ini mau ngerjain apa, dan ada *blocker* apa nggak (yang biasanya jawabannya normatif banget: *"Aman kok, paling masih nunggu kabar dari tim desain"*).

Jujur aja, nggak ada yang bener-bener nyimak *update* temennya. Semua orang sibuk ngetik draf pesan balasan di Slack di kepala masing-masing sambil nunggu gilirannya ngomong. Si *Scrum Master* (yang khusus direkrut kantor karena ada mandat *"kita butuh orang buat ngejalanin Agile yang bener"*) dengan tekun ngegeser-geser kartu di papan Jira yang gak bakal dilirik lagi sama siapa pun sampe besok pagi.

Sampai suatu hari, salah satu *senior engineer* paling kritis di tim kita nyeletuk santai tapi nusuk banget ke ulu hati:
> *"Kita ngejalanin semua upacara seremoni Scrum ini dengan sempurna banget ya. Tapi anehnya, gue sama sekali gak tau apakah kita sebenernya lagi ngebangun produk yang bener buat user."*

Kalimat itu ngerangkum dengan tepat tragedi "penerapan Agile" di ribuan kantor tech zaman now: **mereka udah jago banget meragain panggung sandiwaranya—*standup*, *sprint planning*, *retrospective*, grafik *burndown*—tapi kehilangan esensi intinya sama sekali.**

Agile dari awal nggak pernah lahir buat nyembah seremoni kaku. Agile adalah soal seperangkat **nilai fundamental**:
- Lebih ngehargai **kemampuan merespons perubahan** dibanding kaku ngikutin rencana.
- Lebih ngehargai **software yang beneran berfungsi** dibanding bikin dokumen tebal bertele-tele.
- Lebih ngehargai **kolaborasi bareng pelanggan** dibanding tawar-menawar kontrak.
- Lebih ngehargai **individu dan interaksi manusia** dibanding proses dan alat kerja.

Ironisnya, industri kita berhasil ngubah sebuah manifesto tentang *fleksibilitas dan adaptasi* menjadi dogma birokrasi baru yang kaku dan penuh kepura-puraan.

Yuk, kita beresin cara tim lo mengeksekusi produk biar sat-set dan beneran ngasilin dampak!

---

## **Agile, Scrum, Kanban: Makna Hakiki (Bukan Teori LinkedIn)**

```
┌─────────────────────────────────────────────────────────────┐
│ AGILE (Filosofi & Mindset)                                  │
│ Nilai inti: Adaptasi cepat, iterasi kecil, kolaborasi erat  │
├──────────────────────────────┬──────────────────────────────┤
│ SCRUM (Framework Ritme)      │ KANBAN (Framework Aliran)    │
│ • Siklus sprint (1-4 minggu) │ • Aliran kerja berkelanjutan │
│ • Peran: PO, SM, Dev Team    │ • WIP Limits ketat           │
│ • Cocok: Rilis fitur teratur │ • Cocok: Bugfix, Ops, Support│
└──────────────────────────────┴──────────────────────────────┘
```

### **1. Agile (Filosofi, Bukan Metodologi Kaku)**
Agile itu cara pandang: **bangun sesuatu dalam ukuran kecil, lempar ke pasar secepatnya buat dapet feedback riil, pelajari hasilnya, lakukan penyesuaian, lalu ulangi.** 

Pendekatan ini 1000x lebih waras dibanding menghabiskan waktu 6 bulan di ruang rapat buat nyusun rencana maha-lengkap, yang asumsi dasarnya kemungkinan besar udah basi pas produknya baru mulai dikoding.

### **2. Scrum (Framework Ritme Berjangka Waktu)**
Membagi pekerjaan ke dalam siklus *sprint* (biasanya 2 minggu), dengan peran terdefinisi (*Product Owner*, *Scrum Master*, *Developers*), serta 4 seremoni utama (*Sprint Planning*, *Daily Standup*, *Sprint Review*, *Retrospective*).
- **Kapan paling cocok:** Buat squad yang ngerjain fitur-fitur baru yang relatif bisa dipetakan dan diestimasi tingkat kerumitannya.
- **Di mana sering ngaconya:** Komitmen sprint bergeser jadi janji mati yang otoriter. Kalau ada kendala teknis tak terduga, tim malah disalahin dan dihukum, padahal ketidakpastian itu adalah sifat alami dari rekayasa software.

### **3. Kanban (Framework Aliran Berkelanjutan / Continuous Flow)**
Memvisualisasikan alur kerja di papan (*To Do* → *In Progress* → *Review* → *Done*), dengan aturan saklek: **membatasi jumlah pekerjaan yang boleh jalan berbarengan (WIP Limits / Work-In-Progress Limits)**. Tim cuma boleh ngambil kerjaan baru kalau kapasitas di kolom sebelumnya udah kosong.
- **Kapan paling cocok:** Buat squad infrastruktur, tim *maintenance*, atau tim operasional yang kerjaannya berupa rentetan tiket masuk tak terduga yang ukurannya beda-beda.
- **Di mana sering ngaconya:** Kalau tim gak disiplin pasang *WIP limit*, papan Kanban bakal berubah jadi kuburan tugas setengah matang di mana tiap *engineer* megang 5 tiket sekaligus tapi gak ada satu pun yang kelar.

**Realitas Terbaik di Lapangan:** Tim produk terbaik biasanya pake **pendekatan hibrida (Scrumban)**: pake ritme perencanaan Scrum buat nentuin gol inisiatif strategis besar, tapi pake fleksibilitas aliran Kanban buat nanganin tugas harian, investigasi teknis, dan perbaikan *bug*.

---

## **Menulis PRD dan User Story yang Bener-Bener Dibaca Tim**

### **Tragedi Dokumen PRD 15 Halaman**
Gue sering ngeliat PM bikin PRD (*Product Requirement Document*) setebal 15 halaman di Google Docs. Isinya paragraf panjang rapat-rapat yang ngebahas semua skenario fantasi. Pas dibuka sama *engineer*, mereka cuma nge-*scroll* kilat 5 detik, pusing, terus gak pernah buka dokumen itu lagi selamanya.

Inget: **ketebalan halaman dokumen itu gak sama dengan kejelasan arahan!** Dokumen yang gak dibaca itu nilai gunanya nol besar.

### **Struktur PRD Ramping yang Beneran Dipake Tim (Maks 2-3 Halaman):**

1. **Problem Statement (2–3 Kalimat):** Masalah spesifik apa yang lagi mau diselesaikan, buat siapa, dan kenapa itu penting? (Bukan nyebut fitur, tapi nyebut rasa sakit user).
2. **Success Metrics (Metrik Keberhasilan):** Angka konkret penentu sukses. *(Bukan "bikin user hepi", tapi "meningkatkan checkout completion rate dari 50% ke 65%").*
3. **User Stories & Skenario:** *"Sebagai [tipe user], gue pengen [lakuin sesuatu], biar [dapet manfaat konkret]."*
4. **Requirements (Must-Have vs Nice-to-Have):** Pisahkan secara tegas mana hal yang wajib fungsional vs mana yang boleh dipangkas kalau waktu mepet.
5. **Explicitly OUT OF SCOPE (Paling Krusial!):** Tulis secara gamblang apa hal-hal yang **TIDAK AKAN** kita bangun pada fase rilis ini. Ini senjata terkuat lo buat nolak *scope creep* di tengah jalan!
6. **Open Questions (Pertanyaan Terbuka):** Cantumkan hal-hal teknis atau regulasi yang masih belum dapet jawaban pasti. Jangan pura-pura tau semuanya.
7. **Tautan Desain & Teknis:** Kasih link langsung ke Figma dan dokumentasi arsitektur API—jangan capek-capek nyalin ulang penjelasan visual ke dalem teks dokumen.

### **Menulis Acceptance Criteria (AC) yang Antiribet: Format Given / When / Then**

Jangan bikin AC yang abstrak kayak *"Sistem harus bisa menangani checkout dengan baik."* Itu bikin debat kusir pas demo produk.

Pake format terstruktur ini:
> **Given** (Kondisi Awal): User punya keranjang belanja yang kosong.  
> **When** (Aksi User): User ngeklik tombol "Lanjut ke Pembayaran".  
> **Then** (Hasil yang Diharapkan): Sistem nampilin pesan eror *"Keranjang belanja lo masih kosong"* dan nge-disable tombol checkout sambil nampilin tombol *"Cari Produk Sekarang"*.

Format ini bikin batasan kerjaan jadi super presisi dan gak ninggalin ruang buat asumsi liar.

---

## **Sprint Planning yang Nggak Bikin Otak Meledak**

**Disfungsi Klasik:** Sesi planning berubah jadi PM monolog satu arah ngebacain tiket, sementara para *engineer* diem nahan kantuk dan cuma ngangguk-ngangguk pasrah.

**Cara Bikin Planning Berbobot dan Hidup:**

1. **Datang Bawa Bahan Matang:** Tiket backlog udah terprioritisasi rapi, PRD udah ada link-nya, dan desain Figma udah siap direview. Jangan baru mikir pas rapat dimulai!
2. **Pancing Sanggahan Teknis:** Kalau ada *engineer* bilang: *"Kayaknya bagian ini bakal rumit banget karena struktur database lama kita rapuh,"* itu masukan emas! Langsung diskusikan opsi penyederhanaan cakupan saat itu juga.
3. **Estimasi Bareng pake Planning Poker:** Minta semua anggota tim ngeluarin estimasi angka (*story points*) secara barengan. Kalau ada yang ngasih poin 2 sementara yang lain ngasih poin 8, bedah perbedaannya! Di situlah letak asumsi tersembunyi yang belum selaras.
4. **Bikin Tiket Eksplorasi Teknis (*Spike Tasks*):** Kalau ada bagian yang tingkat ketidakpastiannya tinggi, jangan dipaksa langsung diestimasi. Bikin tiket *Spike* berdurasi 1–2 hari khusus buat *engineer* ngulik kelayakannya dulu.

---

## **Retrospektif yang Beneran Ngasilin Perubahan Nyata**

**Disfungsi Klasik:** Tiap 2 minggu isinya ngulang 3 keluhan yang sama (*"Komunikasi antar-divisi kurang lancar,"* *"Waktu testing mepet"*), ditulis di Confluence, terus dilupain gitu aja sampe retro berikutnya. Akhirnya tim jadi apatis: *"Ngapain ikut retro, toh gak ada yang berubah."*

**Cara Bikin Retro Beneran Ngefek:**

1. **Batasi Cuma 1–3 Action Items Spesifik:** Jangan maruk bikin 10 resolusi tapi gak ada yang jalan. Mending 2 tindakan tapi konkret, ada PIC (*single owner*)-nya, dan ada batas evaluasinya.
2. **Audit Action Item Sebelumnya di Awal Sesi:** Buka sesi retro dengan ngecek: *"Retro kemarin kita sepakat mau nerapin X—apakah beneran dilakuin? Ada efeknya gak?"* Akuntabilitas ini yang bikin tim ngerasa sesi retro itu dihargai.
3. **Variasikan Format:** Jangan pake format yang sama terus biar gak bosen. Coba gonta-ganti antara *Start-Stop-Continue*, *Mad-Sad-Glad*, atau *4Ls (Liked, Learned, Lacked, Longed for)*.
4. **Ciptakan Keamanan Psikologis (*Psychological Safety*):** Bikin suasana di mana tim gak takut ngomongin masalah sensitif, termasuk kalau masalahnya bersumber dari kecerobohan lo sendiri sebagai PM.

---

## **Spektrum PM: Si Diktator (*Micromanager*) vs PM Gaib (*Absentee*)**

```
  ┌─────────────────────────┬─────────────────────────┬─────────────────────────┐
  │      MICROMANAGER       │       SWEET SPOT        │      ABSENTEE PM        │
  │     (Terlalu Ikut)      │   (Pemimpin Kontekstual)│     (Menghilang)        │
  ├─────────────────────────┼─────────────────────────┼─────────────────────────┤
  │ Ngatur pixel desainer,  │ Kuasai What & Why,      │ Nulis PRD terus kabur,  │
  │ dikte arsitektur kode,  │ percayakan How ke tim,  │ baru nongol pas demo,   │
  │ bikin tim demotivasi.   │ selalu standby bantuin. │ tim tersesat di jalan.  │
  └─────────────────────────┴─────────────────────────┴─────────────────────────┘
```

### **1. Tipe PM Micromanaging**
Karakter yang hobi ngatur tiap detail kecil tombol Figma, ngedikte pendekatan arsitektur backend, dan wajib nimbrung di semua rapat teknis murni biar ngerasa punya kendali.
- **Efeknya:** Desainer dan *engineer* ngerasa gak dipercaya, males ngeluarin ide kreatif, dan lama-lama berubah jadi robot pasif yang cuma nunggu perintah.

### **2. Tipe PM yang Menghilang (*Absentee PM*)**
Nulis draf PRD sekilas di hari pertama sprint, terus ngilang tanpa jejak dan gak pernah bisa dihubungi di Slack. Baru nongol pas hari demo *sprint review*, terus kaget dan ngomel-ngomel pas liat hasilnya gak sesuai ekspektasi.
- **Efeknya:** Tim ngebangun solusi yang salah arah gara-gara gak ada tempat bertanya pas nemu kasus ambigu di tengah koding.

### **3. Titik Keseimbangan Ideal (*The Sweet Spot*)**
Pegang kendali penuh pada aspek **APA (*What*) dan KENAPA (*Why*)** di awal proyek. Terus percayakan ke tim lo soal **BAGAIMANA (*How*)** cara teknis mengeksekusinya. Selalu *standby* di Slack buat ngasih klarifikasi cepat pas tim butuh jawaban, tanpa lo harus bertindak kayak mandor proyek yang ngawasin tiap detik.

---

## **Menghadapi Pembengkakan Cakupan (*Scope Creep*) di Tengah Sprint**

Pasti sering kejadian: di tengah-tengah sprint, tiba-tiba ada *stakeholder* (atau jujur aja, lo sendiri) yang nyeletuk: *"Eh kepikiran deh, kayaknya bakal keren banget kalau kita sekalian tambahin fitur kecil ini."*

**Kenapa Ini Bahaya Banget:** Gak ada yang namanya "fitur kecil". Tiap penambahan fitur pasti ngebawa rentetan kasus ekstrem baru, potensi *bug* baru, dan ngerusak fokus tim.

**3 Cara Menjinakkannya:**

1. **Tampung ke Backlog Berikutnya:** *"Ide lo brilian banget! Tapi biar sprint sekarang kelar tepat waktu, ide ini langsung gue catet di backlog prioritas buat sprint depan ya."*
2. **Buka Trade-off Transparan Kalau Beneran Urgent:** *"Kalau fitur tambahan ini emang harus masuk sekarang, konsekuensinya rilis kita bakal mundur 4 hari kerja atau modul X harus kita drop. Mau pilih yang mana?"*
3. **Disiplinkan Diri Sendiri:** Sering kali biang kerok *scope creep* terbesar itu adalah PM-nya sendiri yang gatel pengen nambahin ide dadakan tanpa ngelewatin filter prioritas yang ketat.

---

## **Definition of Done (DoD): Definisi "Kelar" yang Sering Bikin Miskom**

Kata "kelar" atau *done* itu sering punya arti beda di kepala masing-masing orang:
- Kata *engineer*: "Kodingan udah gue push ke branch staging."
- Kata *QA*: "Udah dites tapi baru skenario alur mulus (*happy path*) doang."
- Kata *PM*: "Udah ada di production, ada dokumentasinya, dan metrik tracking-nya udah aktif."

Biar gak ribut pas rilis, sepakati **Daftar Periksa Definition of Done** tim lo secara tertulis:
- [ ] Kode lolos *peer code-review* minimal oleh 2 engineer.
- [ ] Lolos uji skenario *happy path* dan penanganan eror (*error handling*) oleh tim QA.
- [ ] *Event tracking* analitik (Mixpanel/Amplitude) udah terpasang dan tervalidasi.
- [ ] Dokumentasi rilis dan panduan tim CS/Ops udah diperbarui.
- [ ] Lolos uji performa dan beban server (*load testing* kalau relevan).
- [ ] Berhasil di-*deploy* ke *production* di balik *feature flag*.

---

## **Rangkuman Bab: TL;DR**

- Agile adalah filosofi kelincahan dan iterasi nyata, bukan sekadar kepatuhan mekanis pada seremoni hampa (*Scrum theater*).
- Tulis PRD ramping (maks 2–3 halaman) dengan batasan *Out of Scope* yang tegas dan kriteria penerimaan berbasis *Given/When/Then*.
- Jadilah PM yang seimbang: kuasai *What & Why*, percayakan *How* ke tim *engineering*, dan selalu siap sedia ngasih klarifikasi tanpa jadi *micromanager*.
- Jinakkan *scope creep* pake manajemen *trade-off* yang transparan, dan kunci *Definition of Done (DoD)* tertulis biar gak ada miskomunikasi pas rilis.

---

**Pertanyaan Refleksi:**

1. Sejujurnya, apakah seremoni rutin tim lo (*standup, retro, planning*) beneran ngasih nilai tambah, atau udah berubah jadi formalitas yang ngebosenin? Apa seremoni yang bisa lo pangkas atau persingkat mulai minggu depan?
2. Di mana posisi lo sekarang dalam spektrum antara *Micromanager* vs *Absentee PM*? Di area mana tim lo butuh kebebasan lebih, dan di area mana mereka butuh kehadiran lo?
3. Apakah tim lo udah punya dokumen *Definition of Done (DoD)* yang beneran disepakati bareng, atau tiap orang masih pake definisi "kelar" versi kepalanya masing-masing?

**Langkah Tindakan (Action Item):**

Di sesi retrospektif berikutnya, luangin 10 menit pertama khusus buat ngecek progres *action items* dari retro sebelumnya. Kalau ternyata poin-poin itu belum dikerjain, diskusikan kenapa bisa mandek sebelum lo mulai ngebahas topik baru. Bikin akuntabilitas jadi budaya nyata di tim lo!

---
