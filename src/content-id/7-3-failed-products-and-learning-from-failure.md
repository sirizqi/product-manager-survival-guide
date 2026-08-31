## **Sesi Post-Mortem yang Ujung-Ujungnya Nggak Ngaruh Apa-Apa**

Gue pernah ikut sesi *post-mortem* super niat buat ngebahas peluncuran produk yang gagal total alias *rungkad*. Di atas kertas, meeting itu kelihatan kayak sesi refleksi paling ideal sedunia. Dua jam penuh kita duduk bareng, ngebongkar semua borok dan *blunder* proyek: *requirements* PRD yang nggak jelas, *user testing* yang minim banget, *deadline* ngawur dari manajemen, sampai koordinasi lintas tim yang ancur-ancuran. Dokumen *recap* yang dibikin super komprehensif, rapi, dan jujur. Semua orang di ruangan manggut-manggut bijak, ngerasa udah dapet *insight* berharga buat masa depan.

Fast forward enam bulan kemudian... tim sebelah ngerilis fitur baru dan gagal lagi dengan alasan yang plek-ketiplek sama: *requirements* nggak jelas, *user testing* diskip, *deadline* dipaksain, dan komunikasi antar divisi berantakan. Pas gue nyeletuk santai, *"Lho, ini kan persis kayak masalah yang kita bahas di post-mortem proyek kemarin ya?"*, salah satu PM-nya cuma noleh bengong sambil bilang, *"Hah? Emang ada dokumen post-mortem-nya? Kok gue nggak pernah tahu ya?"*

Dokumennya beneran ada, tersimpan rapi di Google Drive atau Notion. Isinya dalem dan jujur banget. Tapi dokumen itu sama sekali nggak ngubah perilaku siapapun di kantor, karena cuma berakhir jadi fosil di folder arsip yang nggak pernah dibuka lagi. Nggak ada yang ditunjuk sebagai PIC buat eksekusi *action items*, dan sesinya cuma dijadiin ajang "curhat bersama" biar lega sesaat alih-alih dibangun jadi sistem pembelajaran organisasi yang beneran jalan.

Bab ini bakal ngebahas dua sisi penting: **gimana caranya ngebangun mekanisme analisis kegagalan yang beneran ngasih dampak nyata ke sistem kerja tim, dan gimana sisi psikologis lo sebagai PM buat bangkit pas proyek yang lo pegang gagal total tanpa harus hancur kena mental.**

---

## **Studi Kasus: Blunder Produk Raksasa dan Pelajaran Berharganya**

Sebelum kita masuk ke ranah teknis, mari kita bedah beberapa contoh kegagalan produk legendaris di panggung dunia yang sering banget ngulangin pola kesalahan yang sama:

**1. Google Glass: Teknologi Dewa yang Lupa Norma Sosial**
Secara rekayasa *tech*, Google Glass itu luar biasa visioner. Tapi produk ini anjlok parah karena *use case* hariannya nggak jelas dan dilempar ke pasar terlalu buru-buru sebelum masyarakat siap. Orang-orang ngerasa terancam privasinya pas diajak ngobrol sama orang yang pake kacamata berkamera, sampai muncul istilah ejekan *"Glasshole"*. 
*Pelajaran mahalnya:* Secanggih apapun teknologi lo, kalau lo nggak memvalidasi penerimaan norma sosial dan perilaku *mainstream user*, produk lo bakal mentok cuma jadi mainan mahal buat *early adopters*.

**2. Quibi: Bakar Duit Miliaran Dolar tapi Gagal Paham Kelakuan User**
*Startup streaming* video pendek ini punya modal raksasa ($1,75 miliar!), dipimpin eksekutif veteran Hollywood dan Silicon Valley, plus ngegandeng artis papan atas. Hasilnya? Gulung tikar cuma dalam waktu 6 bulan! 
Kenapa bisa se-boncos itu? Pertama, rilis pas pandemi COVID-19—padahal *value proposition* utamanya adalah tontonan pas lagi *commuting* di kereta/bus. Kedua, blunder fatal dalam baca perilaku pengguna: Quibi ngelarang *screenshot*, nggak bisa di-share ke medsos, dan cuma bisa ditonton di layar HP (nggak bisa di-cast ke TV atau laptop). Padahal kekuatan konten zaman now ada di *virality* dan fleksibilitas. 
*Pelajaran mahalnya:* Ngebakar duit buat produksi mewah nggak ada gunanya kalau lo bebal dan ngehalang-halangi cara natural pengguna dalam menikmati produk.

