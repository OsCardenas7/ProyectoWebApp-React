function Consult(){
    return(
        <div>
            <h1>CONSULT USER</h1>
            <form>
                <label className="reg_label">INFORMATION USER</label> <br />
                <textarea>
                </textarea>
            </form>
            <table>
                <tr>
                    <td>NOMBRE</td>
                </tr>
                <tr>
                    <td>APELLIDO</td>
                </tr>
                <tr>
                    <td>ID</td>
                </tr>
                <tr>
                    <td>NACIMIENTO</td>
                </tr>
            </table>
        </div>
    )
}

export {Consult}