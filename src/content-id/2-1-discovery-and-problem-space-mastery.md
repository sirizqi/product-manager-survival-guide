## **Wawancara yang Nggak Ngajarin Gue Apa-apa (Padahal Dulu Gue Ngerasa Paling Paham)**

Waktu awal-awal rintis karier jadi PM, gue pernah bikin apa yang dengan pedenya gue sebut sebagai "riset pengguna mendalam." Sepuluh sesi wawancara gue babat. Skrip wawancara udah terstruktur rapi. Gue nanya-nanya, nyatet tiap omongan user, sampai bikin *synthesis deck* yang estetiknya nggak ada obat. Isinya penuh *sticky notes* warna-warni yang dikelompokkan per tema—pokoknya mencerminkan gaya *Design Thinking*™ abis lah.

Kesimpulannya apa coba? Para user ternyata mendambakan banget fitur yang… *plot twist*: sebenernya emang udah gue putusin buat dibikin dari awal!

Kebetulan yang luar biasa banget, kan?

Pas gue nengok ke belakang sambil ngopi, baru deh gue sadar betapa kacaunya cara riset gue waktu itu:
1. Gue ngeberondong mereka pakai *leading questions* alias pertanyaan menggiring, kayak *"Bakal ngebantu banget nggak sih kalau kita tambahin fitur X?"* (Ya jelas semua orang bakal jawab "Wah, ngebantu banget!", kan ngomong "ya" buat fitur gratisan yang masih hipotetis itu nggak bayar).
2. Gue nge-rekrut responden yang dari sananya emang udah cinta mati sama produk kita (*survivorship bias* murni, bro).
3. Gue nafsir basa-basi sopan user sebagai validasi antusias (*"Wah, menarik juga tuh konsepnya"* itu jauh banget artinya dari *"Gue siap bayar dan gesek kartu sekarang buat ini"*).
4. Dan yang paling parah, gue sama sekali nggak mau ngobrol sama user yang udah *churn*, kabur, atau nolak produk kita, dengan dalih "ah, mereka mah nggak relevan sama persona kita."

Akhirnya tim *engineering* tancap gas ngebangun fitur itu selama enam bulan. Hasilnya? Zonk. Nggak ada yang pake sama sekali. Waktu, tenaga, dan *resource* tim *engineering* boncos sia-sia. "Riset mendalam" yang gue banggakan itu ternyata bukan riset sama sekali—itu cuma ritual teater yang ribet demi ngevalidasi ego gue sendiri biar ngerasa bener atas keputusan yang udah gue kunci dari awal.

Ini nih, dosa paling klasik dan paling sering kejadian di dunia *Product Management*: **ngelakuin riset cuma buat nyari pembenaran atas asumsi pribadi, terus dibungkus rapi pakai kedok bahasa data yang sok objektif.**

Yuk, kita bedah dan beresin bareng-bareng!

---

## **Beda Riset Beneran vs Teater Riset (Validation Theater)**

Mari kita jujur-jujuran: sebagian besar "riset pengguna" yang jalan di banyak kantor tech zaman now itu cuma sekadar teater sandiwara. Kelihatannya sih meyakinkan—propertinya lengkap banget: ada jadwal *interview*, sebar *survey form*, bikin *user persona* cantik, sampe papan Miro/FigJam yang rame. Tapi ujung-ujungnya, itu cuma jadi panggung validasi (*validation theater*) biar para *stakeholder* ngerasa aman dan nyaman sama keputusan yang sebenernya udah diketok palu di balik layar.

**Ciri-Ciri Teater Riset (*Research Theater*):**

- Wawancara cuma ke 5 orang, dan kelimanya adalah *power users* yang tiap hari udah nge-fans sama produk lo.
- Nanya pertanyaan basi: *"Suka nggak sama fitur ini?"* (Nggak bakal ada user sopan yang tega bilang *"Jelek banget fitur lo"* pas di depan muka lo).
- Bikin survei dengan pertanyaan yang nge-gas: *"Seberapa excited lo menyambut fitur baru kita yang keren banget ini?"*.
- Baru kelabakan riset *setelah* *roadmap* dikunci, cuma biar ada centang "udah divalidasi user" di dokumen PRD.
- Pas presentasi *deck*, cuma nge-*spill* kutipan-kutipan manis yang ngedukung ide awal lo, sementara kritik pedas lo hide diam-diam.

