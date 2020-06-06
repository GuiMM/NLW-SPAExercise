import React from 'react';
// header é um componente da app

//'?' - propriedade opcional  /  '' - propriedade obrigatória
interface HeaderProps{
    title?: string;
}

const Header : React.FC<HeaderProps> = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    );

}

export default Header;