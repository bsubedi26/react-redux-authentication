const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  message: String,
  userId: {type: Schema.Types.ObjectId, ref: 'User'},
  createdAt: { type : Date, default: new Date() }
});

const Message = mongoose.model('Message', MessageSchema);

export default Message;