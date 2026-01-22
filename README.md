
# Hướng dẫn Deploy Website lên GitHub Pages

Website Portfolio & Blog của bạn đã sẵn sàng để được public. Dưới đây là các bước để bạn đưa nó lên GitHub Pages miễn phí.

## 1. Chuẩn bị
- Đảm bảo bạn đã có tài khoản [GitHub](https://github.com/).
- Cài đặt [Node.js](https://nodejs.org/) trên máy tính của bạn.

## 2. Các bước thực hiện

### Bước 1: Tạo Repository trên GitHub
1. Truy cập GitHub và tạo một repository mới (ví dụ: `my-portfolio`).
2. Giữ repository ở chế độ **Public**.

### Bước 2: Đẩy code lên GitHub
Mở terminal tại thư mục dự án và chạy các lệnh sau:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/USERNAME/my-portfolio.git
git push -u origin main
```
*(Thay USERNAME bằng tên người dùng GitHub của bạn)*

### Bước 3: Cấu hình GitHub Actions để tự động Build & Deploy
Vì đây là ứng dụng React sử dụng Vite và có biến môi trường `API_KEY` cho Gemini AI, bạn nên sử dụng GitHub Actions:

1. Trong Repository trên GitHub, vào tab **Settings** > **Secrets and variables** > **Actions**.
2. Chọn **New repository secret**.
3. Name: `API_KEY`.
4. Value: *Dán mã API Key của Gemini vào đây*.
5. Lưu lại.

### Bước 4: Kích hoạt GitHub Pages
1. Vào tab **Settings** > **Pages**.
2. Ở mục **Build and deployment** > **Source**, chọn **GitHub Actions**.
3. GitHub sẽ tự động tìm file cấu hình build (nếu bạn dùng template Vite tiêu chuẩn) hoặc bạn có thể tạo file `.github/workflows/deploy.yml`.

## 3. Lưu ý về Bảo mật
Mặc dù chúng ta sử dụng `process.env.API_KEY`, nhưng khi ứng dụng chạy ở client-side (trình duyệt), mã API Key này sẽ bị lộ nếu ai đó kiểm tra mã nguồn (Source code) của trang web đã build. 
- **Khuyến nghị:** Hãy thiết lập **API Restrictions** trong Google Cloud Console để API Key này chỉ có thể được sử dụng từ domain website của bạn (ví dụ: `your-username.github.io`).

## 4. Kiểm tra thành quả
Sau khi GitHub Actions chạy xong (thường mất 1-2 phút), website của bạn sẽ online tại địa chỉ:
`https://your-username.github.io/my-portfolio/`

Chúc mừng bạn đã có một website profile chuyên nghiệp!
