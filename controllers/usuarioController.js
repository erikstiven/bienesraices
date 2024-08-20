import { check, validationResult } from 'express-validator'
import Usuario from "../models/Usuario.js";
const formularioLogin = (req, res) => {
    res.render('auth/login', {
        pagina: 'Iniciar Sesión'
    });
}

const formularioRegistro = (req, res) => {
    res.render('auth/registro', {
        pagina: 'Crear cuenta'
    });
}

const registrar = async (req, res) => {
    //validacion
    await check('nombre').notEmpty().withMessage('El nombre es obligatorio').run(req)
    await check('email').isEmail().withMessage('Eso no parece un email').run(req)
    await check('password').isLength({ min: 6 }).withMessage('El password debe ser al menos 6 caracteres').run(req)
    await check('repetir-password').equals('password').withMessage('El password debe ser al menos 6 caracteres').run(req)

    let resultado = validationResult(req)

    //return res.json(resultado.array())
    //verificar que el resultado este vacio
    if (!resultado.isEmpty()) {
        //errores
        return res.render('auth/registro', {
            pagina: 'Crear cuenta',
            errores: resultado.array()
        })
    }

    res.json(resultado.array());
    const usuario = await Usuario.create(req.body)
    res.json(usuario)
}

const formularioOlvidePassword = (req, res) => {
    res.render('auth/olvide-password', {
        pagina: 'Recupera tu acceso a Bienes Raíces'
    });
}



export {
    formularioLogin,
    formularioRegistro,
    registrar,
    formularioOlvidePassword
}