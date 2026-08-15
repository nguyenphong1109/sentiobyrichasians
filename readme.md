# Sentio Prototype

Prototype sản phẩm Sentio của Rich Asians, tập trung vào một trải nghiệm học theo trạng thái cá nhân: hiểu nhịp của chính người dùng, đưa ra một bước tiếp theo rõ ràng và tạo accountability nhẹ nhàng.

## Trải nghiệm chính

- Onboarding ba bước và giai đoạn thiết lập nhịp tham chiếu cá nhân trong 7 ngày.
- Điểm sẵn sàng so sánh trạng thái hiện tại với nhịp thường ngày của chính người dùng, không dùng một chuẩn chung.
- Ba nhóm tín hiệu Hành vi số, Cơ thể và Môi trường với trạng thái kết nối, mức ảnh hưởng và độ phủ dữ liệu minh bạch.
- Trang Hôm nay có một quyết định ưu tiên, phần giải thích nguyên nhân và tiến trình thiết lập nhịp tham chiếu.
- Decision Dial chia điểm sẵn sàng thành ba vùng hành động: nghỉ, học nhẹ và tập trung sâu.
- Ba nhóm tín hiệu dùng màu nhất quán và chỉ mở số liệu chi tiết khi người dùng yêu cầu.
- Phiên Tập trung theo dõi nhẹ nhàng, chỉ nhắc khi tín hiệu lệch khỏi nhịp cá nhân đủ lâu.
- Báo cáo tuần nhấn mạnh thay đổi hành vi, giữ đúng nhịp và cả những lần dừng đúng lúc.
- Biểu đồ Readiness Score 7 ngày lấy trực tiếp từ các phiên đủ điều kiện đã lưu, giữ nguyên ngày trống và phân biệt rõ dữ liệu thật với hồ sơ mô phỏng.
- Phần giải thích động ưu tiên yếu tố đang tác động mạnh nhất, đồng thời nêu lực bù trừ đáng kể nếu có.
- Báo cáo tuần có thể lưu thành PDF qua hộp thoại in hoặc tải trực tiếp thành ảnh PNG để chia sẻ.
- Trung tâm quyền riêng tư cho phép quản lý consent, thời gian lưu, xuất dữ liệu, thu hồi kết nối và xóa dữ liệu cục bộ.
- Nội dung cốt lõi vẫn có bảy ngôn ngữ. Luồng mới ưu tiên tiếng Việt; các chuỗi đã quốc tế hóa có tiếng Anh dự phòng, còn một số panel chi tiết vẫn giữ nội dung tiếng Việt trong prototype này.

## Trạng thái các nguồn dữ liệu

| Nguồn | Trạng thái trong bản web | Giới hạn / yêu cầu |
| --- | --- | --- |
| Digital | Live in-page | Ghi nhận trạng thái hiện/ẩn, số lần rời trang và một ước tính duy trì tập trung khi phiên Sentio đang mở; đây không phải lịch sử tab hay đo “tập trung thật” bên ngoài phiên. |
| Cơ thể / đồng hồ | Kết nối mô phỏng | Trình duyệt không đọc trực tiếp Apple Health hoặc Health Connect. Tích hợp thật cần kết nối qua ứng dụng điện thoại và quyền do người dùng cấp. Các số liệu hiện có là dữ liệu minh họa. |
| Environment / ESP32 | Pairing prototype | Có thể ghép đôi bằng Web Bluetooth khi trình duyệt và ESP32 tương thích. Prototype chưa cấu hình UUID/service để đọc lux trực tiếp; dữ liệu mẫu luôn được ghi nhãn rõ. |

## Dữ liệu và quyền riêng tư

- Tín hiệu thô chỉ được xử lý tại nguồn kết nối và không được hiển thị công khai.
- Prototype lưu cục bộ các chỉ số tổng hợp, tiến trình nhịp tham chiếu và lựa chọn giao diện cần thiết.
- Thiếu một nguồn không chặn trải nghiệm; Sentio phải hiển thị nguồn bị thiếu và giảm độ tin cậy của quyết định tương ứng.
- Đây là prototype hỗ trợ người dùng hiểu nhịp của bản thân, không phải công cụ chẩn đoán y khoa.

## Khởi chạy và đặt lại

Mở `index.html` để chạy bản modular hiện tại (`styles.css` + `app.js`). Ở lần đầu, hoàn tất onboarding hoặc chọn xem trước bảng điều khiển. Để chạy lại luồng 7 ngày từ đầu, mở **Cài đặt → Đặt lại bản demo** hoặc chọn **Thiết lập lại onboarding** trong hồ sơ.

`release/sentio.html` là bản phát hành gọn nhất: một tệp duy nhất đã chứa markup, style, logic và logo, có thể mở trực tiếp hoặc gửi cho ban tổ chức.

Hướng dẫn đầy đủ cho người dùng và luồng trình bày cuộc thi nằm trong `HUONG_DAN_SU_DUNG.md`. Trong ứng dụng, có thể mở bản hướng dẫn ngắn từ **Cài đặt → Hướng dẫn sử dụng** hoặc nút **Hướng dẫn sử dụng** ở cuối trang.

Sau mỗi lần sửa `index.html`, `styles.css` hoặc `app.js`, chạy `node build-single-file.mjs` để dựng lại `release/sentio.html` trước khi gửi hoặc trình chiếu.

Trong tab **Tiến trình**, nút **Lưu PDF** mở bản báo cáo A4 để chọn “Save as PDF”; nút **Tải ảnh PNG** tạo ảnh báo cáo ngay trên thiết bị, không gửi dữ liệu phiên tới dịch vụ bên ngoài.

## Film Mode

Nút **Trình diễn Sentio** tự chạy các cảnh 4–7 sau một lần bấm. Có thể tạm dừng, dùng phím `4`, `5`, `6`, `7`, phím mũi tên trái/phải hoặc bộ điều khiển cảnh. Thanh điều khiển nằm sau nội dung cảnh và cuộn tự nhiên cùng trang để không che thẻ. Có thể mở trực tiếp bằng `index.html?film=1&scene=system`; thay `system` bằng `people`, `week` hoặc `end` để vào đúng cảnh.

Ở cảnh `people`, chạm vào Linh, Nam hoặc Mai để mở hồ sơ tình huống gồm vấn đề, ba nguồn tín hiệu, suy luận AI, hành động và kết quả sau 7 ngày. Có thể mở thẳng từng hồ sơ bằng `index.html?film=1&scene=people&person=linh`; thay `linh` bằng `nam` hoặc `mai` khi trình bày.

Trong trải nghiệm chính, chạm nút hồ sơ có mũi tên để chuyển nhanh giữa tài khoản cá nhân và ba kịch bản mô phỏng Linh, Nam, Mai.
