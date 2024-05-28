import User from "../models/User.js";
import passport from "passport";

export const renderSignUpForm = (req, res) => res.render("auth/signup");

export const signup = async (req, res) => {
  const { name, apellido, email, tipo_usuario, celular, ciudad, profesional, termsAndConditions} = req.body;
  console.log("terminos", termsAndConditions);
  if (termsAndConditions != "on") {
    req.flash("error_msg", "Debe Leer y aceptar los términos y condiciones .");
    return res.redirect("/auth/signup");


  }

  console.log("profesional",profesional)
  if (profesional == "") { 
    req.flash("error_msg", "Debe responder la pregunta sobre los profesionales de la salud.");
    return res.redirect("/auth/signup");

  }

  if (profesional == "0" ) 
   {
    req.flash("error_msg", "Solo para profesionales de la Salud.");
    return res.redirect("/auth/signup");
   } 
  const userFound = await User.findOne({ email: req.body.email });
  if (userFound) {
    req.flash("error_msg", "El Email ya existe.");
    return res.redirect("/auth/signup");
  }

  let errors = [];

//  const { name, apellido, email, tipo_usuario} = req.body;
  const newUser = new User({ name, apellido, email,  tipo_usuario, celular, ciudad}); 
  newUser.tipo_usuario = "Jugador";
  newUser.password = "1234";
  newUser.puntos=0;
  newUser.posicion = 0;
  await newUser.save();
  
  req.flash("success_msg", "Registro Completado");
  //envio del email a administrador para aprobar


  res.redirect("/auth/signin");
};

export const renderSigninForm = (req, res) => res.render("auth/signin");

export const renderSigningrupos = (req, res) => res.render("auth/grupos");
export const renderSigninsedes = (req, res) => res.render("auth/sedes");


export const signin = passport.authenticate("local", {
  successRedirect: "/notes",
  failureRedirect: "/auth/signin",
  failureFlash: true,
});

export const logout = async (req, res, next) => {
  await req.logout((err) => {
    if (err) return next(err);
    req.flash("success_msg", "Cerrando Sesión");

      res.redirect("/");
  });
};



  