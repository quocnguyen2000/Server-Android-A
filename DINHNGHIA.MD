*: app.js chứa các thông tin về cấu hình, khai báo, các định nghĩa,... để ứng dụng của chúng ta chạy ok. | Kết nối
*: package.json chứa các package cho ứng dụng chạy.

*: express: framework để xây dựng các ứng dụng web và API
*: body-parser: Lấy được dữ liệu nhập vào
*: Nodemon: chạy các tập lệnh node.js của mình thông qua nodemon, "refresh" lại server | thêm trong app.js-> |"start": "nodemon app.js"|
*: Mongoose là một framework JavaScript thường được sử dụng trong ứng dụng Node.js với database là MongoDB.
*: Multer : Xử lý Upload file với Multer

11: Folder Controller(phần quản lý logic ) là thành phần rất quan trọng trong ứng dụng Express. Chứa các hàm xử lý CRUD(create, read, update, delete)
6: Folder public chứa các file css, js, images,...cho ứng dụng
4: Folder routes: chứa các route có trong ứng dụng | Router là cách để máy chủ xác định và đáp ứng yêu cầu của máy khách.| chứa các hàm chuyển trang:(route) get, post
10: Folder model: định nghĩa đối tượng, các kiểu trường chính, và cách thức xác thực cơ bản. dữ liệu từ databse |   chứa Schema:lược đồ dữ liệu
5: Folder views: chứa view/template cho ứng dụng | html,hbs


require: yêu cầu
Extension: tabNine;

#1 Tổ chức thư mục source code dựa trên tính năng: controller, model và view.

add css: app.use(express.static('public'));