// backend/server.js
const express = require('express');
const multer  = require('multer');
const path = require('path');
const cors = require('cors');
const fs = require('fs');

// 创建上传文件夹（如果不存在）
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir);
}

// 配置 multer 存储
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir)
  },
  filename: function (req, file, cb) {
    // 使用原始文件名
    cb(null, file.originalname)
  }
});
const upload = multer({ storage: storage });

const app = express();

// 允许跨域请求
app.use(cors());

// 解析 JSON 和 URL 编码的数据
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 文件上传路由
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('没有文件上传');
  }
  res.send({ message: '文件上传成功', filename: req.file.originalname });
});

// 启动服务器
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`后端服务器正在运行在端口 ${PORT}`);
});
