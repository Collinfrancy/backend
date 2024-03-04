import { Schema, model } from 'mongoose';

const Schemaa = Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    medicines: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Medicine',
      },
    ],
    BookingDate: {
      type: Date,
    },
    deliveryDate: {
      type: Date,
      default: Date.now() + 4 * 24 * 60 * 60 * 1000,
    },
    status: {
      type: String,
      enum: ['CONFIRMED', 'SHIPPED', 'OUT FOR DELIVERY', 'DELIVERED'],
    },
    deliveryAddress: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Order = model('Order', Schemaa);
export default Order;
