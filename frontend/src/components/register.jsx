function Register(){
    return(
        <div>
            <h1>Registro de horas</h1>
            <form>
                <label className="reg_label">Tarea</label> <input /> <br/> <br/>
                <label className="reg_label">Horas</label> <input />  <br/> <br/>
                <button id="btn-Register">Register</button> <br/> <br/>
            </form>

            <h1>Registro de personas</h1>
            <form action='/register_users' method='post'>
                <label className="reg_label">Name</label> <input name="name" /> <br/> <br/>
                <label className="reg_label">Lastname</label> <input name="lastname"/>  <br/> <br/>
                <label className="reg_label">Identification</label> <input name="id"/> <br/> <br/>
                <label className="reg_label">Birthday</label> <input name="birthday"/> <br/> <br/>
                <button id="btn-Register">Register</button> <br/> <br/>
            </form>
        </div>
    )
}

export {Register}