**Ciri-Ciri Discovery Sejati (*Actual Discovery*):**

- Ngobrol sama spektrum user yang luas: dari yang hepi, yang frustrasi setengah mati, yang udah *churn* dan kapok, sampai calon user yang mental pas registrasi dan nggak pernah konversi.
- Ngebongkar perilaku nyata dan pengalaman masa lalu mereka, bukan nanyain angan-angan hipotetis di masa depan.
- Masuk ke sesi wawancara dengan mental siap menerima kenyataan kalau ide brilian lo ternyata sampah dan salah total.
- Riset dijalanin *sebelum* lo ngabisin kapasitas tim *engineering*, bukan cuma formalitas stempel acc.
- Aktif banget nyari bukti yang membatalkan asumsi lo (*disconfirming evidence*), bukan cuma ngumpulin quotes yang bikin lo *overproud*.

Beda riset beneran sama teater itu bukan di format acaranya—tapi di niatnya. Lo lagi beneran mau belajar, atau lo cuma haus pengen keliatan bener di depan *stakeholders*?

---

## **Jobs to Be Done (JTBD): Berhenti Nanya Apa yang Mereka Mau, Mulai Bongkar "Kenapa"**

Ada satu *framework* sakti yang bakal ngubah cara pandang lo soal *product discovery* seumur hidup: **Jobs to Be Done (JTBD)**.

Inti filosofinya simpel tapi ngena banget: orang nggak cuma beli atau pake produk lo; mereka sebenernya lagi "nyewa" (*hire*) produk lo buat nyelesain suatu tugas, masalah, atau *job* tertentu dalam hidup mereka. Kunci *insight* daging itu ada di pemahaman lo soal *job* tersebut, bukan di perintilan fiturnya.

Pasti lo udah sering denger studi kasus klasik McDonald's milkshake (cerita ini abadi karena ngena banget):
McDonald's waktu itu bingung kenapa penjualan *milkshake* melonjak gila-gilaan pas jam sibuk pagi hari. Riset pasar tradisional gaya lama nanya: *"Gimana caranya bikin milkshake lebih enak?"* Jawabannya ya generik: tambahin rasa cokelat, bikin lebih kental, lebih manis—perubahan-perubahan kosmetik yang nggak nendang ke *sales*.

Tapi begitu tim periset nongkrong di gerai dan ngeliat *siapa* yang beli dan *kapan*, faktanya kebuka: pembelinya adalah para komuter yang nyetir mobil sendirian di pagi buta buat ngantor, ngelewatin macet yang ngebosenin. *Job* yang mereka butuhin bukan "makan dessert manis yang mewah." *Job*-nya adalah: *"Kasih gue sesuatu yang ngenyangin, tahan lama, dan bisa gue sedot pake satu tangan sambil nyetir 40 menit tanpa bikin baju kantor gue belepotan."*

Boom! Seketika itu juga, kompetitor asli si *milkshake* bukan *milkshake* merk sebelah—tapi pisang, roti bagel, donat, dan rasa jenuh pas kena macet. Strategi produknya langsung berubah 180 derajat!

**Cara nerapin JTBD pas lo interview user:**

Daripada nanya: *"Fitur apa yang lo pengen ada di aplikasi kita selanjutnya?"* (Ini jebakan, user bakal asal sebut fitur impian tanpa mikir kebutuhan).

Mending lo tanya: *"Bisa ceritain nggak, pas terakhir kali lo ngadepin masalah ini, apa yang persisnya lo lakuin? Waktu itu situasinya lagi gimana? Apa hal pertama yang lo coba? Kenapa cara lama itu nggak ngebantu?"*

Fokus lo adalah ngebongkar *alur cerita dan perilaku nyata*, bukan ngumpulin daftar *wishlist* fitur yang bikin halu.

---

## **Customer Development ala Steve Blank: Cabut Keluar dari Gedung Kantor (*Get Out of the Building*)**

Prinsip legendaris Steve Blank buat *startup* (dan berlaku mutlak buat perusahaan segede apa pun) itu to-the-point banget: **di dalem gedung kantor lo nggak ada fakta, yang ada cuma tumpukan opini.**

Tim *engineering* punya opini soal apa yang disukai user. Tim *sales* punya opini. CEO atau bos lo apalagi—opininya biasanya paling kenceng dan dominan. Tapi inget: nggak ada satu pun dari itu yang bernilai fakta sampai hal itu divalidasi langsung oleh user sungguhan di kondisi riil lewat aksi nyata mereka.

