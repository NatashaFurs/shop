import logo from './assets/img/logo.svg'
import cart from './assets/img/cart.svg'

export const Header = () => {
    return (
        <header className='header'>
            <img src={logo} alt="logo" />
            <img src={cart} alt="cart" />
        </header>
    )
}