# Sentio

Sentio là web hỗ trợ theo dõi nhịp học, phiên tập trung và môi trường ánh sáng. Dự án gồm dashboard chính và bản mô phỏng cảm biến BH1750.

## Truy cập

- Dashboard: https://sentiobyrichasians.netlify.app/
- Mô phỏng BH1750: https://sentiobyrichasians.netlify.app/bh1750.html

## Cách sử dụng

1. Mở dashboard và chọn **Tập trung**.
2. Chọn thời lượng, bắt đầu phiên học và sử dụng check-in khi cần.
3. Mở tab **Tiến trình** để xem điểm sẵn sàng, biểu đồ và các thay đổi trong tuần.
4. Chọn **Coco** để mở trang mô phỏng cảm biến ánh sáng.
5. Trong trang BH1750, bật/tắt đèn để xem giá trị lux thay đổi, mở dữ liệu để xem mẫu đo hoặc tải CSV.

## Cấu trúc chính

- `index.html`: dashboard, onboarding, check-in và tiến trình
- `bh1750.html`: mô phỏng cảm biến BH1750
- `styles.css` và các file CSS tính năng: giao diện và responsive
- `app.js`, `sentio-timer.js`, `bh1750.js` và các script tính năng: tương tác
- `sentio-logo.jpg`, `coco.png.png`: hình ảnh sử dụng trong giao diện

## Lưu ý

Đây là prototype frontend. Dữ liệu BH1750 là dữ liệu mô phỏng, chưa kết nối phần cứng thật. Phần cảm biến minh họa BH1750 giao tiếp I2C với ESP32 và chỉ phục vụ mục đích trình diễn.