**4 Tahapan Customer Development:**

1. **Customer Discovery** – Beneran ada nggak sih orang yang ngerasain masalah yang lo kira ada ini?
2. **Customer Validation** – Mereka beneran mau bayar / ngorbanin tenaga buat solusi yang lo tawarkan nggak?
3. **Customer Creation** – Bisa nggak lo nge-scale dan ngegandain *demand* pasar ini dalam skala yang jauh lebih masif?
4. **Company Building** – Bisa nggak organisasi lo ditata rapi secara operasional buat nge-handle *growth* gila-gilaan tersebut?

Banyak PM amatir langsung lompat sat-set ke tahap *Company Building* atau langsung minta *engineer* nge-build fitur tanpa pernah beres di tahap 1 dan 2. Itu sama aja lo bangun gedung pencakar langit di atas tanah rawa yang lembek. Kalaupun hoki ya berdiri bentar, tapi tahun depan dijamin langsung ambles dan rungkad berjamaah.

---

## **Dosa-Dosa Mematikan dalam Discovery (Plus Sesi Pengakuan Dosa)**

Biar lo nggak kejebak lubang yang sama, nih daftar dosa besar pas *discovery* yang wajib lo hindari:

### **Dosa #1: Ngasih Pertanyaan Menggiring (*Leading Questions*)**

- **Contoh omongan:** *"Lo ngerasa bakal kebantu banget nggak kalau kita rilis dark mode di aplikasi ini?"*
- **Kenapa ini red flag:** Lo udah nyuapin jawaban yang pengen lo denger ke mulut responden. Orang Indonesia itu pada dasarnya ramah dan nggak enakan; mereka bakal reflek jawab *"Iya, ngebantu banget kok!"* padahal besoknya juga nggak bakal dipake.
- **Cara benernya:** *"Boleh ceritain pengalaman lo pas pake aplikasi kita waktu malem hari?"* atau *"Ada kendala nggak pas lo buka aplikasi di ruangan gelap?"* Biarin mereka yang *spill* keluhannya sendiri secara natural.

### **Dosa #2: Riset Cuma Buat Validasi Ego, Bukan Buat Eksplorasi**

- **Contoh kejadian:** Lo udah jatuh cinta setengah mati sama Fitur X. Lo ngegelar "riset" cuma buat nyari sepotong *quotes* user buat dijadiin tameng pas presentasi di depan VP yang skeptis.
- **Kenapa ini red flag:** Ini bukan riset, ini sandiwara. Lo menutup mata dari kemungkinan kalau asumsi lo itu cacat, sampai-sampai data yang udah jelas-jelas ngebantah ide lo pun bakal lo abaikan.
- **Cara benernya:** Masuklah ke sesi *discovery* dengan mental ikhlas buat ngebunuh ide lo sendiri (*kill your darlings*). Kalau lo nggak punya skenario di mana lo berani ngebatalin fitur ini berdasarkan hasil riset, berarti lo belom siap ngelakuin *discovery*.

### **Dosa #3: Ketuker antara "Permintaan User" vs "Kebutuhan Hakiki User"**

- **Contoh kejadian:** User korporat bilang, *"Gue butuh tombol buat export semua data ini ke format Excel."* Terus lo langsung sat-set bikin tiket Jira buat bikin fitur ekspor Excel.
- **Kenapa ini red flag:** User itu jago banget dalam ngerasain masalah mereka, tapi mereka bukan arsitek produk. User tadi sebenernya cuma butuh: *"Gimana caranya ngelaporin progres mingguan ke atasan gue yang cuma mau liat rangkuman angka."* Fitur ekspor Excel cuma solusi pertama yang kepikiran di kepala dia. Padahal, kalau lo bikinin *dashboard summary* otomatis atau *shareable link*, masalahnya kelar jauh lebih elegan tanpa ribet ngolah spreadsheet.
- **Cara benernya:** Gali satu lapis lebih dalem: *"Kalau file Excel itu udah lo download, langkah selanjutnya apa yang biasa lo lakuin sama file tersebut?"* Jawaban mereka sering kali ngebuka solusi yang jauh lebih brilian dan nggak makan kapasitas tim.

### **Dosa #4: Sampel Secuil, Bikin Kesimpulan Segede Gaban**

