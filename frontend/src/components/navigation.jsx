import Rec from 'react'

class Navegation extends Rec.Component {
    render(){
        function go_home(){
            window.location = "/"
        }
        function go_register(){
            window.location = "/register_page"
        }
        function go_consult(){
            window.location = "/consult_page"
        }
        function go_contact(){
            window.location = "/contact"
        }
        return(
            <div className='bloc_nav_div1'>

                <li className='bloc_nav_li'>
                    <h1 id='bloc_nav_logo'>EMPRESA</h1>
                </li>
                <li className='bloc_nav_li'>
                    <button className='bloc_nav_btn' onClick={go_home}>Home</button>
                </li>
                <li className='bloc_nav_li'>
                    <button className='bloc_nav_btn' onClick={go_register}>Register</button>
                </li>
                <li className='bloc_nav_li'>
                    <button className='bloc_nav_btn' onClick={go_consult}>Consult</button>
                </li>
                <li className='bloc_nav_li'>
                    <button className='bloc_nav_btn' onClick={go_contact}>Contact</button>
                </li>
            </div>
        )
    }
}

export {Navegation}