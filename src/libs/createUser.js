import User from "../models/User.js";
import Juegos from "../models/resultados.js";

export const createAdminUser = async () => {
  const userFound = await User.findOne({ email: "admin@localhost" });

  if (userFound) return;
/*
const createJuegos = () => {
const listjuegos = [{


    grupo: "A",fecha: '20/06/2024',equipo1: "ARGENTINA",equipo2: "CANADÁ",RESULTADO1: 0,RESULTADO2: 0},
    {grupo: "A",fecha: '21/06/2024',equipo1: "PERÚ",equipo2: "CHILE",RESULTADO1: 0,RESULTADO2: 0},
    {grupo: "A",fecha: '25/06/2024',equipo1: "PERÚ",equipo2: "CANADÁ",RESULTADO1: 0,RESULTADO2: 0},
    {grupo: "A",fecha: '25/06/2024',equipo1: "CHILE",equipo2: "ARGENTINA",RESULTADO1: 0,RESULTADO2: 0},
    {grupo: "A",fecha: '29/06/2024',equipo1: "ARGENTINA",equipo2: "PERÚ",RESULTADO1: 0,RESULTADO2: 0},
    {grupo: "A",fecha: '29/06/2024',equipo1: "CANADÁ",equipo2: "CHILE",RESULTADO1: 0,RESULTADO2: 0},
    {grupo: "B",fecha: '22/06/2024',equipo1: "ECUADOR",equipo2: "VENEZUELA",RESULTADO1: 0,RESULTADO2: 0},
    {grupo: "B",fecha: '22/06/2024',equipo1: "MÉXICO",equipo2: "JAMAICA",RESULTADO1: 0,RESULTADO2: 0},
    {grupo: "B",fecha: '26/06/2024',equipo1: "ECUADOR",equipo2: "JAMAICA",RESULTADO1: 0,RESULTADO2: 0},
    {grupo: "B",fecha: '26/06/2024',equipo1: "VENEZUELA",equipo2: "MÉXICO",RESULTADO1: 0,RESULTADO2: 0},
    {grupo: "B",fecha: '29/06/2024',equipo1: "JAMAICA",equipo2: "VENEZUELA",RESULTADO1: 0,RESULTADO2: 0},
    {grupo: "B",fecha: '29/06/2024',equipo1: "MÉXICO",equipo2: "ECUADOR",RESULTADO1: 0,RESULTADO2: 0},
    {grupo: "C",fecha: '23/06/2024',equipo1: "USA",equipo2: "BOLIVIA",RESULTADO1: 0,RESULTADO2: 0},
    {grupo: "C",fecha: '23/06/2024',equipo1: "URUGUAY",equipo2: "PANAMÁ",RESULTADO1: 0,RESULTADO2: 0},
    {grupo: "C",fecha: '27/06/2024',equipo1: "PANAMÁ",equipo2: "USA",RESULTADO1: 0,RESULTADO2: 0},
    {grupo: "C",fecha: '27/06/2024',equipo1: "URUGUAY",equipo2: "BOLIVIA",RESULTADO1: 0,RESULTADO2: 0},
    {grupo: "C",fecha: '01/07/2024',equipo1: "BOLIVIA",equipo2: "PANAMÁ",RESULTADO1: 0,RESULTADO2: 0},
    {grupo: "C",fecha: '01/07/2024',equipo1: "USA",equipo2: "URUGUAY",RESULTADO1: 0,RESULTADO2: 0},
    {grupo: "D",fecha: '24/06/2024',equipo1: "COLOMBIA",equipo2: "PARAGUAY",RESULTADO1: 0,RESULTADO2: 0},
    {grupo: "D",fecha: '24/06/2024',equipo1: "BRASIL",equipo2: "COSTA RICA",RESULTADO1: 0,RESULTADO2: 0},
    {grupo: "D",fecha: '28/06/2024',equipo1: "COLOMBIA",equipo2: "COSTA RICA",RESULTADO1: 0,RESULTADO2: 0},
    {grupo: "D",fecha: '28/06/2024',equipo1: "PARAGUAY",equipo2: "BRASIL",RESULTADO1: 0,RESULTADO2: 0},
    {grupo: "D",fecha: '02/07/2024',equipo1: "COSTA RICA",equipo2: "PARAGUAY",RESULTADO1: 0,RESULTADO2: 0},
    {grupo: "D",fecha: '02/07/2024',equipo1: "BRASIL",equipo2: "COLOMBIA",RESULTADO1: 0,RESULTADO2: 0}
]

Juegos.insertMany(listjuegos)
}
createJuegos()*/

  const newUser = new User({username: "admin",name: 'Administrador',email: "admin@localhost",password: "1234",tipo_usuario: "Administrador"});
  const admin = await newUser.save();
    const newjuego = new Juegos({jugado:"N",numero:1, grupo: "A",fecha: '20/06/2024',equipo1: "ARGENTINA",equipo2: "CANADÁ",RESULTADO1: 0,RESULTADO2: 0});
    const juego = await newjuego.save();
     const newjuego1 = new Juegos({jugado:"N",numero:2,grupo: "A",fecha: '21/06/2024',equipo1: "PERÚ",equipo2: "CHILE",RESULTADO1: 0,RESULTADO2: 0});
     const juego1 = await newjuego1.save();
     const newjuego2 = new Juegos({jugado:"N",numero:3,grupo: "A",fecha: '25/06/2024',equipo1: "PERÚ",equipo2: "CANADÁ",RESULTADO1: 0,RESULTADO2: 0});
     const juego2 = await newjuego2.save();
      const newjuego3 = new Juegos({jugado:"N",numero:4,grupo: "A",fecha: '25/06/2024',equipo1: "CHILE",equipo2: "ARGENTINA",RESULTADO1: 0,RESULTADO2: 0});
      const juego3 = await newjuego3.save();
         const newjuego4 = new Juegos({jugado:"N",numero:5,grupo: "A",fecha: '29/06/2024',equipo1: "ARGENTINA",equipo2: "PERÚ",RESULTADO1: 0,RESULTADO2: 0});
         const juego4 = await newjuego4.save();
          const newjuego5 = new Juegos({jugado:"N",numero:6,grupo: "A",fecha: '29/06/2024',equipo1: "CANADÁ",equipo2: "CHILE",RESULTADO1: 0,RESULTADO2: 0});
          const juego5 = await newjuego5.save();
       const newjuego6 = new Juegos({jugado:"N",numero:7,grupo: "B",fecha: '22/06/2024',equipo1: "ECUADOR",equipo2: "VENEZUELA",RESULTADO1: 0,RESULTADO2: 0});
       const juego6 = await newjuego6.save();
         const newjuego7 = new Juegos({jugado:"N",numero:8,grupo: "B",fecha: '22/06/2024',equipo1: "MÉXICO",equipo2: "JAMAICA",RESULTADO1: 0,RESULTADO2: 0});
         const juego7 = await newjuego7.save();
           const newjuego8 = new Juegos({jugado:"N",numero:9,grupo: "B",fecha: '26/06/2024',equipo1: "ECUADOR",equipo2: "JAMAICA",RESULTADO1: 0,RESULTADO2: 0});
           const juego8 = await newjuego8.save();
             const newjuego9 = new Juegos({jugado:"N",numero:10,grupo: "B",fecha: '26/06/2024',equipo1: "VENEZUELA",equipo2: "MÉXICO",RESULTADO1: 0,RESULTADO2: 0});
             const juego9 = await newjuego9.save();
               const newjuego10 = new Juegos({jugado:"N",numero:11,grupo: "B",fecha: '29/06/2024',equipo1: "JAMAICA",equipo2: "VENEZUELA",RESULTADO1: 0,RESULTADO2: 0});
               const juego10 = await newjuego10.save();
                 const newjuego11 = new Juegos({jugado:"N",numero:12,grupo: "B",fecha: '29/06/2024',equipo1: "MÉXICO",equipo2: "ECUADOR",RESULTADO1: 0,RESULTADO2: 0});
                 const juego11 = await newjuego11.save();
               const newjuego12 = new Juegos({jugado:"N",numero:13,grupo: "C",fecha: '23/06/2024',equipo1: "USA",equipo2: "BOLIVIA",RESULTADO1: 0,RESULTADO2: 0});
               const juego12 = await newjuego12.save();
                 const newjuego13 = new Juegos({jugado:"N",numero:14,grupo: "C",fecha: '23/06/2024',equipo1: "URUGUAY",equipo2: "PANAMÁ",RESULTADO1: 0,RESULTADO2: 0});
                 const juego13 = await newjuego13.save();
                   const newjuego14 = new Juegos({jugado:"N",numero:15,grupo: "C",fecha: '27/06/2024',equipo1: "PANAMÁ",equipo2: "USA",RESULTADO1: 0,RESULTADO2: 0});
                   const juego14 = await newjuego14.save();
                     const newjuego15 = new Juegos({jugado:"N",numero:16,grupo: "C",fecha: '27/06/2024',equipo1: "URUGUAY",equipo2: "BOLIVIA",RESULTADO1: 0,RESULTADO2: 0});
                     const juego15 = await newjuego15.save();
                       const newjuego16 = new Juegos({jugado:"N",numero:17,grupo: "C",fecha: '01/07/2024',equipo1: "BOLIVIA",equipo2: "PANAMÁ",RESULTADO1: 0,RESULTADO2: 0});
                       const juego16 = await newjuego16.save();
                         const newjuego17 = new Juegos({jugado:"N",numero:18,grupo: "C",fecha: '01/07/2024',equipo1: "USA",equipo2: "URUGUAY",RESULTADO1: 0,RESULTADO2: 0});
                         const juego17 = await newjuego17.save();
                           const newjuego18 = new Juegos({jugado:"N",numero:19,grupo: "D",fecha: '24/06/2024',equipo1: "COLOMBIA",equipo2: "PARAGUAY",RESULTADO1: 0,RESULTADO2: 0});
                           const juego18 = await newjuego18.save();
                             const newjuego19 = new Juegos({jugado:"N",numero:20,grupo: "D",fecha: '24/06/2024',equipo1: "BRASIL",equipo2: "COSTA RICA",RESULTADO1: 0,RESULTADO2: 0});
                             const juego19 = await newjuego19.save();
                               const newjuego20 = new Juegos({jugado:"N",numero:21,grupo: "D",fecha: '28/06/2024',equipo1: "COLOMBIA",equipo2: "COSTA RICA",RESULTADO1: 0,RESULTADO2: 0});
                               const juego20 = await newjuego20.save();
                                 const newjuego21 = new Juegos({jugado:"N",numero:22,grupo: "D",fecha: '28/06/2024',equipo1: "PARAGUAY",equipo2: "BRASIL",RESULTADO1: 0,RESULTADO2: 0});
                                 const juego21 = await newjuego21.save();
                                   const newjuego22 = new Juegos({jugado:"N",numero:23,grupo: "D",fecha: '02/07/2024',equipo1: "COSTA RICA",equipo2: "PARAGUAY",RESULTADO1: 0,RESULTADO2: 0});
                                   const juego22 = await newjuego22.save();
                                     const newjuego23 = new Juegos({jugado:"N",numero:24,grupo: "D",fecha: '02/07/2024',equipo1: "BRASIL",equipo2: "COLOMBIA",RESULTADO1: 0,RESULTADO2: 0});
                                     const juego23 = await newjuego23.save();

                                     console.log("JUEGOS CREADOS");


};
       

                    
