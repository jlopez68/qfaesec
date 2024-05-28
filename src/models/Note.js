

import mongoose from "mongoose";

const PronosticoSchema = new mongoose.Schema(
  {
    grupo: {      type: String,      required: true,    },
    fecha: {      type: String,      required: true,    },
    email: {      type: String,      required: true,    },
    equipo1: {      type: String,          },
    pronostico1: {      type: Number,          },
    resultado1: {      type: Number,          },
    equipo2: {      type: String,    },
    pronostico2: {      type: Number,    },
    resultado2: { type: Number,    },
    puntos: {type: Number, },
    status_partido:{ type: String, trim: true },
    usuario: {      type: String,          },
    mapa1: { type:String,},
    mapa2: { type:String,},
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Pronostico", PronosticoSchema);