**3. Juicero: Mesin Peras Jus Rp6 Juta yang Bisa Dikalahin Tangan Kosong**
Mesin pembuat jus mewah dengan teknologi Wi-Fi dan rekayasa presisi tinggi yang sempet dapet pendanaan ratusan juta dolar. Juicero langsung jadi bahan tertawaan seantero jagat *tech* pas jurnalis Bloomberg ngebuktiin kalau kantong jus *proprietary*-nya bisa diperas pake tangan kosong dalam waktu yang sama cepetnya dan hasilnya sama persis tanpa perlu mesin seharga $400 tersebut. 
*Pelajaran mahalnya:* Ngebangun solusi teknis yang super *over-engineered* buat masalah yang sebenernya nggak butuh kecanggihan itu adalah bukti nyata kegagalan validasi *Problem-Solution Fit*.

**Benang merah dari semua kegagalan di atas:** 
Bukan karena tim *engineering*-nya nggak jago ngoding atau produksinya jelek. Semuanya gagal karena **asumsi dasar soal kebutuhan user, timing pasar, dan proposisi nilai nggak pernah divalidasi dengan bener di awal** sebelum jutaan dolar dan ribuan jam kerja digelontorkan. Ini negasin lagi kenapa proses *product discovery* (Bab 4) dan pencarian *Product-Market Fit* yang jujur (Bab 10) jauh lebih krusial daripada sekadar kecepatan nge-deliver fitur.

---

## **Cara Bikin Sesi Post-Mortem yang Beneran Ngefek (Bukan Formalitas Basi)**

Masalah terbesar dari mayoritas *post-mortem* di kantor itu bukan karena timnya nggak pinter nganalisis masalah, tapi karena **nggak ada tindak lanjut (*follow-through*) nyata dan nggak ada sistem yang ngejaga memori pembelajaran itu tetep hidup.**

Biar sesi *post-mortem* lo nggak cuma jadi ritual buang-buang waktu di kalender, terapin prinsip-prinsip ini:

**1. Fokus ke perbaikan proses yang spesifik dan actionable, bukan curhat umum.**
Jangan puas cuma nulis kesimpulan kabur kayak: *"Komunikasi antar divisi kurang lancar."* Itu nggak ada gunanya.
Tulis secara gamblang dan detail: *"Tim Engineering dan Design baru dilibatkan pas PRD udah final, akibatnya batasan arsitektur database baru ketahuan pas sprint berjalan dua minggu dan bikin rilis molor."* Detail spesifik kayak gini langsung nunjukin bagian mana dari SOP kerja yang harus dirombak.

**2. Bedain mana "Kesalahan Proses" vs mana "Faktor Apes Murni" (*Outcome Variance*).**
Lo harus bisa bedain: apakah produk ini gagal karena emang riset dan eksekusinya ngawur (kesalahan proses), atau prosesnya udah bener banget tapi tiba-tiba ada faktor eksternal nggak terduga kayak perubahan regulasi pemerintah atau krisis makro (varians hasil)? Kalau lo nyampuradukin keduanya, lo bakal ngerombak proses yang udah bener cuma gara-gara lagi sial, atau sebaliknya, ngebiarin proses kerja yang cacat dengan alibi "ah emang lagi nggak hoki aja".

**3. Setiap pembelajaran WAJIB punya Action Item, PIC (*Owner*), dan Deadline.**
Kalau hasil *post-mortem* nyimpulkan bahwa proses *discovery* harus nambah sesi validasi prototipe, jangan cuma ditulis sebagai wacana. Bikin tiket tugasnya di Jira/Asana: *"PIC: [Nama PM], Deadline: Sprint depan, Output: Bikin template checklist validasi prototype baru."* Tanpa ada nama yang bertanggung jawab, *insight* lo bakal mati di tempat.

**4. Buka dokumen post-mortem lama pas Kickoff proyek baru.**
Pas mau mulai ngerjain inisiatif atau kuartal baru, biasakan luangkan waktu 15 menit buat nengok dokumen kegagalan sebelumnya: *"Eh, waktu proyek mirip ini 3 bulan lalu kita kepleset di bagian mana ya? Checklist pencegahannya udah kita pasang belum sekarang?"* Ini cara terbaik ngebangun *institutional memory*.

