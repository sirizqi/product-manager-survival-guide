## **Kenapa Bab Ini Wajib Ada dan Jangan Cuma Dibaca Sekali**

Di berbagai bab sebelumnya, kita udah sering ngebahas berbagai jebakan PM secara parsial—mulai dari *discovery theater* (riset pura-pura) di Bab 4, jebakan janji muluk (*overcommitment*) di Bab 7, sampai sindrom niru-niru tanpa mikir (*cargo cult management*) di Bab 19.

Bab ini hadir buat tujuan yang lebih tajam dan praktis: **merangkum 10 dosa besar dan kesalahan paling fatal yang sering diulang-ulang PM ke dalam satu daftar periksa diagnostik (*diagnostic checklist*) yang ringkas dan padat.** Karena kadang, ngeliat borok dan pola *blunder* dinamai secara gamblang, blak-blakan, dan tanpa basa-basi bakal ngasih tamparan kesadaran yang jauh lebih nampol daripada penjelasan teori yang muter-muter.

Jadikan bab ini bukan sebagai bacaan sekali lewat, tapi sebagai contekan wajib yang lo buka dan cek ulang secara berkala tiap kuartal buat *sanity check* karier lo.

---

## **1. Ngebangun Fitur Buat Ego Sendiri, Bukan Buat Kebutuhan User**

**Kelakuan di lapangan:** Lo getol banget memprioritaskan fitur tertentu cuma gara-gara lo ngerasa fitur itu "keren", sesuai sama selera estetika pribadi lo, atau berdasarkan asumsi sok tahu lo soal apa yang harusnya disukai pengguna—tanpa pernah memvalidasi apakah *user* di dunia nyata beneran butuh solusi itu.

**Akar masalahnya:** Lo juga manusia biasa yang punya bias dan preferensi pribadi. Secara psikologis, jauh lebih gampang dan memuaskan ego buat percaya sama "intuisi ajaib" diri sendiri daripada harus capek-capek turun ke lapangan ngelakuin riset *user discovery* yang beneran mendalam.

**Jurus menghindarinya:** Biasakan nanya ke diri sendiri tanpa filter: *"Gue nge-push fitur ini karena data dan riset validasinya emang kuat, atau murni karena gue pengen pamer dan muasin ego pribadi gue doang?"* Selalu bedain mana intuisi produk (*product sense*) sejati yang terasah dari data, dan mana yang cuma selera subjektif lo semata.

---

## **2. Terjebak Jadi Pabrik Fitur (*Feature Factory Syndrome*)**

**Kelakuan di lapangan:** Lo ngukur produktivitas dan kesuksesan tim lo cuma dari seberapa banyak jumlah fitur yang berhasil dirilis ke *production* per kuartal (*output*), bukan dari seberapa besar dampak positif dan perbaikan metrik bisnis yang beneran dihasilkan (*outcome*).

**Akar masalahnya:** Rilis fitur baru itu gampang banget dihitung dan kelihatan mentereng buat dipamerin pas presentasi ke manajemen. Sebaliknya, ngukur dampak nyata ke bisnis butuh kesabaran, metrik analitik yang matang, dan keberanian buat mengakui kalau nggak semua fitur yang kita rilis itu ada gunanya buat *user*.

**Jurus menghindarinya:** Lacak dan laporkan metrik *outcome* (misal: *conversion rate*, *retention*, waktu penyelesaian tugas *user*), bukan sekadar kecepatan ngoding (*shipping velocity*). Tolak tekanan organisasi yang nuntut tim produk kerja kayak buruh pabrik yang diukur dari kuantitas barang rilis semata.

---

## **3. Menyepelekan dan Menimbun Utang Teknis (*Technical Debt*)**

**Kelakuan di lapangan:** Lo secara konsisten nurunin prioritas perbaikan arsitektur kode dan *refactoring* demi ngejar fitur-fitur baru yang kelihatan berkilau di mata *business team*, sampai akhirnya tumpukan *tech debt* itu meledak jadi krisis: aplikasi lemot parah, server sering tumbang (*downtime*), dan tim *engineering* butuh waktu berminggu-minggu cuma buat ngerjain perubahan kecil.

