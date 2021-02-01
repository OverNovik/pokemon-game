import layoutStyle from './style.module.css';


const Layout = ({title, descr, id, urlBg, colorBg, children}) => {
    const style = {};
    if (urlBg) { style.background = `url(${urlBg})` };
    if (colorBg) { style.background = colorBg };
    return (
        <section style={style} className={layoutStyle.root}  id={id}>
            <div className="wrapper">
                <article>
                    <div className="title">
                        <h3>{title}</h3>
                        <span className="separator"></span>
                    </div>
                    <div className="desc full">
                        <p>{descr}</p>
                        {children}
                    </div>
                </article>
            </div>
        </section>
    );
}

export default Layout;