**5. Jaga *Psychological Safety* & Budaya *Blameless Post-Mortem*.**
Sesi ini tujuannya ngebongkar "kenapa sistem kita bisa ngebiarin kesalahan ini terjadi", bukan ajang cari tumbal buat digantung ramai-ramai. Tapi inget, *blameless* bukan berarti cuci tangan. Keberanian buat ngomong jujur soal salah langkah manajemen atau keterlambatan tim lain harus tetep diwadahi secara profesional tanpa ada rasa takut bakal diserang balik secara personal.

---

## **Nge-handle Kegagalan Pribadi: Dimensi Psikologis Biar Nggak Kena Mental**

Di luar urusan proses kantor, ngadepin kenyataan bahwa proyek yang lo pimpin gagal total itu rasanya pait banget. Banyak artikel karier yang ngebahas ini pake gaya *toxic positivity* murahan (*"Kegagalan adalah sukses yang tertunda, semangat!"*), yang aslinya malah bikin enek pas lo lagi di posisi terpuruk.

Berikut cara waras buat memproses kegagalan secara emosional:

**1. Kasih waktu buat berduka dan kecewa (nggak usah sok kuat).**
Wajar banget kalau lo ngerasa kesel, sedih, atau malu pas fitur yang lo bangga-banggain ternyata sepi peminat atau di-kill sama manajemen. Nggak usah buru-buru maksa diri lo buat langsung tersenyum bijak. Akui dulu rasa kecewa itu sebagai respon manusiawi yang normal.

**2. Lo bukan fitur lo (*Separate self-worth from product outcome*).**
Tanamkan di kepala lo: **Proyek lo yang gagal, bukan diri lo yang gagal sebagai manusia.** Kesuksesan produk di *startup* itu dipengaruhi puluhan variabel liar di luar kendali lo. Jangan biarin satu atau dua *blunder* proyek bikin lo langsung ngerasa nggak pantes jadi PM dan kena *impostor syndrome* berkepanjangan.

**3. Bikin refleksi pribadi yang jujur (Circle of Control).**
Ambil secarik kertas, bagi jadi dua kolom:
- *Kolom 1: Hal yang beneran ada di kendali gue dan bisa gue lakuin lebih baik* (misal: gue kurang teliti pas ngecek data *analytics*, atau gue kelamaan nunda konfrontasi isu ke *engineering lead*).
- *Kolom 2: Hal yang di luar kendali gue* (misal: budget marketing dipotong mendadak, server AWS *down*, atau regulasi industri berubah).
Fokus belajar dari Kolom 1, dan ikhlaskan Kolom 2.

**4. Cari temen ngobrol atau mentor yang bisa ngasih feedback objektif.**
Ngobrol sama senior PM atau mentor yang udah makan asam garam dunia produk. Biasanya mereka punya segudang cerita kegagalan yang jauh lebih epik dan bisa ngasih perspektif yang jernih—ngebantu lo ngeliat bahwa kegagalan ini cuma satu bab kecil dari perjalanan karier lo yang masih panjang.

---

## **Cara Bangkit Kembali dan Rebut Lagi Kepercayaan Tim**

Setelah debu mereda, gimana caranya lo kembali ke arena kerja dengan percaya diri?

- **Ambil proyek berikutnya dan langsung terapin ilmunya:** Cara paling ampuh buat ngusir rasa trauma gagal adalah dengan terjun lagi ke proyek baru dan langsung ngebuktiin kalau lo udah belajar dari kesalahan kemarin. Ini ngasih bukti nyata ke diri lo sendiri dan tim kalau lo beneran bertumbuh.
- **Rebut kembali kepercayaan stakeholder lewat transparansi:** Kalau reputasi lo sempet keguncang gara-gara proyek kemarin meleset, cara balikinnya bukan dengan minta maaf merengek-rengek atau malah bersikap defensif. Tunjukin sikap profesional: *"Dari rilis kemarin, tim kita dapet pembelajaran krusial di area X dan Y. Buat rilis kali ini, kita udah pasang mitigasi Z biar masalah kemarin nggak keulang."* Sikap lugas dan solutif kayak gini bakal bikin lo kelihatan sangat matang di mata pimpinan.
- **Hati-hati sama jebakan *Overcorrection*:** Ini bahaya laten yang sering terjadi. Gara-gara trauma pernah gagal sekali, lo jadi parnoan ekstrem: takut ngambil risiko, bikin proses validasi jadi super lelet sampai berminggu-minggu, atau nolak semua ide inovatif yang agak berani. Jangan sampai rasa takut bikin lo berubah jadi PM yang penakut dan nggak punya taring. Tetap ambil risiko yang terukur (*calibrated risk-taking*).

