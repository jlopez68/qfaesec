import User from "../models/User.js";
import Usuarios from "../models/User.js";
import { Transporter } from "../config/mailer.js";
export const renderUsuariosForm = (req, res) => {

  if (req.user.tipo_usuario == "Administrador")
  {
  res.render("usuarios/new-usuarios", { name:req.user.name , apellido:req.user.apellido, email:req.user.email});
}
else {
req.flash("success_msg", "Usuario no puede Cargar Medicos");
res.redirect("/usuarios");
};
};


export const createNewUsuarios = async (req, res) => {
  console.log("hola");

  const { name, apellido, email,  tipo_usuario, puntos, celular, ciudad } = req.body;
  console.log(puntos);
  let errors = [];
  let p = 0;
  const newUser = new User({ name, apellido, email,  tipo_usuario, celular, ciudad}); 
  newUsuarios.user = req.user.id;
  newUsuarios.password="1234";

  await newUsuarios.save();
  req.flash("success_msg", "Usuario Agregado Satisfactoriamente");
  res.redirect("/usuarios");
};


export const renderUsuarios = async (req, res) => {

  const usuarios = await Usuarios.find()
  .sort({ user_status: "desc" })
  .lean();


  res.render("usuarios/all-usuarios", { usuarios});
};

export const renderEditUsuarios = async (req, res) => {
  const usuarios = await Usuarios.findById(req.params.id).lean();


  res.render("usuarios/edit-usuarios", { usuarios });
};



export const renderVisualizarUsuarios = async (req, res) => {
  const usuarios = await Usuarios.findById(req.params.id).lean();

  console.log(usuarios);
  res.render("usuarios/visualizar-usuarios", { usuarios }); 
};

import PdfkitConstruct from "pdfkit-construct";
export const imprimirUsuarios = async (req, res) => {
  const usu = await User.find()
  .sort({ date: "desc" })
  .lean();
            const doc = new PdfkitConstruct({
            size: 'letter',
            margins: {top: 20, left: 10, right: 10, bottom: 20},
            bufferPages: true});

            // set the header to render in every page
            doc.setDocumentHeader({}, () => {


     //         doc.lineJoin('miter')
     //             .rect(0, 0, doc.page.width, doc.header.options.heightNumber).fill("#ededed");

              doc.fill("#115dc8")
                  .fontSize(20)
                  .text("Fapasa", {align: 'center'});
              doc.fill("#115dc8")
                  .fontSize(18)
                  .text("Usuarios del Sistema", {align: 'center'});

          });



            // add a table (you can add multiple tables with different columns)
            // make sure every column has a key. keys should be unique
            doc.addTable(
              [
                  {key: 'usuario', label: 'Usuario', align: 'left'},
                  {key: 'tipo_usuario', label: 'Tipo', align: 'left'},
                  {key: 'name', label: 'Nombre', align: 'left'},
                  {key: 'apellido', label: 'Apellido', align: 'right'},
                  {key: 'email', label: 'email'},
                  {key: 'user_status', label: 'Estatus'},

              ],
              usu, {
                  border: null,
                  width: "fill_body",
                  striped: true,
                  stripedColors: ["#f6f6f6", "#d6c4dd"],
                  cellsPadding: 10,
                  marginLeft: 45,
                  marginRight: 45,
                  headAlign: 'center'
              });

             // set the footer to render in every page
            doc.setDocumentFooter({}, () => {

              //         doc.lineJoin('miter')
              //             .rect(0, doc.footer.y, doc.page.width, doc.footer.options.heightNumber).fill("#c2edbe");
         
                       doc.fill("#7416c8")
                           .fontSize(8)
                           .text("Fapasa-Webapp", doc.footer.x, doc.footer.y + 10);
                   });
          // render tables
          doc.render();
            // this should be the last
            // for this to work you need to set bufferPages to true in constructor options 
            //doc.setPageNumbers((p, c) => `Page ${p} of ${c}`, "bottom right");
            doc.pipe(res);
            doc.end();
        
};