**Akar masalahnya:** Utang teknis itu nggak kelihatan (*invisible*) di mata bos dan *stakeholder* non-teknis. Ngebenerin database nggak bikin orang tepuk tangan seheboh pas lo ngerilis tombol fitur baru yang punya animasi keren.

**Jurus menghindarinya:** Perjuangkan alokasi kapasitas rutin (misal 15–20% dari kapasitas *sprint*) khusus buat tim *engineering* beresin *tech debt* dan ningkatin keandalan sistem (*reliability*). Jangan biarin isu fondasi teknis diadu langsung dalam kontes popularitas melawan permintaan fitur dari tim *sales*—pasti bakal kalah telak.

---

## **4. Hobi Obral Janji Deadline (*Over-Promising Timelines*)**

**Kelakuan di lapangan:** Lo gampang banget mengiyakan tenggat waktu yang nggak masuk akal pas ditekan sama *stakeholder* atau pimpinan. Ujung-ujungnya? Rilis molor berkali-kali, atau tim *engineering* lo dipaksa lembur gila-gilaan (*crunch time*) sampai tipes demi ngejar tanggal yang dari awal emang halu.

**Akar masalahnya:** Lo kena jebakan bias optimisme (*optimism bias*), takut nolak permintaan atasan, atau memperlakukan estimasi awal *engineer* sebagai tanggal mati yang udah pasti akurat, padahal estimasi di dunia software itu dinamis banget.

**Jurus menghindarinya:** Selalu pasang *buffer* waktu yang realistis. Komunikasikan estimasi dalam bentuk rentang waktu (misal: *"antara akhir Oktober atau minggu kedua November"*), bukan tanggal tunggal yang kaku. Bangun keberanian buat bilang *"Linimasa itu nggak realistis"* dari awal perencanaan, daripada lo pura-pura sanggup tapi akhirnya gagal pas hari H.

---

## **5. Nyontek Kompetitor Secara Buta (*Copycat PM*)**

**Kelakuan di lapangan:** Lo panik dan buru-buru minta tim ngebangun fitur X cuma karena kompetitor baru aja ngerilis fitur itu, tanpa pernah ngecek apakah *target user* lo beneran butuh dan tanpa paham kenapa kompetitor bikin fitur tersebut di ekosistem mereka.

**Akar masalahnya:** Menyamai fitur kompetitor (*feature parity*) terasa paling aman secara politis di kantor. Jauh lebih gampang ngejawab pertanyaan bos pake alibi *"Kompetitor aja bikin kok!"* daripada mikir keras nentuin keunggulan diferensiasi produk sendiri.

**Jurus menghindarinya:** Gali dulu *underlying job-to-be-done* (kebutuhan dasar) yang mau diselesaiin oleh fitur kompetitor itu. Validasi apakah masalah yang sama emang beneran dialami oleh *user* lo. Inget: kompetitor lo juga bisa aja lagi bikin eksperimen bodoh yang bentar lagi bakal mereka *sunset*.

---

## **6. Bebal dan Buta Terhadap Data (*Ignoring Data Signals*)**

**Kelakuan di lapangan:** Lo terus-menerus memaksakan sumber daya buat ngembangin suatu inisiatif atau fitur, padahal data analitik dan *feedback user* udah jelas-jelas nunjukin kalau fitur itu nggak laku, nggak ngefek, atau bahkan ngerusak metrik lainnya.

**Akar masalahnya:** Lo kejebak sindrom *sunk cost fallacy*—ngerasa sayang karena udah terlanjur buang banyak waktu, tenaga, dan duit di proyek tersebut. Plus, ego lo nolak buat ngaku salah di depan publik dan manajemen.

**Jurus menghindarinya:** Tentukan kriteria sukses dan batas toleransi kegagalan (*kill criteria*) di dokumen PRD sebelum fitur mulai dikoding. Sepakati titik evaluasi (*checkpoint*): kalau dalam kurun waktu 60 hari metrik adopsi nggak nyentuh angka X, tim sepakat buat nge-pivot atau nge-kill fitur itu tanpa drama baper.