---

## **Beda Antara "Nggak Belajar" vs "Salah Narik Kesimpulan"**

Banyak tim yang ngulangin kegagalan bukan karena mereka bebal nggak mau belajar, tapi karena mereka **narik kesimpulan yang terlalu sempit (*narrow learnings*).**

Contoh kasus:
- *Kesimpulan sempit:* "Warna tombol CTA warna hijau kemarin nggak efektif, besok-besok jangan pake warna hijau lagi." (Pelajaran kayak gini nggak bakal nyelamatin lo dari kegagalan berikutnya).
- *Kesimpulan fundamental:* "Kita harus memvalidasi *value proposition* dan alur konversi utama ke *user* sebelum mutusin ngerombak seluruh halaman *checkout*." (Pelajaran fundamental kayak gini bakal ngelindungin tim lo dari puluhan skenario *blunder* serupa di masa depan).

Setiap kali lo narik kesimpulan dari kegagalan, selalu tanya: *"Apakah pelajaran ini cuma nambal gejala di permukaan, atau udah nyentuh akar masalah sistemiknya?"*

---

## **Rangkuman Bab: TL;DR**

1. **Post-mortem tanpa eksekusi itu cuma buang waktu:** Dokumen rapi nggak ada gunanya kalau nggak ada *action items*, PIC yang jelas, dan nggak pernah ditengok lagi pas mulai proyek baru.
2. **Belajar dari blunder raksasa:** Google Glass, Quibi, dan Juicero ngebuktiin kalau kehebatan teknis dan dana melimpah nggak ada artinya tanpa validasi kebutuhan *user* dan *timing* pasar yang tepat.
3. **Bedain proses buruk vs apes murni:** Evaluasi kegagalan berdasarkan kualitas keputusan dan prosesnya, bukan cuma ngeliat hasil akhirnya semata.
4. **Kesehatan mental lo prioritas:** Kasih ruang buat ngerasa kecewa, pisahin harga diri dari metrik kerjaan, dan fokus evaluasi hal-hal yang ada di dalam kendali lo (*circle of control*).
5. **Awas jebakan overcorrection:** Belajar dari kesalahan itu wajib, tapi jangan sampai bikin lo jadi PM penakut yang anti ngambil risiko terukur.
6. **Tarik pelajaran fundamental:** Cari akar masalah sistemiknya, jangan cuma nambal gejala kecil di permukaan.

Di bab selanjutnya, kita bakal masuk ke ranah yang makin abu-abu dan bikin overthinking: **Dilema Etis dalam Product Management**—gimana caranya ngadepin benturan antara target pertumbuhan bisnis, *dark patterns*, dan privasi serta kesejahteraan pengguna.

---

**Pertanyaan Refleksi:**

1. Coba inget-inget sesi *post-mortem* atau retrospektif terakhir di tim lo: apakah itu beneran ngasilin perubahan cara kerja nyata, atau cuma jadi ajang keluh kesah yang dokumennya langsung terlupakan?
2. Pas proyek atau fitur yang lo pegang terakhir kali meleset dari target, gimana respon emosional lo? Apakah lo nyiksa diri sendiri dengan *impostor syndrome*, bersikap defensif nyalahin orang lain, atau bisa nemuin jalan tengah yang sehat?
3. Pernah nggak tim lo ngulangin kesalahan yang sama beberapa bulan kemudian? Kalau dipikir-pikir lagi, apakah waktu itu kesimpulan yang ditarik terlalu dangkal sehingga akar masalahnya nggak bener-bener beres?

**Action Item:**

Cari dan buka kembali dokumen *post-mortem* atau retro terakhir yang ada di tim lo. Cek satu per satu: apakah *action items* yang dulu disepakati bener-bener dikerjain dan dipantau hasilnya? Kalau ternyata nggak ada tindak lanjutnya sama sekali, bawa temuan ini ke sesi *sync* tim berikutnya sebagai bahan evaluasi buat benerin cara belajar organisasi lo.

---