- **Contoh kejadian:** *"Gue baru aja ngobrol sama 3 user dan mereka bertiga kompak minta fitur X, jadi fix kita wajib build fitur X buat 100.000 user kita!"*
- **Kenapa ini red flag:** Riset kualitatif (wawancara mendalam) itu luar biasa buat nyari tahu konteks emosional dan ngebangun hipotesis, tapi sama sekali nggak punya kekuatan signifikansi statistik. Tiga user yang vokal itu belum tentu mewakili mayoritas *silent majority* di produk lo.
- **Cara benernya:** Pake riset kualitatif buat nemuin hipotesis masalah, terus validasi skalanya pake data kuantitatif (analitik perilaku, survei terarah, atau *smoke test/fake-door testing*) sebelum lo masang taruhan besar di kapasitas *engineering*.

### **Dosa #5: Cuma Ngobrol sama Fans Garis Keras (*Happy Users*)**

- **Contoh kejadian:** Lo minta bantuan tim Customer Success: *"Eh, kirimin kontak 5 klien yang paling hepi dong buat gue interview."*
- **Kenapa ini red flag:** Lo cuma dengerin gema suara lo sendiri di *echo chamber*. Lo nggak bakal pernah tau kenapa ada user yang *churn*, kenapa orang kabur pas liat halaman registrasi, atau fitur apa yang bikin user frustrasi, karena lo sengaja ngurung diri di zona nyaman.
- **Cara benernya:** Tantang diri lo buat ngobrol sama user yang udah berhenti langganan (*churned*), user yang nggak pernah kelar *onboarding*, atau mereka yang ngasih rating bintang satu di App Store / Play Store. Masukan yang bikin lo kena mental biasanya justru masukan yang paling ngebuka mata.

---

## **Toolkit Discovery: Metode yang Beneran Ngefek di Lapangan**

Biar lo nggak bingung pas mau eksekusi, ini beberapa senjata *discovery* yang praktikal banget:

### **1. Problem Interview (Wawancara Masalah)**
- **Tujuan:** Memastikan apakah masalah yang mau lo selesaikan itu nyata, bikin user menderita, dan layak buat lo cariin solusinya.
- **Alurnya:**
  - Buka obrolan santai soal peran, latar belakang, dan rutinitas harian mereka.
  - Tanyakan pengalaman nyata terakhir kali mereka ngadepin masalah tersebut (inget: kejadian nyata masa lalu, bukan skenario "seandainya").
  - Gali rasa sakitnya: *"Pas hal itu kejadian, apa dampaknya ke kerjaan lo? Lo ngerasa gimana?"*
  - Cari tahu cara darurat (*workarounds*) yang sekarang mereka pake buat ngakalin masalah itu (kalau mereka belum pernah nyoba ngakalin, berarti masalahnya nggak sakit-sakit amat buat mereka!).
  - **Aturan mutlak:** Jangan pernah pamer atau nyebut-nyebut ide solusi lo sampe wawancara kelar.

### **2. Solution Interview (Wawancara Solusi)**
- **Tujuan:** Setelah yakin masalahnya valid, uji apakah konsep solusi yang lo rancang beneran nyelesain akar masalah mereka.
- **Alurnya:**
  - Kasih liat prototipe *low-fidelity* (sketsa kasar atau wireframe sederhana). Jangan pake *mockup* yang terlalu kinclong dan estetik—tampilan yang terlalu rapi bikin user sungkan buat ngasih kritik pedas.
  - Minta mereka interaksi sambil ngomong apa yang ada di pikiran (*think aloud*).
  - Liat di bagian mana mereka bingung, ragu-ragu ngeklik, atau salah paham.
  - Tanya: *"Kira-kira apa hal yang bikin lo ragu buat ninggalin cara lama lo dan beralih pake cara baru ini?"*

### **3. Contextual Inquiry (Nongkrong & Ngamatin Langsung)**
- **Tujuan:** Ngeliat tingkah laku asli mereka di habitat alaminya, karena manusia itu sering banget bohong (tanpa sadar) pas ditanya soal kebiasaan sendiri.
- **Kenapa krusial:** User bisa aja ngaku ke lo: *"Gue cuma buka email dua kali sehari kok pas kerja."* Tapi pas lo liat rekaman layar (*screen recording*) atau amatin langsung, mereka nge-refresh inbox tiap 5 menit sekali. Jarak antara apa yang *diomongin* (*self-reported*) sama apa yang *dilakuin* (*actual behavior*) itu sering kali bumi dan langit!

