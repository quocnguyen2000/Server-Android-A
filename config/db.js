//KẾT NỐI MONGODb
//Nhập mô-đun mongoose
const mongoose = require("mongoose");
const MONGO_URI =
  "mongodb+srv://jesse:admin@cluster0-aupaz.mongodb.net/test?retryWrites=true&w=majority";
const connectDB = async () => {
  const conn = await mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
  console.log(`Kết nối MongoDB thành công: ${conn.connection.host}`);
};
module.exports = connectDB;
