interface HeaderProps {
    title: string;
    subtitle: string;
}

export function Header(props:HeaderProps) {
    return (
        <header>
            <h2>{props.title}</h2>
            <p>{props.subtitle}</p>
        </header>
    )
}