### **4. The Five Whys (Metode 5 Kenapa)**
- **Tujuan:** Nembus jawaban basa-basi di permukaan sampai ketemu akar masalah yang paling hakiki (*root cause*).
- **Contoh obrolan nyata:**
  - *"Kenapa lo masih pake spreadsheet manual buat nge-track orderan?"* → *"Soalnya tools kita yang sekarang nggak ada fitur X."*
  - *"Kenapa lo butuh banget fitur X?"* → *"Biar data ini bisa langsung gue share ke bos gue."*
  - *"Kenapa bos lo minta datanya dikirim lewat format itu?"* → *"Soalnya beliau nggak percaya sama angka yang ada di dashboard internal."*
  - *"Kenapa beliau nggak percaya sama dashboard internal?"* → *"Soalnya angkanya sering selisih dan datanya pernah ngaco beberapa kali."*
  - *"Kenapa datanya bisa ngaco?"* → **Nah, ketemu kan!** Masalah aslinya bukan tim lo kurang fitur ekspor file, tapi masalah integritas dan akurasi sinkronisasi data!

### **5. Diary Studies (Studi Buku Harian)**
- **Tujuan:** Mantau dinamika emosi dan kebiasaan user dalam rentang waktu yang panjang (misalnya 2–4 minggu), terutama buat alur kerja yang kompleks yang nggak cukup cuma diobrolin dalam sesi 45 menit.
- **Use case:** Ngertiin alur pertimbangan pembelian produk B2B yang makan waktu berminggu-minggu, atau ngeliat gimana rasa frustrasi user perlahan menumpuk tiap kali pake alur checkout tertentu.

---

## **Sintesis Insight: Nyulap Kekacauan Jadi Kejelasan**

Lo udah kelar nge-interview 15 orang. Catatan lo berlembar-lembar, rekaman audio numpuk, dan papan Miro lo udah penuh sama ratusan *sticky notes*. Terus sekarang diapain?

1. **Cari Pola Berulang, Bukan Sekadar Quotes Lucu.** Kalau cuma satu orang yang ngomong hal nyeleneh, itu namanya anekdot. Tapi kalau ada 3 orang atau lebih yang secara independen ngeluhin rasa sakit yang sama (meskipun pake kata-kata beda), itu adalah pola yang wajib lo ulik.
2. **Bedain Apa yang Diucapin vs Makna Aslinya.** *"Gue pengen proses ini lebih cepet"* (apa yang diomongin) bisa jadi makna aslinya adalah *"Gue panik dan cemas karena sistem nggak ngasih status loading/konfirmasi apakah aksi gue tadi udah berhasil atau belum"* (makna psikologis aslinya).
3. **Bangun Repositori Riset yang Searchable.** Jangan biarkan *insight* berharga lo terkubur di *deck* Google Slides yang cuma dipresentasiin sekali terus jadi fosil di Google Drive. Pake tools kayak Notion, Dovetail, atau spreadsheet rapi biar tim lo 6 bulan lagi nggak ngulangin riset yang sama dari nol.
4. **Tunjukin Tensi dan Trade-off antar Segmen.** Sintesis yang matang itu nggak cuma bilang "Semua user mau fitur A." Sintesis level *lead* bakal nge-spill: *"User segmen korporat butuh kontrol ketat (Fitur A), tapi user segmen UMKM justru nolak Fitur A karena bikin alurnya ribet—inilah trade-off yang harus kita navigasi."*

---

## **Waktu Discovery Malah Dijadiin Tameng Buat Menunda Eksekusi (*Analysis Paralysis*)**

Eits, tapi ada jebakan ekstrem di sisi sebaliknya: **kelumpuhan analisis (*analysis paralysis*) yang berlindung di balik topeng "kehati-hatian riset."**

Ada tipe PM yang hobi banget ngeles: *"Aduh, kita butuh riset lebih banyak dulu nih sebelum ambil keputusan."* Ujung-ujungnya wawancara jalan terus berminggu-minggu, survei disebar berjilid-jilid, tapi produk nggak pernah rilis-rilis karena takut salah.

Inget: kepastian mutlak di dunia teknologi itu mitos! Lo bakal selalu ngambil keputusan berbasis probabilitas dengan informasi yang nggak 100% lengkap. Tujuan *discovery* itu bukan buat ngilangin SEMUA risiko sampai nol, tapi buat nurunin ketidakpastian sampai ke level di mana risiko lo melangkah maju jauh lebih kecil daripada risiko lo cuma diem di tempat dan disalip kompetitor.

