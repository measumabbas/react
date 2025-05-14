type HeadingProps = {
    title: string
}
export default function Heading(props: HeadingProps){
    const {title} = props
    return <h1 className="font-bold text-xl mb-4">{title}</h1>
}