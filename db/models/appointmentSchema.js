import { Schema, model } from 'mongoose';

const Schemaa = Schema(
  {
    slot: {
      type: Schema.Types.ObjectId,
      ref: 'Slot',
    },
    doctor: {
      type: Schema.Types.ObjectId,
      ref: 'Doctor',
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    status: {
      type: String,
      enum: ['BOOKED', 'DONE', 'CANCEL'],
    },
  },
  {
    timestamps: true,
  }
);

const Appointment = model('Appointment', Schemaa);
export default Appointment;
