import { Schema, model } from 'mongoose';

const Schemaa = Schema(
  {
    doctor: {
      type: Schema.Types.ObjectId,
      ref: 'Doctor',
    },
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['FREE', 'BOOKED', 'NOT AVAILABLE'],
      default: 'FREE',
    },
  },
  {
    timestamps: true,
  }
);

const Slot = model('Slot', Schemaa);
export default Slot;
