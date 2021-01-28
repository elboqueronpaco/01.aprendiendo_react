import React, {useState} from 'react'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { HeaderContainer, HeaderStyle, MenuLink, Navbar, Logo, ButtonMenu } from './HerdarStyles'

export default function Header() {
    const [openMenu, setOpenMenu] = useState(false)
    const [btnMenu, setBtnMenu] = useState(faBars)
    const onClickMenu = e => {
        e.preventDefault()
        setOpenMenu(!openMenu)
        setBtnMenu(btnMenu)
    }
    const onchangeOpenMenu = e => setOpenMenu(true)
    const onchangeIconMenu = e => setBtnMenu('faTimes')
    return (
        <HeaderStyle>
            <HeaderContainer>
                <Logo><span>elboqueron</span>paco</Logo>
                <ButtonMenu onClick={onClickMenu}><FontAwesomeIcon icon={btnMenu} onChange={onchangeIconMenu}/></ButtonMenu>
                <Navbar openMenu={openMenu} onChange={onchangeOpenMenu}>
                    <nav>
                        <MenuLink to='/'>Inicio</MenuLink>
                        <MenuLink to='/servicio'>Servicios</MenuLink>
                        <MenuLink to='/blogs'>BLogs</MenuLink>
                        <MenuLink to='/portafolio'>PortafolioMenu</MenuLink>
                        <MenuLink to='/contacto'>Contacto</MenuLink>
                        </nav>
                    <nav>
                        <MenuLink to='/unite'>Unete</MenuLink>
                        <MenuLink to='/ingresa'>ingresa</MenuLink>
                    </nav>
                </Navbar>
            </HeaderContainer>
        </HeaderStyle>
    )
}