---

## **7. Prioritisasi Berdasarkan Suara Paling Berisik (*HiPPO & Political Prioritization*)**

**Kelakuan di lapangan:** Daftar prioritas *backlog* lo berubah-ubah bukan karena data atau strategi produk, tapi didikte oleh siapa yang bicaranya paling kenceng, siapa yang jabatannya paling tinggi (*Highest Paid Person's Opinion* / HiPPO), atau siapa *stakeholder* yang paling getol neror chat lo.

**Akar masalahnya:** Nyerah dan ngikutin kemauan bos atau pihak yang galak itu jauh lebih gampang dan nggak bikin ribut dalam jangka pendek, daripada lo harus berdebat mempertahankan argumen strategis berbasis data.

**Jurus menghindarinya:** Buat matriks prioritisasi yang transparan dan bisa diakses semua orang (misal pake RICE atau Value vs Effort yang disepakati bersama). Pas ada pimpinan yang mau nyelipin ide titipan mendadak, tunjukin secara logis: *"Kalau kita ngerjain inisiatif Bapak sekarang, berarti inisiatif A dan B yang diproyeksikan naikin revenue Rp1 miliar bakal kita tunda ke Q4. Apakah Bapak setuju dengan konsekuensi trade-off ini?"*

---

## **8. Komunikasi Berantakan dan Hobi Main Rahasia (*Communication Breakdown*)**

**Kelakuan di lapangan:** Lo nenggelamin pesan-pesan penting di balik istilah teknis yang bikin pusing tim bisnis, jarang ngasih *update* status proyek, atau yang paling parah: sengaja nutup-nutupi kabar buruk (*bad news*) pas proyek lagi krisis dan baru ngomong pas masalahnya udah meledak jadi bencana.

**Akar masalahnya:** Asumsi sok tahu bahwa orang lain pasti punya konteks yang sama kayak lo, ditambah rasa takut dicap nggak becus kalau ngaku ada kendala di lapangan.

**Jurus menghindarinya:** Biasakan pola komunikasi *Bottom-Line Up Front* (BLUF)—taruh kesimpulan dan inti pesan di kalimat pertama. Sesuaikan bahasa lo sama siapa yang lo ajak ngomong (ke eksekutif pake bahasa *impact* bisnis, ke engineer pake bahasa arsitektur logis). Dan yang terpenting: sampaikan kabar buruk secepat mungkin (*bad news should travel fast*), biar tim bisa sat-set nyiapin mitigasi bareng-bareng.

---

## **9. Membakar Jembatan Hubungan Antar Divisi (*Burning Bridges*)**

**Kelakuan di lapangan:** Lo memperlakukan tim lintas fungsi (*design*, *engineering*, *marketing*, *ops*, *sales*) cuma sebagai alat pesuruh (*ticket takers*), suka ngambil panggung sendiri pas proyek sukses, tapi langsung nyalahin mereka pas ada rilis yang gagal.

**Akar masalahnya:** Mentalitas sempit yang ngeliat interaksi kerja sebagai kompetisi menang-kalah (*zero-sum game*) demi kenaikan karier pribadi, tanpa mikir panjang soal kerja sama jangka panjang.

**Jurus menghindarinya:** Bangun "tabungan relasi" yang tulus dari jauh-jauh hari. Libatkan tim *tech* dan *design* dari tahap awal perumusan masalah, kasih apresiasi terbuka ke rekan kerja di setiap panggung presentasi, dan pasang badan pas tim lo lagi diserang kritik dari luar. Rasa saling percaya (*trust*) adalah mata uang paling berharga buat seorang PM.

---

## **10. Nggak Punya Nyali Buat Bilang "TIDAK" (*The Yes-Man PM*)**

**Kelakuan di lapangan:** Lo mengiyakan semua permintaan fitur dari semua orang: tim *sales*, tim *marketing*, bos, sampai *request* acak dari temen kantor. Akibatnya, *roadmap* lo jadi kayak tempat sampah yang isinya ratusan inisiatif gado-gado tanpa fokus yang jelas, bikin tim kelelahan dan produknya kehilangan arah.

**Akar masalahnya:** *People-pleasing*—lo punya rasa takut buat ngecewain orang lain atau pengen disukai oleh semua orang di kantor.

**Jurus menghindarinya:** Sadarilah bahwa peran utama PM bukanlah membahagiakan semua orang, tapi memaksimalkan dampak produk dengan sumber daya yang terbatas. Belajarlah buat menolak permintaan secara elegan (*saying NO with empathy and clarity*): jelaskan alasan strategis di balik penolakan tersebut, tunjukkan batasan kapasitas tim, dan bantu mereka nyari alternatif solusi lain jika memungkinkan. Menolak demi menjaga fokus tim adalah bentuk tanggung jawab profesional tertinggi.

---

## **Rangkuman Bab: TL;DR**

| No | Dosa Fatal PM | Bentuk Blunder | Solusi Sat-Set |
|---|---|---|---|
| 1 | **Building for Self** | Ngebangun fitur buat muasin selera pribadi | Validasi riset ke user asli & bedain selera vs data |
| 2 | **Feature Factory** | Ngukur sukses dari kuantitas fitur rilis | Fokus ke metrik *outcome* bisnis, bukan sekadar *output* |
| 3 | **Tech Debt Ignorance** | Nimbun utang teknis demi fitur baru | Alokasikan 15-20% kapasitas sprint rutin buat refactoring |
| 4 | **Over-Promising** | Obral deadline halu di bawah tekanan | Gunakan rentang waktu (*buffer*) & berani nolak sejak awal |
| 5 | **Blind Copycat** | Nyontek fitur kompetitor tanpa mikir | Gali *job-to-be-done* mendasar & validasi kebutuhan user lokal |
| 6 | **Ignoring Data** | Bebal maksain inisiatif yang gagal | Pasang *kill criteria* dan evaluasi *checkpoint* sejak awal PRD |
| 7 | **HiPPO Prioritization** | Prioritas diatur suara bos paling berisik | Gunakan matriks prioritisasi transparan & framing *trade-off* |
| 8 | **Bad Communication** | Menutup-nutupi masalah & bahasa ribet | Gunakan metode BLUF & sampaikan kabar buruk secepat kilat |
| 9 | **Burning Bridges** | Memperlakukan tim kayak pesuruh & curi kredit | Kolaborasi dari awal, share panggung, & bangun *trust* harian |
| 10 | **Can't Say NO** | Mengiyakan semua request sampai roadmap hancur | Tolak secara elegan berbasis strategi demi menjaga fokus |

Kesepuluh kesalahan ini bukan hal yang langka—semuanya lahir dari tekanan psikologis dan politis yang pasti bakal lo hadapi berulang kali di sepanjang karier lo. Mengetahui dan mengenali pola-pola ini adalah tameng terbaik biar lo nggak tergelincir ke lubang yang sama.

---

**Pertanyaan Refleksi:**

1. Dari 10 dosa besar di atas, mana yang paling sering lo lakuin secara nggak sadar dalam sebulan terakhir? Apa pemicu utamanya?
2. Blunder mana yang paling sering lo liat kejadian di lingkungan kantor lo saat ini, dan gimana dampaknya ke tim produk secara keseluruhan?
3. Kalau lo harus milih satu kesalahan yang mau lo basmi total dari kebiasaan kerja lo di kuartal berikutnya, mana yang bakal ngasih dampak paling positif buat kewarasan dan performa lo?

**Action Item:**

Pasang pengingat di kalender lo setiap akhir bulan buat ngecek kembali tabel 10 Dosa Fatal PM di atas. Lakuin *self-audit* kilat selama 10 menit: beri nilai diri lo sendiri di masing-masing poin. Ini bukan soal ngejar kesempurnaan tanpa cela, tapi cara paling ampuh buat ngejaga *self-awareness* lo biar selalu berada di jalur yang benar sebagai Product Manager yang berbobot, berintegritas, dan dihormati tim.

---
