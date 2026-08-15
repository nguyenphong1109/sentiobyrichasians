# Hướng dẫn sử dụng Sentio

## 1. Mở ứng dụng

Mở `release/sentio.html` bằng Microsoft Edge, Google Chrome hoặc trình duyệt hiện đại. Đây là bản phát hành một tệp, không cần cài đặt hay chạy máy chủ.

Sentio lưu tiến trình cục bộ trong trình duyệt đang dùng. Nếu đổi trình duyệt hoặc xóa dữ liệu trang web, tiến trình cũ sẽ không còn.

## 2. Thiết lập lần đầu

Sentio có đúng 3 bước thiết lập:

1. Đọc cách nhịp tham chiếu cá nhân được xây dựng trong 7 ngày, sau đó chọn **Chọn nguồn dữ liệu**.
2. Chọn những nguồn bạn đồng ý dùng: Hành vi số, Cơ thể và Môi trường. Có thể tiếp tục khi chưa kết nối đủ cả ba nguồn.
3. Nhập tên hiển thị, đọc phần quyền riêng tư, chọn ô đồng ý rồi bấm **Bắt đầu 7 ngày thiết lập nhịp**.

Muốn xem nhanh sản phẩm mà không thiết lập tài khoản, chọn **Xem bản demo trước** ở bước đầu. Dữ liệu trong chế độ này là dữ liệu mẫu và được ghi nhãn mô phỏng.

## 3. Hiểu trang Hôm nay

Trang Hôm nay trả lời ba câu hỏi theo thứ tự:

- **Trạng thái hiện tại:** Điểm sẵn sàng từ 0 đến 100 và vùng hành động tương ứng.
- **Vì sao:** Các tín hiệu chính từ hành vi số, cơ thể và môi trường.
- **Nên làm gì:** Một hành động ưu tiên như học tiếp, học nhẹ, nghỉ ngắn hoặc điều chỉnh góc học.

Chọn **Vì sao có điểm này?** để xem mức ảnh hưởng của từng tín hiệu. Điểm trong 7 ngày đầu là ước tính và sẽ rõ dần khi có thêm dữ liệu hợp lệ.

## 4. Bắt đầu phiên học hoặc nghỉ

Chọn nút hành động chính trên trang Hôm nay, hoặc mở tab **Tập trung**.

- Nút giữa bộ đếm dùng để bắt đầu hoặc tạm dừng.
- **Đặt lại** đưa bộ đếm về thời lượng được đề xuất.
- **Kết thúc phiên** lưu phần tổng kết khi phiên đã bắt đầu.

Sentio chỉ theo dõi hành vi trong phiên web đang mở. Prototype không đọc toàn bộ lịch sử trình duyệt.

## 5. Kiểm tra và kết nối dữ liệu

Chạm vào từng nguồn trên trang Hôm nay để xem chi tiết:

- **Hành vi số:** Theo dõi trạng thái hiện/ẩn trang, số lần rời trang và ước tính tập trung trong phiên.
- **Cơ thể:** Dữ liệu smartwatch trong prototype là mô phỏng. Tích hợp thật cần ứng dụng điện thoại và quyền Apple Health hoặc Health Connect.
- **Môi trường:** Có giao diện ghép đôi Web Bluetooth. Đọc dữ liệu lux thật cần ESP32 tương thích và cấu hình service/characteristic phù hợp.

Thiếu một nguồn không chặn ứng dụng; Sentio sẽ giảm độ tin cậy và nói rõ nguồn nào đang thiếu.

## 6. Chuyển hồ sơ

Chạm vào ô tên có mũi tên ở trang Hôm nay để chọn:

- **Tài khoản cá nhân:** Dữ liệu và tiến trình của người đang dùng.
- **Linh, Nam, Mai:** Ba kịch bản mô phỏng dùng để giải thích cách cùng một hệ thống đưa ra các gợi ý khác nhau.

Các hồ sơ mô phỏng không phải kết quả nghiên cứu người dùng thật.

## 7. Xem tiến trình

Tab **Tiến trình** tổng hợp các phiên đã hoàn thành, số ngày đúng nhịp và thay đổi hành vi. Biểu đồ Readiness Score hiển thị 7 ngày gần nhất từ các phiên thật đủ điều kiện; ngày không có phiên được để trống thay vì nội suy thành dữ liệu giả.

- Chọn **Lưu PDF** rồi chọn “Save as PDF” trong hộp thoại in của trình duyệt.
- Chọn **Tải ảnh PNG** để tải một ảnh báo cáo tuần có thể gửi cho phụ huynh hoặc giáo viên.
- Nếu đang xem hồ sơ Linh, Nam hoặc Mai, báo cáo và biểu đồ luôn được ghi nhãn là dữ liệu mô phỏng.

Sentio không tuyên bố làm tăng điểm số; mục tiêu là hỗ trợ quá trình tự học và khả năng tự nhận biết trạng thái.

## 8. Quyền riêng tư và dữ liệu

Mở **Cài đặt → Quyền riêng tư và dữ liệu** để:

- Bật hoặc rút quyền từng nguồn.
- Chọn thời gian giữ dữ liệu tổng hợp.
- Xuất bản sao dữ liệu.
- Thu hồi mọi kết nối.
- Xóa dữ liệu cục bộ.

Các thao tác xóa hoặc đặt lại đều yêu cầu xác nhận.

## 9. Luồng trình bày đề xuất cho cuộc thi

1. Mở trang Hôm nay để giải thích ba nguồn dữ liệu và Readiness Score.
2. Chạm vào một nguồn tín hiệu để cho thấy mức độ minh bạch của dữ liệu và quyền kết nối.
3. Nhấn mạnh chuỗi: tín hiệu đa nguồn → giải thích yếu tố tác động mạnh nhất → một hành động phù hợp.
4. Mở tab Tiến trình để chỉ vào biểu đồ 7 ngày và xuất báo cáo PNG/PDF.
5. Cho giám khảo tự thử một phiên Tập trung hoặc kiểm tra trung tâm quyền riêng tư.

## 10. Giới hạn cần nói rõ

Sentio là prototype hỗ trợ quyết định học tập, không phải công cụ chẩn đoán y khoa. Các kết quả 7 ngày và hồ sơ Linh, Nam, Mai là dữ liệu mô phỏng để minh họa logic sản phẩm. Bản web chưa thay thế ứng dụng điện thoại, smartwatch bridge hoặc firmware ESP32 hoàn chỉnh.
