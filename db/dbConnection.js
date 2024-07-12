import mongoose from 'mongoose';
mongoose
  .connect(
    'mongodb+srv://collinfrancy:collinFrancy1212@cluster0.vkngdbx.mongodb.net/e-commerce'
  )
  .then(() => {
    console.log('DB connected');
  })
  .catch(e => {
    console.log(e.message);
  });
export default mongoose;
