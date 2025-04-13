# Dashboard Tugas Kuliah - Task Manager

## Deskripsi Aplikasi

**Dashboard Tugas Kuliah** adalah aplikasi manajemen tugas pribadi yang memudahkan mahasiswa dalam mencatat, mengedit, dan menghapus tugas-tugas kuliah mereka. Pengguna dapat menambahkan tugas dengan nama, tanggal, dan waktu tenggat. Aplikasi ini menyimpan data secara otomatis di **localStorage** sehingga informasi tidak akan hilang meskipun halaman di-refresh atau browser ditutup.

### Fitur Aplikasi:
1. **Tambah Tugas**: Menambahkan tugas baru dengan nama, tanggal, dan waktu tenggat.
2. **Edit Tugas**: Mengedit informasi tugas yang sudah tersimpan.
3. **Hapus Tugas**: Menghapus tugas dari daftar.
4. **Penyimpanan Lokal**: Semua data disimpan di **localStorage** agar tetap tersedia setiap kali pengguna membuka aplikasi.
5. **Tampilan Responsif**: Aplikasi dapat digunakan dengan baik di berbagai ukuran layar, baik desktop maupun mobile.

## Fitur ES6+ yang Diimplementasikan

Aplikasi ini memanfaatkan berbagai fitur modern dari JavaScript (ES6+) untuk meningkatkan efisiensi dan kualitas kode. Berikut ini adalah fitur-fitur yang telah digunakan:

1. **Let dan Const**: Digunakan untuk deklarasi variabel dengan scoping yang lebih baik.  
   - `const` untuk nilai tetap, `let` untuk nilai yang dapat berubah.
2. **Arrow Functions**: Fungsi yang lebih ringkas dengan konteks `this` yang konsisten.  
   - Contoh: `const renderTasks = () => { ... }`
3. **Template Literals**: Digunakan untuk menyusun elemen HTML secara dinamis dengan sintaks yang lebih sederhana.  
   - Contoh: `` `<li>${task.name} - ${task.date}</li>` ``
4. **Destructuring**: Digunakan untuk mengambil nilai dari objek dengan cara yang lebih ringkas.  
   - Contoh: `const { name, date } = task;`
5. **Spread dan Rest Operator**: Digunakan untuk menyalin dan menggabungkan data tugas.  
   - Contoh: `const newTasks = [...tasks, newTask];`
6. **Default Parameters**: Untuk menetapkan nilai default saat parameter tidak diisi.  
   - Contoh: `function createTask(task = {}) { ... }`
7. **Classes**: Menggunakan class `TaskManager` untuk mengelola logika penambahan, pengeditan, dan penghapusan tugas.
8. **Async/Await**: Simulasi delay saat mengambil data dari localStorage agar terasa seperti proses asinkron.  
   - Contoh:
     ```javascript
     const simulateAsyncDelay = async (data) => {
       return new Promise(resolve => setTimeout(() => resolve(data), 500));
     };
     ```

---


## Screenshot
<img width="1470" alt="Screenshot 2025-04-13 at 23 49 58" src="https://github.com/user-attachments/assets/e6d494da-635c-4797-acb1-2ba9d5ddbbf2" />

)
