import React, {useEffect} from 'react';
import Cookies from 'universal-cookie';
import '../css/Menu.css';

function Menu(props) {

    const cookies = new Cookies();

    const cerrarSesion=()=>{
        cookies.remove('id', {path: '/'});
        cookies.remove('apellido_paterno', {path: '/'});
        cookies.remove('apellido_materno', {path: '/'});
        cookies.remove('nombre', {path: '/'});
        cookies.remove('correo', {path: '/'});
        cookies.remove('username', {path: '/'});
        cookies.remove('password', {path: '/'});
        props.history.push('./');
    }

    useEffect(()=>{
        if(!cookies.get('id')){
            props.history.push('./');
        }
          },[]);

    return (
        <div className="containerMenu">
            <br />
            <button className="btn btn-danger" onClick={()=>cerrarSesion()}>Cerrar Sesión</button>
            <br />
            <h5>ID: {cookies.get('id')}</h5>
            <br />
            <h5>Apellido Paterno: {cookies.get('apellido_paterno')}</h5>
            <br />
            <h5>Apellido Materno: {cookies.get('apellido_materno')}</h5>
            <br />
            <h5>Nombre: {cookies.get('nombre')}</h5>
            <br />
            <h5>Correo: {cookies.get('correo')}</h5>
            <br />
            <h5>Username: {cookies.get('username')}</h5>
            <br />
            <h5>Password: {cookies.get('password')}</h5>
            <br />
        </div>
    );
}

export default Menu;