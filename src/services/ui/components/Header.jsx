import logo from '../../../../assets/logo.jpg'

export const Header = () => {

    return (
        <div className="card">
            <img src={logo} alt="logo" width="100" height="100" className="img-fluid rounded mx-auto d-block" />
        </div>
    )
}
