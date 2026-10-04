function Header({ location }) {
    return (
        <header className="header">
            <div className="header-left">
                <div>{location}</div>
                <div><img src="/imgSrc/arrow.png" alt="" className="src" /></div>
            </div>
            <div className="header-right">
                <button>
                    <img src="/imgSrc/search.svg" alt="" className="src" />
                </button>
                <button>
                    <img src="/imgSrc/search.svg" alt="" className="src" />
                </button>
                <button>
                    <img src="/imgSrc/search.svg" alt="" className="src" />
                </button>
            </div>
        </header>
    )
}

export default Header