**Heuristik Praktis:** Kalau dalam 3 sesi wawancara terakhir lo udah nggak nemuin hal baru sama sekali (polanya udah ketebak dan itu-itu aja yang diomongin), berarti lo udah nyampe di titik jenuh (*saturation point*). Stop wawancara, saatnya ambil keputusan dan gas eksekusi!

---

## **Framework Discovery yang Bisa Lo Pake Besok Pagi**

Biar sat-set, nih 7 langkah konkret yang bisa langsung lo jalanin bareng tim:

1. **Tentukan Asumsi Paling Berisiko (*Riskiest Assumption*).** Apa satu asumsi gila yang kalau ternyata salah, bakal ngebikin seluruh proyek atau ide fitur ini gugur seketika?
2. **Rancang Eksperimen Terkecil.** Buat ngetes asumsi di atas, bikin tes paling hemat: bisa 5 sesi *interview* terarah, tes *landing page*, atau tombol *fake-door*.
3. **Rekrut Responden Beragam.** Jangan cuma cari yang sepemikiran; undang user skeptis, user yang udah *churn*, dan *edge cases*.
4. **Fokus ke Pengalaman Nyata Masa Lalu.** Selalu pegang prinsip: *"Apa yang beneran lo lakuin waktu itu?"* selalu 100x lebih valid daripada *"Kira-kira apa yang bakal lo lakuin besok?"*.
5. **Berburu Bukti Penyangkal (*Disconfirming Evidence*).** Kalau selama riset lo nggak nemu satu pun hal yang bikin lo ketar-ketir soal ide lo, berarti riset lo belum cukup dalem.
6. **Sintesis Bareng Tim, Jangan Sendirian.** Ajak *lead engineer* dan desainer lo buat dengerin rekaman bareng. Beda kepala bakal nangkep pola yang beda, dan ini ampuh banget ngilangin bias personal lo.
7. **Dokumentasikan Hasilnya (Termasuk Kalau Ide Lo Gagal).** Nemu kesimpulan *"fitur ini sebaiknya jangan dibikin"* itu adalah kemenangan besar—lo baru aja nyelametin perusahaan dari boncos ratusan juta dan buang waktu berbulan-bulan!

---

## **Rangkuman Bab: TL;DR**

- Sebagian besar riset di kantor itu cuma sandiwara (*validation theater*) buat ngelegitimasi keputusan yang udah dibuat. *Discovery* sejati nuntut lo buat siap nerima kenyataan kalau lo salah.
- Pake kacamata *Jobs to Be Done* (JTBD) dan *Customer Development*: bongkar tugas hakiki dan perilaku nyata user di luar gedung kantor, bukan sekadar nurutin *wishlist* fitur di permukaan.
- Hindari 5 dosa besar: pertanyaan menggiring, riset validasi ego, ketuker permintaan vs kebutuhan, sampel kekecilan, dan cuma ngobrol sama fans garis keras.
- Waspadai *analysis paralysis*—kalau *insight* udah jenuh (*saturation point*), stop nunda keputusan dan segera melangkah.

---

**Pertanyaan Refleksi:**

1. Coba inget riset terakhir yang lo lakuin (atau yang pernah lo amatin di kantor). Jujur aja: itu beneran *discovery* sejati, atau cuma teater validasi (*research theater*) biar bos lo seneng?
2. Apa "permintaan fitur" dari klien/user yang baru-baru ini mampir ke meja lo? Kalau lo bedah satu tingkat lebih dalem pake 5 Whys, apa kebutuhan mendasar yang sebenernya ada di balik itu?
3. Pernah nggak lo ngeles pake kalimat "kita butuh riset lebih banyak lagi" cuma gara-gara lo takut ngambil keputusan yang bikin nggak nyaman?

**Langkah Tindakan (Action Item):**

Minggu ini, agendakan satu sesi wawancara user dengan format murni *Jobs to Be Done*. Larang diri lo nanyain preferensi hipotetis, dan paksa buat ngebongkar alur kejadian spesifik di masa lalu mereka. Rasain sendiri betapa jauh lebih berbobot dan membuka mata *insight* yang lo dapet dibanding wawancara validasi biasa!

---
