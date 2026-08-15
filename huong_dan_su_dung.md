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

## 8. Film Mode dành cho trình bày

Chọn **Trình diễn Sentio** để mở Film Mode. Có thể:

- Dùng các nút cảnh 4, 5, 6, 7 hoặc phím số tương ứng.
- Dùng phím mũi tên trái/phải để đổi cảnh.
- Tạm dừng hoặc tiếp tục tự chạy.
- Ở cảnh 5, chọn Linh, Nam hoặc Mai để mở hồ sơ tình huống chi tiết.
- Nhấn `Escape` để đóng hồ sơ đang mở; nhấn thêm lần nữa để thoát Film Mode.

Thanh điều khiển nằm cuối nội dung cảnh và cuộn cùng trang, nên không che các thẻ khi trình bày.

## 9. Quyền riêng tư và dữ liệu

Mở **Cài đặt → Quyền riêng tư và dữ liệu** để:

- Bật hoặc rút quyền từng nguồn.
- Chọn thời gian giữ dữ liệu tổng hợp.
- Xuất bản sao dữ liệu.
- Thu hồi mọi kết nối.
- Xóa dữ liệu cục bộ.

Các thao tác xóa hoặc đặt lại đều yêu cầu xác nhận.

## 10. Luồng trình bày đề xuất cho cuộc thi

1. Mở Film Mode ở cảnh Hệ thống để giải thích ba nguồn dữ liệu và Readiness Engine.
2. Chuyển sang cảnh 3 nhân vật, mở lần lượt Linh, Nam và Mai.
3. Nhấn mạnh chuỗi: vấn đề → tín hiệu đa nguồn → giải thích theo yếu tố tác động mạnh nhất → một hành động → kết quả sau 7 ngày.
4. Chuyển sang cảnh 1 tuần để nói về thay đổi hành vi, không hứa hẹn tăng điểm.
5. Thoát Film Mode, mở tab Tiến trình để chỉ vào biểu đồ 7 ngày và thử xuất báo cáo PNG/PDF.
6. Cho giám khảo thử trang Hôm nay hoặc bộ đếm Tập trung.

## 11. Giới hạn cần nói rõ

Sentio là prototype hỗ trợ quyết định học tập, không phải công cụ chẩn đoán y khoa. Các kết quả 7 ngày và hồ sơ Linh, Nam, Mai là dữ liệu mô phỏng để minh họa logic sản phẩm. Bản web chưa thay thế ứng dụng điện thoại, smartwatch bridge hoặc firmware ESP32 hoàn chỉnh.
