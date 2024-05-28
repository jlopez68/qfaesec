

import mongoose from "mongoose";

const ResultadoSchema = new mongoose.Schema(
  {
    numero: {    type: Number, required: true},
    grupo: {      type: String,      required: true,    },
    fecha: {      type: String,      required: true,    },
    equipo1: {      type: String,      required: true,    },
    resultado1: {      type: Number,          },
    equipo2: {      type: String,    },
    resultado2: { type: Number,    },
    jugado: { type: String,    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Resultados", ResultadoSchema);
