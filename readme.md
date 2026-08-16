# Sentio x Coco · BH1750–ESP32 demo

## Phạm vi bản nộp

Đây là prototype web cho kịch bản: BH1750 đo độ rọi, ESP32 nhận dữ liệu qua I²C, rồi hệ thống nhắc người học điều chỉnh môi trường. Trang `bh1750.html` là mô phỏng nên không tuyên bố đã kết nối phần cứng thật.

## Kịch bản trình diễn 90 giây

1. Mở `index.html`, chọn **Tập trung**, bấm **Hẹn giờ** và vuốt bánh xe để đặt thời lượng.
2. Chuyển sang **Coco ↗** để mở `bh1750.html`.
3. Bấm **Đèn bình thường**: mô phỏng khoảng 300 lux, trạng thái `NORMAL`.
4. Bấm **Tắt đèn**: lux giảm về 20–30, trạng thái `DARK`; giữ dưới 30 lux trong 3 giây để kích hoạt cảnh báo.
5. Mở **Cơ sở dữ liệu** để xem mẫu lux, trạng thái và tải CSV.
6. Bấm **Bật đèn lại**: lux tăng dần về vùng học, trạng thái trở lại `NORMAL`.

## Mạch dự kiến

| BH1750 | ESP32 | Ý nghĩa |
| --- | --- | --- |
| VCC | 3V3 | Nguồn logic 3.3 V |
| GND | GND | Mass chung |
| SDA | GPIO21 | Dữ liệu I²C |
| SCL | GPIO22 | Xung I²C |
| ADDR | GND | Địa chỉ 7-bit `0x23` |

## Số liệu và giới hạn

- Dải `1–65.535 lux`, độ phân giải `1 lux` và địa chỉ `0x23` được ghi theo tài liệu BH1750FVI của ROHM.
- GPIO21/GPIO22 là cấu hình I²C dùng trong bản demo ESP32; chân I²C có thể cấu hình trong ESP-IDF.
- Chu kỳ 2 giây, giá trị 300 lux và ngưỡng cảnh báo 30 lux là lựa chọn mô phỏng để trình diễn, không phải dữ liệu phần cứng đã đo.
- Sentio không dùng ánh sáng để chẩn đoán buồn ngủ; hệ thống chỉ phát hiện môi trường thiếu sáng và đưa ra lời nhắc.

Nguồn: [ROHM BH1750FVI](https://www.rohm.com/products/sensor-ics/ambient-light-sensor-ics/bh1750fvi) · [Espressif I²C API](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-reference/peripherals/i2c.html)
