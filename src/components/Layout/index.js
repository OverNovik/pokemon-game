import layoutStyle from './style.module.css';


const Layout = ({title, descr, id, urlBg, colorBg}) => {
    const sectionStyle = urlBg ? {background: `url(${urlBg})`} : {backgroundColor: colorBg}
    return (
        <section style={sectionStyle} class={layoutStyle.root}  id={id}>
            <div class="wrapper">
                <article>
                    <div class="title">
                        <h3>{title}</h3>
                        <span class="separator"></span>
                    </div>
                    <div class="desc full">
                        <p>{descr}</p>
                    </div>
                </article>
            </div>
        </section>
    );
}

export default Layout;