const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');
let currentTaskElement = null; // Menyimpan elemen tugas yang sedang diedit

// Fungsi untuk menambah atau mengedit task
addBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    
    if (taskText !== '') {
        if (currentTaskElement) {
            // Update task yang sudah ada
            currentTaskElement.querySelector('span').textContent = taskText;
            addBtn.textContent = 'TAMBAH';  // Ubah tombol kembali ke TAMBAH
            currentTaskElement = null;
        } else {
            // Menambahkan task baru
            const taskItem = createTaskItem(taskText);
            taskList.appendChild(taskItem);
        }
        taskInput.value = '';  // Kosongkan input setelah penambahan task
    }
});

// Fungsi untuk membuat item task baru
function createTaskItem(taskText) {
    const li = document.createElement('li');

    // Checkbox dan teks task
    const taskDiv = document.createElement('div');
    taskDiv.className = 'task';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => {
        taskDiv.classList.toggle('completed');
    });

    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(taskSpan);

    // Tombol Edit
    const editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.textContent = '✏️';
    editBtn.addEventListener('click', () => {
        editTask(li);
    });

    // Tombol Hapus
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = '✖';
    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(li);
    });

    li.appendChild(taskDiv);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    return li;
}

// Fungsi untuk mengedit task yang sudah ada
function editTask(taskElement) {
    const taskText = taskElement.querySelector('span').textContent;
    taskInput.value = taskText;  // Set nilai input ke teks task yang akan diedit
    addBtn.textContent = 'UPDATE';  // Ubah tombol menjadi UPDATE
    currentTaskElement = taskElement;  // Simpan task yang sedang diedit
}
