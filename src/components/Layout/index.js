import layoutStyle from './style.module.css';


const Layout = ({title, descr, id, urlBg, colorBg, children}) => {
    const style = {};
    if (urlBg) { style.background = `url(${urlBg})` };
    if (colorBg) { style.background = colorBg };
    return (
        <section style={style} class={layoutStyle.root}  id={id}>
            <div class="wrapper">
                <article>
                    <div class="title">
                        <h3>{title}</h3>
                        <span class="separator"></span>
                    </div>
                    <div class="desc full">
                        <p>{descr}</p>
                        {children}
                    </div>
                </article>
            </div>
        </section>
    );
}

export default Layout;