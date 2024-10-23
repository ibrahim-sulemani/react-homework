import viteLogo from '/vite.svg'

const Card = ({name, url, logo, alt}) => {
    return (
        <div style={{ border: '2px solid #545454', borderRadius: '5px', margin: '5px', background: '#545454'}}>
            <a href={url} target="_blank">
            <img src={logo} className={`logo ${name}`} alt={alt} />
            </a>
        </div>
    );
};

export default Card;
