// frontend/script.js
const dropZone = document.getElementById('drop-zone');
const fileInput = document.getElementById('file-input');
const uploadButton = document.getElementById('upload-button');
const statusDiv = document.getElementById('status');

let selectedFile = null;

// 处理文件选择
function handleFiles(files) {
  if (files.length > 0) {
    selectedFile = files[0];
    statusDiv.textContent = `已选择文件: ${selectedFile.name}`;
    uploadButton.disabled = false;
  }
}

// 点击区域选择文件
dropZone.addEventListener('click', () => {
  fileInput.click();
});

// 文件输入变化
fileInput.addEventListener('change', (e) => {
  handleFiles(e.target.files);
});

// 拖拽事件
dropZone.addEventListener('dragover', (e) => {
  e.preventDefault();
  dropZone.classList.add('dragover');
});

dropZone.addEventListener('dragleave', (e) => {
  e.preventDefault();
  dropZone.classList.remove('dragover');
});

dropZone.addEventListener('drop', (e) => {
  e.preventDefault();
  dropZone.classList.remove('dragover');
  handleFiles(e.dataTransfer.files);
});

// 粘贴事件
document.addEventListener('paste', (e) => {
  const items = e.clipboardData.items;
  for (let i = 0; i < items.length; i++) {
    if (items[i].kind === 'file') {
      const file = items[i].getAsFile();
      handleFiles([file]);
    }
  }
});

// 上传按钮点击
uploadButton.addEventListener('click', () => {
  if (!selectedFile) {
    alert('没有选择文件');
    return;
  }

  const formData = new FormData();
  formData.append('file', selectedFile);

  fetch('http://localhost:3000/upload', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    statusDiv.textContent = data.message + `: ${data.filename}`;
    uploadButton.disabled = true;
    selectedFile = null;
  })
  .catch(error => {
    console.error('错误:', error);
    statusDiv.textContent = '上传失败';
  });
});
